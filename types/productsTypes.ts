import { ImgDataInterface } from ".";

// product
export interface ProductsDataInterface {
    [id: string]: ProductInterface;
}

export interface ProductInterface {
    slug: string,
    name: string,
    categorieTitle: CategorieTitle,
    price: number,
    oldPrice: number,
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

export type CategorieTitle= "Remera" | "Sudadera" | "Top" | "Ropa deportiva" 