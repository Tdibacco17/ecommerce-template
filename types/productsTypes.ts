import { ImgDataInterface } from ".";

// product
export interface ProductsDataInterface {
    [id: string]: ProductInterface;
}

export interface ProductInterface {
    slug: string,
    name: string,
    price: number,
    discount: number,
    image: ImgDataInterface,
    isNewIn: boolean,
    details: {
        imagesData: ImgDataInterface[],
        description: string[],
    },
    categories: CategoriesFilterInterface[]
}

// categorias
export type CategoriesFilterInterface =
    "all"
    | "tshirt"
    | "sweatshirts"
    | "top"
    | "sportswear"
    | "outstanding";

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

//cart
export interface CartItemsDataInterface {
    cartItems: CartItemInterface[]
}
export interface CartItemInterface {
    slug: string,
    quantity: number
}