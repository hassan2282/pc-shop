import { TbCheck, TbEye, TbSearch, TbX } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { IoMdCloseCircle } from 'react-icons/io'
import { useEffect, useRef, useState } from 'react'
import apiClient from '../../../apiClient'
import { toast } from 'react-toastify'
import SearchFilter from '../SearchFilter'
import StatusFilter from '../StatusFilter'
import { MdPersonAdd } from 'react-icons/md'
import Paginate from '../Paginate'

function Adm_tickets_all() {
  const [conversations, setConversations] = useState();
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const searchRef = useRef();
  const [q, setQ] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const fetchConversations = async (page, q, status, role) => {
      try {
        const res = await apiClient.get(`/admin/conversations?page=${page}&q=${q}&status=${status}&role=${role}`);
        if (res.status >= 200 && res.status < 300) {
          setCount(Math.ceil(res.data[0]));
          setConversations(res.data[1].data);
        }
      } catch (err) {
        toast.error('خطا در فرایند واکشی مکالمات');
      }
    }
    fetchConversations(page, q, status, role);
  }, [page, q, status, role]);


  const submitHandler = (e) => {
    e.preventDefault();
    setQ(searchRef.current.value.trim())
  }

  const roleFilter = (e) => {
    e.target.value ?
      setRole(eval(e.target.value))
      : setRole('');
  }

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
        <h3 className='min-md:text-xl text-lg font-bold text-gray-800'>مدیریت تیکت ها</h3>
        <div className='flex flex-row relative justify-center items-center space-x-2'>


          <SearchFilter searchRef={searchRef} submitHandler={submitHandler} />


          <select onChange={(e) => roleFilter(e)} className='border-white/90 border-1 bg-white/80 cursor-pointer rounded-xl p-2'>
            <option value={''}>فرستنده آخرین پیام</option>
            <option value={1}>کاربر</option>
            <option value={2}>ادمین</option>
          </select>

          <Link to="/admin/users/add" className='flex h-12 bg-blue-600 hover:bg-blue-700
          text-white items-center justify-center
           rounded-xl text-sm font-medium space-x-2 p-3 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl' >
            <MdPersonAdd size={20} />
            <span>افزودن کاربر</span>
          </Link>
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
      <Paginate setPage={setPage} count={count} />
    </motion.div>
  )
}

export default Adm_tickets_all