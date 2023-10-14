"use client"
import { useState } from "react";
import FormInput from "./formInput";
import Button from "./button";
import TextArea from "./textArea";
import { FaPaperPlane } from "react-icons/fa";


export function EmailForm(){
    const [email, setEmail] = useState({
        emailAddress: "",
        title: "",
        body: ""
    })

    const [errors, setErrors] = useState({
        emailAddress: false,
        title: false,
        body: false
    })

    let regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    function UpdateEmail(value: string){
        setEmail({...email, emailAddress: value})
    }

    function ValidateForm(){
        setErrors({
            emailAddress: regEx.test(email.emailAddress),
            title: email.title.length > 1,
            body: email.body.length > 1
        })
        return regEx.test(email.emailAddress)
    }

    return(
        <form className="flex flex-col gap-4">
            <FormInput placeholder="email@example.com" onChange={UpdateEmail} label={"Adres Email"}/>
            <FormInput placeholder="Zacznij pisać..." onChange={UpdateEmail} label={"Tytuł Maila"}/>
            {/* <FormInput placeholder="Zacznij pisać..." onChange={UpdateEmail} label={"Treść Maila"}/> */}
            <TextArea placeholder="Zacznij pisać..." onChange={UpdateEmail} label={"Treść Maila"}/>
            <Button className="w-fit px-4 text-lg ml-auto mr-0 text-white">
                Wyślij <FaPaperPlane/>
            </Button>
        </form>
    )
}