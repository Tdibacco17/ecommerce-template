'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react"
import styles from "./page.module.scss"
import useOutSideClickInput from "@/hooks/useOutSideClickInput";
import useTabNavigation from "@/hooks/useTabNavigation";
import Loader from "@/components/LoaderComponent/LoaderComponent";

export default function LoginPage() {
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const { activeGroup, setActiveGroup } = useTabNavigation(formRef, "input");

    const handleOutsideClick = () => {
        setActiveGroup(null);
    };
    useOutSideClickInput(formRef, handleOutsideClick);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData(e.currentTarget)
        const response = await signIn("credentials", {
            username: formData.get('username'),
            password: formData.get('password'),
            redirect: false
        })
        if (response?.error) {
            setLoading(false)
            return setError("Credenciales inválidas");
        } else if (response?.ok) {
            setLoading(false);
            return router.push("/dashboard");
        }
    }
    return (
        <section className={styles["login-page-container"]}>
            <div className={styles["wrapper"]}>
                <form ref={formRef}
                    onSubmit={handleSubmit}
                    className={styles["form-container"]}
                    onBlur={() => setActiveGroup(null)}>
                    <div className={styles["group-complete"]}>
                        <label className={`${activeGroup === "username" ? styles["active-title"] : styles["title"]}`}>Usuario:</label>
                        <input
                            type="text"
                            placeholder="Usuario"
                            name="username"
                            className={styles["field"]}
                            onFocus={() => setActiveGroup("username")}
                        />
                    </div>
                    <div className={styles["group-complete"]}>
                        <label className={`${activeGroup === "password" ? styles["active-title"] : styles["title"]}`}>Contraseña:</label>
                        <input
                            type="password"
                            placeholder="****"
                            name="password"
                            className={styles["field"]}
                            onFocus={() => setActiveGroup("password")}
                        />
                    </div>
                    {loading ? <button
                        disabled={loading}
                        className={`${styles["btn-form"]} ${loading && styles["disabled"]}`}>
                        <Loader />
                    </button>
                        : <button className={`${styles["btn-form"]}`}>
                            Iniciar sesión
                        </button>
                    }
                    {error &&
                        <p className={styles["error-msg"]}>{error}</p>}
                </form>
            </div>
        </section>
    )
}