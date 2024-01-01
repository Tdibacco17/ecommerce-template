import ProductsComponent from "@/components/ProductsComponent/ProductsComponent"
import styles from "./page.module.scss"

export default async function ProductsPage() {
    return (
        <div className={styles["products-page-container"]}>
            <ProductsComponent />
        </div>
    )
}