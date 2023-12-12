'use client'
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { useCart } from "@/hooks/useCart";
import useOutsideClick from "@/hooks/useOutSideClick";
import { useWindowSize } from "@/hooks/useWindowSize";
import { NavigationActiveType } from "@/types";
import { useEffect, useState } from "react"

export default function NavbarContainer({
    pathSlug
}: {
    pathSlug: NavigationActiveType
}) {
    const { cartData, calculateTotalQuantity } = useCart();
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showCart, setShowCart] = useState<boolean>(false);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const handleShowMenu = () => {
        setShowCart(false)
        setShowMenu(!showMenu)
    }
    const handleShowCart = () => {
        setShowMenu(false)
        setShowCart(!showCart)
    }
    const menuRef = useOutsideClick(() => {
        setShowMenu(false)
    });
    const cartRef = useOutsideClick(() => {
        setShowCart(false)
    });

    const { width } = useWindowSize();
    useEffect(() => {
        if (width > 768) {
            setShowMenu(false)
        }
    }, [width])

    // Calcula la cantidad total cuando cambia el carrito
    useEffect(() => {
        const newTotalQuantity = calculateTotalQuantity(cartData);
        setTotalQuantity(newTotalQuantity);
    }, [cartData]);

    return <NavbarComponent
        showMenu={showMenu}
        showCart={showCart}
        handleShowMenu={handleShowMenu}
        handleShowCart={handleShowCart}
        menuRef={menuRef}
        cartRef={cartRef}
        pathSlug={pathSlug}
        totalQuantity={totalQuantity}
    />
}