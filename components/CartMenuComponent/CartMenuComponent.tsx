import { useCart } from "@/hooks/useCart";
import styles from "./CartMenuComponent.module.scss"
import { CartItemInterface } from "@/types/cartTypes";
import Link from "next/link";
import { NavigationActiveType } from "@/types";
import CartCardComponent from "./CartCardComponent/CartCardComponent";

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
            <div className={styles["cart-items-container"]}>
                {cartData.length > 0 &&
                    cartData.map((cartItem: CartItemInterface) => {
                        return <CartCardComponent
                            key={cartItem.productData.slug}
                            cartItem={cartItem}

                        />
                    })}
            </div>
            {cartData.length > 0 ? (
                <button onClick={() => handleClearCart()}>Limpiar carrito</button>
            ) : (
                pathSlug === "products" ? <></> : <Link onClick={handleShowCart} href={"/products"}>Ver productos</Link>
            )}
            {pathSlug !== "cart" && <Link onClick={handleShowCart} href={"/cart"}>Ir al carrito</Link>}
        </div>
    )
}