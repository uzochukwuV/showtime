import Head from "next/head";
import Navbar from "../components/navbar";
 
export default function Layout({ children }) {
  return (
    <>
        <body>
            
        <Navbar />
        <main>{children}</main>
    
      
      
        </body>
      
    </>
  )
}