'use client'
import { useSession } from "next-auth/react"
import styles from "./page.module.scss"
import { ParseResponseInterface } from "@/types/apiResponseTypes"

export default function DashboardPage() {
    const { data: session, status } = useSession()

    if (session) {
        const getProduct = async () => {
            const response = await fetch(`/api/db/products`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    productData: {
                        slug: "dress-floral",
                        name: "Vestido Floral",
                        categorieTitle: "Remera",
                        price: 1000,
                        oldPrice: 1500,
                        discount: 10,
                        cloudinaryUrl: "/jsadjas/(sjadlc-asdok-c.com",
                        isNewIn: true,
                        details: {
                            imagesData: [
                                "/jsadjas/(sjadlc-asdok-c.com",
                                "/jsadjas/(sjadlc-asdok-c.com"
                            ],
                            description: [
                                "asdjasdjdasjdas",
                                "asdokasdoaskd"
                            ]
                        },
                        categories: [
                            "all"
                        ],
                    },
                    token: session?.user.token,
                })
            })
            const rawRespone: ParseResponseInterface = await response.json()
            if (rawRespone.status !== 200) {
                console.log(rawRespone.message)
                return
            }
            console.log(rawRespone.message)
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