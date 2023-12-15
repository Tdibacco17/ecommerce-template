'use client'
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { useCart } from "@/hooks/useCart";
import useOutsideClick from "@/hooks/useOutSideClick";
import { useWindowSize } from "@/hooks/useWindowSize";
import { NavigationActiveType } from "@/types";
import { useCallback, useEffect, useState } from "react"

export default function NavbarContainer({
    pathSlug
}: {
    pathSlug: NavigationActiveType
}) {
    const { calculateTotalQuantity, cartData } = useCart();
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showCart, setShowCart] = useState<boolean>(false);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const { width } = useWindowSize();

    const handleShowMenu = useCallback(() => {
        console.log("Toggling showMenu");
        setShowCart(false)
        setShowMenu((prevShowMenu) => !prevShowMenu);
    }, [showMenu])

    const handleShowCart = useCallback(() => {
        console.log("Toggling showCart");
        setShowMenu(false)
        setShowCart((prevShowCart) => !prevShowCart);
    }, [showCart])

    const menuRef = useOutsideClick(() => {
        setShowMenu(false)
    });
    const cartRef = useOutsideClick(() => {
        setShowCart(false)
    });

    useEffect(() => {
        if (width > 768) {
            setShowMenu(false)
        }
    }, [width])

    useEffect(() => {
        const newTotalQuantity = calculateTotalQuantity(cartData);
        setTotalQuantity(newTotalQuantity);
    }, [cartData]);

    useEffect(() => {
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu || showCart);
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showMenu, showCart]);


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