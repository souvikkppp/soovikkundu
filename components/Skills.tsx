import React from 'react'

type Props = {}

export default function Skills({}: Props) {
  const skills = ["html","css","java script","react","next.js","redux",
   "tailwind.css","bootstrap","j-query","node.js","express.js","mongo db",
   "mongoose","sql","lodash","git","github","rest","ejs","more.."]
  return (
    <div className='relative w-full h-auto xl:h-screen mt-[10rem] lg:mt-[20rem]  items-center justify-center' id='skills'>
        <div className='div'>
            <h1 className='header'>SKILLS</h1>
        </div>
        <div className='relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-8 top-[10rem] lg:top[20rem]'>
          {skills.map((skill: any, i: any) => (
          <div key={i} className="m-3 h-[6rem] w-[6rem] rounded-full bg-white flex items-center justify-center shadow-md drop-shadow-lg shadow-red-800">
           <h1 className="my-auto text-lg font-bold">{skill}</h1>
          </div>
          ))}
        </div>
        
    </div>
  )
}