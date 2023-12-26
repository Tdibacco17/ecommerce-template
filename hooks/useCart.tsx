import { CartContext } from "@/context/CartContextProvider";
import { CartDataContextInterface, CartItemInterface } from "@/types/cartTypes";
import { useContext } from "react";

// Hook personalizado para acceder al contexto del carrito
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser utilizado dentro de un CartProvider');
    }

    const calculateTotalQuantity = (cartData: CartItemInterface[]) => {
        return cartData.reduce((total, item) => total + item.quantity, 0);
    };

    const calculateTotalPrice = (cartData: CartItemInterface[]) => {
        return cartData.reduce(
            (total, item) => total + item.quantity * item.productData.price,
            0
        );
    };

    return {
        ...context as CartDataContextInterface,
        calculateTotalQuantity,
        calculateTotalPrice,
    };
};