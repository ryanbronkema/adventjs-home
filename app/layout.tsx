import './globals.css'
import { inter } from './fonts'

export const metadata = {
  title: 'React Portfolio | Ryan Bronkema',
  description: 'ReactJS content by Developer Ryan Bronkema built using the NextJS framework with Typescript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
