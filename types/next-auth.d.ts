import NextAuth from "next-auth"

declare module "next-auth" {
    export interface Session {
        user: {
            role: string,
            token: string
        }
    }
}