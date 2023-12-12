import MpButtonContainer from "@/containers/MpButtonContainer/MpButtonContainer"
import NotificationMpContainer from "@/containers/NotificationMpContainer/NotificationMpContainer"
import styles from "./page.module.scss"
import CartComponent from "@/components/CartComponent/CartComponent"

export default function HomePage() {
  return (
    <div className={styles["home-page-container"]}>
      <MpButtonContainer />
      <NotificationMpContainer />
      <CartComponent />
    </div>
  )
}
