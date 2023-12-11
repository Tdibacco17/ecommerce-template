import { ProductInterface } from "@/types/productsTypes"
import styles from "./ProductsComponent.module.scss"
import { productsData } from "@/models/products"
import ProductCardComponent from "../ProductCardComponent/ProductCardComponent"

export default function ProductsComponent() {
    return (
        <section className={styles["section-products-container"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["grid-container"]}>
                    {Object.values(productsData).map((productsData: ProductInterface) => {
                        return <ProductCardComponent
                            key={productsData.slug}
                            productsData={productsData}
                        />
                    })}
                </div>
            </div>
        </section>
    )
}