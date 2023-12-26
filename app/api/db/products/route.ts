// import connectDB from "@/utils/connection";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function GET(req: Request) {
    const session = await getServerSession(authOptions)
    // connectDB()

    if (!session) {
        return NextResponse.json({
            message: "You must be logged in."
        })
    }

    return NextResponse.json({
        message: "Success"
    })
}