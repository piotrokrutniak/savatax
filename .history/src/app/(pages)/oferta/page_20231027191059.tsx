"use client"
import Image from 'next/image'
import SplashArt from '../../../../public/media/8.jpg'
import Localization from "@/app/localization.json"
import { ServiceSlide } from '@/app/types'
import { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import img1 from '../../../../public/media/11.jpg'

export default function Home(pageData: {params: {countryCode: keyof typeof Localization}, searchParams: any}) {
  const language = ["en", "pl"].includes(pageData.params.countryCode) ? pageData.params.countryCode : "pl"
  const [activeIndex, setActiveIndex] = useState(0)

  function GoToSlide(value: number){
    if(value != activeIndex){
      setActiveIndex(value)
    }
  }

  return (
    <>
    <section className="w-full pt-16 lg:pt-32 -top-20 relative bg-blue-400 bg-gradient-to-t from-blue-400 to-blue-600 flex place-items-center shadow-lg">
      <div className="max-w-6xl w-full relative mx-auto pt-4 md:py-16 overflow-x-hidden">
        <div className="flex relative w-full h-[650px] lg:h-96 transition-all duration-300" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
          {Localization[language].servicesPage.slider.map((x, key) => {
            return <OfferPanel slide={x} key={key} index={key} activeIndex={activeIndex}/>;
          })}
        </div>
        <div className='flex justify-center h-fit relative gap-2 py-6 md:py-12 bottom-0 transition-all'>
            {Localization[language].servicesPage.slider.map((slide, index) => {
                return <div key={index} onClick={() => GoToSlide(index)}
                    className={`${index === activeIndex ? "bg-white scale-75" : ""} cursor-pointer w-5 h-5 border-solid border-2 border-white/80 
                    rounded-full hover:scale-110`}/>
            })}
        </div>
      </div>
    </section>
    <section className="w-full p-8 -top-20 relative">
      <div className="max-w-6xl w-full relative mx-auto py-16">
        <h1 className="md:text-3xl text-2xl font-bold text-blue-400 md:p-4">Rachunkowość</h1>
        <ul className="flex flex-col gap-8 mt-4">
          <li className="bg-blue-50/50 p-6 rounded-lg outline outline-1 outline-slate-400/20  shadow-md">
            <h2 className="md:text-xl text-lg font-semibold md:py-2">Prowadzenie ksiąg rachunkowych</h2>
            <p className="md:leading-8 md:text-lg font-normal ">Prowadzenie ksiąg rachunkowych to jedna z podstawowych usług oferowanych przez biura rachunkowe. W ramach tej usługi biuro rachunkowe Savatax zajmuje się prowadzeniem pełnej księgowości (księgi handlowe), prowadzeniem księgi przychodów i rozchodów (KPiR) oraz ewidencją przychodów ryczałtowych (EPR). Biuro rachunkowe Savatax zajmuje się również rozliczaniem podatku dochodowego od osób prawnych (CIT), podatku dochodowego od osób fizycznych (PIT), ryczałtu od przychodów ewidencjonowanych oraz kartą podatkową.</p>
          </li>
          <li>
            <h2 className="md:text-xl text-lg font-semibold md:py-2">Prowadzenie księgi przychodów i rozchodów</h2>
            <p className="md:leading-8 md:text-lg font-normal ">Prowadzenie księgi przychodów i rozchodów to kolejna usługa oferowana przez biuro rachunkowe Savatax. Księga ta jest prowadzona przez przedsiębiorców, którzy nie przekraczają określonych limitów przychodu. Biuro rachunkowe Savatax zajmuje się prowadzeniem ewidencji przychodów i rozliczenia podatków oraz sporządzaniem deklaracji podatkowych.</p>
          </li>
          <li>
            <h2 className="md:text-xl text-lg font-semibold md:py-2">Prowadzenie ewidencji przychodów i rozliczenia podatków</h2>
            <p className="md:leading-8 md:text-lg font-normal ">W ramach tej usługi biuro rachunkowe Savatax zajmuje się prowadzeniem ewidencji przychodów i rozliczenia podatków oraz sporządzaniem deklaracji podatkowych. Ewidencja przychodów to dokumentacja, która pozwala na śledzenie przychodów przedsiębiorstwa. Biuro rachunkowe Savatax zajmuje się prowadzeniem ewidencji przychodów oraz rozliczeniem podatkowym. W ramach tej usługi biuro rachunkowe Savatax zajmuje się również sporządzaniem deklaracji podatkowych. Dzięki usłudze prowadzenia ewidencji przychodów i rozliczenia podatków, przedsiębiorcy mogą mieć pewność, że ich dokumentacja jest prowadzona w sposób rzetelny i zgodny z obowiązującymi przepisami prawa.</p>
          </li>
          <li>
            <h2 className="md:text-xl text-lg font-semibold md:py-2">Sporządzanie i konsolidacja sprawozdań finansowych</h2>
            <p className="md:leading-8 md:text-lg font-normal ">Sporządzanie i konsolidacja sprawozdań finansowych również jest usługą oferowaną przez biuro rachunkowe Savatax. Sprawozdania finansowe są dokumentami, które przedstawiają sytuację finansową przedsiębiorstwa w danym okresie. Biuro rachunkowe Savatax zajmuje się sporządzaniem sprawozdań finansowych dla swoich klientów oraz ich konsolidacją.</p>
          </li>
        </ul>
      </div>
    </section>
    </>
  )
}

function OfferPanel({slide, index, activeIndex}:{slide: ServiceSlide, index: number, activeIndex: number}){
  return(
    <div className={`${activeIndex == index ? "opacity-100" : "opacity-0"} flex flex-col lg:flex-row absolute p-4 md:p-8 h-full w-full sm:place-items-center gap-8 lg:gap-16 transition-all ease-in-out duration-300`} style={{left: `${index * 100}%`}}>
      <div className="h-96 w-full sm:w-96 rounded-lg bg-white relative aspect-square shadow-lg overflow-clip">
        <Image loading="lazy" layout="fill" objectFit="cover" src={img1} alt="Album thumbnail" className="relative w-full h-full"/>
      </div>
      <div className="flex flex-col text-white gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">{slide.title}</h1>
        <ul className="text-lg sm:text-xl flex flex-col gap-2 ">
          {slide.bullets.map((x, key) => <li className="flex place-items-start" key={key}><BsArrowRightShort className="h-8 w-8 pb-1 shrink-0"/> {x}</li>)}
        </ul>
      </div>
    </div>
  )
}

function DescPanel({title, text}:{title: string, text: string}){
  return(
    <li className="bg-blue-50/50 p-6 rounded-lg outline outline-1 outline-slate-400/20  shadow-md">
      <h2 className="md:text-xl text-lg font-semibold md:py-2">Prowadzenie ksiąg rachunkowych</h2>
      <p className="md:leading-8 md:text-lg font-normal ">Prowadzenie ksiąg rachunkowych to jedna z podstawowych usług oferowanych przez biura rachunkowe. W ramach tej usługi biuro rachunkowe Savatax zajmuje się prowadzeniem pełnej księgowości (księgi handlowe), prowadzeniem księgi przychodów i rozchodów (KPiR) oraz ewidencją przychodów ryczałtowych (EPR). Biuro rachunkowe Savatax zajmuje się również rozliczaniem podatku dochodowego od osób prawnych (CIT), podatku dochodowego od osób fizycznych (PIT), ryczałtu od przychodów ewidencjonowanych oraz kartą podatkową.</p>
    </li>
  )
}