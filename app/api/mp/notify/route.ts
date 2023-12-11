import { NewSaleRequestInterface } from '@/types/contactTypes';
import MercadoPagoConfig, { Payment } from 'mercadopago';
import { NextResponse } from 'next/server';
import { ParseResponseInterface } from '@/types';
import { handleNewSale } from '@/utils/email/handleNewSale';

export async function POST(req: Request) {
    try {
        const query = new URL(req.url);
        const queryParams = new URLSearchParams(query.search);
        const topic = queryParams.get("type"); /*|| queryParams.get("topic");*/
        const id = queryParams.get("data.id") /*|| queryParams.get("id");*/
        const client = new MercadoPagoConfig({
            accessToken: `${process.env.NEXT_ACCESS_TOKEN}`,
            options: { timeout: 5000 }
        });
        const payment = new Payment(client);

        if (topic === "payment") {
            const payments = (await payment.get({ id: `${id}` }));

            const body: NewSaleRequestInterface = {
                name: payments.payer?.first_name || "Falta nombre",
                lastname: payments.payer?.last_name || "Falta apellido",
                phone: payments.payer?.phone?.number || "Falta teléfono",
                email: payments.payer?.email || "Falta email",
                products: payments.additional_info?.items?.map((item: any) => {
                    return {
                        quantity: item.quantity,
                        title: item.title,
                        unit_price: item.unit_price
                    }
                }) || "Faltan productos",
                transaction_amount: payments.transaction_amount || "Falta total de la transacción",
                status: payments.status || "Falta estado de la orden",
                status_detail: payments.status_detail || "Falta estado de la compra"
            }
            const parseResponse: ParseResponseInterface = await handleNewSale(body);

            if (parseResponse.status === 200) {
                return NextResponse.json({
                    message: `${parseResponse.message}. Operation completed successfully.`,
                    status: 200
                }, { status: 200 });
            } else {
                return NextResponse.json({
                    message: "Email not sending.",
                    status: 500
                }, { status: 500 });
            }
        } else {
            return NextResponse.json({
                message: "Operation in progress.",
                status: 200
            }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({
            message: "Catch error.",
            status: 500
        }, { status: 500 });
    }
}