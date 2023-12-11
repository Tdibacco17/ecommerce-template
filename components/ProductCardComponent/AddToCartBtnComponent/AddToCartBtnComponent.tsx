'use client'
import { ShoppingCartDataContextInterface } from "@/types/shoppingCartTypes";
import styles from "./addToCartBtnComponent.module.scss"
import { ShoppingCartContext } from "@/context/ShoppingCartContextProvider";
import { useContext } from "react";

export default function AddToCartBtnComponent({
    productSlug
}: {
    productSlug: string
}) {
    const { handleCartItemsChange } = useContext(
        ShoppingCartContext
    ) as ShoppingCartDataContextInterface;

    return <button onClick={() => handleCartItemsChange({
        slug: productSlug,
        quantity: 1
    })}>
        Agregar al carrito
    </button>
}