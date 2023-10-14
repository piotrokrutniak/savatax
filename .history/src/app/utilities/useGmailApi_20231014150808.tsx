import config from "@/app/config.json"
import nodemailer from "nodemailer"


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
      user: "okrutny1999@gmail.com",
      pass: "Blyatwolf90",
    },
});


export function SendEmail({from, to, subject, text}:{from: string; to?: string; subject: string; text: string;}){
    trasport.sendMail({
        from: from,
        to: to,
        subject: subject,
        text: text,
    })
}
  
  