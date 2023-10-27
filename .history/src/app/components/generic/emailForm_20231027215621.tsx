"use client"
import { useEffect, useState } from "react";
import FormInput from "./formInput";
import Button from "./button";
import TextArea from "./textArea";
import { FaExclamation, FaExclamationCircle, FaPaperPlane } from "react-icons/fa";
import PostEmail from "@/app/integration/gmail/postEmail";
import translations from "@/app/localization.json"
import { Localization } from "@/app/types";



export function EmailForm({language = "pl"}:{language?: string}){
    
    const localization: Localization = translations

    const [mounted, setMounted] = useState<boolean>(false)
    const [validated, setValidated] = useState<boolean>(true)

    useEffect(() => {
        setMounted(true)
    }, [])

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
        setValidation({...validation,
            from: regEx.test(email.from),
            subject: email.subject.length > 1,
            text: email.text.length > 1
        })

        setValidated(validation.from && validation.subject && validation.text)

        return validated
    }

    async function Submit(){
        await ValidateForm().then((valid) => 
            {
                if(valid){
                    setSent(true)
                    //await PostEmail(email)
                    setEmail({...email, subject: "", text: ""})
                    console.log("sent")
                }   
            }
        )

        
    }

    return(
        <div className={`${mounted ? "opacity-100" : "opacity-0 translate-y-1/2"}  flex flex-col gap-4 transition-all duration-500`}>
            <FormInput placeholder={localization[language].emailForm.phEmail} onChange={UpdateEmail} label={localization[language].emailForm.lblEmail} 
                validationResult={validation.from} 
                required={true}/>
            <FormInput placeholder={localization[language].emailForm.phTextInput} onChange={UpdateTitle} label={localization[language].emailForm.lblSubject} 
                validationResult={validation.subject} 
                required={true}/>
            <TextArea placeholder={localization[language].emailForm.phTextInput} onChange={UpdateBody} label={localization[language].emailForm.lblText} 
                validationResult={validation.text} 
                required={true}/>
            <div className="text-red-500 font-semibold">* {localization[language].emailForm.lblRequired} </div>
            {validation.from && validation.subject && validation.text || <div className="text-red-500 font-semibold ml-auto mr-0 flex place-items-center gap-1"> <FaExclamationCircle/> {localization[language].emailForm.lblFormValidation} </div>}
            <Button className="w-fit px-4 text-lg ml-auto mr-0 text-white"
                onClick={Submit}>
                {localization[language].emailForm.lblSend} <FaPaperPlane/>
            </Button>
        </div>
    )
}

