import nodemailer from "nodemailer"
import { Email } from "../types";
import config from "@/app/config.json"
import { CSSProperties } from "react";
import { env } from "process";

//TODO Update Credentials
const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "missing .env",
    port: 587, 
    secure: false, // upgrade later with STARTTLS
    auth: {
        type: "login",
        user: process.env.SMTP_USER ?? "missing .env",
        pass: process.env.SMTP_PASSWORD ?? "missing .env"
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
        from: process.env.SMTP_CONTACT ?? "missing .env",
        to: email.from,
        subject: "Contact Form Confirmation",
        html: ConfirmationBody(email),
    })
}

const ConfirmationBody = (email: Email) => {
    return(`
        <div style="padding: 1rem;">
            <h2 style="font-weight: 700; font-size: 1.1rem; margin: 0px;">Hi <span style="text-decoration: none;">${email.from}</span>,</h2>
            <br/>
            <p style="margin-top: 0.75rem; margin: 0px; font-size: 1rem;">We've just received your email inquiry, we'll get in touch with you as soon as possible.</p>
            <p style="margin-top: 0.75rem; margin: 0px; font-size: 1rem;">If you were not trying to get in touch with us, please disregard this email.</p>
            <br/>
            <p style="margin-top: 0.75rem; margin: 0px; font-size: 1rem; opacity: 0.6;">This is an automatic reply, please do not reply.</p>
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