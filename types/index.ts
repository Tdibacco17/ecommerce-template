//imagen
export interface ImgDataInterface {
    imgSrc: string,
    imgAlt: string
    imgBlur?: string
    objPosition?: string,
}

// navigation
export interface NavigationInterface {
    id: string,
    title: string,
    link: string
}
export type NavigationActiveType = "products" | "about" | "contact" | "cart" | "dashboard" | ""

export interface CloudinaryImgInterface {
    public_id: string,
    secure_url: string
}