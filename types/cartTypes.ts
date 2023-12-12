import { ProductInterface } from "./productsTypes";

//cart context
export interface CartDataContextInterface {
    cartData: CartItemInterface[];
    handleCartItemsChange: Function;
    handleRemoveCartItem: Function,
    handleClearCart: Function,
    calculateTotalQuantity: Function
}
//cart item
export interface CartItemInterface {
    productData: ProductInterface,
    quantity: number
}

//cart reducer
export type ActionType =
    | { type: 'ADD_TO_CART'; payload: CartItemInterface }
    | { type: 'REMOVE_FROM_CART'; payload: { productData: ProductInterface } }
    | { type: 'CLEAR_CART' }
    | { type: 'SET_CART'; payload: CartItemInterface[] };