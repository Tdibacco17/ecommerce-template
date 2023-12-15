import { Roboto } from 'next/font/google'

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700', '900'],
    style: 'normal',
    preload: true,
    variable: '--logo-font-Roboto',
    display: 'swap'
})
