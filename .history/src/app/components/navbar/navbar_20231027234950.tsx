"use client";
import { FaBars, FaCoins } from "react-icons/fa";
import { BsChevronDown, BsX } from "react-icons/bs";
import Button from "../generic/button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import localization from "@/app/localization.json";
import { useScrollPosition } from "@/app/utilities/useScrollPosition";
import { Cookies } from "react-cookie";

export default function NavBar(){
    const [showMobile, setShowMobile] = useState(false);
    const languages = [{code: "pl", label: "Polski"}, {code: "en", label: "English"}];
    const cookies = new Cookies();
    const [language, setLanguage] = useState<keyof typeof localization>(cookies.get("preferred-lang") || "en");
    const scrollY = useScrollPosition();
    
    function SetLanguage(value: keyof typeof localization){
        cookies.set("preferred-lang", value, {sameSite: true});
        setLanguage(value);
    }

    return(
        <nav className={`${scrollY > 0 ? "bg-white" : "bg-transparent text-white" } sticky top-0 z-20 transition-all`}>
            <div className="w-full flex">
                <div className="p-2 m-auto w-full flex max-w-7xl justify-between items-center">
                    <Link href="/">
                    <div className="flex gap-1 h-fit select-none cursor-pointer active:opacity-80 active:pb-0 
                            border-opacity-0 transition-all group">
                        <FaCoins className={`${scrollY > 0 ? "fill-blue-400 transition-all" : "fill-white"} h-full w-6 mt-1  group-hover:fill-blue-300 transition-opacity`}/>
                        <h1 className={`${scrollY > 0 ? " bg-blue-400 " : "bg-white"} text-2xl font-bold bg-clip-text text-transparent group-hover:bg-gradient-to-r from-blue-300 to-blue-400 transition-all`}>Savatax</h1>
                    </div>
                    </Link>
                    <div className="flex place-items-center gap-2 md:gap-4">
                    <div className="hidden text-lg gap-4 md:flex">
                        <a href={"/#contact-section"}>
                            <Button className="bg-transparent active:bg-sky-100/20 hover:bg-sky-100/30 active:opacity-50" onClick={undefined}>
                                {localization[language].lblContact}
                            </Button>
                        </a>
                        <Link href={"/oferta"}>
                            <Button className="bg-transparent active:bg-sky-100/20 hover:bg-sky-100/30 active:opacity-50" onClick={undefined}>
                                {localization[language].lblOffer}
                            </Button>
                        </Link>
                    </div>
                    <DropDown languages={languages} language={language} setLanguage={SetLanguage} scrollY={scrollY}/>
                    <div className="md:hidden flex">
                        <FaBars className={`${scrollY > 0 ? "fill-black" : "fill-white"} h-10 w-10  cursor-pointer hover:fill-blue-400 active:opacity-80`} onClick={() => setShowMobile(true)}/>
                    </div>
                    <div className={`${showMobile ? "" : "translate-x-full"} sticky w-screen h-screen bg-black left-0 top-0 md:hidden transition-all z-50 ease-in-out`}>
                    <div id="mobile-header" className="flex flex-row-reverse w-full"> 
                        <BsX className="fill-white w-16 h-16 cursor-pointer hover:blue-vermilion-400" onClick={() => setShowMobile(false)}/>
                    </div>
                    <div id="mobile-body" className="p-8 flex flex-col gap-3 font-semibold">
                        <a href={"/#contact-section"}>
                            <Button className="text-white py-4 justify-center w-full bg-slate-500/40 active:bg-slate-500/30" onClick={undefined}>
                                {localization[language].lblContact}
                            </Button>
                        </a>
                        <Link href={"/oferta"}>
                            <Button className="text-white py-4 justify-center w-full bg-slate-500/40 active:bg-slate-500/30" onClick={undefined}>
                                {localization[language].lblOffer}
                            </Button>
                        </Link>
                        <Link href={"/"}>
                            <Button className="text-white py-4 justify-center w-full" onClick={undefined}>
                                {localization[language].lblHome}
                            </Button>
                        </Link>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function DropDown({languages, language, setLanguage, scrollY}:{
    languages: any[], 
    language: string, 
    setLanguage(value: "pl" | "en"): void, 
    scrollY: number
}){
    
    const [opened, setOpened] = useState<boolean>(false)

    return(
        <div className="relative">

            <div className={`${opened ? "bg-blue-500 hover:bg-gradient-to-br from-blue-500 via-blue-500 to-blue-400" : (scrollY > 0 ? "bg-black hover:shadow-lg" : "bg-black/30 hover:bg-black/40")}  w-20 p-3 md:p-3 rounded-lg text-white flex place-items-center gap-2 cursor-pointer justify-between max-md:text-sm transition-all`}
                onClick={() => setOpened(x => !x)}>
                <div>
                    {language || "pl"}
                </div>
                <BsChevronDown className={opened ? "rotate-180 transition-all" : "transition-all"}/>
            </div>
            <div className={`${opened ? "h-[80px] outline" : "h-0"} overflow-hidden w-full outline-1 outline-slate-400/20 bg-white text-black shadow-lg absolute top-14 md:top-16 right-0 rounded-lg transition-all`}>
                {languages.map((x, key) => <DropdownOption value={x.code} key={key} setLanguage={setLanguage} setOpened={setOpened}/>)}
            </div>
        </div>
    )
}

function DropdownOption({value, setLanguage, setOpened}:{
    value: "pl" | "en",   
    setLanguage(value: "pl" | "en"): void, 
    setOpened: Dispatch<SetStateAction<boolean>>
}){
    function HandleClick(){
        setLanguage(value)
        setOpened(false)
    }
    return(
        <Link href={"/" + value}>
            <div className="p-2 hover:bg-slate-400/20 cursor-pointer" onClick={() => HandleClick()}>{value}</div>
        </Link>
    )
}