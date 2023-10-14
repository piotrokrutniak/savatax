import { SendEmail } from "@/app/utilities/useGmailApi";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string
}
 
export function GET(req: NextApiRequest, res: NextApiResponse) {

  return new Response("XDDDDD");
}

export function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req)
  //SendEmail(req.body)
  
  return new Response();
}