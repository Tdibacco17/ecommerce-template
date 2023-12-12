import NotificationMpContainer from "@/containers/NotificationMpContainer/NotificationMpContainer"
import styles from "./page.module.scss"
import NavbarContainer from "@/containers/NavbarContainer/NavbarContainer"

export default function HomePage() {
  return (
    <>
      <NavbarContainer pathSlug=""/>
      <main id="top" className={styles["home-page-container"]}>
        <NotificationMpContainer />
      </main>
    </>
  )
}
