import { ParseResponseInterface, TokenAuthApiResponse } from "@/types/apiResponseTypes";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        // const body: TokenAuthApiResponse = await req.json();

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                // "authorization": `Bearer ${body.token}`
            }
        })
        const rawRespone: ParseResponseInterface = await response.json()

        if (rawRespone.status !== 200) {
            return NextResponse.json({
                message: rawRespone.message,
                status: 204
            }, { status: 204 });
        }
        return NextResponse.json({
            message: rawRespone.message,
            data: rawRespone.data,
            status: 200
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: `Catch error: ${error}`,
            status: 500
        }, { status: 500 });
    }
}

// export async function POST(req: Request) {
//     try {
//         const body: BodyProductSchemaInterface = await req.json();
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product`, {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json",
//                 "authorization": `Bearer ${body.token}`
//             },
//             body: JSON.stringify(body.productData)
//         })
//         const rawRespone: ParseResponseInterface = await response.json()

//         if (rawRespone.error) {
//             return NextResponse.json({
//                 message: "Unauthorized",
//                 status: 401
//             }, { status: 401 });
//         }
//         if (rawRespone.status !== 200) {
//             return NextResponse.json({
//                 message: rawRespone.message,
//                 data: rawRespone.data,
//                 status: 204
//             }, { status: 204 });
//         }
//         return NextResponse.json({
//             message: rawRespone.message,
//             status: 200
//         }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({
//             message: `Catch error: ${error}`,
//             status: 500
//         }, { status: 500 });
//     }
// }