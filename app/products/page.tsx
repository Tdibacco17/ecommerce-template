import ProductsComponent from "@/components/ProductsComponent/ProductsComponent"
import styles from "./page.module.scss"
import NavbarContainer from "@/containers/NavbarContainer/NavbarContainer"
export default function ProductsPage() {
    return (
        <>
            <NavbarContainer pathSlug="products" />
            <div className={styles["products-page-container"]}>
                <ProductsComponent />
            </div>
        </>
    )
}
