
import { TbCategoryPlus, TbCheck, TbEditCircle, TbEye, TbSearch, TbTrashFilled, TbX } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import {motion} from 'motion/react'
import { IoMdCloseCircle } from 'react-icons/io'

function Adm_permission_all() {
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
    className='flex flex-col items-center bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl border
     border-white/20 min-md:mr-10 mt-4 min-h-96 max-md:w-full min-md:w-[92%] min-w-[50rem]'>
      <div className='flex flex-row w-full justify-between items-center min-md:p-6 bg-white/30 
      backdrop-blur-md h-24 rounded-t-2xl border-b border-white/20'>
        <Link to="/admin/index" className='text-gray-600 hover:scale-120 mr-3 transition-all duration-200'>
          <IoMdCloseCircle size={27} className='text-red-500'/>
        </Link>
          <h3 className='min-md:text-2xl text-lg font-bold text-gray-800'>مدیریت دسترسی ها</h3>
        <div className='flex flex-row relative justify-center items-center space-x-4'>
          <div className='relative flex justify-center items-center'>
            <TbSearch size={20} className='absolute left-3 text-gray-400'/>
            <input
              type='search'
              className='w-[14rem] inset-shadow-sm shadow-xs hover:w-[20rem] h-12 rounded-xl p-3 bg-white/90 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              placeholder='جستجو...'
            />
          </div>
          <Link to="/admin/permission/add" className='flex h-12 bg-blue-600 hover:bg-blue-700
          text-white items-center justify-center
           rounded-xl text-sm font-medium space-x-2 p-3 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl' >
            <span>افزودن دسترسی</span>
            <TbEye size={25}/>
           </Link>
        </div>
      </div>

      <div className='flex flex-col w-full min-md:p-6 min-h-100 '>
        <table className='w-full min-w-[50rem] '>
          <thead>
            <tr className='w-full grid grid-cols-4 items-center bg-white/90 backdrop-blur-sm text-gray-700/90 rounded-xl
           h-16 text-md justify-center text-center border border-gray-200 shadow-sm'>
              <th className='font-semibold'>ردیف</th>
              <th className='font-semibold'>آیدی</th>
              <th className='font-semibold'>عنوان</th>
              <th className='font-semibold'>عملیات</th>
            </tr>
          </thead>
          <tbody className=''>
            <tr className='w-full grid grid-cols-4 items-center text-gray-600/90
                            h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl 
                            cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className=''>1</td>
              <td className=''>#10</td>
              <td className=''>حذف کاربران</td>
              <td className='flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/permission/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={22} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={22} />
                </Link>
              </td>
            </tr>
            <tr className='w-full grid grid-cols-4 items-center text-gray-600/90
                            h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl 
                            cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className=''>2</td>
              <td className=''>#9</td>
              <td className=''>افزودن ادمین</td>
              <td className='flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/permission/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={22} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={22} />
                </Link>
              </td>
            </tr>
            <tr className='w-full grid grid-cols-4 items-center text-gray-600/90
                            h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl 
                            cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className=''>3</td>
              <td className=''>#8</td>
              <td className=''>ویرایش کاربران</td>
              <td className='flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/permission/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={22} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={22} />
                </Link>
              </td>
            </tr>
            <tr className='w-full grid grid-cols-4 items-center text-gray-600/90
                            h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl 
                            cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className=''>4</td>
              <td className=''>#7</td>
              <td className=''>پیشتیبانی تیکت</td>
              <td className='flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/permission/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={22} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={22} />
                </Link>
              </td>
            </tr>
            <tr className='w-full grid grid-cols-4 items-center text-gray-600/90
                            h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl 
                            cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className=''>5</td>
              <td className=''>#6</td>
              <td className=''>نوشتن مقالات</td>
              <td className='flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/permission/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={22} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={22} />
                </Link>
              </td>
            </tr>
            <tr className='w-full grid grid-cols-4 items-center text-gray-600/90
                            h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl 
                            cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className=''>6</td>
              <td className=''>#5</td>
              <td className=''>پشتیبانی فروش</td>
              <td className='flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/permission/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={22} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={22} />
                </Link>
              </td>
            </tr>
            <tr className='w-full grid grid-cols-4 items-center text-gray-600/90
                            h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl 
                            cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className=''>7</td>
              <td className=''>#4</td>
              <td className=''>ویرایش مقالات</td>
              <td className='flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/permission/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={22} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={22} />
                </Link>
              </td>
            </tr>
            <tr className='w-full grid grid-cols-4 items-center text-gray-600/90
                            h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl 
                            cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className=''>8</td>
              <td className=''>#3</td>
              <td className=''>پشتیبانی ایمیل</td>
              <td className='flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/permission/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={22} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={22} />
                </Link>
              </td>
            </tr>
            <tr className='w-full grid grid-cols-4 items-center text-gray-600/90
                            h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl 
                            cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className=''>9</td>
              <td className=''>#2</td>
              <td className=''>سوپر ادمین</td>
              <td className='flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/permission/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={22} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={22} />
                </Link>
              </td>
            </tr>
            <tr className='w-full grid grid-cols-4 items-center text-gray-600/90
                            h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl 
                            cursor-pointer transition-all duration-200 border border-gray-100/50'>
              <td className=''>10</td>
              <td className=''>#1</td>
              <td className=''>پشتیبانی تلفنی</td>
              <td className='flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                <Link to="/admin/permission/edit" className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                  <TbEditCircle size={22} />
                </Link>
                <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                  <TbTrashFilled size={22} />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default Adm_permission_all