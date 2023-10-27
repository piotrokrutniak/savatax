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
    <div className="w-96 max-md:w-full bg-blue-500 rounded-lg shadow-md shadow-black/40 fixed bottom-8 md:right-8 p-6 text-white z-10">
      <h1 className="font-semibold text-lg">Our website uses cookies</h1>
      <p>We use cookies to ensure you get the best experience experience. By using our website you consent to your use of cookies. </p>
      <Button className="bg-white text-blue-400 hover:text-blue-500 mt-4 font-semibold">Got it</Button>
    </div>
  )
}