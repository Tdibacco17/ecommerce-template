'use client'
import NotificationMpComponent from "@/components/NotificationMpComponent/NotificationMpComponent";
import { NotificationType } from "@/types/mpTypes";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotificationMpContainer() {
    const [notification, setNotification] = useState<NotificationType>({
        content: "",
        isOpen: false,
        type: null,
    });
    const urlParams = useSearchParams()
    
    useEffect(() => {
        const status = urlParams.get("status");

        if (status === "approved") {
            setNotification({
                content: "Pago aprobado!",
                isOpen: true,
                type: "approved",
            });
        }
        if (status === "failure") {
            setNotification({
                content: "Pago fallido!",
                isOpen: true,
                type: "failure",
            });
        }
        if (status === "pending") {
            setNotification({
                content: "Pago pendiente!",
                isOpen: true,
                type: "pending",
            });
        }

        setTimeout(() => {
            setNotification({
                content: "",
                isOpen: false,
                type: null,
            });
        }, 5000);
    }, [urlParams]);

    return <NotificationMpComponent notification={notification} />
}