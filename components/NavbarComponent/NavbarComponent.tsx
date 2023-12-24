import Link from "next/link"
import styles from "./NavbarComponent.module.scss"
import data from "@/models/webText.json"
import { NavigationActiveType, NavigationInterface } from "@/types"
import { getServerSession } from "next-auth";
import NavBtnsContainer from "@/containers/NavBtnsContainer/NavBtnsContainer"
import LogoutComponent from "../LogoutComponent/LogoutComponent";

export default async function NavbarComponent({
    pathSlug,
}: {
    pathSlug: NavigationActiveType,
}
) {
    const session = await getServerSession();

    return (
        <section className={styles["section-navbar-container"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["left"]}>
                    <Link
                        className={styles["logo-contaier"]}
                        href={data.NavbarComponent.logo.link}>
                        {data.NavbarComponent.logo.title}
                    </Link>
                    {Object.values(data.NavbarComponent.navigation).map((navItem: NavigationInterface) => {
                        return <Link
                            key={navItem.id}
                            className={`${styles["item-nav"]} ${pathSlug === navItem.id && styles["active"]}`}
                            href={`${navItem.link}`}>
                            {navItem.title}
                        </Link>
                    })}
                    {session && <Link
                        className={`${styles["item-nav"]} ${pathSlug === "dashboard" && styles["active"]}`}
                        href={`/dashboard`}>
                        Dashboard
                    </Link>}
                </div>
                <div className={styles["right"]}>
                    {session && <LogoutComponent />}
                    <NavBtnsContainer session={session} pathSlug={pathSlug} />
                </div>
            </div>
        </section>
    )
}