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