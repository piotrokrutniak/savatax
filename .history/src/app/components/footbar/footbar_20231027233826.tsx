"use client";
import { useState } from "react";
import Signature from "./signature";
import Localization from "@/app/localization.json";
import { Cookies } from 'react-cookie';

export default function Footbar(){
    const cookies = new Cookies()
    const [language, setLanguage] = useState<keyof typeof Localization>(cookies.get("preferred-lang") ?? "en")
    return(
        <footer>
        <div className="w-full bg-blue-400 mt-16 text-center text-white flex place-items-center justify-center">
            <div className="w-full flex max-w-6xl py-20 md:px-16">
                <ul className="flex flex-col gap-4 text-start">
                    <li className="flex flex-col">
                        <h1 className="text-4xl font-bold">Savatax</h1>
                        <h2 className="text-xl font-semibold opacity-95">{language == "en" ? "Accounting Firm from Warsaw" : "Biuro Rachunkowe z Warszawy"}</h2>
                    </li>
                    <li className="flex flex-col">
                        <p className="text-lg font-semibold">Na Skraju 20</p>
                        <p className="text-lg font-semibold">02-197 Warsaw</p>
                        <p className="text-lg font-semibold">Poland </p>
                    </li>
                    <li className="flex flex-col">
                        <p className="text-lg font-semibold">NIP: 5223259648 </p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="w-full h-40 bg-black text-center text-white flex place-items-center justify-center">
            <Signature/>
        </div>
        </footer>
    )
}