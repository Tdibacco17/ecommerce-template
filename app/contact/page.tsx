import NavbarContainer from "@/containers/NavbarContainer/NavbarContainer"
import styles from "./page.module.scss"
export default function ContactPage() {
    return (
        <>
            <NavbarContainer pathSlug="contact" />
            <div className={styles["contact-page-container"]}>
                contact page
            </div>
        </>
    )
}
