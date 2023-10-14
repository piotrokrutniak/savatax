import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("XDDD")
    if (req.method === 'POST') {
        res.status(200)
      // Process a POST request
    } else {
        res.status(201)
      // Handle any other HTTP method
    }
  }