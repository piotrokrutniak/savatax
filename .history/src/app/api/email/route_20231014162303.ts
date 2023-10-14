import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string
}
 
export default function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    res.status(200).json({ message: 'Hello from Next.js!' })
  }
}