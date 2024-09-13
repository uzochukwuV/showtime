"use client";

import React, { useState } from "react";
import PreviewCard from "./previewCard";
import Image from "next/image";
import DownloadModal from "./modals/download";

const peek = [
  {
    image: "grant.svg",
    title: "Gametime Guarantee",
    subtitle:
      "We've got your back. When you buy on Gametime, your tickets will be on time and authentic - guaranteed.",
  },
  {
    image: "eye.svg",
    title: "Lower Fees, Better Prices",
    subtitle:
      "We're committed to clear, competitive pricing. If you find a lower price elsewhere, we'll make up 110% of the difference.",
  },
  {
    image: "mobile.svg",
    title: "Made for Mobile",
    subtitle:
      "Last-minute plans have never been easier. Buy tickets, send them to friends, and get into the venue - all from your phone.",
  },
];

function Preview() {
  const [pop, setPop] = useState(false);

  return (
    <>
      <DownloadModal pop={pop} setPop={setPop} />
      <section
        className="flex flex-col items-center justify-center gap-8 px-4 py-20 transition-all "
        style={{ background: "linear-gradient(180deg, #151517, #1c1c20)" }}
      >
        <div>
          <h2 className=" text-center  transition-all text-white text-[32px] md:text-[48px] font-medium">
            Your go-to app for last-minute tickets.
          </h2>
          <p className="font-medium text-[#a2a2a8] text-[16px] md:text-[24px] text-center ">
            Get the best deals on tickets to sports, music, and theater events.
          </p>
        </div>
        <div className="justify-center w-full gap-4 space-y-2 previewcard lg:flex lg:px-12">
          {peek.map((i, e) => (
            <PreviewCard
              key={e}
              image={i["image"]}
              title={i["title"]}
              subtitle={i["subtitle"]}
            ></PreviewCard>
          ))}
        </div>
      </section>

      <section className=" relative px-4 h-[326px] sm:px-8 py-6">
        <Image
          src={"/images/preview.webp"}
          alt=""
          width={1000}
          height={1000}
          className="absolute w-full top-0 right-0 left-0 bottom-0 h-full object-cover "
        />
        <div className="flex justify-center h-full items-center z-20">
          <div className=" relative flex flex-col gap-2 items-center antialiased">
            <div className="h2">
              <h2 className=" text-[48px] font-extrabold text-white ">
                Get the App
              </h2>
            </div>
            <div className="p2">
              <p className=" font-medium text-lg text-[#a2a2a2]">
                Get tickets delivered to your phone and share 
                them instantly with friends. Simple as that.
              </p>
            </div>
            <div className="button mt-4">
              <button
                onClick={() => {
                  setPop(true)
                }}
                className=" uppercase font-semibold text-sm w-72 rounded-full py-4 bg-[#19c885] text-white"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 flex justify-center gap-4">
            {
                [1,2,3,4,5,6].map((num)=> <Image src={`/svg/l${num}.svg`} height={30} width={100} key={num} alt=" " className=" h-5 w-auto object-contain" />)
            }
      </section>
    </>
  );
}

export default Preview;
