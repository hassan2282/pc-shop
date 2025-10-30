import {motion} from 'motion/react'
import { FaUserSecret } from 'react-icons/fa'
import { LuDollarSign } from 'react-icons/lu'
import RenderBarChart from '../RenderBarChart'
import { TbEye } from 'react-icons/tb'

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
    className='min-md:grid min-md:grid-cols-3 justify-center items-center min-lg:w-[90%] w-full z-20 
                rounded-xl gap-4 max-md:space-y-3' dir="ltr">
        <div className='flex flex-col w-full max-md:py-4 h-[97%] space-y-4 justify-center min-md:p-4
                         shadow-[0_2px_1px_#3333] items-center col-span-1 rounded-2xl
                          backdrop-blur-lg bg-white/40'>
          <img src='../../../src/StorePanel/assets/img/profile.jpg' className='border-2 border-white/40
           rounded-3xl w-[35%] h-[25%]' />
          <h2 className='text-xl text-zinc-700'>سید حسن تقوی</h2>
          <span className='flex flex-row justify-center items-center gap-2 text-zinc-700 w-20 h-9
           bg-blue-400/30 rounded-xl shadow-sm inset-shadow-2xs'>ادمین< FaUserSecret size={15} /></span>
          <button className='flex p-3 bg-blue-700 rounded-xl cursor-pointer shadow-blue-700/50 shadow-sm
           hover:shadow-lg hover:scale-110 duration-300 active:scale-95 text-white/90 min-w-[70%] justify-center items-center' >بن کردن کاربر</button>
          <div className='flex flex-col *:h-15 *:p-2 gap-2 *:focus:outline-none min-w-[90%] *:shadow-sm 
          *:focus:border-transparent *:focus:ring-2 *:focus:ring-blue-500 *:inset-shadow-sm *:hover:shadow-lg *:duration-200 *:cursor-pointer' dir='rtl'>
            <input  type="text" disabled placeholder='سید حسن تقوی' className='rounded-xl bg-white/60 border-1 border-zinc-400/40'/>
            <input  type="text" disabled placeholder='taghavey.hassan@gmail.com' className='rounded-xl bg-white/60 border-1 border-zinc-400/40'/>
            <input  type="text" disabled placeholder='09170249855' className='rounded-xl bg-white/60 border-1 border-zinc-400/40'/>
          </div>
        </div>

        <div className='min-sm:grid min-sm:col-span-2 gap-3 w-full max-sm:*:gap-10 min-md:w-[80%] h-[97%] min-sm:grid-rows-4 rounded-2xl z-10'>
        <div className='row-span-1 min-sm:grid min-sm:grid-cols-3 gap-2 max-sm:space-y-3 max-sm:mb-3 w-full
        *:backdrop-blur-lg *:grid *:grid-cols-2 *:justify-center *:items-center h-full *:min-w-[8rem]
         rounded-xl *:bg-white/50 *:hover:shadow-none *:duration-300 *:cursor-pointer'>

          
          <div className='rounded-xl shadow-[0_2px_1px_#3333] hover:border-2 hover:border-white'>
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


          <div className='rounded-xl shadow-[0_2px_1px_#3333] hover:border-2 hover:border-white'>
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


          <div className='rounded-xl shadow-[0_2px_1px_#3333] hover:border-2 hover:border-white'>
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
        <div className='grid row-span-3 rounded-xl *:backdrop-blur-lg w-full min-w-[35rem] h-full z-20 shadow-[0_2px_1px_#3333]'>
          <div className='w-full min-h-60 bg-white/50 rounded-xl min-w-[35rem]'>
            <table className='grid grid-cols-1 w-full text-stone-500 p-4 min-w-[35rem] cursor-pointer' dir='rtl'>
            <thead>
              <tr className='grid grid-cols-6 text-sm h-15 justify-center mb-2 items-center bg-white/70 rounded-xl '>
                <th>آیدی</th>
                <th>شماره فاکتور</th>
                <th>مبلغ</th>
                <th>وضعیت</th>
                <th>تاریخ</th>
                <th>عملیات</th>
              </tr>
            </thead>

            <tbody className='*:hover:bg-blue-400/20'>
              <tr className='grid grid-cols-6 text-sm text-center bg-white/50 rounded-xl h-13 justify-center items-center'>
                <td>52</td>
                <td>#21374</td>
                <td>12.000.000</td>
                <td className='flex rounded-xl h-6 items-center justify-center bg-emerald-500/100 text-white text-xs'>پرداخت شده</td>
                <td>1404/07/22</td>
                <td className='flex justify-center items-center'>
                  <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer'/>
                </td>
              </tr>


              <tr className='grid grid-cols-6 text-sm text-center bg-white/50 rounded-xl h-13 justify-center items-center'>
                <td>36</td>
                <td>#278574</td>
                <td>100.000</td>
                <td className='flex rounded-xl h-6 items-center justify-center bg-emerald-500/100 text-white text-xs'>پرداخت شده</td>
                <td>1404/01/05</td>
                <td className='flex justify-center items-center'>
                  <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer'/>
                </td>
              </tr>



              <tr className='grid grid-cols-6 text-sm text-center bg-white/50 rounded-xl h-13 justify-center items-center'>
                <td>7</td>
                <td>#25</td>
                <td>41.000.000</td>
                <td className='flex rounded-xl h-6 items-center justify-center bg-rose-500/100 text-white text-xs'>انصراف</td>
                <td>1403/05/30</td>
                <td className='flex justify-center items-center'>
                  <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer'/>
                </td>
              </tr>

              <tr className='grid grid-cols-6 text-sm text-center bg-white/50 rounded-xl h-13 justify-center items-center'>
                <td>52</td>
                <td>#21374</td>
                <td>12.000.000</td>
                <td className='flex rounded-xl h-6 items-center justify-center bg-emerald-500/100 text-white text-xs'>پرداخت شده</td>
                <td>1404/07/22</td>
                <td className='flex justify-center items-center'>
                  <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer'/>
                </td>
              </tr>


              <tr className='grid grid-cols-6 text-sm text-center bg-white/50 rounded-xl h-13 justify-center items-center'>
                <td>36</td>
                <td>#278574</td>
                <td>100.000</td>
                <td className='flex rounded-xl h-6 items-center justify-center bg-emerald-500/100 text-white text-xs'>پرداخت شده</td>
                <td>1404/01/05</td>
                <td className='flex justify-center items-center'>
                  <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer'/>
                </td>
              </tr>



              <tr className='grid grid-cols-6 text-sm text-center bg-white/50 rounded-xl h-13 justify-center items-center'>
                <td>7</td>
                <td>#25</td>
                <td>41.000.000</td>
                <td className='flex rounded-xl h-6 items-center justify-center bg-rose-500/100 text-white text-xs'>انصراف</td>
                <td>1403/05/30</td>
                <td className='flex justify-center items-center'>
                  <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer'/>
                </td>
              </tr>
            </tbody>
              
            </table>
          </div>
        </div>
        </div>
    </motion.div>
  )
}

export default Adm_show_user