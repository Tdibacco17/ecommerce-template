import { Roboto } from 'next/font/google'

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700', '900'],
    style: 'normal',
    preload: true,
    variable: '--font-Roboto',
    display: 'swap'
})
