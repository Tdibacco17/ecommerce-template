import { useCart } from "@/hooks/useCart";
import styles from "./CartMenuComponent.module.scss"
import { CartItemInterface } from "@/types/cartTypes";
import Link from "next/link";
import { NavigationActiveType } from "@/types";
import CartCardContainer from "@/containers/CartCardContainer/CartCardContainer";
import data from "@/models/webText.json"

export default function CartMenuComponent({
    handleShowCart,
    cartRef,
    pathSlug,
    totalPrice
}: {
    handleShowCart: () => void,
    cartRef: React.RefObject<HTMLDivElement>,
    pathSlug: NavigationActiveType,
    totalPrice: string,
}) {
    const { cartData = [] } = useCart();

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
                            <p>{data.CartMenuComponent.empty}</p>
                            {pathSlug === "products" ?
                                <p className={styles["item-nav"]}
                                    onClick={handleShowCart}>
                                    {data.CartMenuComponent.emptyMsg}
                                </p>
                                : <Link
                                    className={styles["item-nav"]}
                                    onClick={handleShowCart}
                                    href={data.CartMenuComponent.emptyRedirect.link}>
                                    {data.CartMenuComponent.emptyRedirect.title}
                                </Link>}
                        </div>
                    )
                }
            </div>
            {cartData.length > 0 &&
                <div className={styles["cart-footer"]}>
                    {/* <button onClick={() => handleClearCart()}>Limpiar carrito</button> */}
                    <p className={styles["title-item"]}>
                        <span>{data.CartMenuComponent.send}</span>
                        <span>{data.CartMenuComponent.free}</span>
                    </p>
                    <p className={styles["title-item"]}>
                        <span>{data.CartMenuComponent.total}</span>
                        <span>{`$${totalPrice}`}</span>
                    </p>
                    {pathSlug !== "cart" &&
                        <Link
                            className={styles["btn-cart"]}
                            onClick={handleShowCart}
                            href={data.CartMenuComponent.cart.link}>
                            {data.CartMenuComponent.cart.title}
                        </Link>}
                </div>
            }
        </div>
    )
}