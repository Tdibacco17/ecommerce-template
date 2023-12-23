import { NextResponse } from "next/server";

export function GET(request: Request, { params: { id } }: { params: { id: string } }) {
    return NextResponse.json({
        message: "get id"
    })
}