"use client";
import Localization from "@/app/localization.json"

import { useEffect, useState } from "react"
import Button from "../generic/button";

export function LandingPanel(countryCode: keyof typeof Localization){
    const language = "pl"
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    return(
      <div className={`${mounted ? "opacity-100" : " opacity-0"} max-w-6xl md:px-16 mx-auto w-full lg:pt-12 rounded-xl flex flex-col gap-4`}>
        <h1 className="font-bold md:w-1/2 xl:w-2/3 text-xl sm:text-2xl lg:text-4xl max-w-6xl">{Localization[language].lblSliderHeader}</h1>
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
    )
  }