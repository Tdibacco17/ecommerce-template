import styles from "./MpButtonComponent.module.scss"
import Loader from "../LoaderComponent/LoaderComponent"
import { useCart } from "@/hooks/useCart";
import Link from "next/link";

export default function MpButtonComponent({
    handle,
    loading,
}: {
    handle: () => void,
    loading: boolean,
}) {
    const { cartData } = useCart();

    return (
        <>
            {
                loading ? (
                    <button className={`${styles["btn-mp"]} ${loading && styles["disabled"]}`}>
                        <Loader />
                    </button>
                ) : (
                    <>
                        {cartData.length === 0 ? (
                            <Link className={`${styles["btn-mp"]}`} href={"/products"}>Ver productos</Link>
                        ) : (
                            <button /*onClick={handle} */
                                disabled={loading}
                                className={`${styles["btn-mp"]} ${loading && styles["disabled"]}`}>
                                Comprar
                            </button>
                        )}
                    </>
                )
            }
        </>
    )
}