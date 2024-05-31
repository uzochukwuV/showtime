import {makeSchema, objectType, queryType} from "nexus"
import { ApolloServer } from "apollo-server-micro"
import { NextApiRequest, NextApiResponse } from "next";




export const Framework = objectType({
    name: 'Framework',
    definition(t) {
      t.id('id')
      t.string('name')
    },
  })
  export const Query = queryType({
    definition(t) {
      t.list.field('frameworks', {
        type: 'Framework',
        resolve: () => {
          return [
            {
              id: '1',
              name: 'React',
            },
            {
              id: '2',
              name: 'Vue',
            },
            {
              id: '3',
              name: 'Angular',
            },
            {
              id: '4',
              name: 'Svelte',
            },
          ]
        },
      })
    },
  })

export const schema = makeSchema({
    types: [Query, Framework]
})

const server =  new ApolloServer({
    introspection: true,
    schema
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


