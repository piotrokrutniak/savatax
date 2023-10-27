import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar/navbar'
import Footbar from './components/footbar/footbar'
import Button from './components/generic/button'

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

function CookiesPopUp(){
  return(
    <div className="w-96 bg-blue-400 rounded-lg shadow-md fixed bottom-8 right-8 p-6 text-white">
      <p>This website uses cookies to ensure you get the best experience experience.</p>
      <Button>Got it</Button>
    </div>
  )
}