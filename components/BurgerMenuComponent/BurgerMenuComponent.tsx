import Link from "next/link"
import styles from "./BurgerMenuComponent.module.scss"
import { NavigationActiveType, NavigationInterface } from "@/types"
import data from "@/models/webText.json"

export default function BurgerMenuComponent({
    menuRef,
    pathSlug,
    handleShowMenu,
    session
}: {
    menuRef: React.RefObject<HTMLDivElement>,
    pathSlug: NavigationActiveType,
    handleShowMenu: () => void,
    session: any
}) {

    return (
        <div className={styles["column"]} ref={menuRef}>
            {Object.values(data.NavbarComponent.navigation).map((navItem: NavigationInterface) => {
                return <Link
                    key={navItem.id}
                    className={`${styles["item-nav"]} ${pathSlug === navItem.id && styles["active"]}`}
                    onClick={handleShowMenu}
                    href={`${navItem.link}`}>
                    {navItem.title}
                </Link>
            })}
            {session && <Link
                className={`${styles["item-nav"]} ${pathSlug === data.NavbarComponent.dashboard.id && styles["active"]}`}
                href={data.NavbarComponent.dashboard.link}>
                {data.NavbarComponent.dashboard.title}
            </Link>}
        </div>
    )
}