import {motion} from 'motion/react'
import { FaUserSecret } from 'react-icons/fa'
import { LuDollarSign } from 'react-icons/lu'
import RenderBarChart from '../RenderBarChart'
// import RenderBarChart from '../RenderBarChart'

function Adm_show_user() {
  return (
    <motion.div 
    initial={{
      y:20,
      scale:0.9,
      opacity:0
    }}
    animate={{
      y:0,
      scale:1,
      opacity:1,
      transition: {
        duration: 0.8,
      }
    }}
    className='min-md:grid min-md:grid-cols-3 justify-center items-center min-md:w-[90%] w-full z-20 rounded-xl gap-4 max-md:space-y-3' dir="ltr">
        <div className='flex flex-col w-full space-y-4 justify-center min-md:p-8 p-4 items-center col-span-1 rounded-2xl
           shadow-[0.05px_0.7px_4px_#0228C7] backdrop-blur-lg bg-white/60'>
          <img src='../../../src/StorePanel/assets/img/profile.jpg' className='border-2 border-white/40 rounded-3xl shadow-sm shadow-zinc-500 w-[35%] h-[35%]' />
          <h2 className='text-xl text-zinc-700'>سید حسن تقوی</h2>
          <span className='flex flex-row justify-center items-center gap-2 text-zinc-700 w-20 h-9
           bg-blue-400/30 rounded-xl shadow-sm inset-shadow-2xs'>ادمین< FaUserSecret size={15} /></span>
          <button className='p-3 bg-blue-700 rounded-xl cursor-pointer shadow-blue-700/50 shadow-sm hover:shadow-lg hover:scale-110 duration-300 text-white/90 min-w-55' >بن کردن کاربر</button>
          <div className='grid grid-rows-3 w-[90%] *:h-15 *:p-2 gap-2 *:focus:outline-none
          *:focus:border-transparent *:focus:ring-2 *:focus:ring-blue-500 *:inset-shadow-sm *:hover:shadow-md *:cursor-pointer' dir='rtl'>
            <input  type="text" value={"سید حسن تقوی"} placeholder='نام و نام خانوادگی' className='rounded-xl bg-white/60 border-1 border-zinc-400/40'/>
            <input  type="text" value={"taghavey.hassan@gmail.com"} placeholder='ایمیل' className='rounded-xl bg-white/60 border-1 border-zinc-400/40'/>
            <input  type="text" value={"09170249855"} placeholder='تلفن' className='rounded-xl bg-white/60 border-1 border-zinc-400/40'/>
          </div>
        </div>

        <div className='grid min-md:col-span-2 gap-3 w-full min-md:w-[80%] h-full grid-rows-4 rounded-2xl z-10'>
        <div className='row-span-1 grid grid-cols-3 gap-2 w-full 
        *:backdrop-blur-lg *:grid *:grid-cols-2 *:justify-center *:items-center h-full
         rounded-xl *:bg-white/60 *:hover:shadow-none *:duration-300 *:cursor-pointer'>

          
          <div className='rounded-xl shadow-[0.05px_0.7px_4px_#0228C7]'>
            <div className='grid grid-row-2 p-1 ml-2'>
              <span className='text-5xl text-blue-500/90 text-start pl-3'>4</span>
              <div className='grid grid-rows-2 text-zinc-600/70'>
                  <span className='ml-1 text-sm'>آخرین خرید</span>
                  <span className='flex flex-row text-sm'><LuDollarSign size={20} />10.000.000</span>
              </div>
            </div>
            <div className='flex overflow-clip w-full h-full justify-center items-center'>
              <RenderBarChart color={'#107AFF'}/>
            </div>
          </div>


          <div className='rounded-xl shadow-[0.05px_0.7px_4px_#0228C7]'>
            <div className='grid grid-row-2 p-1 ml-2'>
              <span className='text-5xl text-purple-500/90 text-start pl-3'>18</span>
              <div className='grid grid-rows-2 text-zinc-600/70'>
                  <span className='ml-1 text-sm'>مجموع خرید</span>
                  <span className='flex flex-row text-sm'><LuDollarSign size={20} />50.000.000</span>
              </div>
            </div>
            <div className='flex overflow-clip w-full h-full justify-center items-center'>
              <RenderBarChart color={'#B256FF'}/>
            </div>
          </div>


          <div className='rounded-xl shadow-[0.05px_0.7px_4px_#0228C7]'>
            <div className='grid grid-row-2 p-1 ml-2'>
              <span className='text-5xl text-orange-500/90 text-start pl-3'>2</span>
              <div className='grid grid-rows-2 text-zinc-600/70'>
                  <span className='ml-1 text-sm'>کنسل شده</span>
                  <span className='flex flex-row text-sm'><LuDollarSign size={20} />490.000</span>
              </div>
            </div>
            <div className='flex overflow-clip w-full h-full justify-center items-center'>
              <RenderBarChart color={'#FF7518'}/>
            </div>
          </div>
          
        </div>
        <div className='grid row-span-3 rounded-xl bg-blue/60 *:backdrop-blur-lg w-full h-full z-20'>
          <div className='w-full min-h-60 bg-white/60 rounded-xl'>

          </div>
        </div>
        </div>
    </motion.div>
  )
}

export default Adm_show_user