import NotificationMpContainer from "@/containers/NotificationMpContainer/NotificationMpContainer"
import styles from "./page.module.scss"
import { CartProvider } from "@/context/CartContextProvider"
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent"
import { handleGetProducts } from "@/utils/fetchFunctions"

export default async function HomePage() {
  const products = await handleGetProducts()
  console.log(products)

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
