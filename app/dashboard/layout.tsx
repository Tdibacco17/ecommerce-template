import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import AuthProvider from "@/context/AuthProvider";

export default function CartLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <>
            <NavbarComponent pathSlug="dashboard" />
            <AuthProvider>
                {children}
            </AuthProvider>
        </>
    )
}