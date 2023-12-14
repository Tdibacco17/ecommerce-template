'use client'
import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { ProductInterface } from "@/types/productsTypes";
import { initialState, reducer } from "@/reducers/cartReducer";
import { CartDataContextInterface, CartItemInterface } from "@/types/cartTypes";

export const CartContext = createContext<CartDataContextInterface | {}>({});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartData, dispatch] = useReducer(reducer, initialState);

    const handleStorageChange = (event: { key: string | null; }) => {
        if (event.key === 'cartItems') {
            dispatch({ type: 'CLEAR_CART' });
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCartItems = localStorage.getItem("cartItems") || "";

            if (storedCartItems) {
                try {
                    const parsedCartItems = JSON.parse(storedCartItems);
                    dispatch({ type: 'SET_CART', payload: parsedCartItems });
                } catch (error) {
                    console.error('Error parsing stored cart items:', error);
                }
            }
        }
        // Agrega el evento para escuchar cambios en el localStorage
        window.addEventListener('storage', handleStorageChange);

        // Limpia el evento al desmontar el componente
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [])

    const handleCartItemsChange = (newCartItem: CartItemInterface) => {
        dispatch({ type: 'ADD_TO_CART', payload: newCartItem });
    };

    const handleRemoveCartItem = (productData: ProductInterface) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { productData } });
    };

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const calculateTotalQuantity = (cartData: CartItemInterface[]) => {
        return cartData.reduce((total, item) => total + item.quantity, 0);
    };



    return (
        <CartContext.Provider
            value={{
                cartData,
                handleCartItemsChange,
                handleRemoveCartItem,
                handleClearCart,
                calculateTotalQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
};