import type { Metadata } from 'next'
import './globals.css'
import { inter } from '@/utils/fonts'
import { ProductsProvider } from "@/context/ProductsContextProvider";

export const metadata: Metadata = {
  title: 'Ecommerce Template',
  description: 'Generated ecommerce template',
  applicationName: 'Ecommerce Template',
  icons: {
    icon: '/favicon.ico'
  },
  authors: {
    name: 'Tomás Di Bacco',
    url: 'https://www.linkedin.com/in/tomas-di-bacco/'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductsProvider>
            <main id="top">
              {children}
            </main>
        </ProductsProvider>
      </body>
    </html>
  )
}