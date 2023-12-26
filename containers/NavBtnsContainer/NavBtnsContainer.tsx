'use client'
import NavBtnsComponent from "@/components/NavbarComponent/NavBtnsComponent/NavBtnsComponent";
import { useCart } from "@/hooks/useCart";
import useOutsideClick from "@/hooks/useOutSideClick";
import { useWindowSize } from "@/hooks/useWindowSize";
import { NavigationActiveType } from "@/types";
import { useCallback, useEffect, useState } from "react"

export default function NavBtnsContainer({
    pathSlug,
    session
}: {
    pathSlug: NavigationActiveType,
    session: any
}) {
    const { calculateTotalQuantity, cartData = [], calculateTotalPrice } = useCart();
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showCart, setShowCart] = useState<boolean>(false);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<string>("0.00");
    const { width } = useWindowSize();

    const handleShowMenu = useCallback(() => {
        setShowCart(false)
        setShowMenu((prevShowMenu) => !prevShowMenu);
    }, [showMenu])

    const handleShowCart = useCallback(() => {
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

        const newTotalPrice = calculateTotalPrice(cartData).toFixed(2);
        setTotalPrice(newTotalPrice);
    }, [cartData, calculateTotalPrice]);

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

    return <NavBtnsComponent
        showMenu={showMenu}
        showCart={showCart}
        handleShowMenu={handleShowMenu}
        handleShowCart={handleShowCart}
        menuRef={menuRef}
        cartRef={cartRef}
        pathSlug={pathSlug}
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
        session={session}
    />
}