"use client"
import { useState } from "react";
import FormInput from "./formInput";
import Button from "./button";


export function EmailForm(){
    const [email, setEmail] = useState({
        emailAddress: "",
        title: "",
        body: ""
    })

    function UpdateEmail(value: string){
        setEmail({...email, emailAddress: value})
    }

    return(
        <form className="flex flex-col gap-4">
            <FormInput placeholder="email@example.com" onChange={UpdateEmail} label={"Adres Email"}/>
            <FormInput placeholder="Zacznij pisać..." onChange={UpdateEmail} label={"Tytuł Maila"}/>
            <FormInput placeholder="Zacznij pisać..." onChange={UpdateEmail} label={"Treść Maila"}/>
            <Button>
                Wyślij
            </Button>
        </form>
    )
}