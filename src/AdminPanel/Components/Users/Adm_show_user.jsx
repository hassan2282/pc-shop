import { motion } from 'motion/react'
import { FaPhoneSquare, FaUser, FaUserSecret } from 'react-icons/fa'
import { LuDollarSign } from 'react-icons/lu'
import RenderBarChart from '../RenderBarChart'
import { TbBan, TbEdit, TbEye, TbTrash } from 'react-icons/tb'
import { MdMarkEmailRead } from 'react-icons/md'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { useParams} from 'react-router-dom';

function Adm_show_user() {

  const {id} = useParams();

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
      className='min-md:grid min-md:grid-cols-4 justify-center items-start min-lg:w-[90%] w-full z-20 
                rounded-xl gap-4' dir="ltr">
      <div className='flex flex-col min-md:sticky min-md:top-10 w-full max-md:py-4 h-auto justify-start
                         shadow-[0_2px_1px_#3333] items-center col-span-1 rounded-3xl
                          backdrop-blur-lg bg-white/40'>
        <div className='relative flex justify-center items-center w-full'>
          <img src='../../../src/StorePanel/assets/img/profile_2.jpg' className='rounded-3xl w-full' />
          <h2 className='absolute top-[65%] text-xl text-white p-2 backdrop-blur-lg rounded-full'>سید حسن تقوی</h2>
          <span className='absolute top-3 left-2 flex flex-row justify-center items-center gap-2 text-rose-700 p-3
            bg-zinc-300 rounded-full shadow-sm inset-shadow-2xs'>< FaUserSecret size={15} /></span>
        </div>
        <div className='grid grid-cols-3 -translate-y-8 gap-2'>
          <button className='flex p-3  rounded-full cursor-pointer bg-blue-400 shadow-zinc-500 shadow-sm
            hover:shadow-md hover:scale-110 duration-300 active:scale-95 justify-center items-center text-white'>
            <TbBan size={30} /></button>
          <button className='flex p-3 rounded-full cursor-pointer  bg-blue-400 shadow-zinc-500 shadow-sm
            hover:shadow-md hover:scale-110 duration-300 active:scale-95 justify-center items-center text-white'>
            <TbEdit size={30} /></button>
          <button className='flex p-3 rounded-full cursor-pointer bg-blue-400 shadow-zinc-500 shadow-sm
            hover:shadow-md hover:scale-110 duration-300 active:scale-95 justify-center items-center text-white'>
            <TbTrash size={30} /></button>
        </div>
        <div className='relative w-full p-2' dir='rtl'>
          <ul className='flex flex-col *:flex *:flex-row *:justify-between *:items-center *:w-full
                                *:rounded-xl *:p-3 text-zinc-700 text-[0.8rem] *:h-[2.4rem] *:bg-white/20 gap-1' dir='rtl'>
            <li><MdMarkEmailRead size={20} className='text-blue-600' />taghavey.hassan@gmail.com</li>
            <li><FaUser size={20} className='text-blue-600' /> photoshopbaz98</li>
            <li><FaPhoneSquare size={20} className='text-blue-600' /> 09170249855</li>
            <li><BsFillCalendarDateFill size={20} className='text-blue-600' /> 1403/07/23</li>
          </ul>
        </div>
      </div>

      <div className='min-sm:grid min-sm:col-span-3 gap-3 w-full max-sm:*:gap-10 min-md:w-[80%] h-[97%] min-sm:grid-rows-4 rounded-2xl z-10'>
        <div className='row-span-1 min-sm:grid min-sm:grid-cols-3 gap-2 max-sm:space-y-3 max-sm:mb-3 w-full
        *:backdrop-blur-lg *:grid *:grid-cols-2 *:justify-center *:items-center h-full *:min-w-[8rem]
         rounded-xl *:bg-white/50 *:hover:shadow-md *:hover:shadow-zinc-400 *:hover:scale-103 *:duration-300 *:cursor-pointer'>

          <div className='rounded-xl shadow-[0_2px_1px_#3333]'>
            <div className='grid grid-row-2 p-1 ml-2'>
              <span className='text-5xl text-blue-500/90 text-start pl-3'>4</span>
              <div className='grid grid-rows-2 text-zinc-600/70'>
                <span className='ml-1 text-sm'>آخرین خرید</span>
                <span className='flex flex-row text-sm'><LuDollarSign size={20} />10.000.000</span>
              </div>
            </div>
            <div className='flex overflow-clip w-full h-full justify-center items-center'>
              <RenderBarChart color={'#107AFF'} />
            </div>
          </div>


          <div className='rounded-xl shadow-[0_2px_1px_#3333]'>
            <div className='grid grid-row-2 p-1 ml-2'>
              <span className='text-5xl text-purple-500/90 text-start pl-3'>18</span>
              <div className='grid grid-rows-2 text-zinc-600/70'>
                <span className='ml-1 text-sm'>مجموع خرید</span>
                <span className='flex flex-row text-sm'><LuDollarSign size={20} />50.000.000</span>
              </div>
            </div>
            <div className='flex overflow-clip w-full h-full justify-center items-center'>
              <RenderBarChart color={'#B256FF'} />
            </div>
          </div>


          <div className='rounded-xl shadow-[0_2px_1px_#3333]'>
            <div className='grid grid-row-2 p-1 ml-2'>
              <span className='text-5xl text-orange-500/90 text-start pl-3'>2</span>
              <div className='grid grid-rows-2 text-zinc-600/70'>
                <span className='ml-1 text-sm'>کنسل شده</span>
                <span className='flex flex-row text-sm'><LuDollarSign size={20} />490.000</span>
              </div>
            </div>
            <div className='flex overflow-clip w-full h-full justify-center items-center'>
              <RenderBarChart color={'#FF7518'} />
            </div>
          </div>

        </div>
        <div className='grid row-span-3 rounded-xl *:backdrop-blur-lg w-full min-w-[35rem] h-full z-20 shadow-[0_2px_1px_#3333]'>
          <div className='w-full min-h-60 bg-white/50 rounded-xl'>
            <table className='grid grid-cols-1 w-full text-stone-500 p-4 cursor-pointer ' dir='rtl'>
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

              <tbody className='*:hover:bg-blue-400/20 snap-y'>
                <tr className='grid grid-cols-6 text-sm text-center snap-start snap-always bg-white/50 rounded-xl h-13 justify-center items-center'>
                  <td>52</td>
                  <td>#21374</td>
                  <td>12.000.000</td>
                  <td className='flex rounded-xl h-6 items-center justify-center bg-emerald-500/100 text-white text-xs'>پرداخت شده</td>
                  <td>1404/07/22</td>
                  <td className='flex justify-center items-center'>
                    <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer' />
                  </td>
                </tr>


                <tr className='grid grid-cols-6 text-sm text-center snap-start snap-always bg-white/50 rounded-xl h-13 justify-center items-center'>
                  <td>36</td>
                  <td>#278574</td>
                  <td>100.000</td>
                  <td className='flex rounded-xl h-6 items-center justify-center bg-emerald-500/100 text-white text-xs'>پرداخت شده</td>
                  <td>1404/01/05</td>
                  <td className='flex justify-center items-center'>
                    <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer' />
                  </td>
                </tr>



                <tr className='grid grid-cols-6 text-sm text-center snap-start snap-always bg-white/50 rounded-xl h-13 justify-center items-center'>
                  <td>7</td>
                  <td>#25</td>
                  <td>41.000.000</td>
                  <td className='flex rounded-xl h-6 items-center justify-center bg-rose-500/100 text-white text-xs'>انصراف</td>
                  <td>1403/05/30</td>
                  <td className='flex justify-center items-center'>
                    <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer' />
                  </td>
                </tr>

                <tr className='grid grid-cols-6 text-sm text-center snap-start snap-always bg-white/50 rounded-xl h-13 justify-center items-center'>
                  <td>52</td>
                  <td>#21374</td>
                  <td>12.000.000</td>
                  <td className='flex rounded-xl h-6 items-center justify-center bg-emerald-500/100 text-white text-xs'>پرداخت شده</td>
                  <td>1404/07/22</td>
                  <td className='flex justify-center items-center'>
                    <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer' />
                  </td>
                </tr>


                <tr className='grid grid-cols-6 text-sm text-center snap-start snap-always bg-white/50 rounded-xl h-13 justify-center items-center'>
                  <td>36</td>
                  <td>#278574</td>
                  <td>100.000</td>
                  <td className='flex rounded-xl h-6 items-center justify-center bg-emerald-500/100 text-white text-xs'>پرداخت شده</td>
                  <td>1404/01/05</td>
                  <td className='flex justify-center items-center'>
                    <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer' />
                  </td>
                </tr>



                <tr className='grid grid-cols-6 text-sm text-center snap-start snap-always bg-white/50 rounded-xl h-13 justify-center items-center'>
                  <td>7</td>
                  <td>#25</td>
                  <td>41.000.000</td>
                  <td className='flex rounded-xl h-6 items-center justify-center bg-rose-500/100 text-white text-xs'>انصراف</td>
                  <td>1403/05/30</td>
                  <td className='flex justify-center items-center'>
                    <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer' />
                  </td>
                </tr>


                <tr className='grid grid-cols-6 text-sm text-center snap-start snap-always bg-white/50 rounded-xl h-13 justify-center items-center'>
                  <td>7</td>
                  <td>#25</td>
                  <td>41.000.000</td>
                  <td className='flex rounded-xl h-6 items-center justify-center bg-rose-500/100 text-white text-xs'>انصراف</td>
                  <td>1403/05/30</td>
                  <td className='flex justify-center items-center'>
                    <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer' />
                  </td>
                </tr>


                <tr className='grid grid-cols-6 text-sm text-center snap-start snap-always bg-white/50 rounded-xl h-13 justify-center items-center'>
                  <td>7</td>
                  <td>#25</td>
                  <td>41.000.000</td>
                  <td className='flex rounded-xl h-6 items-center justify-center bg-rose-500/100 text-white text-xs'>انصراف</td>
                  <td>1403/05/30</td>
                  <td className='flex justify-center items-center'>
                    <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer' />
                  </td>
                </tr>


                <tr className='grid grid-cols-6 text-sm text-center snap-start snap-always bg-white/50 rounded-xl h-13 justify-center items-center'>
                  <td>7</td>
                  <td>#25</td>
                  <td>41.000.000</td>
                  <td className='flex rounded-xl h-6 items-center justify-center bg-rose-500/100 text-white text-xs'>انصراف</td>
                  <td>1403/05/30</td>
                  <td className='flex justify-center items-center'>
                    <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer' />
                  </td>
                </tr>

                <tr className='grid grid-cols-6 text-sm text-center snap-start snap-always bg-white/50 rounded-xl h-13 justify-center items-center'>
                  <td>7</td>
                  <td>#25</td>
                  <td>41.000.000</td>
                  <td className='flex rounded-xl h-6 items-center justify-center bg-rose-500/100 text-white text-xs'>انصراف</td>
                  <td>1403/05/30</td>
                  <td className='flex justify-center items-center'>
                    <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer' />
                  </td>
                </tr>


                <tr className='grid grid-cols-6 text-sm text-center snap-start snap-always bg-white/50 rounded-xl h-13 justify-center items-center'>
                  <td>7</td>
                  <td>#25</td>
                  <td>41.000.000</td>
                  <td className='flex rounded-xl h-6 items-center justify-center bg-rose-500/100 text-white text-xs'>انصراف</td>
                  <td>1403/05/30</td>
                  <td className='flex justify-center items-center'>
                    <TbEye size={25} className='hover:scale-120 rounded-full text-blue-500 duration-200 cursor-pointer' />
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