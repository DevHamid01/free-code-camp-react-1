import React from 'react'
import reactLogo from '../assets/react.svg'

const Header = () => {
  return (
    <div className='na flex items-center h-20 bg-black p-3'>
         <img className='m-2' src={reactLogo} alt="React Logo" />
         <h1 className='text-2xl text-blue-500'>ReactFacts</h1>
    </div>
  )
} 

export default Header