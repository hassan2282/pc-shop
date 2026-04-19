import { TbEditCircle, TbSearch, TbTrashFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { IoMdCloseCircle } from 'react-icons/io'
import { useEffect, useState } from 'react'
import apiClient from '../../../apiClient'
import { toast } from 'react-toastify'
import Paginate from '../Paginate'

function Adm_order_all() {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async (page) => {
      try {
        const res = await apiClient.get(`/admin/orders?page=${page}`);
        if (res.status >= 200 && res.status < 300) {
          setCount(Math.ceil(res.data[0]));
          setOrders(res.data[1].data);
        }
      } catch (err) {
        if (err.status >= 400 && err.status < 500) {
          toast.error('به این بخش دسترسی ندارید')
        } else {
          toast.error('خطا در فرایند واکشی سفارشات');
        }
      }
    }
    fetchOrders(page);
  }, [page]);



  const deleteHandler = async (id) => {
    try {
      const res = await apiClient.delete(`/admin/orders/${id}`);
      if (res.status >= 200 && res.status < 300) {
        toast.success('سفارش با موفقیت حذف شد');
      }
      setOrders(prev => prev.filter((item) => item.id !== id));
    } catch (err) {
      toast.error('خطا در فرایند حذف سفارش');
    }
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
      className='flex flex-col items-center bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl border
     border-white/20 mr-10 mt-4 min-h-96 w-[92%] min-w-[60rem] overflow-x-auto'>
      <div className='flex flex-row w-full justify-between items-center p-6 bg-white/30 
      backdrop-blur-md h-24 rounded-t-2xl border-b border-white/20'>
        <Link to="/admin/index" className='text-gray-600 hover:scale-120 mr-3 transition-all duration-200'>
          <IoMdCloseCircle size={27} className='text-red-500' />
        </Link>
        <h3 className='text-xl font-bold text-gray-800'>مدیریت سفارشات</h3>
        <div className='flex flex-row relative justify-center items-center space-x-4'>
          <div className='relative flex justify-center items-center'>
            <TbSearch size={20} className='absolute left-3 text-gray-400' />
            <input
              type='search'
              className='w-[14rem] inset-shadow-sm shadow-xs hover:w-[20rem] h-12 rounded-xl p-3 bg-white/90 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              placeholder='جستجو...'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col w-full p-6 min-h-100 overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='w-full grid grid-cols-9 items-center bg-white/90 backdrop-blur-sm text-gray-700/90 rounded-xl
           h-16 text-[0.9rem] justify-center text-center border border-gray-200 shadow-sm'>
              <th className='col-span-1 font-semibold'>ردیف</th>
              <th className='col-span-1 font-semibold'>آیدی</th>
              <th className='col-span-1 font-semibold'>تاریخ</th>
              <th className='col-span-1 font-semibold'>آیدی مشتری</th>
              <th className='col-span-1 font-semibold'>نام کاربری مشتری</th>
              <th className='col-span-1 font-semibold'>مجموع قیمت</th>
              <th className='col-span-1 font-semibold'>وضعیت پرداخت</th>
              <th className='col-span-1 font-semibold'>وضعیت سفارش</th>
              <th className='col-span-1 font-semibold'>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {
              orders &&
              orders.map((item, index) => {
                return (
                  <motion.tr
                    initial={{ filter: "blur(10px)", opacity: 0 }}
                    animate={{ filter: 'none', opacity: 1 }}
                    transition={{ delay: 0.2 * index, duration: 0.4, ease: "easeOut" }}
                    key={index} className='w-full grid grid-cols-9 items-center text-gray-600/90
                                  h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 
                                  rounded-xl cursor-pointer transition-all duration-200 border border-gray-100/50'>
                    <td className='col-span-1'>{index + 1}</td>
                    <td className='col-span-1'>#{item.id}</td>
                    <td className='col-span-1 flex justify-center items-center'>
                      1403/11/05
                    </td>
                    <td className='col-span-1'>#{item.user.id}</td>
                    <td className='col-span-1'>{item.user.username}</td>
                    <td className='col-span-1'>{item.final_amount.toLocaleString()}</td>
                    <td className='col-span-1 justify-center bg-rose-50/90 items-center py-1 rounded-full w-full flex'>
                      {
                        item.payment_status === 'unpaid' &&
                        <span className='text-yellow-700 text-sm font-medium'>در انتظار پرداخت</span>
                      }
                      {
                        item.payment_status === 'paid' &&
                        <span className='text-emerald-700 text-sm font-medium'>پرداخت شد</span>
                      }
                      {
                        item.payment_status === 'failed' &&
                        <span className='text-rose-700 text-sm font-medium'>ناموفق</span>
                      }
                    </td>
                    <td className='col-span-1 justify-center items-center w-full flex'>
                      <div className='flex items-center gap-1 bg-rose-100/60 backdrop-blur-sm px-3 py-1 rounded-full'>
                        {
                          item.status === 'pending' &&
                          <span className='text-yellow-700 text-sm font-medium'>در انتظار</span>
                        }
                        {
                          item.status === 'processing' &&
                          <span className='text-yellow-700 text-sm font-medium'>در حال پردازش</span>
                        }
                        {
                          item.status === 'shipped' &&
                          <span className='text-blue-700 text-sm font-medium'>ارسال شد</span>
                        }
                        {
                          item.status === 'delivered' &&
                          <span className='text-emerald-700 text-sm font-medium'>تحویل داده شد</span>
                        }
                        {
                          item.status === 'canceled' &&
                          <span className='text-rose-700 text-sm font-medium'>لغو شد</span>
                        }
                      </div>
                    </td>
                    <td className='col-span-1 flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                      <Link to={`/admin/order/show/${item.id}`} className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                        <TbEditCircle size={20} />
                      </Link>
                      <div onClick={() => deleteHandler(item.id)} className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                        <TbTrashFilled size={20} />
                      </div>
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

export default Adm_order_all
