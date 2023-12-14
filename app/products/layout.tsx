import { CartProvider } from "@/context/CartContextProvider";

export default function CartLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    )
}