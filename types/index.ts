//imagen
export interface ImgDataInterface {
    imgSrc: string,
    imgAlt: string
    imgBlur?: string
    objPosition?: string,
}

//respuesta Api
export interface ParseResponseInterface {
    message: string,
    status: number,
    url?: string,
}

// navigation
export interface NavigationInterface {
    id: string,
    title: string,
    link: string
}
export type NavigationActiveType = "products" | "about" | "contact" | "cart" | "dashboard" |""