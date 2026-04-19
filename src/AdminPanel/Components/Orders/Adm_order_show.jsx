import { motion } from 'motion/react'
import { useEffect, useState } from 'react';
import { FaCalendarDay, FaPhoneSquare, FaUser } from 'react-icons/fa'
import { MdMarkEmailRead } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import apiClient from '../../../apiClient';
import { toast } from 'react-toastify';

function Adm_order_show() {

  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const BASE_URL = import.meta.env.VITE__BASEURL;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await apiClient.get(`/admin/orders/${id}`);
        if (res.status >= 200 && res.status < 300) {
          setOrder(res.data);
        }
      } catch (err) {
        toast.error(err.response.data.message);
      }
    }
    fetchOrders();
  }, []);


  const formatDate = (date) => {
    return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(date));
  };


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
      className='relative flex min-sm:flex-row flex-col justify-start min-sm:items-start items-center 
                 min-lg:w-[90%] w-full z-20 
                rounded-xl gap-2 max-md:space-y-3 min-lg:mr-14' dir="ltr">


      {/* start profile section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='flex flex-col w-full max-w-[18rem] justify-self-center justify-center pb-1 
                        min-md:sticky md:top-1 min-lg:top-17 rounded-4xl
                          shadow-[0_2px_1px_#3333] items-center col-span-1
                            backdrop-blur-lg bg-white/40'>

        <div className='relative flex flex-col w-full h-full justify-center items-center max-w-[20rem]'>
          <h2 className='absolute text-2xl text-white p-1 rounded-xl backdrop-blur-lg translate-y-15'>
            {order ? order.user?.first_name + ' ' + order.user?.last_name : 'نام کاربر'}</h2>
          <img src={order.user?.media?.name ? BASE_URL + '/storage/media/' + order.user?.media?.name : '/src/StorePanel/assets/img/profile_2.jpg'}
            className='rounded-3xl w-full min-w-[10rem] min-h-[12rem] max-h-[18rem]' />
          <div className='absolute grid grid-cols-2 bottom-0 bg-white/80 translate-y-7 backdrop-blur-xl
                          w-[80%] p-2 rounded-full justify-center items-center'>
            <div className='flex flex-col border-r border-zinc-700 text-sm justify-center items-center text-zinc-600'>
              <span className='text-[0.8rem]'>{order ? order.final_amount?.toLocaleString() : 0}</span>
              <span className='text-[0.8rem]'>آخرین خرید</span>
            </div>
            <div className='flex flex-col text-sm justify-center items-center text-zinc-600'>
              <span className='text-[0.8rem]'>{order.created_at && formatDate(order.created_at)}</span>
              <span className='text-[0.8rem]'>تاریخ خرید</span>
            </div>
          </div>
        </div>
        <div className='relative my-7 w-full p-3' dir='rtl'>
          <ul className='flex flex-col *:flex *:flex-row *:gap-2 *:justify-between *:items-center *:w-full
                      *:rounded-xl *:p-2 text-zinc-700 text-[0.8rem]' dir='rtl'>
            <li><MdMarkEmailRead size={20} className='text-blue-600' />{order ? order.user?.email : 'ایمیل کاربر'}</li>
            <li><FaUser size={20} className='text-blue-600' />{order ? order.user?.username : 'نام کاربری'}</li>
            <li><FaPhoneSquare size={20} className='text-blue-600' />{order ? order.user?.phone : 'نام کاربری'}</li>
            <li><FaCalendarDay size={20} className='text-blue-600' />{order.user?.created_at && formatDate(order.user?.created_at)}</li>
          </ul>
        </div>
        <div className='absolute mt-4 mb-3 bottom-0 justify-items-center text-zinc-200 w-full *:flex
         *:flex-row *:items-center *:justify-center *:rounded-2xl hover:scale-97 duration-200 *:translate-y-4
          *:active:scale-95 *:w-full *:px-3 *:py-1 cursor-pointer group *:shadow-sm '>
          <Link to="/admin/user/show/2" className='w-full bg-blue-500 duration-200 h-12'>اطلاعات کاربر</Link>
        </div>
      </motion.div>

      {/* end profile section */}



      <div className='grid min-xl:grid-cols-3 p-5 lg:grid-cols-2 sm:grid-cols-1 max-sm:justify-center
                      justify-start items-start backdrop-blur-xs -z-10 border-t border-l border-white/40
                      snap-y snap-mandatory relative shadow-xl rounded-3xl
                      gap-3 mt-2 w-full min-h-[32.5rem] overflow-clip'>

        {
          order &&
          order.order_items?.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 100 }}
                transition={{ delay: index * 0.2, ease: "easeInOut" }}
                className="flex flex-row z-10 min-w-[15rem] group hover:shadow-xl hover:-translate-y-1 duration-300 
                              justify-between items-center space-y-2 snap-start
                              snap-always relative p-2 space-x-2 h-48 backdrop-blur-xl
                            bg-white/50 rounded-3xl overflow-clip 
                            shadow-zinc-500 cursor-pointer" dir='rtl'>
                <div className='relative h-full'>
                  <span className='absolute bg-red-500/80 w-7 h-7 text-center text-white 
                                  rounded-full p-1 top-1 right-1 z-30'>{item.quantity}</span>
                  <img className='flex shadow-xs shadow-zinc-500 w-[8rem] mt-2 rounded-2xl'
                    src={item.product.media[0] !== undefined ? BASE_URL + '/storage/media/' + item?.product.media[0]?.name :
                      '../../../src/StorePanel/assets/img/ico/png-8.png'} />
                </div>
                <div className="flex flex-col p-2 h-full ">
                  <div className="flex flex-col items-center justify-around h-full w-full text-left">
                    <div>
                      <h2 className="text-lg lg:text-xl">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-600 ">{item.product.title}</p>
                      <div className="">
                        <p>
                          <span className="text-2xl font-light tracking-tight text-blue-600">
                            {item.total_price.toLocaleString()}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to={`/admin/product/show/${item.product.id}`} className="flex items-center p-2 justify-center w-full text-center
                          duration-200 hover:scale-102 rounded-full active:scale-98
                            focus:outline-none shadow-sm shadow-zinc-500 active:shadow-none
                            bg-blue-500 text-white
                            focus-visible:outline-white text-sm focus-visible:ring-white">

                    مشاهده محصول
                  </Link>
                </div>
              </motion.div>
            );
          })
        }


      </div>


    </motion.div>
  )
}

export default Adm_order_show