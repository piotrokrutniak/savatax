"use client"
import { useState } from "react";
import FormInput from "./formInput";


export function EmailForm(){
    const [email, setEmail] = useState({
        emailAddress: "",
        title: "",
        body: ""
    })
    return(
        <form className="flex flex-col gap-4">
            <FormInput placeholder="email@example.com" label={"Adres Email"}/>
        </form>
    )
}