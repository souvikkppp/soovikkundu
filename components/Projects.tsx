import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export default function Projects({}: Props) {
  const router = useRouter()
  return (
    <div id='projects' className='bg-[#1E1E1E] mt-[10rem] relative items-center mx-auto w-full h-screen justify-evenly z-0 max-w-full '>
          <div className='div'>
            <h1 className='header'>PROJECTS</h1>
          </div>
          <div className='absolute top-[8rem] xl:top-[10rem]  items-center text-center justify-center w-full z-[1] bg-transparent'>
            <Image height={400} width={400} src="/project.png" alt=''
             className='mx-auto overflow-hidden'/>
            <h1 className='text-white font-bold text-[3rem] lg:text-[5rem] xl:text-[6rem] '>Case study: Amazon clone.</h1>
            <p className='mt-4 text-white lg:text-3xl xl:text-5xl'>In this Amazon clone project, I build an Amazon clone site with google 
              sign in using next-auth, firebase google authentication, redux and more...
            </p>
            <button onClick={() => router.push("/projectPage")} className='px-20 py-3 ml-8 overflow-y-hidden text-center
              hover:text-black text-[1rem] hover:text-[1.01rem] font-[500] hover:bg-white transition-all ease-in-out 
              text-white border border-white lg:mt-16 animate-pulse mt-10 rounded-sm'
              >More projects</button>
          </div>
          <div className='w-full absolute top-[20rem] bg-red-500 h-[30rem] -skew-y-12'></div>
    </div>
  )
}