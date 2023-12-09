'use client'
import ShoppingCartComponent from "@/components/ShoppingCartComponent/ShoppingCartComponent";
import { ShoppingCartContext } from "@/context/ShoppingCartContextProvider";
import { ShoppingCartDataContextInterface } from "@/types/shoppingCartTypes";
import { useContext } from "react";

export default function ShoppingCartContainer() {
    const { cartItemsData, handleCartItemsChange, handleRemoveCartItem } = useContext(
        ShoppingCartContext
    ) as ShoppingCartDataContextInterface;

    return <ShoppingCartComponent />
}