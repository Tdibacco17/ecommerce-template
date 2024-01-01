'use client'
import { useSession } from "next-auth/react"
import styles from "./page.module.scss"
import CreateProductContainer from "@/containers/CreateProductContainer/CreateProductContainer";

export default function DashboardPage() {
    const { data: session, status } = useSession()
    if (!session) {
        return <div className={styles["dashboard-page-container"]}>
            <p>Loading</p>
        </div>
    }

    return (
        <div className={styles["dashboard-page-container"]}>
            <div className={styles["wrapper"]}>
                <CreateProductContainer token={session.user.token} />
            </div>
        </div>
    );
}