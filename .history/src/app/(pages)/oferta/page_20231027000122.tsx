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
          <OfferPanel bullets={[
            "Prowadzenie ksiąg rachunkowych", 
            "Prowadzenie księgi przychodów i rozchodów", 
            "Prowadzenie ewidencji przychodów i rozliczenia podatków", 
            "Sporządzanie i konsolidacja sprawozdań finansowych"]}/>
        </div>
      </div>
    </section>
    </>
  )
}

function OfferPanel({bullets}:{bullets: string[]}){
  return(
    <div className="flex relative h-full w-full place-items-center gap-10">
      <div className="h-80 rounded-lg bg-white aspect-square"></div>
      <div className="flex flex-col text-white gap-4">
        <h1 className="text-4xl font-bold">Rachunkowość</h1>
        <ul className="text-xl font-semibold opacity-90 pl-10">
          {bullets.map((x, key) => <li className="list-disc" key={key}>{x}</li>)}
        </ul>
      </div>
    </div>
  )
}