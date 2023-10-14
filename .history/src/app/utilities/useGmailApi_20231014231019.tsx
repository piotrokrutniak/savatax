import nodemailer from "nodemailer"
import { Email } from "../types";
import OAuthKey  from "@/app/savatax-key.json"
import secret from "@/app/client_secret.json"
import config from "@/app/config.json"
import { FaCoins } from "react-icons/fa";
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


const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        type: "OAuth2",
        user: "piotrokrutniak@gmail.com",
        clientId: secret.web.client_id,
        clientSecret: secret.web.client_secret,
        refreshToken: "1//04VftevghRdzACgYIARAAGAQSNwF-L9IrrnlTzvFxRd437oa1RpC6oJOAg_Ufmq7f9UyA1tQ9vxwwvDiOJ7dATCAY-1-S70WgmNU",
        accessToken: "ya29.a0AfB_byA1WeRRklNyV4l6eJMb0fZncW06bcUyku96YfYiQDtzeWTIYauSCbMf2aOB9HFQFvOnJy6UDMiJGs4RP1u8dydeM3lsVYOcfZmhpzh2Uhw7hdJteQOxm5exMzdTU2rwGxDRUE94FsluG6KgR9LNJgYW7uOurD5qaCgYKAZ4SARMSFQGOcNnCA1qzP3K3NjCA0pMQgPMS7A0171",
        expires: 0,
      },
});

export async function SendEmail(email: Email){
    console.log("Sent email to: " + email.to)
    return await transport.sendMail({
        from: email.from,
        to: config.emailService.contactEmail,
        subject: email.subject,
        text: email.text,
    })
}

export async function SendConfirmation(email: Email){
    console.log("Sent confirmation to: " + email.from)
    return await transport.sendMail({
        from: "piotrokrutniak@gmail.com",
        to: email.from,
        subject: "Contact Form Confirmation",
        //html: "We've received your email inquiry, we'll get in touch with you soon. <br/> Best Regards",
        html: ConfirmationBody(email),
    })
}



const ConfirmationBody = (email: Email) => {
    return(`
        <div style="padding: 2rem;">
            <h1 style="font-weight: 700; font-size: 1.25rem;">Hi ${email.from},</h1>
            <p style="margin-top: 0.75rem;">We've just received your email inquiry, we'll get in touch with you as soon as possible.</p>
            <div style="margin-top: 0.75rem;">
                Best regards,
                <br/>
                Savatax Team.
            </div>
            <div style="margin-top: 0.25rem; font-size: 1.5rem; font-weight: 700; color: transparent; color: #60A5FA;">
                <p>Savatax</p>
            </div>
        </div>`
        
    )
}


export default function Confirmation(email: Email){
    return(
        <div style={WrapperStyle}>
        <h1 style={HeaderStyle}>Hi piotrokrutniak@gmail.com,</h1>
            <p>We've just received your email inquiry, we'll get in touch with you as soon as possible.</p>
        <div>
            <p>Best regards,</p>
            <p>Savatax Team.</p>
        </div>
        <div style={LogoStyle}>
            <h1>Savatax</h1>
        </div>
        </div>
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
//"backgroundColor": "#93C5FD;",
"backgroundColor": "#60A5FA;",
}