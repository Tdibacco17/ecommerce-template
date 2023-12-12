import NavbarContainer from "@/containers/NavbarContainer/NavbarContainer"
import styles from "./page.module.scss"
export default function AboutPage() {
    return (
        <>
            <NavbarContainer pathSlug="about" />
            <div className={styles["about-page-container"]}>
                about page
            </div>
        </>
    )
}
