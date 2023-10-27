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
    <section className="w-full h-screen-1/2 top-0 fixed bg-blue-400 pt-16">
      <div className="max-w-6xl">
        <div className="flex">

        </div>
      </div>
    </section>
  )
}

function OfferPanel(){
  return(
    <div className="flex">
      <div className="w-1/2 bg-white aspect-square"></div>
    </div>
  )
}