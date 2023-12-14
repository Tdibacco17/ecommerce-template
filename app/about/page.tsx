import NavbarContainer from "@/containers/NavbarContainer/NavbarContainer"
import styles from "./page.module.scss"
import { CartProvider } from "@/context/CartContextProvider"
export default function AboutPage() {
    return (
        <>
            <CartProvider>
                <NavbarContainer pathSlug="about" />
            </CartProvider>
            <div className={styles["about-page-container"]}>
                about page
            </div>
        </>
    )
}
