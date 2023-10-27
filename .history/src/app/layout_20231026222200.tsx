import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar/navbar'
import Footbar from './components/footbar/footbar'
import Button from './components/generic/button'
import { CookiesPopUp } from './components/generic/cookiesPopUp'
import { useContext } from 'react'
import { Cookies } from 'react-cookie'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Savatax',
  description: 'Rachunkowość bez stresu!',
}

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.className} `}>
        <main className="min-h-screen min-w-mobile flex flex-col pb-4 overflow-x-clip">
        <NavBar/>
        {children}
        </main>
        <CookiesPopUp/>
        <Footbar/>
      </body>
    </html>
  )
}
