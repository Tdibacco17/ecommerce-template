import Image from "next/image"
import styles from "./CartCardComponent.module.scss"
import { useCart } from "@/hooks/useCart";
import { CartItemInterface } from "@/types/cartTypes";
export default function CartCardComponent({
    cartItem
}: {
    cartItem: CartItemInterface
}) {
    const { handleCartItemsChange, handleRemoveCartItem } = useCart();
    return (
        <div key={cartItem.productData.slug} className={styles["item-cart-container"]}>
            <div className={styles["outer-img-container"]}>
                <Image
                    src={cartItem.productData.image.imgSrc}
                    alt={cartItem.productData.image.imgAlt}
                    fill
                    className={styles["inner-img-container"]}
                />
            </div>
            <div className={styles["wrapper"]}>
                <div className={styles["info-container"]}>
                    <div className={styles["details"]}>
                        <p className={styles["name"]}>{cartItem.productData.name}</p>
                        <div className={styles["prices"]}>
                            <p>{`$${cartItem.productData.price}`}</p>
                            <p className={styles["old"]}>{`$${cartItem.productData.oldPrice}`}</p>
                            {cartItem.productData.discount !== 0 && <p className={styles["discount"]}>{`${cartItem.productData.discount}% off`}</p>}
                        </div>
                    </div>
                    <div className={styles["btn-quantity-container"]}>
                        <button
                            className={`${styles["btn"]} ${styles["left"]}`}
                            disabled={cartItem.quantity === 1}
                            onClick={() => handleCartItemsChange({ productData: cartItem.productData, quantity: -1 })}>
                            <Image
                                src={"/assets/svg/cart/remove.svg"}
                                alt="Icono restar"
                                width={20}
                                height={20}
                            />
                        </button>
                        <p>{cartItem.quantity}</p>
                        <button
                            className={`${styles["btn"]} ${styles["right"]}`}
                            onClick={() => handleCartItemsChange({ productData: cartItem.productData, quantity: 1 })}>
                            <Image
                                src={"/assets/svg/cart/add.svg"}
                                alt="Icono suamr"
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>
                </div>
                <button
                    className={styles["btn-remove"]}
                    onClick={() => handleRemoveCartItem(cartItem.productData)}>
                    <Image
                        src={"/assets/svg/cart/trash.svg"}
                        alt="Icono suamr"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </div>
    )
}