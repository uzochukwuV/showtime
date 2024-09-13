import {makeSchema, objectType, queryType} from "nexus"
import { ApolloServer } from "apollo-server-micro"
import { NextApiRequest, NextApiResponse } from "next";
import { context } from "../../lib/client";
import { join } from "path";
import * as types from "../../schema/index"


export const schema = makeSchema({
    types,
    
    outputs: {
      schema: join(process.cwd(), "schema.graphql"), // 2
      typegen: join(process.cwd(), "nexus-typegen.ts"), // 3
    },
    contextType: {
      module: join(process.cwd(), "./lib/client.ts"),
      export: "Context"
    }
})

const server =  new ApolloServer({
    introspection: true,
    schema,
    context
})

const startServer = server.start()

export const config = {
    api: {
        bodyParser: false
    }
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  
  await startServer;

 

 await server.createHandler({
        path: "/api/graphql",
    })(req, res)
}


