'use client'
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { useState } from "react"

export default function NavbarContainer() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showCart, setShowCart] = useState<boolean>(false);

    const handleShowMenu = () => {
        setShowCart(false)
        setShowMenu(!showMenu)
    }
    const handleShowCart = () => {
        setShowMenu(false)
        setShowCart(!showCart)
    }
    return <NavbarComponent
        showMenu={showMenu}
        showCart={showCart}
        handleShowMenu={handleShowMenu}
        handleShowCart={handleShowCart}
    />
}