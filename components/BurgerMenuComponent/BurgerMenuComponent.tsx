import Link from "next/link"
import styles from "./BurgerMenuComponent.module.scss"
import { NavigationActiveType, NavigationInterface } from "@/types"
import data from "@/models/webText.json"
export default function BurgerMenuComponent({
    menuRef,
    pathSlug,
    handleShowMenu
}: {
    menuRef: React.RefObject<HTMLDivElement>,
    pathSlug: NavigationActiveType,
    handleShowMenu: () => void
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
        </div>
    )
}