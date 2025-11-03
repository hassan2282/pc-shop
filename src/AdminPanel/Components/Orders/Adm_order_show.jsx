import { motion } from 'motion/react'
import { FaCalendar, FaCalendarDay, FaPhoneSquare, FaUser } from 'react-icons/fa'
import { MdMarkEmailRead } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Adm_order_show() {
  return (
    <motion.div
      initial={{
        y: 20,
        scale: 0.9,
        opacity: 0
      }}
      animate={{
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.8,
        }
      }}
      className='flex relative mt-2 min-md:grid min-md:grid-cols-4 mr-10 justify-center items-start min-lg:w-[90%] w-full z-20 
                rounded-xl gap-4 max-md:space-y-3' dir="ltr">


      {/* start profile section */}
      <div className='flex flex-col w-full justify-center pb-3 sticky top-17 rounded-4xl
                          shadow-[0_2px_1px_#3333] items-center col-span-1
                            backdrop-blur-lg bg-white/40'>

        <div className='relative flex flex-col w-full justify-center items-center'>
          <h2 className='absolute text-2xl text-white p-1 rounded-xl backdrop-blur-lg translate-y-15'>نرگس محمدی</h2>
          <img src='../../../src/StorePanel/assets/img/profile_2.jpg' className='rounded-3xl w-full max-h-[17rem]' />
          <div className='absolute grid grid-cols-2 bottom-0 bg-blue-100 translate-y-7 backdrop-blur-xl
                          w-[80%] p-2 rounded-full justify-center items-center shadow-2xs shadow-blue-300'>
            <div className='flex flex-col border-r border-blue-700 text-sm justify-center items-center text-zinc-600'>
              <span className='text-[0.8rem]'>5.200.000</span>
              <span className='text-[0.8rem]'>مجموع خرید</span>
            </div>
            <div className='flex flex-col text-sm justify-center items-center text-zinc-600'>
              <span className='text-[0.8rem]'>1404/07/11</span>
              <span className='text-[0.8rem]'>تاریخ ثبت‌ نام</span>
            </div>
          </div>
        </div>
        <div className='relative my-7 w-full p-3' dir='rtl'>
          <ul className='flex flex-col *:flex *:flex-row *:gap-2 *:justify-between *:items-center *:w-full
                      *:rounded-xl *:p-2 text-zinc-700 text-[0.8rem]' dir='rtl'>
            <li><MdMarkEmailRead size={20} className='text-blue-600' />taghavey.hassan@gmail.com</li>
            <li><FaUser size={20} className='text-blue-600' />photoshopbaz98</li>
            <li><FaPhoneSquare size={20} className='text-blue-600' />09170249855</li>
            <li><FaCalendarDay size={20} className='text-blue-600' />1403/07/14</li>
          </ul>
        </div>
        <div className='absolute mt-4 bottom-0 justify-items-center text-zinc-200 w-full *:flex
         *:flex-row *:items-center *:justify-center *:rounded-2xl hover:scale-97 duration-200 *:translate-y-4
          *:active:scale-95 *:w-full *:px-3 *:py-1 cursor-pointer group *:shadow-sm '>
          <Link to="/admin/user/show" className='w-full bg-blue-500 duration-200 h-12'>اطلاعات کاربر</Link>
        </div>
      </div>

      {/* end profile section */}









      <div className='scrollbar-hidden snap-y snap-mandatory relative grid grid-cols-2 col-span-3 mr-5 max-h-[33rem] overflow-y-scroll gap-3'>
        <div class="flex flex-col snap-start snap-always relative backdrop-blur-sm bg-white/10 group rounded-3xl overflow-clip 
        h-[16rem] shadow-sm shadow-zinc-500 cursor-pointer">
          <span className='absolute bg-red-500/80 w-7 h-7 text-center text-white rounded-full p-1 top-1 right-1 z-30'>10</span>
          <img className='absolute top-3 right-3 shadow-xs z-20 shadow-zinc-500 w-[8rem] rounded-2xl'
            src='../../../src/StorePanel/assets/img/product_img/p_9.jpg' />
          <span className='absolute w-2 h-2 rounded-xl z-10 group-hover:top-0
           group-hover:left-0 group-hover:rounded-xl group-hover:w-full 
          group-hover:h-full  duration-300 bg-blue-800/20'></span>
          <div class="px-6 py-8 sm:p-10 sm:pb-6 z-20">
            <div class="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 class="text-lg font-medium tracking-tighter text-white lg:text-xl">
                  گوشی پوکو X3
                </h2>
                <p class="mt-2 text-sm text-gray-100">8 گیگ رم و 120 هرتز</p>
              </div>
              <div class="mt-6">
                <p>
                  <span class="text-3xl font-light tracking-tight text-white">
                    12,700,000
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="flex px-6 pb-8 sm:px-8 z-20 mt-4">
            <a aria-describedby="tier-starter" class="items-center justify-center w-full px-6 py-2.5 text-center text-zinc-600
             duration-200 bg-white/90 hover:scale-102 rounded-full nline-flex active:scale-98
               focus:outline-none shadow-sm shadow-zinc-500 active:shadow-none hover:bg-blue-800 hover:text-white
               focus-visible:outline-white text-sm focus-visible:ring-white" href="#">
              حذف از سبد خرید
            </a>
          </div>
        </div>

        <div class="flex flex-col snap-start snap-always relative backdrop-blur-sm bg-white/10 group rounded-3xl overflow-clip 
        h-[16rem] shadow-sm shadow-zinc-500 cursor-pointer">
          <span className='absolute bg-red-500/80 w-7 h-7 text-center text-white rounded-full p-1 top-1 right-1 z-30'>2</span>
          <img className='absolute top-3 right-3 shadow-xs z-20 shadow-zinc-500 w-[8rem] rounded-2xl'
            src='../../../src/StorePanel/assets/img/product_img/p_7.jpg' />
          <span className='absolute w-2 h-2 rounded-xl z-10 group-hover:top-0
           group-hover:left-0 group-hover:rounded-xl group-hover:w-full 
          group-hover:h-full  duration-300 bg-blue-800/20'></span>
          <div class="px-6 py-8 sm:p-10 sm:pb-6 z-20">
            <div class="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 class="text-lg font-medium tracking-tighter text-white lg:text-xl">
                  Iphone 17 pro
                </h2>
                <p class="mt-2 text-sm text-gray-100">8 گیگ رم و 120 هرتز</p>
              </div>
              <div class="mt-6">
                <p>
                  <span class="text-3xl font-light tracking-tight text-white">
                    85,100,000
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="flex px-6 pb-8 sm:px-8 z-20 mt-4">
            <a aria-describedby="tier-starter" class="items-center justify-center w-full px-6 py-2.5 text-center text-zinc-600
             duration-200 bg-white/90 hover:scale-102 rounded-full nline-flex active:scale-98
               focus:outline-none shadow-sm shadow-zinc-500 active:shadow-none hover:bg-blue-800 hover:text-white
               focus-visible:outline-white text-sm focus-visible:ring-white" href="#">
              حذف از سبد خرید
            </a>
          </div>
        </div>


        <div class="flex flex-col snap-start snap-always relative backdrop-blur-sm bg-white/10 group rounded-3xl overflow-clip 
        h-[16rem] shadow-sm shadow-zinc-500 cursor-pointer">
          <span className='absolute bg-red-500/80 w-7 h-7 text-center text-white rounded-full p-1 top-1 right-1 z-30'>5</span>
          <img className='absolute top-3 right-3 shadow-xs z-20 shadow-zinc-500 w-[8rem] rounded-2xl'
            src='../../../src/StorePanel/assets/img/product_img/p_5.jpg' />
          <span className='absolute w-2 h-2 rounded-xl z-10 group-hover:top-0
           group-hover:left-0 group-hover:rounded-xl group-hover:w-full 
          group-hover:h-full  duration-300 bg-blue-800/20'></span>
          <div class="px-6 py-8 sm:p-10 sm:pb-6 z-20">
            <div class="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 class="text-lg font-medium tracking-tighter text-white lg:text-xl">
                  ساعت هوشمند شیائومی
                </h2>
                <p class="mt-2 text-sm text-gray-100">8 گیگ رم و 120 هرتز</p>
              </div>
              <div class="mt-6">
                <p>
                  <span class="text-3xl font-light tracking-tight text-white">
                    2,400,000
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="flex px-6 pb-8 sm:px-8 z-20 mt-4">
            <a aria-describedby="tier-starter" class="items-center justify-center w-full px-6 py-2.5 text-center text-zinc-600
             duration-200 bg-white/90 hover:scale-102 rounded-full nline-flex active:scale-98
               focus:outline-none shadow-sm shadow-zinc-500 active:shadow-none hover:bg-blue-800 hover:text-white
               focus-visible:outline-white text-sm focus-visible:ring-white" href="#">
              حذف از سبد خرید
            </a>
          </div>
        </div>


        <div class="flex flex-col snap-start snap-always relative backdrop-blur-sm bg-white/10 group rounded-3xl overflow-clip 
        h-[16rem] shadow-sm shadow-zinc-500 cursor-pointer">
          <span className='absolute bg-red-500/80 w-7 h-7 text-center text-white rounded-full p-1 top-1 right-1 z-30'>7</span>
          <img className='absolute top-3 right-3 shadow-xs z-20 shadow-zinc-500 w-[8rem] rounded-2xl'
            src='../../../src/StorePanel/assets/img/product_img/p_6.jpg' />
          <span className='absolute w-2 h-2 rounded-xl z-10 group-hover:top-0
           group-hover:left-0 group-hover:rounded-xl group-hover:w-full 
          group-hover:h-full  duration-300 bg-blue-800/20'></span>
          <div class="px-6 py-8 sm:p-10 sm:pb-6 z-20">
            <div class="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 class="text-lg font-medium tracking-tighter text-white lg:text-xl">
                  گوشی پوکو X3
                </h2>
                <p class="mt-2 text-sm text-gray-100">8 گیگ رم و 120 هرتز</p>
              </div>
              <div class="mt-6">
                <p>
                  <span class="text-3xl font-light tracking-tight text-white">
                    12,700,000
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="flex px-6 pb-8 sm:px-8 z-20 mt-4">
            <a aria-describedby="tier-starter" class="items-center justify-center w-full px-6 py-2.5 text-center text-zinc-600
             duration-200 bg-white/90 hover:scale-102 rounded-full nline-flex active:scale-98
               focus:outline-none shadow-sm shadow-zinc-500 active:shadow-none hover:bg-blue-800 hover:text-white
               focus-visible:outline-white text-sm focus-visible:ring-white" href="#">
              حذف از سبد خرید
            </a>
          </div>
        </div>



        <div class="flex flex-col snap-start snap-always relative backdrop-blur-sm bg-white/10 group rounded-3xl overflow-clip 
        h-[16rem] shadow-sm shadow-zinc-500 cursor-pointer">
          <span className='absolute bg-red-500/80 w-7 h-7 text-center text-white rounded-full p-1 top-1 right-1 z-30'>20</span>
          <img className='absolute top-3 right-3 shadow-xs z-20 shadow-zinc-500 w-[8rem] rounded-2xl'
            src='../../../src/StorePanel/assets/img/product_img/p_8.jpg' />
          <span className='absolute w-2 h-2 rounded-xl z-10 group-hover:top-0
           group-hover:left-0 group-hover:rounded-xl group-hover:w-full 
          group-hover:h-full  duration-300 bg-blue-800/20'></span>
          <div class="px-6 py-8 sm:p-10 sm:pb-6 z-20">
            <div class="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 class="text-lg font-medium tracking-tighter text-white lg:text-xl">
                  گوشی پوکو X3
                </h2>
                <p class="mt-2 text-sm text-gray-100">8 گیگ رم و 120 هرتز</p>
              </div>
              <div class="mt-6">
                <p>
                  <span class="text-3xl font-light tracking-tight text-white">
                    12,700,000
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="flex px-6 pb-8 sm:px-8 z-20 mt-4">
            <a aria-describedby="tier-starter" class="items-center justify-center w-full px-6 py-2.5 text-center text-zinc-600
             duration-200 bg-white/90 hover:scale-102 rounded-full nline-flex active:scale-98
               focus:outline-none shadow-sm shadow-zinc-500 active:shadow-none hover:bg-blue-800 hover:text-white
               focus-visible:outline-white text-sm focus-visible:ring-white" href="#">
              حذف از سبد خرید
            </a>
          </div>
        </div>


        <div class="flex flex-col snap-start snap-always relative backdrop-blur-sm bg-white/10 group rounded-3xl overflow-clip 
        h-[16rem] shadow-sm shadow-zinc-500 cursor-pointer">
          <span className='absolute bg-red-500/80 w-7 h-7 text-center text-white rounded-full p-1 top-1 right-1 z-30'>1</span>
          <img className='absolute top-3 right-3 shadow-xs z-20 shadow-zinc-500 w-[8rem] rounded-2xl'
            src='../../../src/StorePanel/assets/img/product_img/p_9.jpg' />
          <span className='absolute w-2 h-2 rounded-xl z-10 group-hover:top-0
           group-hover:left-0 group-hover:rounded-xl group-hover:w-full 
          group-hover:h-full  duration-300 bg-blue-800/20'></span>
          <div class="px-6 py-8 sm:p-10 sm:pb-6 z-20">
            <div class="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 class="text-lg font-medium tracking-tighter text-white lg:text-xl">
                  گوشی پوکو X3
                </h2>
                <p class="mt-2 text-sm text-gray-100">8 گیگ رم و 120 هرتز</p>
              </div>
              <div class="mt-6">
                <p>
                  <span class="text-3xl font-light tracking-tight text-white">
                    12,700,000
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="flex px-6 pb-8 sm:px-8 z-20 mt-4">
            <a aria-describedby="tier-starter" class="items-center justify-center w-full px-6 py-2.5 text-center text-zinc-600
             duration-200 bg-white/90 hover:scale-102 rounded-full nline-flex active:scale-98
               focus:outline-none shadow-sm shadow-zinc-500 active:shadow-none hover:bg-blue-800 hover:text-white
               focus-visible:outline-white text-sm focus-visible:ring-white" href="#">
              حذف از سبد خرید
            </a>
          </div>
        </div>



        <div class="flex flex-col snap-start snap-always relative backdrop-blur-sm bg-white/10 group rounded-3xl overflow-clip 
        h-[16rem] shadow-sm shadow-zinc-500 cursor-pointer">
          <span className='absolute bg-red-500/80 w-7 h-7 text-center text-white rounded-full p-1 top-1 right-1 z-30'>3</span>
          <img className='absolute top-3 right-3 shadow-xs z-20 shadow-zinc-500 w-[8rem] rounded-2xl'
            src='../../../src/StorePanel/assets/img/product_img/p_11.jpg' />
          <span className='absolute w-2 h-2 rounded-xl z-10 group-hover:top-0
           group-hover:left-0 group-hover:rounded-xl group-hover:w-full 
          group-hover:h-full  duration-300 bg-blue-800/20'></span>
          <div class="px-6 py-8 sm:p-10 sm:pb-6 z-20">
            <div class="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 class="text-lg font-medium tracking-tighter text-white lg:text-xl">
                  گوشی پوکو X3
                </h2>
                <p class="mt-2 text-sm text-gray-100">8 گیگ رم و 120 هرتز</p>
              </div>
              <div class="mt-6">
                <p>
                  <span class="text-3xl font-light tracking-tight text-white">
                    12,700,000
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="flex px-6 pb-8 sm:px-8 z-20 mt-4">
            <a aria-describedby="tier-starter" class="items-center justify-center w-full px-6 py-2.5 text-center text-zinc-600
             duration-200 bg-white/90 hover:scale-102 rounded-full nline-flex active:scale-98
               focus:outline-none shadow-sm shadow-zinc-500 active:shadow-none hover:bg-blue-800 hover:text-white
               focus-visible:outline-white text-sm focus-visible:ring-white" href="#">
              حذف از سبد خرید
            </a>
          </div>
        </div>


      </div>


    </motion.div>
  )
}

export default Adm_order_show