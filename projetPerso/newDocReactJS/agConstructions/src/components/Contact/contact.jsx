import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// yarn remove react-hook-form zod @hookform/resolvers 

// yarn add react-hook-form zod @hookform/resolvers 
const PHONE_REGEX =
  /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/gm

const contactSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  message: z.string().trim().min(30).max(5000),
  phone: z.string().regex(PHONE_REGEX)
})

function contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      phone: ''
    }
  })

  const sendContactMessage = async (payload) => {
    console.log(payload)
    try {
      const response = await fetch("http://localhost:3005/contact", {
        body: JSON.stringify(payload),
        method: 'POST'
      })

      console.log('Everything good !')
    } catch (error) {
      console.error(error)
    }
  }


  return <form onSubmit={handleSubmit(sendContactMessage)} className="flex flex-col gap-6 p-8">
    <div className="relative">
      <label
        htmlFor="name"
        className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
      >
        Name
      </label>
      <input
        {...register('name')}
        id="name"
        placeholder="Name"
        type="text"
        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
      />
      {errors.name ? <span className="text-red font-sm">{errors.name}</span> : null}
    </div>

    <div className="relative">
      <label
        htmlFor="email"
        className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
      >
        Email
      </label>
      <input
        {...register('email')}
        id="email"
        placeholder="Email"
        type="text"
        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
      />
      {errors.email ? <span className="text-red font-sm">{errors.email}</span> : null}

    </div>

    <div className="relative">
      <label
        htmlFor="message"
        className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
      >
        Message
      </label>
      <input
        {...register('message')}
        id="message"
        placeholder="Message"
        type="text"
        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
      />
      {errors.message ? <span className="text-red font-sm">{errors.message}</span> : null}

    </div>

    <div className="relative">
      <label
        htmlFor="phone"
        className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
      >
        Téléphone
      </label>
      <input
        {...register('phone')}
        id="phone"
        placeholder="Téléphone"
        type="text"
        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
      />
      {errors.phone ? <span className="text-red font-sm">{errors.phone}</span> : null}

    </div>


    <button
      type="submit"
      className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease cursor-pointer"
    >
      Envoyer
    </button>
  </form>;
}

export default contact;
