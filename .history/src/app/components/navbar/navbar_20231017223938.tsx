"use client"

import { FaPizzaSlice, FaBars, FaPaperPlane, FaCoins, FaArrowDown, FaArrowsAltV, FaDropbox } from "react-icons/fa"
import { BsArrowBarDown, BsArrowDownSquare, BsBoxArrowInUp, BsChevronDown, BsX } from "react-icons/bs"
import Button from "../generic/button"
import { useState } from "react"
import Link from "next/link"
import localization from "@/app/localization.json"
import { useScrollPosition } from "@/app/utilities/useScrollPosition"

export default function NavBar(){
    const [showMobile, setShowMobile] = useState(false)

    const scrollY = useScrollPosition()

    return(
        <nav className={`${scrollY > 0 ? "bg-white" : "bg-transparent text-white" } sticky top-0 z-20`}>
            {/* <div className="bg-blue-400 w-full p-2 shadow-inner shadow-black/20"> 
                <div className="text-white max-w-7xl text-base m-auto font-semibold opacity-90 flex gap-5">
                    <span>Telefon: +48 786 995 059</span>
                    <span>Email: karol.zach@savatax.com</span>
                </div>
            </div> */}
            <div className="w-full flex">
                <div className="p-2 m-auto w-full flex max-w-7xl justify-between items-center">
                    <Link href="/">
                    <div className="flex gap-1 h-fit select-none cursor-pointer active:opacity-80 active:pb-0 
                            border-opacity-0 transition-all group">
                        <FaCoins className={`${scrollY > 0 ? "fill-blue-400 transition-all" : "fill-white"} h-full w-6 mt-1  group-hover:fill-blue-300 transition-opacity`}/>
                        <h1 className={`${scrollY > 0 ? " bg-blue-400 " : "bg-white"} text-2xl font-bold bg-clip-text text-transparent group-hover:bg-gradient-to-r from-blue-300 to-blue-400 transition-all`}>Savatax</h1>
                    </div>
                    </Link>
                    <div className="hidden text-lg gap-4 md:flex">
                        <Link href={"/kontakt"}>
                            <Button className="bg-transparent active:bg-sky-100/20 hover:bg-sky-100/30 active:opacity-50" onClick={undefined}>
                                {localization["pl"].lblContact}
                            </Button>
                        </Link>
                        <Link href={"/oferta"}>
                            <Button className="bg-transparent active:bg-sky-100/20 hover:bg-sky-100/30 active:opacity-50" onClick={undefined}>
                                {localization["pl"].lblOffer}
                            </Button>
                        </Link>
                        <DropDown/>
                    </div>
                    <div className="md:hidden">
                        <FaBars className={`${scrollY > 0 ? "fill-black/80" : "fill-white"} h-10 w-10  cursor-pointer hover:fill-blue-400 active:opacity-80`} onClick={() => setShowMobile(true)}/>
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
        </nav>
    )
}

function DropDown(){
    const languages = [{code: "pl", label: "Polish"}, {code: "en", label: "English"}]
    const [opened, setOpened] = useState<boolean>(true)
    return(
        <div className="relative">

            <div className="w-28 p-3 bg-black rounded-lg text-white flex place-items-center gap-2 cursor-pointer"
                onClick={() => setOpened(x => !x)}>
                <div>
                    English
                </div>
                <BsChevronDown className={opened ? "rotate-180" : ""}/>
            </div>
            <div className={`${opened ? "h-36" : "h-0"} overflow-hidden w-44 h-36 bg-white shadow-lg absolute top-16 right-0 rounded-lg transition-all`}>
                {languages.map(x => <DropdownOption label={x.label} value={x.code}/>)}
            </div>
        </div>
    )
}

function DropdownOption({value, label}:{value: string, label: string}){
    return(
        <div className="p-2">{label}</div>
    )
}