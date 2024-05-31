import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
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
  return (
   <header className='' style={{boxShadow: "0 2px 8px rgba(0,0,0,.05),inset 0 -1px 0 rgba(0,0,0,.1)", background: "#0e0e0f"}}>
        <div className=' flex justify-between items-center h-[60px] text-white px-[50px] '>
            <ul role='list' className='flex items-center *:tracking-wider gap-10 text-[14px] font-bold uppercase list-none ' style={{fontFamily: "Arial"}}>
                <li id='logo' className=' pe-4'>
                    <Image src={"/svg/logo.svg"} width={120} height={30} alt='logo' priority className='object-cover ' />
                </li>
                <li>
                    <Link href={""} as={""} className=''>Sports</Link>
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
        </div>
   </header>
  )
}

export default Navbar