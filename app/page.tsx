import ProductsComponent from "@/components/ProductsComponent/ProductsComponent"
import MpButtonContainer from "@/containers/MpButtonContainer/MpButtonContainer"
import NotificationMpContainer from "@/containers/NotificationMpContainer/NotificationMpContainer"
import styles from "./page.module.scss"
import CartComponent from "@/components/CartComponent/CartComponent"

export default function HomePage() {
  return (
    <div className={styles["home-page-container"]}>
      <ProductsComponent />
      <MpButtonContainer />
      <NotificationMpContainer />
      <CartComponent />
    </div>
  )
}
