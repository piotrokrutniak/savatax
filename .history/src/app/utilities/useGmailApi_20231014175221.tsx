import nodemailer from "nodemailer"
import { Email } from "../types";
import OAuthKey  from "@/app/savatax-key.json"
import secret from "@/app/client_secret.json"


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

// const trasport = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // upgrade later with STARTTLS
//     auth: {
//         type: "OAuth2",
//         user: OAuthKey.client_email,
//         serviceClient: OAuthKey.client_id,
//         privateKey: OAuthKey.private_key,
//         //accessToken: "ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x",
//       },
// });
const trasport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        type: "OAuth2",
        user: "okrutny1999@gmail.com",
        clientId: secret.web.client_id,
        clientSecret: secret.web.client_secret,
        refreshToken: "1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx",
        accessToken: "ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x",
        expires: 1484314697598,
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