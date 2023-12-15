import { ProductsDataInterface } from "@/types/productsTypes";

export const productsData: ProductsDataInterface = {
    "camisa-rayas": {
        slug: "camisa-rayas",
        name: "Camisa a Rayas",
        categorieTitle: "Remera",
        price: 29.99,
        oldPrice: 59.99,
        discount: 5,
        isNewIn: true,
        image: {
            imgSrc: "/assets/products/tshirt.webp",
            imgAlt: "Camisa a Rayas",
        },
        details: {
            imagesData: [
                {
                    imgSrc: "/assets/products/tshirt.webp",
                    imgAlt: "Detalles 1",
                },
                {
                    imgSrc: "/assets/products/tshirt.webp",
                    imgAlt: "Detalles 2",
                },
            ],
            description: ["Camisa de algodón a rayas para hombre."],
        },
        categories: ["all", "tshirt", "outstanding"],
    },
    "sudadera-gris": {
        slug: "sudadera-gris",
        name: "Sudadera Gris",
        categorieTitle: "Sudadera",
        price: 39.99,
        oldPrice: 59.99,
        discount: 10,
        isNewIn: false,
        image: {
            imgSrc: "/assets/products/sweatshirts.webp",
            imgAlt: "Sudadera Gris",
        },
        details: {
            imagesData: [
                {
                    imgSrc: "/assets/products/sweatshirts.webp",
                    imgAlt: "Detalles 1",
                },
                {
                    imgSrc: "/assets/products/sweatshirts.webp",
                    imgAlt: "Detalles 2",
                },
            ],
            description: ["Sudadera cómoda y elegante en color gris."],
        },
        categories: ["all", "sweatshirts", "outstanding"],
    },
    "top-black": {
        slug: "top-black",
        name: "Top Negra",
        categorieTitle: "Top",
        price: 19.99,
        oldPrice: 49.99,
        discount: 0,
        isNewIn: false,
        image: {
            imgSrc: "/assets/products/top.webp",
            imgAlt: "Tank Top Negra",
        },
        details: {
            imagesData: [
                {
                    imgSrc: "/assets/products/top.webp",
                    imgAlt: "Detalles 1",
                },
                {
                    imgSrc: "/assets/products/top.webp",
                    imgAlt: "Detalles 2",
                },
            ],
            description: ["Top cómoda y fresca en color negro."],
        },
        categories: ["all", "top"],
    },
    "sportswear-set": {
        slug: "sportswear-set",
        name: "Conjunto Deportivo",
        categorieTitle: "Ropa deportiva",
        price: 59.99,
        oldPrice: 79.99,
        discount: 15,
        isNewIn: true,
        image: {
            imgSrc: "/assets/products/sportswear.webp",
            imgAlt: "Conjunto Deportivo",
        },
        details: {
            imagesData: [
                {
                    imgSrc: "/assets/products/sportswear.webp",
                    imgAlt: "Detalles 1",
                },
                {
                    imgSrc: "/assets/products/sportswear.webp",
                    imgAlt: "Detalles 2",
                },
            ],
            description: ["Conjunto deportivo para un estilo activo y cómodo."],
        },
        categories: ["all", "sportswear"],
    },
    "jeans-classic": {
        slug: "jeans-classic",
        name: "Jeans Clásicos",
        categorieTitle: "Pantalones",
        price: 49.99,
        oldPrice: 69.99,
        discount: 5,
        isNewIn: true,
        image: {
            imgSrc: "/assets/products/jeans.webp",
            imgAlt: "Jeans Clásicos",
        },
        details: {
            imagesData: [
                {
                    imgSrc: "/assets/products/jeans.webp",
                    imgAlt: "Detalles 1",
                },
                {
                    imgSrc: "/assets/products/jeans.webp",
                    imgAlt: "Detalles 2",
                },
            ],
            description: ["Pantalones clásicos de mezclilla para un estilo versátil."],
        },
        categories: ["all", "bottoms", "outstanding"],
    },
    "dress-floral": {
        slug: "dress-floral",
        name: "Vestido Floral",
        categorieTitle: "Vestido",
        price: 34.99,
        oldPrice: 49.99,
        discount: 10,
        isNewIn: false,
        image: {
            imgSrc: "/assets/products/dress.webp",
            imgAlt: "Vestido Floral",
        },
        details: {
            imagesData: [
                {
                    imgSrc: "/assets/products/dress.webp",
                    imgAlt: "Detalles 1",
                },
                {
                    imgSrc: "/assets/products/dress.webp",
                    imgAlt: "Detalles 2",
                },
            ],
            description: ["Vestido floral perfecto para ocasiones especiales."],
        },
        categories: ["all", "dresses"],
    },
}