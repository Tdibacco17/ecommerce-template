import NotificationMpContainer from "@/containers/NotificationMpContainer/NotificationMpContainer"
import styles from "./page.module.scss"
import NavbarContainer from "@/containers/NavbarContainer/NavbarContainer"
import { CartProvider } from "@/context/CartContextProvider"

export default function HomePage() {
  return (
    <>
      <CartProvider>
        <NavbarContainer pathSlug="" />
      </CartProvider>
      <div className={styles["home-page-container"]}>
        <NotificationMpContainer />
      </div>
    </>
  )
}
