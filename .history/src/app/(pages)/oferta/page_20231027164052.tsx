"use client"
import Image from 'next/image'
import SplashArt from '../../../../public/media/8.jpg'
import Button from '../../components/generic/button'
import { FaArrowRight, FaArrowsAltH, FaBalanceScale, FaBook,  FaChartPie, FaEnvelope, FaFileInvoiceDollar, FaPeopleArrows, FaPiggyBank } from 'react-icons/fa'
import Localization from "@/app/localization.json"
import { EmailForm } from '../../components/generic/emailForm'
import Link from 'next/link'
import { ServiceSlide } from '@/app/types'
import { useState } from 'react'

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
    <section className="w-full pt-32 top-0 absolute bg-blue-400 bg-gradient-to-t from-blue-400 to-blue-600 flex place-items-center shadow-lg">
      <div className="max-w-6xl w-full relative mx-auto py-16 overflow-x-hidden">
        <div className="flex relative w-full h-80 transition-all duration-300" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
          {Localization[language].servicesPage.slider.map((x, key) => {
            return <OfferPanel slide={x} key={key} index={key} activeIndex={activeIndex}/>;
          })}
        </div>
        <div className='flex justify-center relative gap-2 mt-12 bottom-0 transition-all'>
            {Localization[language].servicesPage.slider.map((slide, index) => {
                return <div key={index} onClick={() => GoToSlide(index)}
                    className={`${index === activeIndex ? "bg-white scale-75" : ""} cursor-pointer w-5 h-5 border-solid border-2 border-white/80 
                    rounded-full hover:scale-110`}/>
            })}
        </div>
      </div>
    </section>
    </>
  )
}

function OfferPanel({slide, index, activeIndex}:{slide: ServiceSlide, index: number, activeIndex: number}){
  return(
    <div className={`${activeIndex == index ? "opacity-100" : "opacity-0"} flex absolute h-full w-full place-items-center gap-10 transition-all ease-in-out duration-300`} style={{left: `${index * 100}%`}}>
      <div className="h-80 rounded-lg bg-white aspect-square shadow-lg"></div>
      <div className="flex flex-col text-white gap-4">
        <h1 className="text-4xl font-bold">{slide.title}</h1>
        <ul className="text-xl flex flex-col gap-2 font-semibold pl-5">
          {slide.bullets.map((x, key) => <li className="list-disc" key={key}><FaPeopleArrows/> {x}</li>)}
        </ul>
      </div>
    </div>
  )
}