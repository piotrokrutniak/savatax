import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string
}
 
export function GET(req: NextApiRequest, res: NextApiResponse) {
  return new Response("XDDDDD");
}

