"use client"
import { useState } from "react";
import FormInput from "./formInput";
import Button from "./button";
import TextArea from "./textArea";
import { FaPaperPlane } from "react-icons/fa";
import PostEmail from "@/app/integration/gmail/postEmail";
//import { SendEmail } from "@/app/utilities/useGmailApi";



export function EmailForm(){
    const [email, setEmail] = useState({
        from: "",
        to: "bdtrppn@gmail.com",
        subject: "",
        text: ""
    })

    const [validation, setValidation] = useState({
        from: true,
        subject: true,
        text: true
    })

    const [sent, setSent] = useState(false)

    let regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    function UpdateEmail(value: string){
        setEmail({...email, from: value})
    }
    function UpdateTitle(value: string){
        setEmail({...email, subject: value})
    }
    function UpdateBody(value: string){
        setEmail({...email, text: value})
    }


    async function ValidateForm(){
        await setValidation({
            from: regEx.test(email.from),
            subject: email.subject.length > 1,
            text: email.text.length > 1
        })
        return validation.from && validation.subject && validation.text
    }

    async function Submit(){
        const validated = await ValidateForm()
        if(validated){
            setSent(true)
            console.log(validation.from)
            console.log(validation.subject)
            console.log(validation.text)
            //await PostEmail(email)
        }   
    }

    return(
        <div className="flex flex-col gap-4">
            <FormInput placeholder="email@example.com" onChange={UpdateEmail} label={"Adres Email"} validationResult={validation.from} validationMessage="Adres email wymagany."/>
            <FormInput placeholder="Zacznij pisać..." onChange={UpdateTitle} label={"Tytuł Maila"} validationResult={validation.subject} 
                validationMessage={`Tytuł maila musi mieć przynajmniej 10 znaków.`}/>
            {/* <FormInput placeholder="Zacznij pisać..." onChange={UpdateEmail} label={"Treść Maila"}/> */}
            <TextArea placeholder="Zacznij pisać..." onChange={UpdateBody} label={"Treść Maila"} validationResult={validation.text} 
                validationMessage={`Treść maila musi mieć przynajmniej 20 znaków.`}/>
            <Button className="w-fit px-4 text-lg ml-auto mt-4 mr-0 text-white"
                onClick={Submit}>
                Wyślij <FaPaperPlane/>
            </Button>
        </div>
    )
}

