import { div } from 'motion/react-client'
import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'

function Adm_product_show() {
  
  return (
    <div className='relative flex w-full h-full justify-center items-center'>
      <div className='flex flex-row w-[80%] h-full bg-white/30 rounded-xl backdrop-blur-sm justify-between p-5'>
        <div className='flex basis-1/3 flex-col border border-white/40 bg-white/30 w-[30%] space-y-3 rounded-xl p-2'>
          <img src='../../../src/StorePanel/assets/img/product_img/p_9.jpg' className='rounded-xl bg-white/40 w-[20rem] shadow-sm shadow-zinc-400' />
          <div className='grid grid-cols-4 gap-3 *:rounded-xl *:shadow-sm *:shadow-zinc-500 *:hover:shadow-lg *:hover:-translate-y-2 *:cursor-pointer *:duration-300'>
            <img src="../../../src/StorePanel/assets/img/product_img/p_1.jpg" className='' />
            <img src="../../../src/StorePanel/assets/img/product_img/p_6.jpg" className='' />
            <img src="../../../src/StorePanel/assets/img/product_img/p_3.jpg" className='' />
            <img src="../../../src/StorePanel/assets/img/product_img/p_5.jpg" className='' />
          </div>
        </div>


        <div className='flex basis-2/3 flex-col p-4 w-full h-full'>
          <h1 className='text-3xl p-2 text-zinc-600'>گوشی شیائومی پوکو M3</h1>

          <div className='flex flex-row relative h-20 mt-4 text-zinc-700 justify-center items-center'>
            <hr className='w-full absolute z-10 text-zinc-400' />
            <h3 className='rounded-full bg-blue-500 backdrop-blur-lg p-2 z-20 text-sm text-white/80'>کارت گرافیک 8 گیگ با 32 گیگ رم و 2 هسته ای</h3>
          </div>

          <ul className='grid grid-cols-2 p-3 self-around gap-1 text-zinc-700 *:list-disc'>
            <li>
              <span> رنگ </span>
              : زرد
            </li>
            <li>
              <span> بلوتوث </span>
              : دارد
            </li>
            <li>
              <span> رزولوشن  </span>
              : 12 مگاپیکسل
            </li>
            <li>
              <span> اندازه   </span>
              : 6.1
            </li>
            <li>
              <span> قابلیت  </span>
              : ضد آب
            </li>
            <li>
              <span> سیستم عامل </span>
              : iOS 15
            </li>
            <li>
              <span> فناوری  </span>
              : Super Retina XDR OLED
            </li>
            <li>
              <span> فناوری  </span>
              : IRblaster
            </li>

          </ul>

          <div className='flex flex-row justify-start items-center space-x-2 w-full mt-15 text-zinc-700'>
            <TbTruckDelivery size={25} className='text-zinc-800' />
            <span className='text-lg text-zinc-800'>زمان ارسال محصول : </span> پس از 2 روز کاری
          </div>

          <hr className='text-zinc-400 mt-3' />

          <div className='grid grid-cols-2 gap-2 h-[13rem] '>
            <div className='p-2 grid grid-rows-3'>
              <div className='grid grid-cols-2 row-span-1'>
                <span className='p-1 text-rose-800 text-lg line-through'>1.599.000 تومان</span>
                <span className='p-1 text-center rounded-full text-xl bg-blue-500/20 text-blue-600 '>1.180.000 تومان</span>
              </div>
              <div className='row-span-2 flex justify-center items-center'>
                <button className='rounded-full active:scale-75 w-[70%] h-10 duration-300 bg-blue-500 text-blue-100 hover:scale-110 cursor-pointer'>افزودن به سبد خرید</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Adm_product_show