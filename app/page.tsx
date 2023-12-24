import NotificationMpContainer from "@/containers/NotificationMpContainer/NotificationMpContainer"
import styles from "./page.module.scss"
import { CartProvider } from "@/context/CartContextProvider"
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent"

export default function HomePage() {
  return (
    <>
      <CartProvider>
        <NavbarComponent pathSlug="" />
      </CartProvider>
      <div className={styles["home-page-container"]}>
        <NotificationMpContainer />
      </div>
    </>
  )
}
