'use client'
import { CartItemInterface, ShoppingCartDataContextInterface } from "@/types/shoppingCartTypes";
import { ReactNode, createContext, useEffect, useState } from "react";
import { productsData } from "@/models/products";

export const ShoppingCartContext = createContext<ShoppingCartDataContextInterface | {}>({});

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItemsData, setCartItemsData] = useState<CartItemInterface[]>([]);

    // Función para actualizar el estado del carrito y almacenarlo en el localStorage
    const updateCartItemsData = (newCartItems: CartItemInterface[]) => {
        setCartItemsData(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    };

    const handleCartItemsChange = (newCartItem: CartItemInterface) => {
        // Verifica si el producto ya está en el carrito
        const existingItemIndex = cartItemsData.findIndex(item => item.slug === newCartItem.slug);

        if (existingItemIndex !== -1) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            const updatedCartItems = [...cartItemsData];
            const existingItem = updatedCartItems[existingItemIndex];
            // Calcula la nueva cantidad y asegúrate de que sea mayor o igual a 1
            const newQuantity = Math.max(existingItem.quantity + newCartItem.quantity, 1);
            // Actualiza la cantidad del producto
            existingItem.quantity = newQuantity;
            // Actualiza el estado con el nuevo array de elementos del carrito
            setCartItemsData(updatedCartItems);
        } else {
            // Si el producto no está en el carrito, agrégalo con cantidad mínima de 1
            setCartItemsData(prevCartItems => [
                ...prevCartItems,
                { ...newCartItem, quantity: Math.max(newCartItem.quantity, 1) },
            ]);
        }
    };

    // Función para manejar la eliminación de un elemento del carrito
    const handleRemoveCartItem = (slug: string) => {
        const updatedCartItems = cartItemsData.filter(item => item.slug !== slug);
        updateCartItemsData(updatedCartItems);
    };

    // Efecto para cargar el estado del carrito desde el localStorage al montar el componente
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItemsData(JSON.parse(storedCartItems));
        }
    }, []);

    return (
        <ShoppingCartContext.Provider
            value={{
                cartItemsData,
                handleCartItemsChange,
                handleRemoveCartItem
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};