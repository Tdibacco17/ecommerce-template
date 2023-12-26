import styles from "./SidesMenuComponent.module.scss"
import CartMenuComponent from "../CartMenuComponent/CartMenuComponent"
import { NavigationActiveType } from "@/types"
import BurgerMenuComponent from "../BurgerMenuComponent/BurgerMenuComponent"

export default function SidesMenuComponent({
    showMenu,
    showCart,
    handleShowMenu,
    handleShowCart,
    menuRef,
    cartRef,
    pathSlug,
    session,
    totalPrice
}: {
    showMenu: boolean,
    showCart: boolean,
    handleShowMenu: () => void,
    handleShowCart: () => void,
    menuRef: React.RefObject<HTMLDivElement>,
    cartRef: React.RefObject<HTMLDivElement>,
    pathSlug: NavigationActiveType,
    session: any,
    totalPrice: string,
}) {
    return (
        <>
            {(showMenu || showCart) &&
                <div className={styles['overlay-menu-container']} />}
            <section className={`${styles["side-menu-container"]} ${showMenu && styles["active"]}`}>
                <div className={styles["wrapper"]}>
                    <BurgerMenuComponent session={session} menuRef={menuRef} handleShowMenu={handleShowMenu} pathSlug={pathSlug} />
                </div>
            </section>
            <section className={`${styles["side-menu-container"]} ${showCart && styles["active"]}`}>
                <div className={styles["wrapper"]}>
                    <CartMenuComponent totalPrice={totalPrice} handleShowCart={handleShowCart} cartRef={cartRef} pathSlug={pathSlug} />
                </div>
            </section>
        </>
    )
}