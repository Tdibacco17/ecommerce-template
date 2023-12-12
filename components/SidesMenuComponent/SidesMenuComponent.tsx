import Image from "next/image"
import styles from "./SidesMenuComponent.module.scss"
import data from "@/models/webText.json"
import Link from "next/link"
export default function SidesMenuComponent({
    showMenu,
    showCart,
    handleShowMenu,
    handleShowCart,
}: {
    showMenu: boolean,
    showCart: boolean,
    handleShowMenu: () => void,
    handleShowCart: () => void,
}) {
    return (
        <>
            {(showMenu || showCart) &&
                <div className={styles['overlay-menu-container']} />}

            <section className={`${styles["side-menu-container"]} ${showMenu && styles["active"]}`}>
                <div className={styles["wrapper"]}>
                    <div className={styles["column"]}>
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
                </div>
            </section>
            <section className={`${styles["side-menu-container"]} ${showCart && styles["active"]}`}>
                <div className={styles["wrapper"]}>
                    <div className={styles["column"]}>
                        carrito
                    </div>
                </div>
            </section>
        </>
    )
}