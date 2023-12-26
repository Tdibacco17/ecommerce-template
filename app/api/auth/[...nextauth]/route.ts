import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/connection";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import nextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password", placeholder: "****" }
            },
            async authorize(credentials, req) {
                await connectDB()

                const userFound = await User.findOne({ username: credentials?.username }).select("+password")

                if (!userFound) throw new Error('Invalid credentials')

                const passwordMatch = await bcrypt.compare(credentials!.password, userFound.password)

                if (!passwordMatch) throw new Error('Invalid credentials')

                return userFound.username
            }
        })
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) token.user = user
            return token
        },
        session({ session, token }) {
            session.user = token.user as any
            return session
        }
    },
    pages: {
        signIn: '/login',
    }
}

const handler = nextAuth(authOptions)

export { handler as GET, handler as POST }