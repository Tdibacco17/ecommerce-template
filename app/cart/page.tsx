import CartComponent from "@/components/CartComponent/CartComponent"
import styles from "./page.module.scss"
import MpButtonContainer from "@/containers/MpButtonContainer/MpButtonContainer"
export default function CartPage() {
    return (
        <div className={styles["cart-page-container"]}>
            <CartComponent />
            <MpButtonContainer />
        </div>
    )
}
