"use client";
import { useEffect, useState } from "react";
import Button from "./button";
import { Cookies } from "react-cookie";

export function CookiesPopUp(){
    const [accepted, setAccepted] = useState(true);
    const cookies = new Cookies();

    useEffect(() => {
        setAccepted(cookies.get("accept-cookies") || false);
    }, [])
    
    function AcceptCookies(){
        cookies.set("accept-cookies", true, {sameSite: true});
        setAccepted(true);
    }

    return accepted ? <></> :
      <div className="w-96 max-sm:w-full bg-blue-500 rounded-lg shadow-md shadow-black/40 fixed bottom-0 sm:bottom-8 sm:right-8 p-6 text-white z-10">
        <h1 className="font-semibold text-lg">Our website uses cookies</h1>
        <p>We use cookies to ensure you get the best experience experience. By using our website you consent to our use of cookies. </p>
        <Button onClick={() => AcceptCookies()} className="bg-white text-blue-400 hover:text-blue-500 mt-4 font-semibold">Got it</Button>
      </div>;
  }