import { SendConfirmation, SendEmail } from "@/app/utilities/useGmailApi";
 
export async function POST(request: Request, response: Response) {
  const data = await request.json()
  SendEmail(data)
    .then(() => SendConfirmation(data))
  //return Response.json({"XDDD": "XDDD"})
  return response
}