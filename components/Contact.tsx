import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';

type Props = {}

export default function Contact({}: Props) {
  const [state, handleSubmit] = useForm("mjvdbaqq");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit2 = (event: any) => {
    handleSubmit
    event.preventDefault();
    // submit form data to server or perform other actions
    // ...
    // reset form fields
    // event.target.reset();
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='relative w-full h-screen mt-[10rem] lg:mt-[20rem]' id='contact'>
        <div className='div'>
         <h1 className='header'>CONTACT ME</h1>
        </div>
        <div className='relative top-[10rem] flex justify-center items-center w-full'>
         <form onSubmit={(e) => {
              handleSubmit(e);
              handleSubmit2(e);
             }}  
             className="cursor-pointer flex flex-col items-center justify-center md:w-[30%] p-5 rounded-md">
            <input 
             type="text"
             id='name'
             name="name"
             value={formData.name}
             placeholder='name'
             onChange={handleChange}
             className='mb-4 text-center w-full h-[30px] p-5 max-w-[600px] outline-0 border-none rounded-sm' 
             />
            <input
              id="email"
              type="email" 
              name="email"
              value={formData.email}
              placeholder='email'
              onChange={handleChange}
              className='mb-4 text-center w-full h-[30px] p-5 max-w-[600px] outline-0 border-none rounded-sm'
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              placeholder='your message'
              onChange={handleChange}
              className='mb-4 text-center w-full h-[3rem] p-5 max-w-[600px] outline-0 border-none overflow-hidden rounded-sm' 
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}
              className='px-20 py-3  overflow-y-hidden text-center
              hover:text-white text-[1rem] hover:text-[1.01rem] font-[500] hover:bg-red-400 transition-all ease-in-out 
              text-red-400 border border-red-400 mt-10 lg:mt-10 animate-pulse rounded-sm'>
              Submit
            </button>
          </form>
        </div>
    </div>
  )
}