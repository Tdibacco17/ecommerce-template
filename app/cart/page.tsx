import CartComponent from "@/components/CartComponent/CartComponent"
import styles from "./page.module.scss"
import MpButtonContainer from "@/containers/MpButtonContainer/MpButtonContainer"
import NavbarContainer from "@/containers/NavbarContainer/NavbarContainer"
export default function CartPage() {
    return (
        <>
            <NavbarContainer pathSlug="cart" />
            <div className={styles["cart-page-container"]}>
                <CartComponent />
                <MpButtonContainer />
            </div>
        </>
    )
}
