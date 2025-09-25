import React, { useState } from 'react'
import { EyeOff, Eye } from 'lucide-react'
import  Lottie from "lottie-react"
import Login from "../lottie/Login.json"
const Signin = () => {
  const [seen, setSeen] = useState()
  const [formData, setFormdata] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData)
    
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 p-6'>
      {/* Left Section */}
      <div className='hidden md:flex flex-col items-center justify-center mr-10'>
        <Lottie
        animationData={Login}
        loop={true}

        />
      </div>

      {/* Signin Box */}
      <div className='bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-200'>
        <h1 className='text-2xl font-bold text-gray-800 mb-2 text-center'>
          Welcome Back 👋
        </h1>
        <p className='text-sm text-gray-500 mb-6 text-center'>
          Sign in to continue to your account
        </p>

        <form className='flex flex-col gap-5' onSubmit={(e)=> handleSubmit(e)}>
          {/* Email */}
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='email'
              className='text-sm font-semibold text-gray-700'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              name='email'
              onChange={e => handleChange(e)}
              value={formData.email}
              placeholder='Enter your Email'
              className='px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none'
            />
          </div>

          {/* Password */}
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='password'
              className='text-sm font-semibold text-gray-700'
            >
              Password
            </label>
            <input
              id='password'
              name='password'
              onChange={e => handleChange(e)}
              value={formData.password}
              placeholder='Enter your Password'
              type={seen ? 'text' : 'password'}
              className='px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none'
            />
            {seen ? (
              <Eye onClick={() => setSeen(!seen)} />
            ) : (
              <EyeOff onClick={() => setSeen(!seen)} />
            )}
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200'
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <div className='flex justify-between mt-4 text-sm text-gray-500'>
          <a href='#' className='hover:text-indigo-600'>
            Forgot Password?
          </a>
          <a href='#' className='hover:text-indigo-600'>
            Create Account
          </a>
        </div>
      </div>
    </div>
  )
}

export default Signin
