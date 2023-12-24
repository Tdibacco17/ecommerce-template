// import connectDB from "@/utils/connection";
import { NextResponse } from "next/server";
// import User from "@/models/user";
// import bcrypt from "bcryptjs"

export async function POST(request: Request) {
    // await connectDB()
    // const { username, password } = await request.json()

    // try {
    //     if (!username || !password) {
    //         return NextResponse.json({
    //             message: "Username or Password required.",
    //             status: 400
    //         }, { status: 400 });
    //     }

    //     const userFound = await User.findOne({ username })

    //     if (userFound) {
    //         return NextResponse.json({
    //             message: "User exist.",
    //             status: 400
    //         }, { status: 400 });
    //     }

    //     const hassPassword = await bcrypt.hash(password, 12)

    //     const user = new User({
    //         username,
    //         password: hassPassword
    //     })
    //     const savedUser = await user.save()

    //     return NextResponse.json({
    //         message: "Okey.",
    //         data: savedUser,
    //         status: 400
    //     }, { status: 400 });

    // } catch (error) {
    //     return NextResponse.json({
    //         message: `Catch error: ${error}`,
    //         status: 500
    //     }, { status: 500 });
    // }
    return NextResponse.json({
        message: `Descomentar codigo para crear superadmin`,
        status: 500
    }, { status: 500 });
}