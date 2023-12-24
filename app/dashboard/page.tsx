'use client'
import { useSession } from "next-auth/react"
import styles from "./page.module.scss"

export default function DashboardPage() {
    const { data: session, status } = useSession()

    return (
        <div className={styles["dashboard-page-container"]}>
            {JSON.stringify({
                SESSION: session,
                ESTADO: status
            })}
        </div>
    )
}