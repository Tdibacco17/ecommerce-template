import { CartContext } from "@/context/CartContextProvider";
import { CartDataContextInterface } from "@/types/cartTypes";
import { useContext } from "react";

// Hook personalizado para acceder al contexto del carrito
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser utilizado dentro de un CartProvider');
    }
    return context as CartDataContextInterface;
};