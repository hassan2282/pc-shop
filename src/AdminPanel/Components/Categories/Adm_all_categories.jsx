import { FaUserSecret } from 'react-icons/fa'
import { TbCategoryPlus, TbCheck, TbEditCircle, TbSearch, TbTrashFilled, TbX } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { IoMdCloseCircle } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import apiClient from '../../../apiClient'

function Adm_all_categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const allCategories = async () => {
      try {
        const fetchResponse = await apiClient.get('/admin/categories');

        if (fetchResponse.status >= 200 && fetchResponse.status < 300) {
          setCategories(fetchResponse.data);
        }
      } catch (err) {
        toast.error('فرایند واکشی دسته بندی ها با شکست مواجه شد !')
      }

    }

    allCategories();
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
      className='flex flex-col items-center bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl border
     border-white/20 min-md:mr-10 mt-4 min-h-96 max-md:w-full min-md:w-[92%] min-w-[50rem]'>
      <div className='flex flex-row w-full justify-between items-center min-md:p-6 bg-white/30 
      backdrop-blur-md h-24 rounded-t-2xl border-b border-white/20'>
        <Link to="/admin/index" className='text-gray-600 hover:scale-120 mr-3 transition-all duration-200'>
          <IoMdCloseCircle size={27} className='text-red-500' />
        </Link>
        <h3 className='min-md:text-2xl text-lg font-bold text-gray-800'>مدیریت دسته بندی ها</h3>
        <div className='flex flex-row relative justify-center items-center space-x-4'>
          <div className='relative flex justify-center items-center'>
            <TbSearch size={20} className='absolute left-3 text-gray-400' />
            <input
              type='search'
              className='w-[14rem] inset-shadow-sm shadow-xs hover:w-[20rem] h-12 rounded-xl p-3 bg-white/90 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              placeholder='جستجو...'
            />
          </div>
          <Link to="/admin/category/add" className='flex h-12 bg-blue-600 hover:bg-blue-700
          text-white items-center justify-center
           rounded-xl text-sm font-medium space-x-2 p-3 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl' >
            <TbCategoryPlus size={20} />
            <span>افزودن دسته بندی</span>
          </Link>
          <Link to="" className='flex h-12 bg-blue-600 hover:bg-blue-700
          text-white items-center justify-center
           rounded-xl text-sm font-medium space-x-2 p-3 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl' >
            <TbCategoryPlus size={20} />
            <span>نمای درختی</span>
          </Link>
        </div>
      </div>

      <div className='flex flex-col w-full min-md:p-6 min-h-100 '>
        <table className='w-full min-w-[50rem] '>
          <thead>
            <tr className='w-full grid grid-cols-6 items-center bg-white/90 backdrop-blur-sm text-gray-700/90 rounded-xl
           h-16 text-md justify-center text-center border border-gray-200 shadow-sm'>
              <th className='font-semibold'>ردیف</th>
              <th className='font-semibold'>آیدی</th>
              <th className='font-semibold'>عنوان</th>
              <th className='font-semibold'>وضعیت</th>
              <th className='font-semibold'>والد</th>
              <th className='font-semibold'>عملیات</th>
            </tr>
          </thead>
          <tbody className=''>
            {
              categories &&
              categories.map((item, index) => {
                return (
                  <tr key={item.id} className='w-full grid grid-cols-6 items-center text-gray-600/90
                            h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl 
                            cursor-pointer transition-all duration-200 border border-gray-100/50'>
                    <td className=''>{index + 1}</td>
                    <td className=''>#{item.id}</td>
                    <td className=''>{item.name}</td>
                    <td className=' justify-center items-center w-full flex'>
                      <div className='flex items-center gap-1 bg-green-100/80 backdrop-blur-sm px-3 py-1 rounded-full'>
                        <TbCheck size={16} className='text-green-600' />
                        <span className='text-green-700 text-sm font-medium'>فعال</span>
                      </div>
                      {/* <div className='flex items-center gap-1 bg-red-100/80 backdrop-blur-sm px-3 py-1 rounded-full'>
                      <TbX size={16} className='text-red-600' />
                      <span className='text-red-700 text-sm font-medium'>غیرفعال</span>
                    </div> */}
                    </td>
                    <td className='col-span-1 justify-center items-center w-full flex'>
                      <div className='flex items-center gap-1 bg-blue-100/80 backdrop-blur-sm px-3 py-1 rounded-full'>
                        {/* <FaUserSecret size={16} className='text-blue-600' /> */}
                        {
                          item.parent_id === null ?
                            <span className='text-rose-700 text-sm font-medium'>دسته بندی اصلی</span>
                            :
                            <span className='text-blue-700 text-sm font-medium'>{item.parent.name}</span>

                        }
                      </div>
                    </td>
                    <td className='flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                      <Link to={`/admin/category/edit/${item.id}`} className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                        <TbEditCircle size={22} />
                      </Link>
                      <Link className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                        <TbTrashFilled size={22} />
                      </Link>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default Adm_all_categories