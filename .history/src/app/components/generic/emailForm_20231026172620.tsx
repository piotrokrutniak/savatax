"use client"
import { useState } from "react";
import FormInput from "./formInput";
import Button from "./button";
import TextArea from "./textArea";
import { FaPaperPlane } from "react-icons/fa";
import PostEmail from "@/app/integration/gmail/postEmail";
import translations from "@/app/localization.json"
import { Localization } from "@/app/types";



export function EmailForm({language = "pl"}:{language?: string}){
    
    const localization: Localization = translations

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
            await PostEmail(email)
        }   
    }

    return(
        <div className="flex flex-col gap-4">
            <FormInput placeholder={localization[language].emailForm.phEmail} onChange={UpdateEmail} label={localization[language].emailForm.lblEmail} 
                validationResult={validation.from} 
                validationMessage={localization[language].emailForm.lblEmailValidation}
                required={true}/>
            <FormInput placeholder={localization[language].emailForm.phTextInput} onChange={UpdateTitle} label={localization[language].emailForm.lblSubject} 
                validationResult={validation.subject} 
                validationMessage={localization[language].emailForm.lblSubjectValidation}
                required={true}/>
            {/* <FormInput placeholder="Zacznij pisać..." onChange={UpdateEmail} label={"Treść Maila"}/> */}
            <TextArea placeholder={localization[language].emailForm.phTextInput} onChange={UpdateBody} label={localization[language].emailForm.lblText} 
                validationResult={validation.text} 
                validationMessage={localization[language].emailForm.lblTextValidation}
                required={true}/>
            <div className="text-red-500 font-semibold">* {localization[language].emailForm.lblRequired} Indicates required field</div>
            <Button className="w-fit px-4 text-lg ml-auto mt-4 mr-0 text-white"
                onClick={Submit}>
                {localization[language].emailForm.lblSend} <FaPaperPlane/>
            </Button>
        </div>
    )
}

