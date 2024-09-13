import "../public/styles/tailwind.css"
import 'react-horizontal-scrolling-menu/dist/styles.css';
import "react-multi-carousel/lib/styles.css";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";

 
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
  });

  // client
  //   .query({
  //     query: gql`
  //     query {
  //       frameworks {
  //         name
  //         id
  //       }
  //     }
  //     `,
  //   })
  //   .then((result) => console.log(result));
  
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return getLayout(
    <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
  )
}