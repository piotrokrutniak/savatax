"use client"
import { useState } from "react";
import FormInput from "./formInput";
import Button from "./button";
import TextArea from "./textArea";
import { FaPaperPlane } from "react-icons/fa";
import { CreateEmail } from "@/app/utilities/useGmailApi";


export function EmailForm(){
    const [email, setEmail] = useState({
        emailAddress: "",
        title: "",
        body: ""
    })

    const [validation, setValidation] = useState({
        emailAddress: true,
        title: true,
        body: true
    })

    const [sent, setSent] = useState(false)

    let regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    function UpdateEmail(value: string){
        setEmail({...email, emailAddress: value})
    }
    function UpdateTitle(value: string){
        setEmail({...email, title: value})
    }
    function UpdateBody(value: string){
        setEmail({...email, body: value})
    }


    function ValidateForm(){
        setValidation({
            emailAddress: regEx.test(email.emailAddress),
            title: email.title.length > 1,
            body: email.body.length > 1
        })
        return validation.body && validation.title && validation.emailAddress
    }

    function Submit(){
        if(ValidateForm()){
            setSent(true)
            CreateEmail({
                to: "piotrokrutniak@gmail.com", 
                from: "bdtrppn@gmail.com",
                subject: email.title,
                body: email.body
            })
        }
    }

    return(
        <div className="flex flex-col gap-4">
            <FormInput placeholder="email@example.com" onChange={UpdateEmail} label={"Adres Email"} validationResult={validation.emailAddress} validationMessage="Adres email wymagany."/>
            <FormInput placeholder="Zacznij pisać..." onChange={UpdateTitle} label={"Tytuł Maila"} validationResult={validation.title} 
                validationMessage={`Tytuł maila musi mieć przynajmniej 10 znaków.`}/>
            {/* <FormInput placeholder="Zacznij pisać..." onChange={UpdateEmail} label={"Treść Maila"}/> */}
            <TextArea placeholder="Zacznij pisać..." onChange={UpdateBody} label={"Treść Maila"} validationResult={validation.body} 
                validationMessage={`Treść maila musi mieć przynajmniej 20 znaków.`}/>
            <Button className="w-fit px-4 text-lg ml-auto mt-4 mr-0 text-white"
                onClick={Submit}>
                Wyślij <FaPaperPlane/>
            </Button>
        </div>
    )
}