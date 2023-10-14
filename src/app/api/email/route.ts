import { SendConfirmation, SendEmail } from "@/app/utilities/useGmailApi";
import { NextApiRequest, NextApiResponse } from "next";
import bodyParser from "body-parser"

const jsonParser = bodyParser.json();
type ResponseData = {
  message: string
}
 
export async function POST(request: Request) {
  const data = await request.json()
  SendEmail(data)
    .then(() => SendConfirmation(data))
  return Response.json({"XDDD": "XDDD"})
}