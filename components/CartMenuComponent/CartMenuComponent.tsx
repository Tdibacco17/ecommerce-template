import { useCart } from "@/hooks/useCart";
import styles from "./CartMenuComponent.module.scss"
import { CartItemInterface } from "@/types/cartTypes";
import Link from "next/link";
import { NavigationActiveType } from "@/types";

export default function CartMenuComponent({
    handleShowCart,
    cartRef,
    pathSlug
}: {
    handleShowCart: () => void,
    cartRef: React.RefObject<HTMLDivElement>,
    pathSlug: NavigationActiveType
}) {
    const { cartData, handleCartItemsChange, handleRemoveCartItem, handleClearCart } = useCart();

    return (
        <div className={styles["column"]} ref={cartRef}>
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
            {cartData.length > 0 ? (
                <button onClick={() => handleClearCart()}>Limpiar carrito</button>
            ) : (
                <Link onClick={handleShowCart} href={"/products"}>Ver productos</Link>
            )}
            {pathSlug !== "cart" && <Link onClick={handleShowCart} href={"/cart"}>Ir al carrito</Link>}
        </div>
    )
}