import { SendEmail } from "@/app/utilities/useGmailApi";
import { NextApiRequest, NextApiResponse } from "next";
import bodyParser from "body-parser"

const jsonParser = bodyParser.json();
type ResponseData = {
  message: string
}
 
export function GET(req: Request, res: NextApiResponse) {

  return new Response("XDDDDD");
}

// export function POST(req: NextApiRequest, res: NextApiResponse) {
//   console.log(req.body)
//   //SendEmail(req.body)
  
//   return new Response();
// }

export async function POST(request: Request) {
  const formData = await request.json()
  // const name = formData.get('name')
  // const email = formData.get('email')

  console.log(formData)

  return Response.json({"XDDD": "XDDD"})
}