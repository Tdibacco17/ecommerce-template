import { ParseResponseInterface } from "@/types/apiResponseTypes";
// await new Promise(resolve => setTimeout(resolve, 2000));
export const handleGetProducts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
        next: {
            revalidate: 3600
        }
    })
    const rawRespone: ParseResponseInterface = await response.json();
    return rawRespone.data // retorna todos los productos o array vacio
}

export const handleCreateProduct = async (formDataToSend: any) => {
    const response = await fetch('/api/product/create', {
        method: 'POST',
        body: formDataToSend,
    });
    const rawResponse: ParseResponseInterface = await response.json();
    return rawResponse
}