import { Inter, Montserrat, Poppins } from 'next/font/google'
import Bebas from 'next/font/local'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '700'
})

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
})

export const bebas = Bebas({
  src: '../public/fonts/bebasneue-book-webfont.woff2',
  display: 'swap',
})
