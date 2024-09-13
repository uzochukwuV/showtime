import React from 'react'
import EventCard from './eventCard'
import HorizontalScroll from './horizontalScroll'
import Link from 'next/link';


function EventList(props: {title: String, eventlist: string[], link: string}) {
    const {title, eventlist, link} = props;
  return (
    <section className='px-10 '>
        <div>
            <div className="header h-[100px] flex justify-between items-center">
                <div className="text-white title font-medium text-[24px]">{title}</div>
                <div className="text-white seeall">
                    <Link href={link} >See All</Link>
                </div>
            </div>
            <div className="cards">
                <div className="relative h-[400px] w-full">
                    <HorizontalScroll eventlist={eventlist} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default EventList