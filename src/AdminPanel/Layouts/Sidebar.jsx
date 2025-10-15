import React, { useState } from 'react'
import { LiaDollyFlatbedSolid } from 'react-icons/lia'
import { TbArticle, TbBasket, TbBell, TbCategoryFilled, TbChartBarPopular, TbEye, TbHome, TbMail, TbMenu2, TbUserCog, TbX } from 'react-icons/tb'
import { Link } from 'react-router-dom';

function Sidebar() {

  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  }

  return (
    <div className='fixed left-0 top-1 w-[3.5rem] z-20 overflow-hidden
                    justify-center items-center p-1 space-y-1 ' dir='ltr'>

      <div onClick={toggleMenu} className='flex flex-row gap-3 bg-dark opacity-70 text-white duration-200
                         cursor-pointer rounded-xl hover:scale-90 p-2 justify-center items-center shadow-sm'>
        <span className='flex w-full duration-300 justify-center items-center p-1 focus:scale-50'>
          {
            toggle ?
              <TbMenu2 size={23} />
              :
              <TbX size={23} />
          }
        </span>
      </div>

      <div className={`fixed space-y-2 group w-[3rem] justify-center items-center *:hover:bg-zinc-100 duration-300 ${toggle ? ' -translate-x-20 ' : 'translate-x-0'}`}>
        <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-500
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
          <span className=''>داشبورد </span>
          <span className='flex w-full justify-end items-center p-1'><TbHome size={22} /></span>
        </div>

        <Link to="/admin/users/all" className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-500
                          cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
          <span className=''>کاربران </span>
          <span className='flex w-full justify-end items-center p-1'><TbUserCog size={22} className='' /></span>
        </Link>

        <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-500
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
          <span className=''>محصولات </span>
          <span className='flex w-full justify-end items-center p-1'><LiaDollyFlatbedSolid size={24} className='' /></span>
        </div>
        <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-500
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
          <span className=''>مقالات </span>
          <span className='flex w-full justify-end items-center p-1'><TbArticle size={22} className='' /></span>
        </div>
        <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-500
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
          <span className=''>دسترسی </span>
          <span className='flex w-full justify-end items-center p-1'><TbEye size={24} className='' /></span>
        </div>
        <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-500
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
          <span className=''>دسته‌بندی</span>
          <span className='flex w-full justify-end items-center p-1'><TbCategoryFilled size={22} className='' /></span>
        </div>
        <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-500
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
          <span className=''>گزارشات </span>
          <span className='flex w-full justify-end items-center p-1'><TbChartBarPopular size={22} className='' /></span>
        </div>
        <div className='flex flex-row gap-3 w-full overflow-clip hover:w-[10rem] bg-stone-200/30 duration-500
                        cursor-pointer rounded-xl p-2 justify-end items-center shadow-sm'>
          <span className=''>سفارشات </span>
          <span className='flex w-full justify-end items-center p-1'><TbBasket size={22} className='' /></span>
        </div>
      </div>


    </div>
  )
}

export default Sidebar