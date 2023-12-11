'use client'
import { CartItemInterface, ShoppingCartDataContextInterface } from "@/types/shoppingCartTypes";
import { ReactNode, createContext, useEffect, useState } from "react";
import { productsData } from "@/models/products";

export const ShoppingCartContext = createContext<ShoppingCartDataContextInterface | {}>({});

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItemsData, setCartItemsData] = useState<CartItemInterface[] | []>([]);

    // Función para actualizar el estado del carrito y almacenarlo en el localStorage
    const updateCartItemsData = (newCartItems: CartItemInterface[]) => {
        setCartItemsData(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    };
    // Función para manejar cambios en el localStorage
    const handleStorageChange = (event: StorageEvent) => {
        if (event.key === 'cartItems') {
            try {
                const storedCartItems = event.newValue;
                if (storedCartItems) {
                    const parsedCartItems = JSON.parse(storedCartItems);

                    // Verifica si el producto ya está en el carrito
                    const newCartItem = parsedCartItems[parsedCartItems.length - 1];
                    const isDuplicate = parsedCartItems.slice(0, parsedCartItems.length - 1).some((item: CartItemInterface) => item.slug === newCartItem.slug);

                    // Filtra y valida los elementos del carrito
                    const validCartItems = parsedCartItems.filter((item: CartItemInterface) => {
                        const isValidQuantity =
                            typeof item.quantity === 'number' && item.quantity >= 1;
                        const isValidSlug = productsData[item.slug] !== undefined;
                        return isValidQuantity && isValidSlug;
                    });

                    if (isDuplicate) {
                        // console.log('Producto ya en el carrito:', newCartItem);
                        // Limpia el carrito directamente
                        setCartItemsData([]);
                        localStorage.setItem('cartItems', JSON.stringify([]));
                    } else {
                        // Actualiza el estado solo con los elementos válidos
                        setCartItemsData(validCartItems);

                        // Actualiza el localStorage solo con los elementos válidos
                        localStorage.setItem('cartItems', JSON.stringify(validCartItems));
                    }
                }
            } catch (error) {
                // Maneja el error de análisis JSON aquí si es necesario
                // En caso de error, establece el carrito en un array vacío
                setCartItemsData([]);
                localStorage.setItem('cartItems', JSON.stringify([]));
            }
        }
    };
    // Efecto para cargar el estado del carrito desde el localStorage al montar el componente
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            try {
                const parsedCartItems = JSON.parse(storedCartItems);

                // Filtra y valida los elementos del carrito
                const validCartItems = parsedCartItems.filter((item: CartItemInterface) => {
                    const isValidQuantity = typeof item.quantity === 'number' && item.quantity >= 1;
                    const isValidSlug = productsData[item.slug] !== undefined;
                    return isValidQuantity && isValidSlug;
                });

                // Actualiza el estado solo con los elementos válidos
                setCartItemsData(validCartItems);
            } catch (error) {
                // Maneja el error de análisis JSON aquí si es necesario
                // En caso de error, establece el carrito en un array vacío
                setCartItemsData([]);
                localStorage.setItem('cartItems', JSON.stringify([]));
            }
        } else {
            // Si no hay elementos en el localStorage, almacenar un array vacío
            localStorage.setItem('cartItems', JSON.stringify([]));
        }

        // Agrega el evento para escuchar cambios en el localStorage
        window.addEventListener('storage', handleStorageChange);

        // Limpia el evento al desmontar el componente
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

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
            // Actualiza el localStorage
            updateCartItemsData(updatedCartItems);
        } else {
            const newCartItems = [...cartItemsData, { ...newCartItem, quantity: Math.max(newCartItem.quantity, 1) }];
            setCartItemsData(newCartItems);
            // Actualiza el localStorage con la nueva lista de artículos
            updateCartItemsData(newCartItems);
        }
    };

    // Función para manejar la eliminación de un elemento del carrito
    const handleRemoveCartItem = (slug: string) => {
        const updatedCartItems = cartItemsData.filter(item => item.slug !== slug);
        updateCartItemsData(updatedCartItems);
    };

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