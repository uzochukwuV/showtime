
import { NextApiResponse } from "next";



export default function GET(req: Request, res: NextApiResponse){
    console.log(req.signal);
    
    res.redirect("/");
}



// import { ApolloServer } from "apollo-server-micro";

// import { NextApiRequest, NextApiResponse } from "next";
// import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";


// const GraphQLServer = new ApolloServer({
//   introspection: true,
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
// });
// const startServer = GraphQLServer.start();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://studio.apollographql.com"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
//   );
//   if (req.method === "OPTIONS") {
//     res.end();
//     return false;
//   }

//   await startServer;
//   await GraphQLServer.createHandler({
//     path: "/api/graphql",
//   })(req, res);
// }

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
