import nodemailer from "nodemailer"
import { Email } from "../types";
import OAuthKey  from "@/app/savatax-key.json"


// const transporter = nodemailer.createTransport({
//     host: "smtp.forwardemail.net",
//     port: 465,
//     secure: true,
//     auth: {
//       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//       user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
//       pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD'
//     }
//   });

const trasport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        type: "OAuth2",
        user: "contact@savatax-401923.iam.gserviceaccount.com",
        serviceClient: OAuthKey.client_id,
        privateKey: OAuthKey.private_key,
        //accessToken: "ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x",
      },
});


export function SendEmail(email: Email){
    trasport.sendMail({
        from: email.from,
        to: email.to ?? "bdtrppn@gmail.com",
        subject: email.subject,
        text: email.text,
    })
}