import React from 'react'
import Typewriter from 'typewriter-effect';

type Props = {}

export default function Main({}: Props) {
  
  return (
    <div className="relative items-center justify-center space-y-10 h-screen bg-[#1E1E1E] ">
      <div className='h-[24rem] xl:h-[28rem] mt-[3vh] md:mt-[5vh] xl:mt-[5vh] bg-[#1E1E1E]'>
       <h1 className='text-[3rem] md:text-[4rem] xl:text-[6rem] font-[6rem] cursor-s-resize text-left  ml-8 overflow-hidden'>
        <Typewriter
        onInit={(typewriter) => {
        
        typewriter.typeString(
        "<span class=' text-white tracking-wider'>Hello,</span><br>\
         <span class='-mt-10 text-white'>I'm <span class='text-red-400 text-[4.5rem]'\
         >S</span>oovik,</span><br>\
         <span class='-mt-32  text-white'>Full Stack Web <span>Developer</span></span>")
       
       .pauseFor(250)
       
       .start();
       }}
      />
      </h1>
      </div>
       
       <a href="#contact">
         <button className='ml-8 button'
          >Contact Me
         </button>
       </a>
      
      </div>
      
      
  )
}