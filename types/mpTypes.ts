//checkout mp
export interface ItemMpInterface {
    slug: string,
    name: string
    price: number,
    quantity: number,
}

//notificacion mp
export interface NotificationType {
    content: string;
    isOpen: boolean;
    type: "approved" | "failure" | "pending" | null;
}