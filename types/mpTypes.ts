//notificacion mp
export interface NotificationType {
    content: string;
    isOpen: boolean;
    type: "approved" | "failure" | "pending" | null;
}