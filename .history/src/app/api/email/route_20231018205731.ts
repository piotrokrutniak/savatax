import { SendConfirmation, SendEmail } from "@/app/utilities/useGmailApi";
import { NextResponse } from "next/server";
 
export async function POST(request: Request) {
  const data = await request.json()
  SendEmail(data)
    .then(() => SendConfirmation(data))
    .catch(() =>
      {return NextResponse.json({ message: "Email failed to be sent.", success: false }})
    )

  return NextResponse.json({ message: "Email sent.", success: true });
}