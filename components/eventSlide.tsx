"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import SlideItems from './slideItems'
import styles from "../pages/index.module.css"


function EventSlide() {
    const scrollRef = useRef<HTMLDivElement>()
     const [right, setRight] = useState(true);
     const [left, setLeft] = useState(true);
    useEffect(() => {
       
      return () => {
        
      }
    }, [])

    const scrollright = ()=> {
        if(scrollRef.current){
            scrollRef.current.scrollBy({
                left: 200
            })
            
          }
    }

    const scrollleft = ()=> {
        if(scrollRef.current){
            scrollRef.current.scrollBy({
                left: -200
            })
            
          }
    }
    
  return (
    <section className=' h-[65px] px-[48px] flex items-center '>
        <div className="slideTitle w-[352px] pr-[48px]">
            <div className={`flex flex-col  `}>
                <div className="text-[12px] font-bold tracking-wide text-green-500 uppercase textstart">Events In</div>
                <div className="font-bold text-[18px] text-white textend">California</div>
            </div>
        </div>
        <div className=' h-[50%] border-e'></div>
        <div className={`slider h-[64px] w-[78%] relative `} >
            <div className={`absolute z-20 w-[10%]  h-[64px] right-0 gradient  bg-gradient-to-r from-transparent  to-[#1c1c1c] `}></div>
            <div className=' flex flex-row h-[100%] z-10 w-full'>
                <div className="hidden w-full scrollin-header"></div>
                    <div className={`flex items-center w-full overflow-y-hidden `}>
                        <div className="flex arrow-left">
                            {
                                left && (
                                    <button onClick={scrollleft} className=' border-none outline-none flex select-none relative w-[25px] z-20 m-[8px] bg-[#1c1c20] transition-colors uppercase  ' aria-label='show more'>
                                <Image src={"/svg/arrow-right.svg"} height={20} width={20} alt='' />
                            </button>
                                )
                            }
                        </div>
                        <div ref={scrollRef} className="scroller  -m-[16px] flex overflow-x-scroll overflow-y-auto transition-all duration-300 h-max w-full" style={{scrollbarWidth: "none"}}>

                            {
                                [
                                    "Atlanta United",
                                    "Atlanta Braves",
                                    "Atlanta Falcons",
                                    "Atlanta Dream",
                                    "Copa America",
                                    "Gwinnett Stripers",
                                    "Monster Jam",
                                    "Savannah Bananas",
                                    "Atlanta Open",
                                    "Leagues Cup Showcase",
                                    "Quaker State 400",
                                    "NCAA Basketball",
                                    "CFP National Championship",
                                    "UGA Baseball",
                                    "Champs Basketball",
                                    "PBR: Professional Bull Riders",
                                   ' Chelsea FC',
                                   " MEAC/SWAC Football",
                                    "Peach Bowl",
                                   " SEC Football",
                                    "UGA Football",
                                    "GT Football",
                                    "GST Football",
                                    "WWE",
                                  "GSU Football",
                                    "MERC Football",
                                   " KENN Football",
                                    "Gold Over America Tour",
                                    "NASCAR Xfinity Series",
                                    "The Tour Championship"
                                    ].map((e, i)=> <SlideItems text={e} key={i} ></SlideItems>)
                            }
                        </div>
                        <div className="flex arrow-right">
                            {
                                right && (
                                    <button onClick={scrollright} className=' border-none  outline-none flex select-none relative w-[25px] z-20 m-[8px] bg-[#1c1c20] transition-colors uppercase  ' aria-label='show more'>
                                <Image src={"/svg/arrow-left.svg"} height={20} width={20} alt='' />
                            </button>
                                )
                            }
                        </div>
                    </div>
                <div className="hidden w-full scrollin-header"></div>
            </div>
            <div className={`absolute z-10 w-[10%] top-0  h-[64px] left-0 gradient bg-gradient-to-r to-transparent from-[#1c1c1c] `}></div>
        </div>
    </section>
  )
}

export default EventSlide