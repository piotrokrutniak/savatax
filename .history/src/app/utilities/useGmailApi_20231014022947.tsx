import { authenticate } from "@google-cloud/local-auth"
import { google } from "googleapis"
import config from "@/app/config.json"

// gmail.googleapis.com/gmail/v1/users/{userId}/messages/send

//https://developers.google.com/gmail/api/reference/rest/v1/users.drafts/create

async function SendEmail(){
    let client = google
    let userId = "XDDDD"

    let response = await fetch(`https://gmail.googleapis.com/gmail/v1/users/${userId}/messages/send`,
                        {
                            method: 'POST',
                            mode: 'cors',
                            headers:{
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                
                            })
}


                                    // "id": string,
                                    // "threadId": string,
                                    // "labelIds": [
                                    //   string
                                    // ],
                                    // "snippet": string,
                                    // "historyId": string,
                                    // "internalDate": string,
                                    // "payload": {
                                    //   object (MessagePart)
                                    // },
                                    // "sizeEstimate": integer,
                                    // "raw": string