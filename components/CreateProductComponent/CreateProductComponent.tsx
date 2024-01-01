import { ChangeEvent, FormEvent, useRef } from "react"
import styles from "./CreateProductComponent.module.scss"
import { FormDataInterface } from "@/types/productsTypes"
import Loader from "../LoaderComponent/LoaderComponent"
import useTabNavigation from "@/hooks/useTabNavigation"

export default function CreateProductComponent({
    handleSubmit,
    handleImageInputChange,
    handleImagesInputChange,
    handleInputChange,
    handleDescriptionChange,
    formData,
    message,
    loading,
}: {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
    handleImageInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    handleImagesInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    handleDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    formData: FormDataInterface,
    message: { ok: string, error: string },
    loading: boolean,
}) {
    const formRef = useRef<HTMLFormElement>(null);
    const { activeGroup, setActiveGroup } = useTabNavigation(formRef, "input");

    return (
        <section className={styles["container-section-create-product"]}>
            <div className={styles["header-container"]}>
                <p className={styles["title-card"]}>Crear producto</p>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} onBlur={() => setActiveGroup(null)} className={styles["form-container"]}>
                <div className={styles["divider"]}>
                    <div className={styles["group-complete"]}>
                        <label className={`${activeGroup === "slug" ? styles["active-title"] : styles["title"]}`}>
                            Slug: <small className={styles["required"]}>*</small>
                        </label>
                        <input
                            className={styles["field"]}
                            type="text"
                            name="slug"
                            value={formData.slug}
                            onChange={handleInputChange}
                            onFocus={() => setActiveGroup("slug")} />
                    </div>
                    <div className={styles["group-complete"]}>
                        <label className={`${activeGroup === "name" ? styles["active-title"] : styles["title"]}`}>
                            Nombre: <small className={styles["required"]}>*</small>
                        </label>
                        <input
                            className={styles["field"]}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => setActiveGroup("name")} />
                    </div>
                    <div className={styles["group-complete"]}>
                        <label className={`${activeGroup === "price" ? styles["active-title"] : styles["title"]}`}>
                            Precio: <small className={styles["required"]}>*</small>
                        </label>
                        <input
                            className={styles["field"]}
                            type="string"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            onFocus={() => setActiveGroup("price")} />
                    </div>
                    <div className={styles["group-complete"]}>
                        <label className={`${activeGroup === "oldPrice" ? styles["active-title"] : styles["title"]}`}>
                            Precio antiguo:
                        </label>
                        <input
                            className={styles["field"]}
                            type="string"
                            name="oldPrice"
                            value={formData.oldPrice}
                            onChange={handleInputChange}
                            onFocus={() => setActiveGroup("oldPrice")} />
                    </div>
                    <div className={styles["group-complete"]}>
                        <label className={`${activeGroup === "discount" ? styles["active-title"] : styles["title"]}`}>
                            Descuento:
                        </label>
                        <input
                            className={styles["field"]}
                            type="number"
                            name="discount"
                            value={formData.discount}
                            onChange={handleInputChange}
                            onFocus={() => setActiveGroup("discount")} />
                    </div>
                    <div className={styles["group-complete"]}>
                        <label className={`${activeGroup === "stock" ? styles["active-title"] : styles["title"]}`}>
                            Stock: <small className={styles["required"]}>*</small>
                        </label>
                        <input
                            className={styles["field"]}
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleInputChange}
                            onFocus={() => setActiveGroup("stock")} />
                    </div>
                    <div className={styles["group-complete"]}>
                        <label className={`${activeGroup === "description" ? styles["active-title"] : styles["title"]}`}>
                            Description:
                        </label>
                        <textarea
                            className={styles["field"]}
                            name="description"
                            value={formData.description.join("\n")}
                            onChange={handleDescriptionChange}
                            onFocus={() => setActiveGroup("description")}
                        />
                    </div>
                </div>
                <div className={styles["divider"]}>
                    <div className={styles["group-complete"]}>
                        <label className={styles["title"]}>
                            Imagen: <small className={styles["required"]}>*</small>
                        </label>
                        <input
                            // className={styles["field"]}
                            type="file"
                            name="imageData"
                            onChange={handleImageInputChange} />
                    </div>
                    <div className={styles["group-complete"]}>
                        <label className={styles["title"]}>Imágenes adicionales:</label>
                        <input
                            // className={styles["field"]}
                            type="file"
                            name="imagesData"
                            multiple
                            onChange={handleImagesInputChange} />
                    </div>
                </div>
                {loading ? <button
                    disabled={loading}
                    className={`${styles["btn-form"]} ${loading && styles["disabled"]}`}>
                    <Loader />
                </button>
                    : <button className={`${styles["btn-form"]}`}>
                        Crear Producto
                    </button>
                }
            </form>
            {message.error && <p className={`${styles["msg"]} ${styles["error"]}`}>{message.error}</p>}
            {message.ok && <p className={`${styles["msg"]} ${styles["ok"]}`}>{message.ok}</p>}
        </section>
    )
}