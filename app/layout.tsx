import type { Metadata } from 'next'
import './globals.css'
import { roboto } from '@/utils/fonts'
import { ShoppingCartProvider } from '@/context/ShoppingCartContextProvider'

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
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ShoppingCartProvider>
          <main id="top">
            {children}
          </main>
        </ShoppingCartProvider>
      </body>
    </html>
  )
}
