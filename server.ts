import { createServer } from "http";
import { parse } from "url";
import next from "next";


import { schema } from "./pages/api/graphql";
import { ApolloServer } from "apollo-server-micro";


const port = parseInt(process.env.PORT || "5000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });


const handle = app.getRequestHandler();


// app.prepare().then(()=> {
  
// })


app.prepare().then(async() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url!, true);

    handle(req, res, parsedUrl);
  }).listen(port)

  

  

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`,
  );
});
