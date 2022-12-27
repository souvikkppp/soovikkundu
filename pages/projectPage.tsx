import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export default function ProjectPage({}: Props) {
    const router = useRouter()
  return (
    <div className='bg-[#1E1E1E] z-[-1] scrollbar-hide w-full h-auto xl:h-screen'>
        <div className='absolute w-full text-center top-20'>
            <h1 className='header'>PROJECTS</h1>
        </div>
        <div className='relative top-[8rem] p-5 text-white' onClick={() => router.push("/")}>
            <h1 className='cursor-pointer hover:text-red-500'>Back to home</h1>
        </div>
        <div className='relative top-[10rem] items-center justify-center w-full space-y-10 overflow-hidden h-auto '>
            <div className='p-5 md:space-x-5 md:flex'>
             <Image src="/amazon.PNG" height={400} width={400} alt='' className='rounded-lg '/>
             <div className='space-y-2 text-white'>
                <h1 className='mt-4 text-white lg:text-3xl xl:text-5xl'>Case study: Amazon clone</h1>
                <p>In this Amazon clone next.js project, I build an Amazon clone site with google 
                 sign in using next-auth, firebase google authentication, redux, data fetching using api then used as server side props,  dynamic pages for each product</p>
                 <button className='button' onClick={()=> router.push("https://amazon-clone-3-kappa.vercel.app")}>View site</button>
                 <button className='button' onClick={()=> router.push("https://github.com/souvikkppp/amazon-clone_v3")}>Source code</button>
             </div>
            </div>
            <div className='bg-[#1E1E1E] md:space-x-5 md:flex p-5'>
             <Image src="/netflix.PNG" height={400} width={400} alt='' className='rounded-lg '/>
             <div className='space-y-2 text-white'>
                <h1 className='mt-4 text-white lg:text-3xl xl:text-5xl'>Case study: Netflix clone</h1>
                <p>In this netflix clone react project, I build an netflix clone site using firebase  
                 sign in method email and password, redux ,axios, the movie db api for latest movies</p>
                 <button className='button' onClick={()=> router.push("https://netflix-clone2-d2973.web.app")}>View site</button>
                 <button className='button' onClick={()=> router.push("https://github.com/souvikkppp/netflix-clone")}>Source code</button>
             </div>
            </div>
            <div className='bg-[#1E1E1E] md:space-x-5 md:flex p-5 pb-2'>
             <Image src="/bbc.PNG" height={400} width={400} alt='' className='rounded-lg '/>
             <div className='space-y-2 text-white '>
                <h1 className='mt-4 text-white lg:text-3xl xl:text-5xl'>Case study: Bbc clone</h1>
                <p>In this Bbc clone next.js project, I build an  clone site with google 
                 sign in using next-auth, firebase google authentication, dynamic routing and dynamic page creation and more...</p>
                 <button className='button' onClick={()=> router.push("https://bbc-clone-five.vercel.app")}>View site</button>
                 <button className='button' onClick={()=> router.push("https://github.com/souvikkppp/bbc-clone")}>Source code</button>
             </div>
            </div>
        </div>
    </div>
  )
}