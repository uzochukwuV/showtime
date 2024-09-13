import React from 'react'

function Footer() {
  return (
    <footer className='  w-full py-16 px-4 sm:px-8 md:px-16 transition-all duration-100 bg-[#151517] '>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 2xl:grid-cols-6 2xl:max-w-6xl mx-auto   place-items-start">
            {
                footer.map((list, index)=>( <div key={index} className=' text-white pb-10 flex flex-col items-start gap-3  justify-start'>
                    {
                        list.map((el, i)=> {
                            if(i == 0) return <h3 key={i} className=' uppercase  font-bold pb-4'>{el}</h3>
                            return <p key={i} className=' font-medium text-[#a2a2a2] '>{el}</p>
                        })
                    }
                </div>))
            }
        </div>
    </footer>
  )
}

export default Footer

const footer = [
[
    "HOT EVENTS",
"Golden State Warriors",
"San Jose Sharks",
"Los Angeles Lakers",
"LA Clippers",
"Los Angeles Kings",
"Las Vegas Raiders",
"San Francisco 49ers"],

["HOT CATEGORIES",
"MLB Baseball",
"NBA Basketball",
"NFL Football",
"NHL Hockey",
"College Basketball",
"Concerts",
"Shows"],
[
    "HOT METROS",
"Los Angeles",
"SF Bay Area",
"Seattle",
"Houston",
"New York City",
"Chicago",
"Boston"],


[
    "DOWNLOAD",
"Gametime iOS App",
"Gametime Android App",
"SOCIAL",
"TikTok",
"Instagram",
"Twitter",
"Facebook",],
["COMPANY",
"About",
"Careers",
"Press Inquiries",
"Gametime Promo Codes",
"Support",
"Why Gametime",
"Sitemap",],
["POLICIES",
"Help Center",
"Gametime Guarantee",
"Price Guarantee",
"Share Codes",
"NY Registered Brokers",
"Gametime Giveaway",]

]