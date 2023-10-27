import Image from 'next/image'
import SplashArt from '../../../../public/media/8.jpg'
import Button from '../../components/generic/button'
import { FaBalanceScale, FaBook,  FaChartPie, FaEnvelope, FaFileInvoiceDollar, FaPiggyBank } from 'react-icons/fa'
import Localization from "@/app/localization.json"
import { EmailForm } from '../../components/generic/emailForm'
import Link from 'next/link'

export default function Home(pageData: {params: {countryCode: keyof typeof Localization}, searchParams: any}) {
  const language = ["en", "pl"].includes(pageData.params.countryCode) ? pageData.params.countryCode : "pl"

  return (
    <>
    <section className="w-full py-32 top-0 absolute bg-blue-400  flex place-items-center">
      <div className="max-w-6xl w-full mx-auto pt-16">
        <div className="flex">
          <OfferPanel/>
        </div>
      </div>
    </section>
    </>
  )
}

function OfferPanel(){
  return(
    <div className="flex relative h-full w-full place-items-center gap-10">
      <div className="h-80 rounded-lg bg-white aspect-square"></div>
      <div className="flex flex-col text-white">
        <h1 className="text-4xl font-bold">Rachunkowość</h1>
        <h2 className="text-3xl font-bold">Rachunkowość</h2>
        <p className="text-2xl font-semibold">Rachunkowość</p>
      </div>
    </div>
  )
}