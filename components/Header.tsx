import React, { useState } from 'react'
import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


type Props = {}

export default function Header({}: Props) {
  const [toggleMenu, setState] = useState(false);
  const handleClick = ()=> {
    if (toggleMenu) {
      return setState(false);
    } else {
      return setState(true);
    }
  }
  return (
    <header className='bg-[transparent]  w-full px-5 py-3 z-10 '>
        <div className='flex items-center justify-between'>
        <motion.div
         className='flex space-x-5'
         initial={{x: -200}}
         animate={{x: 0}}
         transition={{duration: 0.9}}
        >
           <SocialIcon url="https://in.linkedin.com" bgColor='transparent' fgColor="red"/>
           <SocialIcon url="https://www.facebook.com" bgColor='transparent' fgColor='red'/>
           <SocialIcon url="https://www.facebook.com" bgColor='transparent' fgColor='red'/>    
        </motion.div>
        <motion.div
         initial={{x: 200}}
         animate={{x: 0}}
         transition={{duration: 0.9}}
         className='hidden space-x-20 md:inline-flex'
        >
            <a className="font-normal  font-[arial]  text-red-400" href="#projects">Projects</a>
            <a className="font-normal font-[arial] text-red-400 " href="#skills">Skills</a>
            <a className="font-normal font-[arial] text-red-400 " href="#about">About</a>
        </motion.div>
        <div className='md:hidden'>
          {toggleMenu ? <XMarkIcon className='w-8 h-8 text-white cursor-pointer' onClick={handleClick}/> : (
            <Bars3Icon className='w-8 h-8 text-white cursor-pointer' onClick={handleClick}/>
          )}
        </div>
        </div>
        <div className={toggleMenu ? 'flex flex-col space-y-2 text-center mt-3 transition-all duration-[2000ms] md:hidden' : "hidden"  }>
            <a className="font-normal  font-[arial]  text-red-400" href="#projects">Projects</a>
            <a className="font-normal font-[arial] text-red-400 " href="#skills">Skills</a>
            <a className="font-normal font-[arial] text-red-400 " href="#about">About</a>
        </div>
        
    </header>
  )
}