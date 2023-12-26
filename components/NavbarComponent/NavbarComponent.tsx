import Link from "next/link"
import styles from "./NavbarComponent.module.scss"
import data from "@/models/webText.json"
import { NavigationActiveType, NavigationInterface } from "@/types"
import { getServerSession } from "next-auth";
import NavBtnsContainer from "@/containers/NavBtnsContainer/NavBtnsContainer"
import LogoutComponent from "../LogoutComponent/LogoutComponent";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export default async function NavbarComponent({
    pathSlug,
}: {
    pathSlug: NavigationActiveType,
}
) {
    const session = await getServerSession(authOptions);

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
                        className={`${styles["item-nav"]} ${pathSlug === data.NavbarComponent.dashboard.id && styles["active"]}`}
                        href={data.NavbarComponent.dashboard.link}>
                        {data.NavbarComponent.dashboard.title}
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