'use client'
import { signOut } from "next-auth/react"
import Image from "next/image"
import styles from "./LogoutComponent.module.scss"

export default function LogoutComponent() {
    return (<div onClick={() => signOut()} className={styles["icon-container"]}>
        <Image
            src={"/assets/svg/navbar/logout.svg"}
            alt="Icono cerrar sesion"
            width={20}
            height={20}
        />
    </div>)
}