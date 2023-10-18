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

const ConfirmatisonBody = (email: Email) => {
    return(
        <div className="bg-slate-500 flex flex-col">
        <h1>Hi {email.from},</h1>
        <p>{"We've just received your email inquiry, we'll get in touch with you as soon as possible."}</p>
        <p>Best regards,</p>
        <p>Savatax Team.</p>
        <div style={{}} className="flex gap-1 h-fit select-none ">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400">Savatax</h1>
        </div>
        </div>
    )
}