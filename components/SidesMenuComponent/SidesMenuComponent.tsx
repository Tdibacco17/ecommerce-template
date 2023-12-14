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
    pathSlug
}: {
    showMenu: boolean,
    showCart: boolean,
    handleShowMenu: () => void,
    handleShowCart: () => void,
    menuRef: React.RefObject<HTMLDivElement>,
    cartRef: React.RefObject<HTMLDivElement>,
    pathSlug: NavigationActiveType
}) {
    return (
        <>
            {(showMenu || showCart) &&
                <div className={styles['overlay-menu-container']} />}
            <section className={`${styles["side-menu-container"]} ${showMenu && styles["active"]}`}>
                <div className={styles["wrapper"]}>
                    <BurgerMenuComponent menuRef={menuRef} handleShowMenu={handleShowMenu} pathSlug={pathSlug} />
                </div>
            </section>
            <section className={`${styles["side-menu-container"]} ${showCart && styles["active"]}`}>
                <div className={styles["wrapper"]}>
                        <CartMenuComponent handleShowCart={handleShowCart} cartRef={cartRef} pathSlug={pathSlug} />
                </div>
            </section>
        </>
    )
}