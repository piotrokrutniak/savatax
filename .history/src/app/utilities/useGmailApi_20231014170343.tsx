import nodemailer from "nodemailer"
import { Email } from "../types";


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
      user: "okrutny1999@gmail.com",
      privateKey: "AIzaSyDce1tfyuUGIk6-7C4-ynu5JpeTgTGLuHY"
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