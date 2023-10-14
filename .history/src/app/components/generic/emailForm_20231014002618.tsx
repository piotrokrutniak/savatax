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

    const [sent, setSent] = useState(false)

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
        return errors.body && errors.title && errors.emailAddress
    }

    function Submit(){
        if(ValidateForm()){
            setSent(true)
        }
    }

    return(
        <div className="flex flex-col gap-4">
            <FormInput placeholder="email@example.com" onChange={UpdateEmail} label={"Adres Email"} validationResult={errors.emailAddress} validationMessage="Adres email wymagany."/>
            <FormInput placeholder="Zacznij pisać..." onChange={UpdateEmail} label={"Tytuł Maila"} validationResult={errors.title} validationMessage="Tytuł maila musi mieć przynajmniej 10 znaków."/>
            {/* <FormInput placeholder="Zacznij pisać..." onChange={UpdateEmail} label={"Treść Maila"}/> */}
            <TextArea placeholder="Zacznij pisać..." onChange={UpdateEmail} label={"Treść Maila"} validationResult={errors.body} validationMessage="Treść maila musi mieć przynajmniej 10 znaków."/>
            <Button className="w-fit px-4 text-lg ml-auto mt-4 mr-0 text-white"
                onClick={Submit}>
                Wyślij <FaPaperPlane/>
            </Button>
        </div>
    )
}