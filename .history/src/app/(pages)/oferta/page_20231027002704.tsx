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
    <section className="w-full py-32 top-0 absolute bg-blue-400 bg-gradient-to-t from-blue-400 to-blue-600 flex place-items-center shadow-lg">
      <div className="max-w-6xl w-full mx-auto py-16 overflow-hidden">
        <div className="flex relative w-full h-80">
          
          {Localization[language].servicesPage.slider.map((x, key) => {
            return <OfferPanel bullets={x} key={key} index={key}/>;
          })}

          {/* <OfferPanel bullets={[
            "Prowadzenie ksiąg rachunkowych", 
            "Prowadzenie księgi przychodów i rozchodów", 
            "Prowadzenie ewidencji przychodów i rozliczenia podatków", 
            "Sporządzanie i konsolidacja sprawozdań finansowych"]}/>
          <OfferPanel bullets={[
            "Prowadzenie ksiąg rachunkowych", 
            "Prowadzenie księgi przychodów i rozchodów", 
            "Prowadzenie ewidencji przychodów i rozliczenia podatków", 
            "Sporządzanie i konsolidacja sprawozdań finansowych"]}/> */}
        </div>
      </div>
    </section>
    </>
  )
}

function OfferPanel({bullets, index}:{bullets: string[], index: number}){
  return(
    <div className="flex absolute h-full w-full place-items-center gap-10" style={{left: `${index * 100}%`}}>
      <div className="h-80 rounded-lg bg-white aspect-square"></div>
      <div className="flex flex-col text-white gap-4">
        <h1 className="text-4xl font-bold">Rachunkowość</h1>
        <ul className="text-xl flex flex-col gap-2 font-semibold pl-5">
          {bullets.map((x, key) => <li className="list-disc" key={key}>{x}</li>)}
        </ul>
      </div>
    </div>
  )
}