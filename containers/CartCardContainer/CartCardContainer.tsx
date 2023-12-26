import CartCardComponent from "@/components/CartMenuComponent/CartCardComponent/CartCardComponent";
import { CartItemInterface } from "@/types/cartTypes";
import { useState } from "react";

export default function CartCardContainer({
    cartItem,
    isFirstCard,
    isFinalCard
}: {
    cartItem: CartItemInterface,
    isFirstCard: boolean,
    isFinalCard: boolean
}) {
    //armar logica.. de momento no hace nada
    const [itemFav, setItemFav] = useState(false)

    const handleItemFav = () => {
        setItemFav(!itemFav)
    }

    return <CartCardComponent
        cartItem={cartItem}
        isFirstCard={isFirstCard}
        isFinalCard={isFinalCard}
        handleItemFav={handleItemFav}
        itemFav={itemFav}
    />
}