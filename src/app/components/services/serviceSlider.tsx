"use client";
import Image, { StaticImageData } from 'next/image'
import { ServiceSlide } from '@/app/types'
import { BsArrowRightShort } from 'react-icons/bs'
import img1 from '../../../../public/media/14.jpg'
import img2 from '../../../../public/media/12.jpg'
import img3 from '../../../../public/media/13.jpg'
import Localization from "@/app/localization.json"
import { useState } from 'react'

export default function ServicesSlider({language = "en"}:{language?: keyof typeof Localization}){
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const images = [img2, img1, img3];
    const timer = async (ms: number) => new Promise(res => setTimeout(res, ms));
  
    async function GoToSlide(value: number){
      if(value != activeSlideIndex){
        if(value < activeSlideIndex){
          for(let i = activeSlideIndex - 1; i >= value; i--){
            setActiveSlideIndex(i);
            await timer(200);
          }
        }
        else{
          for(let i = activeSlideIndex + 1; i <= value; i++){
            setActiveSlideIndex(i);
            await timer(200);
          }
        }
      }
    }
  
    return(
      <div className="max-w-6xl w-full relative mx-auto pt-4 md:pt-16 overflow -x-hidden">
        <div className="flex relative w-full h-[650px] lg:h-96 transition-all duration-300" style={{transform: `translateX(-${activeSlideIndex * 100}%)`}}>
          {Localization[language].servicesPage.slider.map((x, key) => {
            return <OfferPanel image={images[key] ?? img1} slide={x} key={key} index={key} activeIndex={activeSlideIndex}/>;
          })}
        </div>
        <div className='flex justify-center h-fit relative gap-2 py-6 md:py-12 bottom-0 transition-all'>
            {Localization[language].servicesPage.slider.map((slide, index) => {
                return <div key={index} onClick={() => GoToSlide(index)}
                    className={`${index === activeSlideIndex ? "bg-white scale-75" : ""} cursor-pointer w-5 h-5 border-solid border-2 border-white/80 
                    rounded-full hover:scale-110`}/>
            })}
        </div>
      </div>
    )
  }
  
function OfferPanel({slide, index, activeIndex, image}:{slide: ServiceSlide, index: number, activeIndex: number, image: StaticImageData}){
    return(
        <div className={`${activeIndex == index ? "opacity-100" : "opacity-0"} flex flex-col lg:flex-row absolute p-4 md:p-8 h-full w-full sm:place-items-center gap-8 lg:gap-16 transition-all ease-in-out duration-300`} style={{left: `${index * 100}%`}}>
        <div className="h-80 sm:h-96 w-full sm:w-96 rounded-lg bg-white shrink-0 relative 2xs:aspect-square shadow-lg overflow-clip">
            <Image loading="eager" layout="fill" objectFit="cover" src={image} alt={slide.title} className="relative w-full h-full"/>
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