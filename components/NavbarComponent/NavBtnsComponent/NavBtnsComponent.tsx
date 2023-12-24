import Image from "next/image";
import styles from "./NavBtnsComponent.module.scss"
import { NavigationActiveType } from "@/types";
import { useCart } from "@/hooks/useCart";
import SidesMenuComponent from "@/components/SidesMenuComponent/SidesMenuComponent";

export default function NavBtnsComponent({
    showMenu,
    showCart,
    handleShowMenu,
    handleShowCart,
    menuRef,
    cartRef,
    pathSlug,
    totalQuantity,
    session
}: {
    showMenu: boolean,
    showCart: boolean,
    handleShowMenu: () => void,
    handleShowCart: () => void,
    menuRef: React.RefObject<HTMLDivElement>;
    cartRef: React.RefObject<HTMLDivElement>;
    pathSlug: NavigationActiveType,
    totalQuantity: number,
    session: any
}) {
    const { cartData } = useCart();

    return (
        <>
            {!session &&
                <>
                    <div className={styles["icon-container"]}>
                        <Image
                            src={"/assets/svg/navbar/favorite.svg"}
                            alt="Icono favorito"
                            width={25}
                            height={25}
                        />
                    </div>
                    <div onClick={handleShowCart} className={styles["icon-container"]}>
                        <Image
                            src={"/assets/svg/navbar/cart.svg"}
                            alt="Icono carrito"
                            width={25}
                            height={25}
                        />
                        {cartData.length > 0 &&
                            <div className={styles["badge"]}>
                                <small>{totalQuantity}</small>
                            </div>}
                    </div>
                </>
            }
            <div onClick={handleShowMenu} className={`${styles["icon-container"]} ${styles["mobile"]}`}>
                <Image
                    src={"/assets/svg/navbar/menu.svg"}
                    alt="Icono menu hamburgesa"
                    width={25}
                    height={25}
                />
            </div>
            <SidesMenuComponent
                showMenu={showMenu}
                showCart={showCart}
                handleShowMenu={handleShowMenu}
                handleShowCart={handleShowCart}
                menuRef={menuRef}
                cartRef={cartRef}
                pathSlug={pathSlug}
                session={session}
            />
        </>
    )
}