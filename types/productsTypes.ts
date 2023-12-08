import { ImgDataInterface } from ".";

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

export type CategoriesFilterInterface =
    "all"
    | "tshirt"
    | "sweatshirts"
    | "top"
    | "sportswear"
    | "outstanding";