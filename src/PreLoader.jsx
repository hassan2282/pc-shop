import React from 'react'

function PreLoader() {
  return (
    <div className='flex justify-center items-center bg-[#333] absolute w-screen h-screen backdrop-blur-lg'>
        <span className='absolute rounded-full w-[20px] h-[20px] border-b-3 border-b-lime-500 animate-spin'></span>
        <span className='absolute rounded-full w-[50px] h-[50px] border-b-3 border-b-lime-500 animate-spin'></span>
        <span className='absolute rounded-full w-[100px] h-[100px] border-b-3 border-b-lime-500 animate-spin'></span>
        <span className='absolute rounded-full w-[150px] h-[150px] border-b-3 border-b-lime-500 animate-spin'></span>
        <span className='absolute rounded-full w-[200px] h-[200px] border-b-3 border-b-lime-500
        shadow-xl shadow-lime-500
        '></span>
    </div>
  )
}

export default PreLoader