import { ProductInterface } from "@/types/productsTypes"
import styles from "./ProductCardComponent.module.scss"
import AddToCartBtnComponent from "./AddToCartBtnComponent/AddToCartBtnComponent"
export default function ProductCardComponent({
    productsData
}: {
    productsData: ProductInterface
}) {
    return (
        <div className={styles["card-product-container"]}>
            <p>{productsData.name}</p>
            <p>{productsData.price}</p>
            <p>{productsData.isNewIn && "New In"}</p>
            <p>{`% ${productsData.discount} OFF`}</p>
            {productsData.details.description.map((item: string, index: number) => {
                return <span key={index}>{item}</span>
            })}
            <AddToCartBtnComponent productSlug={productsData.slug} />
        </div>
    )
}