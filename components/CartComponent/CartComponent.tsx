'use client'
import { CartItemInterface } from "@/types/cartTypes";
import styles from "./CartComponent.module.scss"
import { useCart } from "@/hooks/useCart";

export default function CartComponent() {
    const { cartData, handleCartItemsChange, handleRemoveCartItem, handleClearCart } = useCart();
    return (
        <section className={styles["section-cart-container"]}>
            <div className={styles["table-container"]}>
                {cartData.length > 0 &&
                    cartData.map((item: CartItemInterface, index: number) => {
                        return (
                            <div key={index}>
                                <p>SLUG: {item.productData.slug}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <button
                                    disabled={item.quantity === 1}
                                    onClick={() => handleCartItemsChange({ productData: item.productData, quantity: -1 })}>
                                    restar
                                </button>
                                <button
                                    onClick={() => handleCartItemsChange({ productData: item.productData, quantity: 1 })}>
                                    sumar
                                </button>
                                <button
                                    onClick={() => handleRemoveCartItem(item.productData)}>
                                    remover
                                </button>
                            </div>
                        )
                    })}
            </div>
            <br></br>
            {
                cartData.length > 0 &&
                <button onClick={() => handleClearCart()}>Limpiar carrito </button>
            }
        </section>
    )
}