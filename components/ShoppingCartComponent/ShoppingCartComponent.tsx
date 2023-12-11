'use client'
import { CartItemInterface, ShoppingCartDataContextInterface } from "@/types/shoppingCartTypes";
import styles from "./ShoppingCartComponent.module.scss"
import { ShoppingCartContext } from "@/context/ShoppingCartContextProvider";
import { useContext } from "react";

export default function ShoppingCartComponent() {
    const { cartItemsData, handleCartItemsChange, handleRemoveCartItem } = useContext(
        ShoppingCartContext
    ) as ShoppingCartDataContextInterface;
    return (
        <section className={styles["section-cart-container"]}>
            <div className={styles["table-container"]}>
                {cartItemsData.length > 0 &&
                    cartItemsData.map((item: CartItemInterface, index: number) => {
                        return (
                            <div key={index}>
                                <p>SLUG: {item.slug}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <button 
                                disabled={item.quantity === 1}
                                onClick={() => handleCartItemsChange({slug: item.slug, quantity: -1 })}>
                                    restar
                                </button>
                                <button 
                                onClick={() => handleCartItemsChange({slug: item.slug, quantity: 1 })}>
                                    sumar
                                </button>
                                <button 
                                onClick={() => handleRemoveCartItem(item.slug)}>
                                    remover
                                </button>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}