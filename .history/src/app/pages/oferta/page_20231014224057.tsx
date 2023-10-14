import { CSSProperties } from "react"

export default function OfferPage(){
        return(
            <div style={WrapperStyle}>
            <h1 style={HeaderStyle}>Hi piotrokrutniak@gmail.com,</h1>
            <div>
                <p>We've just received your email inquiry, we'll get in touch with you as soon as possible.</p>
                <p>Best regards,</p>
                <p>Savatax Team.</p>
            </div>
            <div style={LogoStyle}>
                <h1 style={{}}>Savatax</h1>
            </div>
            </div>
        )
}

function OfferrPage(){
    return(
        <div style={WrapperStyle}>
        <h1 style={HeaderStyle}>Hi piotrokrutniak@gmail.com,</h1>
        <p>We've just received your email inquiry, we'll get in touch with you as soon as possible.</p>
        <br/>
        <p>Best regards,</p>
        <p>Savatax Team.</p>
        <div style={{}} className="flex flex-col gap-1 h-fit select-none p-4">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400">Savatax</h1>
        </div>
        </div>
    )
}

const WrapperStyle: CSSProperties = {
    "padding": "2rem;",
    "display": "flex",
    "flexDirection": "column",
    "gap": "0.5rem"
}

const HeaderStyle: CSSProperties = {
    "fontWeight": "700;",
    "fontSize": "1.25rem;",
}

const LogoStyle: CSSProperties = {
    "fontSize": "2rem;",
    "marginTop": "0.75rem;",
    "lineHeight": "2rem;",
    "fontWeight": "700;",
    "color": "transparent;",
    "backgroundClip": "text;",
    "backgroundImage": "background-image: linear-gradient(to right, var(--tw-gradient-stops));",
    //"backgroundColor": "#93C5FD;",
    "backgroundColor": "#60A5FA;",
}