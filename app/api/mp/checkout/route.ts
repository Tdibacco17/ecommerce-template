import { CartItemInterface } from '@/types/cartTypes';
import MercadoPagoConfig, { Preference } from 'mercadopago';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { itemsMp } = (await req.json());

        const URL = process.env.SITE_ULR;

        const client = new MercadoPagoConfig({
            accessToken: `${process.env.NEXT_ACCESS_TOKEN}`,
            options: { timeout: 5000 }
        });
        const preference = new Preference(client);

        const response = await preference.create({
            body: {
                items: itemsMp.map((itemMp: CartItemInterface) => {
                    return {
                        id: itemMp.productData.slug,
                        title: itemMp.productData.name,
                        unit_price: Number(itemMp.productData.price),
                        quantity: Number(itemMp.quantity)
                    }
                }),
                auto_return: "approved",
                back_urls: {
                    success: `${URL}`,
                    failure: `${URL}`,
                    pending: `${URL}`,
                },
                notification_url: `${URL}api/mp/notify`,
            },
        })

        return NextResponse.json({
            message: "Operation completed successfully.",
            url: response.init_point,
            status: 200
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "Catch error.",
            status: 500
        }, { status: 500 });
    }
}