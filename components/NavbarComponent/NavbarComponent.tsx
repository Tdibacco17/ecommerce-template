import Link from "next/link"
import styles from "./NavbarComponent.module.scss"
import data from "@/models/webText.json"
import Image from "next/image"
import SidesMenuComponent from "../SidesMenuComponent/SidesMenuComponent"

export default function NavbarComponent({
    showMenu,
    showCart,
    handleShowMenu,
    handleShowCart,
}: {
    showMenu: boolean,
    showCart: boolean,
    handleShowMenu: () => void,
    handleShowCart: () => void,
}
) {
    return (
        <section className={styles["section-navbar-container"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["left"]}>
                    <Link
                        className={styles["logo-contaier"]}
                        href={data.NavbarComponent.logo.link}>
                        {data.NavbarComponent.logo.title}
                    </Link>
                    {
                        Object.values(data.NavbarComponent.navigation).map((navItem: { title: string, link: string }, index: number) => {
                            return <Link
                                key={index}
                                className={styles["item-nav"]}
                                href={`${navItem.link}`}>
                                {navItem.title}
                            </Link>
                        })
                    }
                </div>
                <div className={styles["right"]}>
                    <div className={styles["icon-container"]}>
                        <Image
                            src={"/assets/svg/navbar/favorite.svg"}
                            alt="Icono carrito"
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
                    </div>
                    <div onClick={handleShowMenu} className={`${styles["icon-container"]} ${styles["mobile"]}`}>
                        <Image
                            src={"/assets/svg/navbar/menu.svg"}
                            alt="Icono carrito"
                            width={25}
                            height={25}
                        />
                    </div>
                </div>
            </div>
            <SidesMenuComponent
                showMenu={showMenu}
                showCart={showCart}
                handleShowMenu={handleShowMenu}
                handleShowCart={handleShowCart}
            />
        </section>
    )
}