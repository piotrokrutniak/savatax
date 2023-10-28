"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Localization from "@/app/localization.json"

export default function ServiceTabs({language = "en"}:{language?: keyof typeof Localization}){
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    return(
        <div className="max-w-6xl w-full relative mx-auto">
            <div className="flex max-sm:flex-col gap-2 md:gap-4">
            {Localization[language].servicesPage.services.map((x, key) => <ServiceTab activeIndex={activeTabIndex} index={key} label={x.header} key={key} setActiveIndex={setActiveTabIndex}/>)}
            </div>
            <div className='bg-blue-400 w-full h-4 hidden sm:block rounded-b-lg rounded-r-lg'></div>
            <ul className="flex flex-col gap-8 mt-4 min-h-screen-2/3">
            {Localization[language].servicesPage.services[activeTabIndex].panels.map((x, key) => <DescPanel title={x.title} text={x.text} key={key}/>)}
            </ul>
        </div>
    )
}

function DescPanel({title, text}:{title: string, text: string}){
    return(
      <li className="bg-blue-50/50 p-6 rounded-lg outline outline-1 outline-slate-400/20 shadow-md">
        <h2 className="md:text-xl text-lg font-semibold md:py-2">{title}</h2>
        <p className="md:leading-8 md:text-lg font-normal ">{text}</p>
      </li>
    )
  }
  
function ServiceTab({label, index, activeIndex, setActiveIndex}:{label: string, index: number, activeIndex: number, setActiveIndex: Dispatch<SetStateAction<number>>}){
    return(
      <button onClick={() => setActiveIndex(index)} className={`${index == activeIndex ? "bg-blue-400  text-white" : "bg-blue-100/40 text-blue-400/80 hover:text-blue-400 max-sm:outline outline-1 outline-slate-400/20"} 
        lg:text-2xl text-lg sm:text-xl font-bold px-4 py-3 md:p-4 max-sm:rounded-b-lg rounded-t-lg transition-all max-sm:shadow-lg`}>
          {label}
      </button>
    )
  }