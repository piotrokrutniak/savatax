"use client"
import FormInput from "./formInput";


export function EmailForm(){
    return(
        <form className="flex flex-col gap-4">
            <FormInput placeholder="email@example.com" label=""/>
        </form>
    )
}