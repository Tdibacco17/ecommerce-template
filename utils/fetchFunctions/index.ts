import { ParseResponseInterface } from "@/types/apiResponseTypes";

export const handleGetProduct = async () => {
    const response = await fetch(`/api/db/products`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    })
    const rawRespone: ParseResponseInterface = await response.json();
    return rawRespone
}