import Image from 'next/image'
import React from 'react'


const peek = [
    {
        image: "grant.svg",
        title: "Gametime Guarantee",
        subtitle: "We've got your back. When you buy on Gametime, your tickets will be on time and authentic - guaranteed."
    },
    {
        image: "eye.svg",
        title: "Lower Fees, Better Prices",
        subtitle: "We're committed to clear, competitive pricing. If you find a lower price elsewhere, we'll make up 110% of the difference."
    },
    {
        image: "mobile.svg",
        title: "Made for Mobile",
        subtitle: "Last-minute plans have never been easier. Buy tickets, send them to friends, and get into the venue - all from your phone."
    }
]



function PreviewCard(props= peek[0]) {
    const {image, title, subtitle} = props;
  return (
    <div className='flex items-center shadow-md lg:max-w-[350px] transition-all duration-100 lg:justify-between lg:h-[300px] rounded-sm lg:flex-col lg:items-start   bg-[#1c1c20]  py-8 px-4 lg:px-6 lg:py-10 sm:gap-8 gap-4 w-full antialiased '>
        <div className="w-24 previewimg">
            <Image src={`/svg/${image}`} width={48} height={48} alt='' className='object-cover h-[48px] w-[48px] ' />
         </div>
         <div>
            <h2 className=' text-lg sm:text-[22px]  font-bold mb-2 text-white'>
                {title}
            </h2>
            <p className=' text-pretty   text-[#8b8b90]'>{subtitle}</p>
         </div>
    </div>
  )
}

export default PreviewCard