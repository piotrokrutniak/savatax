import { Email } from "@/app/types"

export default async function PostEmail(data: Email){
    //const apiEndpoint = GetApiEndpoint()
    console.log("inside function")
    console.log(data)
    const reqBody = {
        from: data.from,
        to: data.to,
        subject: data.subject,
        text: data.text
    }
    let response = await fetch("/api/email",
                        {
                            method: 'POST',
                            mode: 'cors',
                            headers:{
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(reqBody)
                        }
    )

    let body = await response.json()
    return await body
}