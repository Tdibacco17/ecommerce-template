'use client'
import styles from "./addToCartBtnComponent.module.scss"
import { useCart } from "@/hooks/useCart";
import { ProductInterface } from "@/types/productsTypes";

export default function AddToCartBtnComponent({
    productData
}: {
    productData: ProductInterface
}) {
    const { handleCartItemsChange } = useCart();

    return <button onClick={() => handleCartItemsChange({
        productData: productData,
        quantity: 1
    })}>
        Agregar al carrito
    </button>
}