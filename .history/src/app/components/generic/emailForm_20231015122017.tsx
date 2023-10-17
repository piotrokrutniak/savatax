"use client"
import { useState } from "react";
import FormInput from "./formInput";
import Button from "./button";
import TextArea from "./textArea";
import { FaPaperPlane } from "react-icons/fa";
import PostEmail from "@/app/integration/gmail/postEmail";
import Localization from "@/app/localization.json"

export function EmailForm({language = "pl-PL"}:{language?: string}){
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
        if(await ValidateForm()){
            setSent(true)
            console.log(validation.from)
            console.log(validation.subject)
            console.log(validation.text)
            await PostEmail(email)
        }   
    }

    return(
        <div className="flex flex-col gap-4">
            <FormInput placeholder={Localization[language].emailForm.phEmail} onChange={UpdateEmail} label={Localization[language].emailForm.lblEmail} 
                validationResult={validation.from} 
                validationMessage={Localization[language].emailForm.lblEmailValidation}/>
            <FormInput placeholder={Localization[language].emailForm.phTextInput} onChange={UpdateTitle} label={Localization[language].emailForm.lblSubject} 
                validationResult={validation.subject} 
                validationMessage={Localization[language].emailForm.lblSubjectValidation}/>
            {/* <FormInput placeholder="Zacznij pisać..." onChange={UpdateEmail} label={"Treść Maila"}/> */}
            <TextArea placeholder={Localization[language].emailForm.phTextInput} onChange={UpdateBody} label={Localization[language].emailForm.lblText} 
                validationResult={validation.text} 
                validationMessage={Localization[language].emailForm.lblTextValidation}/>
            <Button className="w-fit px-4 text-lg ml-auto mt-4 mr-0 text-white"
                onClick={Submit}>
                Wyślij <FaPaperPlane/>
            </Button>
        </div>
    )
}

