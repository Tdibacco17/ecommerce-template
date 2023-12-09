import { NotificationType } from "@/types/productsTypes"
import styles from "./NotificationMpComponent.module.scss"
import Image from "next/image"

export default function NotificationMpComponent({
    notification
}: {
    notification: NotificationType
}) {
    return (
        <>
            {notification.isOpen &&
                <div className={`${styles["notification-container"]}`}>
                    <div className={`${styles["iconContainer"]} ${notification.type && styles[`${notification.type}`]}`}>
                        <Image
                            src={`/assets/svg/notification/${notification.type}.svg`}
                            alt={notification.type || "Icono de notificación"}
                            width={25}
                            height={25}
                        />
                    <p className={styles["text"]}>{notification.content}</p>
                    </div>
                </div>}
        </>
    )
}