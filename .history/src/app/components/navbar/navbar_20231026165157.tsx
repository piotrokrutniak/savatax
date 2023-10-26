"use client"

import { FaBars, FaCoins } from "react-icons/fa"
import { BsChevronDown, BsX } from "react-icons/bs"
import Button from "../generic/button"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Link from "next/link"
import localization from "@/app/localization.json"
import { useScrollPosition } from "@/app/utilities/useScrollPosition"
import { getURL } from "next/dist/shared/lib/utils"

export default function NavBar(){
    const [showMobile, setShowMobile] = useState(false)
    const languages = [{code: "pl", label: "Polski"}, {code: "en", label: "English"}]
    const [language, setLanguage] = useState<keyof typeof localization>("pl")
    const scrollY = useScrollPosition()

    useEffect(() => {
        return ParseLanguage()
    }, [])
    
    function ParseLanguage(){
        const lang = getURL().slice(1, 3)

        if (lang == "pl" || lang == "en"){
            return setLanguage(lang)
        }

        return setLanguage("pl")
    }

    return(
        <nav className={`${scrollY > 0 ? "bg-white" : "bg-transparent text-white" } sticky top-0 z-20`}>
            <div className="w-full flex">
                <div className="p-2 m-auto w-full flex max-w-7xl justify-between items-center">
                    <Link href="/">
                    <div className="flex gap-1 h-fit select-none cursor-pointer active:opacity-80 active:pb-0 
                            border-opacity-0 transition-all group"
                            onClick={() => setLanguage("pl")}>
                        <FaCoins className={`${scrollY > 0 ? "fill-blue-400 transition-all" : "fill-white"} h-full w-6 mt-1  group-hover:fill-blue-300 transition-opacity`}/>
                        <h1 className={`${scrollY > 0 ? " bg-blue-400 " : "bg-white"} text-2xl font-bold bg-clip-text text-transparent group-hover:bg-gradient-to-r from-blue-300 to-blue-400 transition-all`}>Savatax</h1>
                    </div>
                    </Link>
                    <div className="flex place-items-center gap-2 md:gap-4">
                    <div className="hidden text-lg gap-4 md:flex">
                        <Link href={"/kontakt"}>
                            <Button className="bg-transparent active:bg-sky-100/20 hover:bg-sky-100/30 active:opacity-50" onClick={undefined}>
                                {localization[language].lblContact}
                            </Button>
                        </Link>
                        <Link href={"/oferta"}>
                            <Button className="bg-transparent active:bg-sky-100/20 hover:bg-sky-100/30 active:opacity-50" onClick={undefined}>
                                {localization[language].lblOffer}
                            </Button>
                        </Link>
                    </div>
                    <DropDown languages={languages} language={language} setLanguage={setLanguage} scrollY={scrollY}/>
                    <div className="md:hidden flex">
                        <FaBars className={`${scrollY > 0 ? "fill-black" : "fill-white"} h-10 w-10  cursor-pointer hover:fill-blue-400 active:opacity-80`} onClick={() => setShowMobile(true)}/>
                    </div>
                    <div className={`${showMobile ? "" : "translate-x-full"} absolute w-screen h-screen bg-black left-0 top-0 md:hidden transition-all z-50 ease-in-out`}>
                    <div id="mobile-header" className="flex flex-row-reverse w-full"> 
                        <BsX className="fill-white w-16 h-16 cursor-pointer hover:blue-vermilion-400" onClick={() => setShowMobile(false)}/>
                    </div>
                    <div id="mobile-body" className="p-8 flex flex-col gap-3">
                        <Button className="text-white w-full bg-slate-500/40 active:bg-slate-500/30" onClick={undefined}>
                            <p className="mx-auto">Home</p>
                        </Button>
                        <Button className="text-white w-full bg-slate-500/40 active:bg-slate-500/30" onClick={undefined}>
                            <p className="mx-auto">Posts</p>
                        </Button>
                        <Button className="text-white w-full bg-slate-500/40 active:bg-slate-500/30" onClick={undefined}>
                            <p className="mx-auto">Users</p>
                        </Button>
                        <Button className="text-white w-full " onClick={undefined}>
                            <p className="mx-auto">Sign In</p>
                        </Button>
                        <Button className="text-white w-full border-2 border-white/50 active:border-green-500/60 hover:border-green-500/80 bg-transparent active:bg-green-500/60 hover:bg-green-500/80" onClick={undefined}>
                            <p className="mx-auto">Users</p>
                        </Button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function DropDown({languages, language, setLanguage, scrollY}:{languages: any[], language: string, setLanguage: Dispatch<SetStateAction<"pl" | "en">>, scrollY: number}){
    
    const [opened, setOpened] = useState<boolean>(false)

    return(
        <div className="relative">

            <div className={`${scrollY > 0 ? "bg-black" : "bg-black/30 "} w-20 p-3 hover:bg-black/40 md:p-3 rounded-lg text-white flex place-items-center gap-2 cursor-pointer justify-between max-md:text-sm transition-all`}
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
    setLanguage: Dispatch<SetStateAction<"pl" | "en">>, 
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