//cart context
export interface ShoppingCartDataContextInterface {
    handleCartItemsChange: Function;
    cartItemsData: CartItemInterface[];
    handleRemoveCartItem: Function
}

//cart item
export interface CartItemInterface {
    slug: string,
    quantity: number
}