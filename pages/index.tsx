import Link from "next/link";
import Navbar from "../components/navbar";
import "./index.module.css";
import Image from "next/image";
import { Inter } from 'next/font/google'
import styles from './index.module.css'
import EventSlide from "../components/eventSlide";
import EventList from "../components/eventList";
import HorizontalScroll from "../components/horizontalScroll";
import Preview from "../components/preview";
import DownloadModal from "../components/modals/download";
import Footer from "../components/footer";



 
const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"]
})





export default  function Home() {
 
  
  return (
    <div
      className={`absolute top-0 left-0 right-0 antialiased body text-pretty ${inter.className} `}
      style={{ backgroundColor: "#1c1c20" }}
    >
      <Navbar />
      
      <main>
        <section
          id="hero"
          className="hero relative  h-[360px] bg-gray-700 flex justify-center items-center text-white "
          style={{
            background: "url('/images/hero.jpg')",
            backgroundPosition: "70%",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full max-w-3xl text-center ">
            <h1 className={`text-[48px] font-bold  hero-text  ${inter.className}`  }>
              Find your next great experience.
            </h1>
            <p className={`pb-[32px] pt-[16px] text-[24px] font-medium  text-[#c4c4c6] ${inter.className}`}>
              Sports · Music · Shows
            </p>
            <div aria-relevant="additions" aria-expanded  autoFocus className="flex items-center justify-center max-w-md px-4 mx-auto bg-white border-gray-500 rounded-lg shadow-md hover:outline-2 outline-gray-200 ">
              <span>
              <svg width="24" height="24" fill="#000" viewBox="0 0 24 24" data-testid="search-icon"><path fillRule="evenodd" clipRule="evenodd" d="M15 10C15 12.7614 12.7615 15 10 15C7.23853 15 5 12.7614 5 10C5 7.23859 7.23853 5 10 5C12.7615 5 15 7.23859 15 10ZM14.1921 15.6064C13.0236 16.4816 11.5723 17 10 17C6.13403 17 3 13.866 3 10C3 6.13403 6.13403 3 10 3C13.866 3 17 6.13403 17 10C17 11.5723 16.4816 13.0236 15.6063 14.1922L20.3535 18.9393C20.5488 19.1346 20.5488 19.4512 20.3535 19.6464L19.6464 20.3535C19.4512 20.5488 19.1345 20.5488 18.9393 20.3535L14.1921 15.6064Z"></path></svg>
              </span>
              <input
                type="search"
                name=""
                id=""
                placeholder=" Search team, artist or venue"
                aria-disabled
                className="self-auto w-full max-w-md p-4 text-black bg-transparent h-14 focus:border-none focus:outline-none placeholder:text-gray-500 caret-2 caret-zinc-800"
              />
            </div>
          </div>
        </section>
       
        <EventSlide />

        <EventList title={"Popular Events Around You"} eventlist={["imageye/h1.jpg", "imageye/h2.jpg", "imageye/h3.jpg", "imageye/h4.jpg", "imageye/h5.jpg"]} link="/" />

        <EventList title={"Theater"} eventlist={["rea/h1.jpg", "rea/h2.jpg", "rea/h3.jpg", "rea/h4.jpg"]} link="/" />

        <EventList title={"Music"} eventlist={["rea/i1.jpg", "rea/i2.jpg", "rea/i3.jpg", "rea/i4.jpg" ]} link="/" />

       <style jsx global>
        {
          `
          .scrollContainer {
            
            scrollbar-width: none;
          }
          `
        }
       </style>
        
        <Preview />

        <Footer />

        
      </main>
    </div>
  );
}

