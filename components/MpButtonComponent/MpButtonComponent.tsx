import styles from "./MpButtonComponent.module.scss"
import Loader from "../LoaderComponent/LoaderComponent"

export default function MpButtonComponent({
    handle,
    loading,
}: {
    handle: () => void,
    loading: boolean,
}) {
    return (
        <>
            {
                loading ? (
                    <button className={`${styles["btn-mp"]} ${loading && styles["disabled"]}`}>
                        <Loader />
                    </button>
                ) : (
                    <button onClick={handle}
                        disabled={loading}
                        className={`${styles["btn-mp"]} ${loading && styles["disabled"]}`}>
                        Comprar
                    </button>
                )
            }
        </>
    )
}