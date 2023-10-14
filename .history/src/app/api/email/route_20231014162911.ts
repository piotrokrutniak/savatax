import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string
}
 
export function GET(req: NextApiRequest, res: NextApiResponse) {
  return new Response("XDDDDD");
}

export function POST(req: NextApiRequest, res: NextApiResponse) {
  return new Response("XDDDDD");
}

export function PUT(req: NextApiRequest, res: NextApiResponse) {
  return new Response("XDDDDD");
}

export function PATCH(req: NextApiRequest, res: NextApiResponse) {
  return new Response("XDDDDD");
}

