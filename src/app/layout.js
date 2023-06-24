import Navber from '@/components/navber/Navber'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navber />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  )
}
