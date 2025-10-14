import React from 'react'
import { LiaDollyFlatbedSolid } from 'react-icons/lia'
import { TbArticle, TbChartBarPopular, TbEye, TbHome, TbMail, TbMenu2, TbSearch, TbUserCog } from 'react-icons/tb'

function Sidebar() {
  return (
    <div className='fixed left-0 w-[3.5rem] group *:duration-500 z-20
     justify-center items-center h-full p-1 space-y-1  *:hover:bg-zinc-100/50' dir='ltr'>

        <div className='flex flex-row gap-3 bg-dark opacity-70 text-white duration-200
                         cursor-pointer rounded-xl p-2 justify-center items-center shadow-sm'>
         <span className='flex w-full justify-center items-center p-1'><TbMenu2 size={20} /></span>
       </div>


       <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-200
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
         <span className=''>داشبورد </span>
         <span className='flex w-full justify-end items-center p-1'><TbHome size={22} /></span>
       </div>
                
        <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-200
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
         <span className=''>کاربران </span>
         <span className='flex w-full justify-end items-center p-1'><TbUserCog  size={22} className=''/></span>
         </div>
        <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-200
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
         <span className=''>محصولات </span>
         <span className='flex w-full justify-end items-center p-1'><LiaDollyFlatbedSolid   size={24} className=''/></span>
         </div>
        <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-200
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
         <span className=''>مقالات </span>
         <span className='flex w-full justify-end items-center p-1'><TbArticle  size={22} className=''/></span>
         </div>
        <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-200
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
         <span className=''>دسترسی </span>
         <span className='flex w-full justify-end items-center p-1'><TbEye  size={24} className=''/></span>
         </div>
        <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-200
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
         <span className=''>تیکت‌ </span>
         <span className='flex w-full justify-end items-center p-1'><TbMail  size={22} className=''/></span>
         </div>
        <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-200
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
         <span className=''>گزارشات </span>
         <span className='flex w-full justify-end items-center p-1'><TbChartBarPopular  size={22} className=''/></span>
         </div>


    </div>
  )
}

export default Sidebar