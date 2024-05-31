import Link from 'next/link'
import React from 'react'


function SlideItems(props: {text: string}) {
  return (
    <div>
        <Link href="">
            <div className="items-center hover:bg-[#27272a] text-[#c4c4c8] flex justify-center border border-[#c4c4c8] bg-[#1c1c20] mr-[6px] px-4 h-10 rounded-[20px] ">
                <span className=' tracking-[0px] overflow-ellipsis whitespace-nowrap font-medium text-[14px] text-[#e4e4e6] '>{props.text}</span>
            </div>
        </Link>
    </div>
  )
}

export default SlideItems