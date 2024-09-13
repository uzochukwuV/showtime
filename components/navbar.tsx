import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


import { useQuery, gql } from "@apollo/client";


export const POSTS_QUERY = gql`
query{
  events {
    id,
    name
  }
}
`;

function Navbar() {

    const offset = 1;
  const { loading, error, data, fetchMore } = useQuery(POSTS_QUERY);
    async function getLogin() {
        const getlg = await fetch("/api/auth/login", {
            method: "POST",
            credentials: "include",
            headers:  {
                Authorization: `JWT bearer `,
                'Content-Type': 'application/json',
              },
              cache: 'no-store',
              body: JSON.stringify({
                query: {na:"na"},
              }),
        });
        if(getlg.ok){
            console.log("OK");
            const res = await getlg.json()
            console.log(res);
            
            
            
        }

        
    }

    if (loading) return <p className=' text-white'>Loading...</p>;
    if (error) return <p className=' text-white'>Error : {error.message}</p>;

    console.log(data);
    
  return (
   <header className='' style={{boxShadow: "0 2px 8px rgba(0,0,0,.05),inset 0 -1px 0 rgba(0,0,0,.1)", background: "#0e0e0f"}}>
        <div className=' flex justify-between items-center h-[60px] text-white px-6 md:px-[50px] relative '>
        <Image src={"/svg/logo.svg"} width={120} height={30} alt='logo' priority className='object-cover md:hidden' />
            <ul role='list' className='md:flex hidden items-center *:tracking-wider gap-10 text-[14px] font-bold uppercase list-none ' style={{fontFamily: "Arial"}}>
                <li id='logo' className=' pe-4'>
                    <Image src={"/svg/logo.svg"} width={120} height={30} alt='logo' priority className='object-cover ' />
                </li>
                <li>
                    <div className=''>Sports</div>
                </li>
                <li>
                    <Link href={""} as={""}>Music</Link>
                </li>
                <li>
                    <Link href={""} as={""}>Shows</Link>
                </li>
            </ul>
            <div>
                <button onClick={()=> getLogin()} className=' bg-[#1c1c20] font-bold rounded-md gap-1 justify-center border-[#27272a] border items-center flex h-[40px] px-[12px] py-[4px] '>
                    <Image src={"/svg/profile.svg"} width={24} height={24} alt='logo' priority /> <p className='pb-1 '>Log In</p>
                    </button>
            </div>
            <div className="absolute top-[100%] left-0 right-0 hidden  z-50 bg-[#303030]">
                <div className="relative">
                        <div className="relative h-[56vh] flex flex-col">
                        <div className='h-16 tags flex gap-6 px-48 *:font-semibold  border-b border-b-black items-center'>
                            <div className="tag active text-green-400 h-full px-1 flex items-center " >MLB</div>
                            <div className="tag h-full px-1 flex items-center hover:bg-green-500">NBA</div>
                            <div className="tag h-full px-1 flex items-center">NFL</div>
                            <div className="tag h-full px-1 flex items-center">NHL</div>
                            <div className="tag h-full px-1 flex items-center">MLS</div>
                            <div className="tag h-full px-1 flex items-center">NCAA</div>
                            <div className="tag h-full px-1 flex items-center">OTHER</div>
                        </div>
                        <div className='flex-1 px-44 relative'>
                            <div className="grid grid-cols-5 gap-1 *:text-ellipsis py-4">
                                <div className="items hover:opacity-50 hover:bg-[#404040] text-[14px] font-medium px-4 py-3 rounded-lg">Arizonal Diagonals</div>
                                <div className="items hover:opacity-50 hover:bg-[#404040] text-[14px] font-medium px-4 py-3 rounded-lg">Arizonal Diagonals</div>
                                <div className="items hover:opacity-50 hover:bg-[#404040] text-[14px] font-medium px-4 py-3 rounded-lg">Arizonal Diagonals</div>
                                <div className="items hover:opacity-50 hover:bg-[#404040] text-[14px] font-medium px-4 py-3 rounded-lg">Arizonal Diagonals</div>
                                <div className="items hover:opacity-50 hover:bg-[#404040] text-[14px] font-medium px-4 py-3 rounded-lg">Arizonal Diagonals</div>
                            </div>

                         
                        </div>
                        <div className='h-16 border-t border-t-black bg-[#404040] relative'>
                            <div className="flex justify-center items-center h-full">See all MLB Basket ball tickets</div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
   </header>
  )
}

export default Navbar