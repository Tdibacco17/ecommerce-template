import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'
import { roboto } from '@/utils/fonts'

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
      <Head>
        <meta charSet="utf-8" key="charset" />
        <meta name="copyright" content="© Tomás Di Bacco - 2024" />
      </Head>
      <body className={roboto.className}>
        <main id="top">
          {children}
        </main>
      </body>
    </html>
  )
}
