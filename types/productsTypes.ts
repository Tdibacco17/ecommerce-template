import { CloudinaryImgInterface, ImgDataInterface } from ".";

export interface ProductsDataContextInterface {
    productsData: ProductInterface[],
    handleProductsDataChange: Function
}

// product
export interface ProductsDataInterface {
    [id: string]: ProductInterface;
}

export interface ProductInterface {
    slug: string,
    name: string,
    price: number,
    stock: number,
    oldPrice?: number,
    discount?: number,
    imageData: CloudinaryImgInterface,
    details: {
        imagesData: CloudinaryImgInterface[],
        description: string,// string[],
    },
    categories: string[]//CategoriesFilterInterface[],
}

// categorias
export type CategoriesFilterInterface =
    "all"
    | "tshirt"
    | "sweatshirts"
    | "dresses"
    | "outstanding";

export type CategorieTitle = "Remera" | "Sudadera" | "Top" | "Ropa deportiva" | "Pantalones" | "Vestido"


//CREATE PRODUCT 
export interface FormDataInterface {
    slug: string;
    name: string;
    price: string;
    oldPrice: string;
    discount: number;
    stock: number;
    description: string[];
}
export interface FormImgDataInterface {
    imageData: File | null;
    imagesData: FileList | null;
}