import React, { Suspense } from "react";
import Image from "next/image";
import ECardSkeleton from "./loading/eventcard_loading";


function EventCard(props: {image: string}) {
  const {image} = props;

  
  return (
   
      <div className=" relative w-[324px] mr-8 h-[328px] rounded-t-[8px] bg-[#27272a] z-10 shadow-sm  ">
      <div className="flex flex-col h-full">
        <div className="flex-1 image">
          <Image
            src={`/${image}`}
            alt=""
            width={1000}
            height={1000}
           
            className="object-cover h-full rounded-t-[8px] "
          />
        </div>
        <div className="text h-[104px] px-4 py-2 flex  flex-col justify-center items-start ">
            <div className="title text-[16px] font-bold text-white">Washinton Nations @ Atlanta Braves</div>
            <div className="text-sm subtitle text-[#8b8b90] pb-2"> Subtitle</div>
            <div className="price text-[16px] font-medium text-[#19cb85]">$40</div>
        </div>
      </div>
    </div>
    
  );
}

export default EventCard;
