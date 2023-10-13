"use client"

import { FaPizzaSlice, FaBars, FaPaperPlane, FaCoins } from "react-icons/fa"
import { BsX } from "react-icons/bs"
import Button from "../generic/button"
import { useState } from "react"
import Link from "next/link"
import localization from "@/app/localization.json"

export default function NavBar(){
    const [showMobile, setShowMobile] = useState(false)

    return(
        <nav className="bg-white sticky top-0 z-20 backdrop-blur-xl">
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
                        <FaCoins className="h-full w-6 mt-1 fill-blue-400 group-hover:fill-blue-300 transition-all"/>
                        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-blue-400 group-hover:bg-gradient-to-r from-blue-300 to-blue-400 transition-all">Savatax</h1>
                    </div>
                    </Link>
                    <div className="hidden text-lg gap-4 md:flex text-black">
                        <Link href={"/kontakt"}>
                            <Button className="bg-transparent active:bg-sky-100/20 hover:bg-sky-100/30 active:opacity-50" onClick={undefined}>
                                {localization["pl-PL"].lblContact}
                            </Button>
                        </Link>
                        <Link href={"/oferta"}>
                            <Button className="bg-transparent active:bg-sky-100/20 hover:bg-sky-100/30 active:opacity-50" onClick={undefined}>
                                {localization["pl-PL"].lblOffer}
                            </Button>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <FaBars className="h-10 w-10 fill-black/80 cursor-pointer hover:fill-blue-400 active:opacity-80" onClick={() => setShowMobile(true)}/>
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