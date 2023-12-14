import NavbarContainer from "@/containers/NavbarContainer/NavbarContainer"
import styles from "./page.module.scss"
import { CartProvider } from "@/context/CartContextProvider"
export default function ContactPage() {
    return (
        <>
            <CartProvider>
                <NavbarContainer pathSlug="contact" />
            </CartProvider>
            <div className={styles["contact-page-container"]}>
                contact page
            </div>
        </>
    )
}
