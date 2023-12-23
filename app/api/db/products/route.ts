import connectDB from "@/utils/connection";
import { NextResponse } from "next/server";

export function GET() {
    connectDB()
    
    return NextResponse.json({
        message: "get all"
    })
}