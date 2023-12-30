'use client'
import { useSession } from "next-auth/react"
import styles from "./page.module.scss"
import { handleGetProduct } from "@/utils/fetchFunctions"

export default function DashboardPage() {
    const { data: session, status } = useSession()
    if (session) {
        const getProduct = async () => {
            const rawResponse = await handleGetProduct()
            console.log(rawResponse)
        }
        return (
            <div className={styles["dashboard-page-container"]}>
                <div className={styles["center"]}>
                    {JSON.stringify({
                        ROLE: session?.user.role,
                    })}
                </div>
                <div className={styles["center"]}>
                    {JSON.stringify({
                        TOKEN: session?.user.token,
                    })}
                </div>
                <div className={styles["center"]}>
                    {JSON.stringify({
                        ESTADO: status
                    })}
                </div>
                <button onClick={() => getProduct()}>
                    pedir productos
                </button>
            </div>
        )
    }
    return <div className={styles["dashboard-page-container"]}>
        <p>Loading</p>
    </div>
}