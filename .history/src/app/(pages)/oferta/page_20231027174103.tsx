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
    <section className="w-full pt-32 -top-20 relative bg-blue-400 bg-gradient-to-t from-blue-400 to-blue-600 flex place-items-center shadow-lg">
      <div className="max-w-6xl w-full relative mx-auto py-16 overflow-x-hidden">
        <div className="flex relative w-full h-96 transition-all duration-300" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
          {Localization[language].servicesPage.slider.map((x, key) => {
            return <OfferPanel slide={x} key={key} index={key} activeIndex={activeIndex}/>;
          })}
        </div>
        <div className='flex justify-center relative gap-2 pt-16 bottom-0 transition-all'>
            {Localization[language].servicesPage.slider.map((slide, index) => {
                return <div key={index} onClick={() => GoToSlide(index)}
                    className={`${index === activeIndex ? "bg-white scale-75" : ""} cursor-pointer w-5 h-5 border-solid border-2 border-white/80 
                    rounded-full hover:scale-110`}/>
            })}
        </div>
      </div>
    </section>
    <section className="w-full h-20 -top-20 relative">
      <div className="max-w-6xl w-full relative mx-auto py-16">
        <h1 className="md:text-3xl text-2xl font-bold text-blue-400 md:p-4">Rachunkowość</h1>
      </div>
    </section>
    </>
  )
}

function OfferPanel({slide, index, activeIndex}:{slide: ServiceSlide, index: number, activeIndex: number}){
  return(
    <div className={`${activeIndex == index ? "opacity-100" : "opacity-0"} flex absolute h-full w-full place-items-center gap-16 transition-all ease-in-out duration-300`} style={{left: `${index * 100}%`}}>
      <div className="h-96 rounded-lg bg-white relative aspect-square shadow-lg overflow-clip">
        <Image loading="lazy" layout="fill" objectFit="cover" src={img1} alt="Album thumbnail" className="absolute w-full h-full"/>
      </div>
      <div className="flex flex-col text-white gap-4">
        <h1 className="text-4xl font-bold">{slide.title}</h1>
        <ul className="text-xl flex flex-col gap-2 font-semibold">
          {slide.bullets.map((x, key) => <li className="flex place-items-center" key={key}><BsArrowRightShort className="h-8 w-8"/> {x}</li>)}
        </ul>
      </div>
    </div>
  )
}