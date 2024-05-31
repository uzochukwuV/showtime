
import { NextApiRequest, NextApiResponse } from "next";



 function GET(req: Request, res: NextApiResponse){
    const header = req.credentials
    
    res.json({heoo: header});
}


 function POST(req: Request, res: NextApiResponse){
    const header = req.credentials
    
    res.json({heoo: header});
}




 export default async function Handler(req: NextApiRequest, res: NextApiResponse){
    

    if(req.method == "POST"){
        const credentials =   req.headers["authorization"]
        res.json({heoo: credentials});
    }
    
}

export  { Handler as  GET, Handler as POST}