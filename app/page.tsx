import ProductsComponent from "@/components/ProductsComponent/ProductsComponent"
import MpButtonContainer from "@/containers/MpButtonContainer/MpButtonContainer"
import NotificationMpContainer from "@/containers/NotificationMpContainer/NotificationMpContainer"
import styles from "./page.module.scss"
import ShoppingCartComponent from "@/components/ShoppingCartComponent/ShoppingCartComponent"

export default function HomePage() {
  return (
    <div className={styles["home-page-container"]}>
      <ProductsComponent />
      <MpButtonContainer />
      <NotificationMpContainer />
      <ShoppingCartComponent />
    </div>
  )
}
