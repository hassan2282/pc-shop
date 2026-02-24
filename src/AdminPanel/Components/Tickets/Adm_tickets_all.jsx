import { TbCheck, TbEye, TbSearch, TbX } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { IoMdCloseCircle } from 'react-icons/io'
import { useEffect, useState } from 'react'
import apiClient from '../../../apiClient'
import { toast } from 'react-toastify'

function Adm_tickets_all() {
  const [conversations, setConversations] = useState();

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await apiClient.get('/admin/conversations');
        if (res.status >= 200 && res.status < 300) {
          setConversations(res.data);
        }
      } catch (err) {
        toast.error('خطا در فرایند واکشی مکالمات');
      }
    }
    fetchConversations();
  }, []);



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
      className='flex flex-col items-center bg-white/50 backdrop-blur-xl rounded-2xl shadow-2xl border
     border-white/20 min-md:mr-10 mt-4 min-h-96 max-md:w-full min-md:w-[92%] min-w-[50rem]'>
      <div className='flex flex-row w-full justify-between items-center min-md:p-6 bg-white/30 
      backdrop-blur-md h-24 rounded-t-2xl border-b border-white/20'>
        <Link to="/admin/index" className='text-gray-600 hover:scale-120 mr-3 transition-all duration-200'>
          <IoMdCloseCircle size={27} className='text-red-500' />
        </Link>
        <h3 className='min-md:text-2xl text-lg font-bold text-gray-800'>مدیریت تیکت ها</h3>
        <div className='flex flex-row relative justify-center items-center space-x-4'>
          <div className='relative flex justify-center items-center'>
            <TbSearch size={20} className='absolute left-3 text-gray-400' />
            <input
              type='search'
              className='w-[14rem] inset-shadow-sm shadow-xs hover:w-[20rem] h-12 rounded-xl p-3 bg-white/90
               backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500
               focus:border-transparent transition-all duration-200'
              placeholder='جستجو...'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col w-full min-md:p-6 min-h-100 '>
        <table className='w-full min-w-[50rem] '>
          <thead>
            <tr className='w-full grid grid-cols-7 items-center bg-white/40 backdrop-blur-sm text-gray-700/90 rounded-xl
           h-16 text-md justify-center text-center border border-gray-200 shadow-sm'>
              <th className='font-semibold'>ردیف</th>
              <th className='font-semibold'>آیدی</th>
              <th className='font-semibold col-span-3'>آخرین پیام</th>
              <th className='font-semibold'>فرستنده آخرین پیام</th>
              <th className='font-semibold'>مشاهده و پاسخ</th>
            </tr>
          </thead>
          <tbody className=''>
            {
              conversations &&
              conversations?.map((item, index) => {
                return (
                  <motion.tr
                    initial={{ filter: "blur(10px)", opacity: 0 }}
                    animate={{ filter: 'none', opacity: 1 }}
                    transition={{ delay: 0.2 * index, duration: 0.4, ease: "easeOut" }}
                    key={index} className='w-full grid grid-cols-7 items-center text-gray-600/90
                            p-2 text-md justify-center text-center bg-white/20 hover:bg-white/70 rounded-xl 
                            cursor-pointer transition-all border border-gray-100/50'>
                    <td className=''>{index + 1}</td>
                    <td className=''>#{item.id}</td>
                    <td className='grid col-span-3'>{item.tickets[0]?.text ? item.tickets[0]?.text : '...'}</td>
                    <td className='flex flex-row justify-center items-center'>
                      {
                        item.tickets[0]?.admin_id !== null ? (
                          <>
                            <div className='flex items-center gap-1 bg-green-100/80 backdrop-blur-sm px-3 py-1 rounded-full 
                                                    shadow-xs shadow-zinc-400'>
                              <TbCheck size={16} className='text-green-600' />
                              <span className='text-green-700 text-sm font-medium' title='توسط ادمین دیده شده'>ادمین</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className='flex items-center gap-1 bg-red-100/80 backdrop-blur-sm px-3 shadow-xs 
                                                   shadow-zinc-400 py-1 rounded-full'>
                              <TbX size={16} className='text-red-600' />
                              <span className='text-red-700 text-sm font-medium' title='در انتظار پاسخ ادمین'>کاربر</span>
                            </div>
                          </>
                        )
                      }
                    </td>
                    <td className='flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                      <Link to={`/admin/ticket/show/${item.id}`} className='text-rose-600 hover:text-rose-900 transition-colors
                       duration-200' title='مشاهده و پاسخ'>
                        <TbEye size={35} />
                      </Link>

                    </td>
                  </motion.tr>
                )
              })
            }


          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default Adm_tickets_all