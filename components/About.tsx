import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='relative w-full h-screen mt-[10rem] lg:mt-[20rem]' id='about'>
    <div className='div'>
        <h1 className='header'>ABOUT</h1>
    </div>
    <div className='relative top-[10rem] lg:top-[15rem] z-10'>
      <h1 className='mx-10 text-xl font-semibold tracking-[0.1rem] text-white lg:text-5xl xl:text-7xl'>I am a self-taught full-stack web developer skillful in 
       both front-end and back-end web development. I am passionate about building beautiful and user-friendly websites that are easy to use and navigate. In my free time, I enjoy 
       staying up-to-date on the latest web development trends and technologies.</h1>
    </div>
    <div className='w-full absolute top-[15rem] bg-red-500 h-[30rem] -skew-y-12'></div>

</div>
  )
}