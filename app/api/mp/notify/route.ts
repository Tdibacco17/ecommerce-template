import MercadoPagoConfig, { Payment } from 'mercadopago';
import { NextResponse } from 'next/server';

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

            const objData = {
                name: payments.payer?.first_name,
                lastname: payments.payer?.last_name,
                phone: payments.payer?.phone?.number,
                email: payments.payer?.email,
                products: payments.additional_info?.items?.map((item: any) => {
                    return {
                        quantity: item.quantity,
                        title: item.title,
                        unit_price: item.unit_price
                    }
                }),
                transaction_amount: payments.transaction_amount,
                status: payments.status,
                status_detail: payments.status_detail
            }
            console.log(["[DATA]: ", objData])  //enviar DATOS AL EMAIL FACTURA

            return NextResponse.json({
                message: "Operation completed successfully.",
                status: 200
            }, { status: 200 });
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