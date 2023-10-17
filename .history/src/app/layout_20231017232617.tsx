import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar/navbar'
import Footbar from './components/footbar/footbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recipefy',
  description: 'Website with the tastiest recipes!',
}

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.className} `}>
        <main className="min-h-screen min-w-mobile flex flex-col pb-4 overflow-x-clip">
        <NavBar/>
        {children}
        </main>
        <Footbar/>
      </body>
    </html>
  )
}
