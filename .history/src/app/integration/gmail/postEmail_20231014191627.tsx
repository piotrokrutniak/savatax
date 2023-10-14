import { Email } from "@/app/types"

export default async function PostIngredient(data: Email){
    //const apiEndpoint = GetApiEndpoint()
    console.log("inside function")
    console.log(data)
    let response = await fetch("/api/email",
                        {
                            method: 'POST',
                            mode: 'cors',
                            headers:{
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        }
    )

    let body = await response.json()          
    return await body
}