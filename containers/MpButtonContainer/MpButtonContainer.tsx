'use client'
import MpButtonComponent from "@/components/MpButtonComponent/MpButtonComponent"
import { ItemMpInterface } from "@/types/mpTypes"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function MpButtonContainer() {
    const productos = [
        {
            slug: "producto-1",
            name: "producto-1",
            price: 225.99,
            quantity: 2,
        },
        {
            slug: "producto-2",
            name: "producto-2",
            price: 640.99,
            quantity: 5,
        }
    ]


    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()

    const handle = async () => {
        setLoading(true)
        try {
            const rawData = await fetch("/api/mp/checkout", {
                method: "POST",
                headers: {
                    "Accept": "application/json, text/plain",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ itemsMp: productos })
            })
            const parseResponse = await rawData.json();
            //animacion de tiempo
            await new Promise(resolve => setTimeout(resolve, 2000));

            if (parseResponse.status === 500) {
                console.log("[Error in the request to MP]:", parseResponse.message)
                return
            }
            router.push(parseResponse.url);
            return
        } catch (error) {
            console.log("[Catch error in the request to MP]:", error);
        } finally {
            setLoading(false);
        }
    }

    return <MpButtonComponent
        handle={handle}
        loading={loading}
    />
}