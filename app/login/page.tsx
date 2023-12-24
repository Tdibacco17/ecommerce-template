'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"
import styles from "./page.module.scss"

export default function LoginPage() {
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const response = await signIn("credentials", {
            username: formData.get('username'),
            password: formData.get('password'),
            redirect: false
        })
        if (response?.error) setError(response.error)

        if (response?.ok) return router.push("/dashboard")
    }
    return (
        <section className={styles["login-page-container"]}>
            <form onSubmit={handleSubmit}>
                <p>sign in</p>
                {error && <p>{error}</p>}
                <label>Usuario:</label>
                <input
                    type="text"
                    placeholder="Usuario"
                    name="username"
                />

                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <button>
                    Login
                </button>
            </form>
        </section>
    )
}