import { ParseResponseInterface } from "@/types/apiResponseTypes";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const token = data.get('token');

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product`, {
            method: 'POST',
            body: data,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const rawResponse: ParseResponseInterface = await response.json();
        return NextResponse.json({
            message: rawResponse.message,
            status: rawResponse.status
        }, { status: rawResponse.status });
    } catch (error) {
        return NextResponse.json({
            message: `Catch error: ${error}`,
            status: 500
        }, { status: 500 });
    }
}