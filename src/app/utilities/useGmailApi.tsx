import nodemailer from "nodemailer"
import { Email } from "../types";
import secret from "@/app/client_secret.json"
import config from "@/app/config.json"
import { CSSProperties } from "react";

// Temp key

// const transport = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // upgrade later with STARTTLS
//     auth: {
//         type: "OAuth2",
//         user: "piotrokrutniak@gmail.com",
//         clientId: secret.web.client_id,
//         clientSecret: secret.web.client_secret,
//         refreshToken: "1//04VftevghRdzACgYIARAAGAQSNwF-L9IrrnlTzvFxRd437oa1RpC6oJOAg_Ufmq7f9UyA1tQ9vxwwvDiOJ7dATCAY-1-S70WgmNU",
//         accessToken: "ya29.a0AfB_byA1WeRRklNyV4l6eJMb0fZncW06bcUyku96YfYiQDtzeWTIYauSCbMf2aOB9HFQFvOnJy6UDMiJGs4RP1u8dydeM3lsVYOcfZmhpzh2Uhw7hdJteQOxm5exMzdTU2rwGxDRUE94FsluG6KgR9LNJgYW7uOurD5qaCgYKAZ4SARMSFQGOcNnCA1qzP3K3NjCA0pMQgPMS7A0171",
//         expires: 0,
//       },
// });

// transport.set("oauth2_provision_cb", (user, renew, callback) => {
//     let accessToken = "ya29.a0AfB_byA1WeRRklNyV4l6eJMb0fZncW06bcUyku96YfYiQDtzeWTIYauSCbMf2aOB9HFQFvOnJy6UDMiJGs4RP1u8dydeM3lsVYOcfZmhpzh2Uhw7hdJteQOxm5exMzdTU2rwGxDRUE94FsluG6KgR9LNJgYW7uOurD5qaCgYKAZ4SARMSFQGOcNnCA1qzP3K3NjCA0pMQgPMS7A0171",
//     if (!accessToken) {
//       return callback(new Error("Unknown user"));
//     } else {
//       return callback(null, accessToken);
//     }
//   });

// const transport = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // upgrade later with STARTTLS
//     auth: {
//         type: "OAuth2",
//         user: "piotrokrutniak@gmail.com",
//         clientId: secret.web.client_id,
//         clientSecret: secret.web.client_secret,
//         refreshToken: "1//04VftevghRdzACgYIARAAGAQSNwF-L9IrrnlTzvFxRd437oa1RpC6oJOAg_Ufmq7f9UyA1tQ9vxwwvDiOJ7dATCAY-1-S70WgmNU",
//         accessToken: "ya29.a0AfB_byA1WeRRklNyV4l6eJMb0fZncW06bcUyku96YfYiQDtzeWTIYauSCbMf2aOB9HFQFvOnJy6UDMiJGs4RP1u8dydeM3lsVYOcfZmhpzh2Uhw7hdJteQOxm5exMzdTU2rwGxDRUE94FsluG6KgR9LNJgYW7uOurD5qaCgYKAZ4SARMSFQGOcNnCA1qzP3K3NjCA0pMQgPMS7A0171",
//         expires: 0,
//       },
// });

//TODO Update Credentials
const transport = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587, 
    secure: false, // upgrade later with STARTTLS
    auth: {
        type: "login",
        user: "piotrokrutniak@gmail.com",
        pass: "tEp3UBV89WgmH16d"
      },
});



export async function SendEmail(email: Email){
    console.log("Sending email to: " + email.to)
    return await transport.sendMail({
        from: email.from,
        to: config.emailService.contactEmail,
        subject: email.subject,
        text: email.text,
    }).then(() =>
        console.log("Sent email to: " + email.to)
    ).catch(
        (x) => console.log(x)
    )
}

export async function SendConfirmation(email: Email){
    console.log("Sent confirmation to: " + email.from)
    return await transport.sendMail({
        from: "kontakt@savatax.com",
        to: email.from,
        subject: "Contact Form Confirmation",
        html: ConfirmationBody(email),
    })
}

const ConfirmationBody = (email: Email) => {
    return(`
        <div style="padding: 1rem;">
            <h2 style="font-weight:700; font-size:1.1rem; margin: 0px;">Hi <span style="text-decoration: none;">${email.from}</span>,</h2>
            <br/>
            <p style="margin-top:0.75rem; margin: 0px; font-size: 1rem;">We've just received your email inquiry, we'll get in touch with you as soon as possible.</p>
            <p style="margin-top:0.75rem; margin: 0px; font-size: 1rem;">If you were not trying to get in touch with us, please disregard this email.</p>
            <br/>
            <div style="margin-top: 0.75rem; font-weight: 600; font-size: 1rem;">
                Best regards,
                <br/>
                Savatax Team.
            </div>
            <div style="font-size: 1.5rem; font-weight: 700; color: transparent; color: #60A5FA;">
                Savatax
            </div>
        </div>`
    )
}

const WrapperStyle: CSSProperties = {
"padding": "2rem;",
"display": "flex",
"flexDirection": "column",
"gap": "0.75rem"
}

const HeaderStyle: CSSProperties = {
"fontWeight": "700;",
"fontSize": "1.25rem;",
}

const LogoStyle: CSSProperties = {
"fontSize": "2rem;",
"lineHeight": "2rem;",
"fontWeight": "700;",
"color": "transparent;",
"backgroundClip": "text;",
"backgroundImage": "background-image: linear-gradient(to right, var(--tw-gradient-stops));",
"backgroundColor": "#60A5FA;",
}