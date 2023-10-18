import { SendConfirmation, SendEmail } from "@/app/utilities/useGmailApi";
import { NextResponse } from "next/server";
 
export async function POST(request: Request, response: Response) {
  const data = await request.json()
  SendEmail(data)
    .then(() => SendConfirmation(data))
  //return Response.json({"XDDD": "XDDD"})
  return NextResponse.json({ message: "This Worked", success: true });
}