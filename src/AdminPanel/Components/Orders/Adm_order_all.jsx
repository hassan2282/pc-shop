import { TbArticle, TbCheck, TbEditCircle, TbSearch, TbTrashFilled, TbX } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { IoMdCloseCircle } from 'react-icons/io'

function Adm_order_all() {
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
        <h3 className='text-2xl font-bold text-gray-800'>مدیریت سفارشات</h3>
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
            <tr className='w-full grid grid-cols-10 items-center bg-white/90 backdrop-blur-sm text-gray-700/90 rounded-xl
           h-16 text-md justify-center text-center border border-gray-200 shadow-sm'>
              <th className='col-span-1 font-semibold'>ردیف</th>
              <th className='col-span-1 font-semibold'>آیدی</th>
              <th className='col-span-1 font-semibold'>تاریخ</th>
              <th className='col-span-1 font-semibold'>آیدی مشتری</th>
              <th className='col-span-1 font-semibold'>نام مشتری</th>
              <th className='col-span-1 font-semibold'>مجموع قیمت</th>
              <th className='col-span-1 font-semibold'>تعداد اقلام</th>
              <th className='col-span-1 font-semibold'>وضعیت</th>
              <th className='col-span-2 font-semibold'>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr className='w-full grid grid-cols-10 items-center text-gray-600/90
           h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className='col-span-1'>1</td>
              <td className='col-span-1'>#50905</td>
              <td className='col-span-1 flex justify-center items-center'>
                1403/11/05
              </td>
              <td className='col-span-1'>#701</td>
              <td className='col-span-1'>سید حسن تقوی</td>
              <td className='col-span-1'>1200000</td>
              <td className='col-span-1 justify-center items-center w-full flex'>
                7
              </td>
              <td className='col-span-1 justify-center items-center w-full flex'>
                <div className='flex items-center gap-1 bg-rose-100/60 backdrop-blur-sm px-3 py-1 rounded-full'>
                  <span className='text-rose-700 text-sm font-medium'>کنسل شده</span>
                </div>
              </td>
              <td className='col-span-2 flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/article/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={20} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={20} />
                </Link>
              </td>
            </tr>
            <tr className='w-full grid grid-cols-10 items-center text-gray-600/90
           h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className='col-span-1'>2</td>
              <td className='col-span-1'>#50906</td>
              <td className='col-span-1 flex justify-center items-center'>
                1381/29/07
              </td>
              <td className='col-span-1'>#632</td>
              <td className='col-span-1'>سیامک بشکار</td>
              <td className='col-span-1'>4200000</td>
              <td className='col-span-1 justify-center items-center w-full flex'>
                2
              </td>
              <td className='col-span-1 justify-center items-center w-full flex'>
                <div className='flex items-center gap-1 bg-emerald-100/60 backdrop-blur-sm px-3 py-1 rounded-full'>
                  <span className='text-emerald-700 text-sm font-medium'>پرداخت شده</span>
                </div>
              </td>
              <td className='col-span-2 flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/article/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={20} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={20} />
                </Link>
              </td>
            </tr>
            <tr className='w-full grid grid-cols-10 items-center text-gray-600/90
           h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className='col-span-1'>3</td>
              <td className='col-span-1'>#50907</td>
              <td className='col-span-1 flex justify-center items-center'>
                  1402/03/01
              </td>
              <td className='col-span-1'>#17</td>
              <td className='col-span-1'>امید ثنایی</td>
              <td className='col-span-1'>5.000.000</td>
              <td className='col-span-1 justify-center items-center w-full flex'>
                1
              </td>
              <td className='col-span-1 justify-center items-center w-full flex'>
                <div className='flex items-center gap-1 bg-yellow-100 backdrop-blur-sm px-3 py-1 rounded-full'>
                  <span className='text-yellow-700 text-sm font-medium'>رها شده</span>
                </div>
              </td>
              <td className='col-span-2 flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/article/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={20} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={20} />
                </Link>
              </td>
            </tr>
            <tr className='w-full grid grid-cols-10 items-center text-gray-600/90
           h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className='col-span-1'>4</td>
              <td className='col-span-1'>#50908</td>
              <td className='col-span-1 flex justify-center items-center'>
                  1400/12/21
              </td>
              <td className='col-span-1'>#50</td>
              <td className='col-span-1'>دانیال شادی</td>
              <td className='col-span-1'>1200000</td>
              <td className='col-span-1 justify-center items-center w-full flex'>
                4
              </td>
              <td className='col-span-1 justify-center items-center w-full flex'>
                <div className='flex items-center gap-1 bg-emerald-100/60 backdrop-blur-sm px-3 py-1 rounded-full'>
                  <span className='text-emerald-700 text-sm font-medium'>پرداخت شده</span>
                </div>
              </td>
              <td className='col-span-2 flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/article/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={20} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={20} />
                </Link>
              </td>
            </tr>
            <tr className='w-full grid grid-cols-10 items-center text-gray-600/90
           h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className='col-span-1'>5</td>
              <td className='col-span-1'>#50909</td>
              <td className='col-span-1 flex justify-center items-center'>
                  1394/07/11
              </td>
              <td className='col-span-1'>#4250</td>
              <td className='col-span-1'>سید علی تقوی</td>
              <td className='col-span-1'>4200000</td>
              <td className='col-span-1 justify-center items-center w-full flex'>
                10
              </td>
              <td className='col-span-1 justify-center items-center w-full flex'>
                <div className='flex items-center gap-1 bg-emerald-100/60 backdrop-blur-sm px-3 py-1 rounded-full'>
                  <span className='text-emerald-700 text-sm font-medium'>پرداخت شده</span>
                </div>
              </td>
              <td className='col-span-2 flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/product/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={20} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={20} />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default Adm_order_all