import { authenticate } from "@google-cloud/local-auth"
import { google } from "googleapis"
import config from "@/app/config.json"

// gmail.googleapis.com/gmail/v1/users/{userId}/messages/send

//https://developers.google.com/gmail/api/reference/rest/v1/users.drafts/create

async function SendEmail(){
    let client = google
    let userId = "XDDDD"

    let emailBody = {
        id: ""
    }

    // let response = await fetch(`https://gmail.googleapis.com/gmail/v1/users/${userId}/messages/send`,
    //                     {
    //                         method: 'POST',
    //                         mode: 'cors',
    //                         headers:{
    //                             'Content-Type': 'application/json'
    //                         },
    //                         body: JSON.stringify({
                                
    //                         })
    //                     })

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

    export function CreateEmail({to, from, subject, body}:{to: string, from: string, subject: string, body: string}) {
    let message = [
        'Content-Type: text/plain; charset="UTF-8"\n',
        'MIME-Version: 1.0\n',
        'Content-Transfer-Encoding: 7bit\n',
        'to: ', to, '\n',
        'subject: ', subject, '\n\n',
        body
    ].join('');

    // let encodedMessage = btoa(message);

    // let request = google.client.gmail.users.messages.send({
    //     'userId': 'me',
    //     'resource': {
    //     'raw': encodedMessage
    //     }
    // });
    // request.execute(function(response: any) {
    //     console.log(response);
    // });
    }