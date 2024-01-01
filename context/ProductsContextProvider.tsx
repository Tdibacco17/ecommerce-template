'use client'
import { ProductInterface, ProductsDataContextInterface } from "@/types/productsTypes";
import { ReactNode, createContext, useState } from "react";

export const ProductsContext = createContext<ProductsDataContextInterface | {}>({});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [productsData, setProductsData] = useState<ProductInterface[] | undefined>(undefined);
    // console.log("[productos]: ",productsData)
    const handleProductsDataChange = (productsData: ProductInterface[]) => {
        setProductsData(productsData);
    };
    return (
        <ProductsContext.Provider
            value={{
                productsData,
                handleProductsDataChange,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};