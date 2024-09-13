"use client"
import Image from "next/image";
import React, { useState } from "react";

function DownloadModal(props: {pop: boolean, setPop: (x:boolean)=> void }) {
    const {pop, setPop} = props

    return (
    <section className={` fixed top-0 transition-all duration-100 ease-out right-0 left-0 bottom-0 bg-black/70 z-50 ${pop ? " opacity-1": "opacity-0 hidden"} `}>
      <div className="relative h-full w-full">
        <div className={`absolute top-0 left-0 right-0 bottom-0 ${pop ? "": "hidden"} `} onClick={()=>setPop(false)}></div>
        <div className={` absolute w-full space-y-4 top-[50%] max-w-[440px] transition-all duration-200 bg-[#1c1c28] left-[50%] -translate-x-[50%] p-6 -translate-y-[50%]  ${pop ? " scale-100": " scale-0"}  `}>
            <div className="cancel flex justify-end pb-4">
                <button className=" bg-transparent outline-none border-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="close-line-icon"><path fillRule="evenodd" clipRule="evenodd" d="M5.64637 17.6464C5.45111 17.4511 5.45111 17.1346 5.64637 16.9393L16.9393 5.6464C17.1345 5.45114 17.4511 5.45114 17.6464 5.6464L18.3535 6.35351C18.5487 6.54877 18.5487 6.86535 18.3535 7.06061L7.06059 18.3535C6.86532 18.5488 6.54874 18.5488 6.35348 18.3535L5.64637 17.6464Z" fill="#FFFFFF"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.35348 5.64649C6.54874 5.45123 6.86532 5.45123 7.06058 5.64649L18.3535 16.9394C18.5487 17.1346 18.5487 17.4512 18.3535 17.6465L17.6464 18.3536C17.4511 18.5489 17.1345 18.5489 16.9393 18.3536L5.64637 7.06071C5.45111 6.86544 5.45111 6.54886 5.64637 6.3536L6.35348 5.64649Z" fill="#FFFFFF"></path></svg>
                </button>
            </div>
            <div className="app-icon">
                <Image src={"/images/appicon.png"} width={1000} height={1000} alt="app icon" className=" w-16 h-16 mx-auto rounded-xl object-cover" />
            </div>
            <div className="text text-center antialiased">
                <h1 className=" font-bold text-[24px] text-white ">Get the App</h1>
                <p className=" font-medium text-[#a2a2a2] max-w-[340px] mx-auto pb-4 border-b-2 border-b-black px-4 ">Just enter your phone number and we'll
send you a link.</p>
            </div>
            <div className="input">
                <label htmlFor="phone" className=" text-sm text-[#a2a2a2]">Phone Number</label>
                <div className=" border bg-transparent h-14 rounded-md ">
                    
                </div>
            </div>
            <div className="button mt-4">
                    <button className=' font-semibold text-sm w-full rounded-full py-4 bg-[#19c885] text-white'>Send Link</button>
            </div>
            <div className="py-4">
                <p className="text-xs text-center font-medium text-white/55">Available for free on the <span className="text-white">App Store</span> and <span className="text-white"> Google Play</span> .</p>
            </div>
        </div>
      </div>
    </section>
  );

              
}

export default DownloadModal;
