import { useCart } from "@/hooks/useCart";
import styles from "./CartMenuComponent.module.scss"
import { CartItemInterface } from "@/types/cartTypes";
import Link from "next/link";
import { NavigationActiveType } from "@/types";
import CartCardContainer from "@/containers/CartCardContainer/CartCardContainer";

export default function CartMenuComponent({
    handleShowCart,
    cartRef,
    pathSlug
}: {
    handleShowCart: () => void,
    cartRef: React.RefObject<HTMLDivElement>,
    pathSlug: NavigationActiveType
}) {
    const { cartData, handleClearCart } = useCart();

    return (
        <div className={styles["column"]} ref={cartRef}>
            <div className={`${styles["cart-items-container"]} ${cartData.length === 0 && styles["empty"]}`}>
                {
                    cartData.length > 0 ? (
                        cartData.map((cartItem: CartItemInterface, index: number) => {
                            return <CartCardContainer
                                key={cartItem.productData.slug}
                                cartItem={cartItem}
                                isFirstCard={0 === index}
                                isFinalCard={(cartData.length - 1) === index}
                            />
                        })
                    ) : (
                        <div className={styles["cart-msg"]}>
                            <p>Tu carrito esta vacío</p>
                            {pathSlug === "products" ?
                                <p className={styles["item-nav"]}
                                    onClick={handleShowCart}>
                                    Elegí algún producto
                                </p>
                                : <Link
                                    className={styles["item-nav"]}
                                    onClick={handleShowCart}
                                    href={"/products"}>
                                    Ver productos
                                </Link>}
                        </div>
                    )
                }
            </div>
            {cartData.length > 0 &&
                <div className={styles["cart-footer"]}>
                    {/* <button onClick={() => handleClearCart()}>Limpiar carrito</button> */}
                    <p className={styles["title-item"]}><span>Envio</span><span>Gratis</span></p>
                    <p className={styles["title-item"]}><span>Total</span><span>$788</span></p>
                    {pathSlug !== "cart" &&
                        <Link
                            className={styles["btn-cart"]}
                            onClick={handleShowCart}
                            href={"/cart"}>
                            Ir al carrito
                        </Link>}
                </div>
            }
        </div>
    )
}