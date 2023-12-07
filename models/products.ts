import { ProductsDataInterface } from "@/types/productsTypes";

export const projectsData: ProductsDataInterface = {
    "camisa-rayas": {
        slug: "camisa-rayas",
        name: "Camisa a Rayas",
        price: 29.99,
        discount: 5,
        isNewIn: true,
        isOutstanding: false,
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
        categories: ["all", "tshirt"],
    },
    "sudadera-gris": {
        slug: "sudadera-gris",
        name: "Sudadera Gris",
        price: 39.99,
        discount: 10,
        isNewIn: false,
        isOutstanding: true,
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
        categories: ["all", "sweatshirts"],
    },
    "top-black": {
        slug: "top-black",
        name: "Top Negra",
        price: 19.99,
        discount: 0,
        isNewIn: false,
        isOutstanding: true,
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
        price: 59.99,
        discount: 15,
        isNewIn: true,
        isOutstanding: true,
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
}