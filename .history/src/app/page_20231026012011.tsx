import Image from 'next/image'
import SplashArt from '../../public/media/8.jpg'
import Button from './components/generic/button'
import { FaBalanceScale, FaBook,  FaChartPie, FaEnvelope, FaFileInvoiceDollar, FaPiggyBank } from 'react-icons/fa'
import Localization from "@/app/localization.json"
import { EmailForm } from './components/generic/emailForm'
import Link from 'next/link'

export default function Home() {
  const language = "pl"
  return (
    <div className="flex flex-col relative -top-20 gap-10 md:gap-32 scroll-smooth">
      <section className="w-full h-screen-3/5 bg-gradient-to-t top-0 from-black to-black/90 relative text-white">
        <div id="slider-section" className="absolute  max-md:px-4 py-8 w-full mx-auto z-10 m-auto bottom-0 shadow-md shadow-black/40 h-full flex place-items-end lg:place-items-center">
            <div className='max-w-6xl md:px-16 mx-auto w-full rounded-xl flex flex-col gap-4'>
              <h1 className="font-bold md:w-1/2 text-xl sm:text-2xl lg:text-4xl max-w-6xl">{Localization[language].lblSliderHeader}</h1>
              <h2 className="opacity-90 lg:w-1/2 sm:text-lg md:text-xl max-w-6xl md:leading-8">
                {Localization[language].lblSliderP1}
                <br/>
                {Localization[language].lblSliderP2}
              </h2>
              <a href={"#contact-section"}>
              <Button className="w-fit md:text-xl p-4 mt-2 shadow-md shadow-black/20 active:opacity-80
                hover:bg-gradient-to-br from-blue-500 via-blue-500 to-blue-400">
                {Localization[language].lblContact}
              </Button>
              </a>
            </div>
        </div>
        <div className="w-full h-screen-1/2 top-0 z-0">
          <Image loading="lazy" layout="fill" objectFit="cover" src={SplashArt} alt="Album thumbnail" className="opacity-40 absolute w-full h-full"/>
        </div>
      </section>
      <section id="summary-section" className='max-w-6xl p-4 sm:p-8 mx-auto w-full justify-center md:px-16 rounded-xl flex flex-col gap-5'>
        <h1 className="md:text-3xl text-2xl font-bold text-blue-400 md:p-4">O nas</h1>
        <p className="md:leading-8 md:text-lg font-normal ">
          Jesteśmy <span className="font-semibold">Savatax</span> - firmą rachunkową z Warszawy, która chce Ci pomóc w prowadzeniu Twojego biznesu. Zajmujemy się rachunkowością małych i średnich firm z różnych branż i wiemy, jak ważne jest dla Ciebie, aby mieć sprawy finansowe pod kontrolą. Dlatego oferujemy Ci pełen zakres usług rachunkowych, takich jak księgowość, rozliczenia podatkowe, kadry i płace, doradztwo finansowe i audyt. 
        </p>
        <p className="md:leading-8 md:text-lg font-normal ">
        Nasz zespół to sami pasjonaci rachunkowości, którzy mają duże doświadczenie i stale się szkolą. Używamy nowoczesnych technologii i systemów informatycznych, które zapewniają bezpieczeństwo i szybkość obsługi. Jesteśmy elastyczni i dostosowujemy się do Twoich potrzeb i oczekiwań.
        </p>

        <h1 className="md:text-3xl text-2xl font-bold text-blue-400 md:p-4 md:mt-8">{Localization[language]['section-1'].header}</h1>
        <p className="md:leading-8 md:text-lg font-normal ">
          {Localization[language]['section-1']['paragraph-1']}
        </p>

        <p className="md:leading-8 md:text-lg opacity-90">
          {Localization[language]['section-1']['paragraph-2']}
        </p>

        <p className="pt-16">
          <span className="md:leading-8 text-xl md:text-2xl font-semibold opacity-90 md:p-4">
          {Localization[language]['section-2']['header']}
          </span>
          <ul className="md:text-lg p-2 md:p-12 my-12 rounded-lg shadow-inner gap-6 grid grid-auto-fit-md bg-sky-100/30">
            <ListPanel> 
              <FaBook className="w-8 h-8 fill-blue-400 shrink-0 mt-1"/> <p className="capitalize-first">{Localization[language]['section-2']['cards']['card-1']}</p>
            </ListPanel>
            <ListPanel> 
              <FaFileInvoiceDollar className="w-8 h-8 fill-blue-400 shrink-0 mt-1"/> <p className="capitalize-first">{Localization[language]['section-2']['cards']['card-2']}</p>
            </ListPanel>
            <ListPanel> 
              <FaPiggyBank className="w-8 h-8 fill-blue-400 shrink-0 mt-1"/> <p className="capitalize-first">{Localization[language]['section-2']['cards']['card-3']}</p>
            </ListPanel>
            <ListPanel> 
              <FaChartPie className="w-8 h-8 fill-blue-400 shrink-0 mt-1"/> <p className="capitalize-first">{Localization[language]['section-2']['cards']['card-4']}</p>
            </ListPanel>
            <ListPanel> 
              <FaBalanceScale className="w-8 h-8 fill-blue-400 shrink-0 mt-1"/> <p className="capitalize-first">{Localization[language]['section-2']['cards']['card-5']}</p>
            </ListPanel>
          </ul>
        </p>

        <p className="md:text-lg" >
          {Localization[language]['section-3']['paragraph-1']}
        </p>
        <p className="md:text-lg" >
          {Localization[language]['section-3']['paragraph-2']}
        </p>

        <p className="md:text-xl font-semibold pt-8" >
          {Localization[language]['section-3']['paragraph-3']}
        </p>        
      </section>
      <section id="contact-section" className='max-w-6xl p-4 sm:p-8 mx-auto w-full justify-center md:px-16 rounded-xl flex flex-col gap-5'>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:place-items-center">
          <h1 className="md:text-3xl text-2xl font-bold text-blue-400 md:p-4"> {Localization[language]['section-contact']['header']}</h1>
          <a href={"mailto:karol.zach@savatax.com"}>
            <h2 className="md:text-xl pt-4 text-lg text active:opacity-80 border-b-2 pb-0 border-black hover:border-blue-400 font-semibold hover:text-blue-400 cursor-pointer transition-all w-fit flex">
              {Localization[language]['section-contact']['headerButton']} <FaEnvelope className="ml-2 mt-1"/> 
            </h2>
          </a>
        </div>
        <EmailForm language={language}/>
      </section>
    </div>
  )
}

function ListPanel({children}:{children: React.ReactNode}){
  return(
    <div className="shadow-md shadow-black/20 rounded-lg p-8 flex justify-between gap-4 bg-white md:leading-8">
      {children}
    </div>
  )
}