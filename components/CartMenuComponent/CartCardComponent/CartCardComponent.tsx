import Image from "next/image"
import styles from "./CartCardComponent.module.scss"
import { useCart } from "@/hooks/useCart";
import { CartItemInterface } from "@/types/cartTypes";
export default function CartCardComponent({
    cartItem,
    isFirstCard,
    isFinalCard,
    handleItemFav,
    itemFav
}: {
    cartItem: CartItemInterface,
    isFirstCard: boolean,
    isFinalCard: boolean,
    handleItemFav: () => void
    itemFav: boolean
}) {
    const { handleCartItemsChange, handleRemoveCartItem } = useCart();
    return (
        <div key={cartItem.productData.slug} className={`${styles["item-cart-container"]} ${isFirstCard && styles["first-card"]} ${isFinalCard && styles["final-card"]}`}>
            <div className={styles["wrapper"]}>
                <div className={styles["outer-img-container"]}>
                    <Image
                        src={cartItem.productData.image.imgSrc}
                        alt={cartItem.productData.image.imgAlt}
                        fill
                        className={styles["inner-img-container"]}
                    />
                </div>
                <div className={styles["info-container"]}>
                    <div className={styles["header"]}>
                        <p className={styles["name"]}>{cartItem.productData.name}</p>
                        {/* <small className={styles["categorie"]}>{cartItem.productData.categorieTitle}</small> */}
                    </div>
                    <div className={styles["prices"]}>
                        <p className={styles["price"]}>{`$${cartItem.productData.price}`}</p>
                        <p className={styles["old"]}>{`$${cartItem.productData.oldPrice}`}</p>
                        {cartItem.productData.discount !== 0 && <p className={styles["discount"]}>{`${cartItem.productData.discount}% off`}</p>}
                    </div>
                </div>
            </div>
            <div className={styles["btns-container"]}>
                <div className={styles["btn-quantity-container"]}>
                    <button
                        className={`${styles["btn"]} ${styles["left"]}`}
                        disabled={cartItem.quantity === 1}
                        onClick={() => handleCartItemsChange({ productData: cartItem.productData, quantity: -1 })}>
                        <Image
                            src={"/assets/svg/cart/remove.svg"}
                            alt="Icono restar"
                            width={22}
                            height={22}
                        />
                    </button>
                    <p className={`${styles["quantity"]} ${cartItem.quantity === 1 && styles["border-left"]}`}>{cartItem.quantity}</p>
                    <button
                        className={`${styles["btn"]} ${styles["right"]}`}
                        onClick={() => handleCartItemsChange({ productData: cartItem.productData, quantity: 1 })}>
                        <Image
                            src={"/assets/svg/cart/add.svg"}
                            alt="Icono suamr"
                            width={22}
                            height={22}
                        />
                    </button>
                </div>
                <button className={styles["btn-remove"]} onClick={() => handleRemoveCartItem(cartItem.productData)}>
                    <Image
                        src={"/assets/svg/cart/trash.svg"}
                        alt="Icono suamr"
                        width={16}
                        height={16}
                    />
                </button>
            </div>
            {/* <button onClick={handleItemFav} className={styles["btn-fav"]}>
                {itemFav ?
                    <Image
                        src={"/assets/svg/cart/starActive.svg"}
                        alt="Icono suamr"
                        width={18}
                        height={18}
                    /> : <Image
                        src={"/assets/svg/cart/star.svg"}
                        alt="Icono suamr"
                        width={22}
                        height={22}
                    />}
            </button> */}
        </div>
    )
}