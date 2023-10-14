import { authenticate } from "@google-cloud/local-auth"
import { google } from "googleapis"
import config from "@/app/config.json"

// gmail.googleapis.com/gmail/v1/users/{userId}/messages/send

async function SendEmail(){
    let client = google
    let userId = "XDDDD"

    fetch(`https://gmail.googleapis.com/gmail/v1/users/${userId}/messages/send`)
}