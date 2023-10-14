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
const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        type: "OAuth2",
        user: "okrutny1999@gmail.com",
        clientId: secret.web.client_id,
        clientSecret: secret.web.client_secret,
        refreshToken: "1//04VftevghRdzACgYIARAAGAQSNwF-L9IrrnlTzvFxRd437oa1RpC6oJOAg_Ufmq7f9UyA1tQ9vxwwvDiOJ7dATCAY-1-S70WgmNU",
        accessToken: "ya29.a0AfB_byA1WeRRklNyV4l6eJMb0fZncW06bcUyku96YfYiQDtzeWTIYauSCbMf2aOB9HFQFvOnJy6UDMiJGs4RP1u8dydeM3lsVYOcfZmhpzh2Uhw7hdJteQOxm5exMzdTU2rwGxDRUE94FsluG6KgR9LNJgYW7uOurD5qaCgYKAZ4SARMSFQGOcNnCA1qzP3K3NjCA0pMQgPMS7A0171",
        expires: 0,
      },
});


export function SendEmail(email: Email){
    transport.sendMail({
        from: email.from,
        to: email.to ?? "bdtrppn@gmail.com",
        subject: email.subject,
        text: email.text,
    })
}