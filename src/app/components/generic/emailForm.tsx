"use client"
import { useEffect, useState } from "react";
import FormInput from "./formInput";
import Button from "./button";
import TextArea from "./textArea";
import { FaCheckCircle, FaExclamation, FaExclamationCircle, FaPaperPlane } from "react-icons/fa";
import PostEmail from "@/app/integration/gmail/postEmail";
import translations from "@/app/localization.json"
import { Localization } from "@/app/types";



export function EmailForm({language = "pl"}:{language?: string}){
    const localization: Localization = translations
    const [mounted, setMounted] = useState<boolean>(false)
    const [validated, setValidated] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const [email, setEmail] = useState({
        from: "",
        //to: "karol.zach@savatax.com",
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
        ValidateForm()
    }
    function UpdateTitle(value: string){
        setEmail({...email, subject: value})
        ValidateForm()
    }
    function UpdateBody(value: string){
        setEmail({...email, text: value})
        ValidateForm()
    }

    async function ValidateForm(){
        setActive(true)
        setValidated(regEx.test(email.from) && email.subject.length > 1 && email.text.length > 1)

        return validated
    }

    async function Submit(){
        await ValidateForm().then(async (valid) => {
            if(valid){
                setSent(true)
                setValidated(false)
                setActive(false)
                await PostEmail(email)
                setEmail({...email, subject: "", text: ""})
                setTimeout(() => setSent(false), 2000)
            }   
        })

        
    }

    return(
        <div className={`${mounted ? "opacity-100" : "opacity-0 translate-y-1/2"}  flex flex-col gap-4 transition-all relative duration-200`}>
            <FormInput placeholder={localization[language].emailForm.phEmail} value={email.from} onChange={UpdateEmail} label={localization[language].emailForm.lblEmail} 
                validationResult={validation.from} onBlur={() => ValidateForm()}
                required={true}/>
            <FormInput placeholder={localization[language].emailForm.phTextInput} value={email.subject} onChange={UpdateTitle} label={localization[language].emailForm.lblSubject} 
                validationResult={validation.subject} onBlur={() => ValidateForm()}
                required={true}/>
            <TextArea placeholder={localization[language].emailForm.phTextInput} value={email.text} onChange={UpdateBody} label={localization[language].emailForm.lblText} 
                validationResult={validation.text} onBlur={() => ValidateForm()}
                required={true}/>
            <div className="text-red-500 font-semibold">* {localization[language].emailForm.lblRequired} </div>
            {(!validated && active) && <div className="text-red-500 font-semibold ml-auto mr-0 flex place-items-center gap-1"> <FaExclamationCircle/> {localization[language].emailForm.lblFormValidation} </div>}
            <Button className="w-fit px-4 text-lg ml-auto mr-0 text-white" disabled={!validated}
                onClick={Submit}>
                {localization[language].emailForm.lblSend} <FaPaperPlane/>
            </Button>
            <div className={`${sent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"} duration-300 transition-all ease-in absolute h-full w-full  flex justify-center place-items-center text-white`}>
                <div className={`flex text-3xl gap-2 place-items-center bg-gradient-to-t from-blue-400 via-blue-500 to-blue-500 rounded-lg shadow-lg p-40`}>{localization[language].emailForm.lblSent} <FaCheckCircle/> </div>
            </div>
        </div>
    )
}

