import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string
}
 
export default function GET(req: NextApiRequest, res: NextApiResponse) {
  return new Response("XDDDDD");
}