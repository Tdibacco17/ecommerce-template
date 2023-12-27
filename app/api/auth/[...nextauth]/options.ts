import CredentialsProvider from "next-auth/providers/credentials";
import type { AuthOptions } from "next-auth";
import { AuthResponseInterface } from "@/types/apiResponseTypes";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password", placeholder: "****" }
            },
            async authorize(credentials, req) {
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                            username: credentials?.username,
                            password: credentials?.password
                        })
                    })
                    const rawRespone = await response.json()

                    if (rawRespone?.status !== 200) {
                        throw new Error(rawRespone.message)
                        // return null
                    }
                    return rawRespone
                } catch (error) {
                    console.error("Error in the request: ", error);
                    throw new Error('Invalid credentials')
                }
            }
        })
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) token.user = user
            return token
        },
        session({ session, token }) {
            session.user = token.user as AuthResponseInterface
            return session
        }
    },
    pages: {
        signIn: '/login',
    }
}