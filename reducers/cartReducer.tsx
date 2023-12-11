'use client'
import { ActionType, CartItemInterface } from "@/types/cartTypes";
import { Reducer } from "react";

export const initialState: CartItemInterface[] = []

const updateLocalStorage = (newState: CartItemInterface[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('cartItems', JSON.stringify(newState));
    }
};

export const reducer: Reducer<CartItemInterface[], ActionType> = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const productInCartIndex = state.findIndex(
                (item) => item.productData.slug === action.payload.productData.slug
            );

            if (productInCartIndex >= 0) {
                const newState = structuredClone(state);
                const existingItem = newState[productInCartIndex];
                const updatedQuantity = Math.max(existingItem.quantity + action.payload.quantity, 1);
                existingItem.quantity = updatedQuantity;
                updateLocalStorage(newState);
                return newState;
            }

            const newState = [
                ...state,
                {
                    ...action.payload,
                    quantity: Math.max(action.payload.quantity, 1),
                },
            ];
            updateLocalStorage(newState);
            return newState;
        }
        case 'REMOVE_FROM_CART': {
            const newState = state.filter(
                (item) => item.productData.slug !== action.payload.productData.slug
            );
            updateLocalStorage(newState);
            return newState;
        }
        case 'CLEAR_CART': {
            const newState = initialState;
            updateLocalStorage(newState);
            return newState;
        }
        case 'SET_CART': {
            const setState = action.payload || initialState;
            updateLocalStorage(setState);
            return setState;
        }

        default:
            return state;
    }
}