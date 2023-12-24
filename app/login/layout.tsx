import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { CartProvider } from "@/context/CartContextProvider";

export default function CartLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <>
            <CartProvider>
                <NavbarComponent pathSlug="" />
            </CartProvider>
            {children}
        </>
    )
}