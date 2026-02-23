import { TbCheck, TbEditCircle, TbEyeFilled, TbSearch, TbTrashFilled, TbX } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { MdShoppingBasket } from 'react-icons/md'
import { IoMdCloseCircle } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import apiClient from '../../../apiClient'


function Adm_product_all() {

  const [products, setProducts] = useState();
  const BASE_URL = import.meta.env.VITE__BASEURL;


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiClient.get('/admin/products');
        if (res.status >= 200 && res.status < 300) {
          setProducts(res.data);
        }

      } catch (err) {
        toast.error('خطا در واکشی محصولات');
      }
    }

    fetchProducts();
  }, []);


  const deleteHandler = async (id) => {
    try {
      const res = await apiClient.delete(`/admin/products/${id}`)

      if (res.status >= 200 && res.status < 300) {
        toast.success('مقاله با موفقیت حذف شد');
        setProducts((prev) => prev.filter((item) => {
          return item.id !== id
        }))
      }

    } catch (err) {
      toast.error('خطا در فرایند حذف مقاله');
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
        <h3 className='text-2xl font-bold text-gray-800'>مدیریت محصولات</h3>
        <div className='flex flex-row relative justify-center items-center space-x-4'>
          <div className='relative flex justify-center items-center'>
            <TbSearch size={20} className='absolute left-3 text-gray-400' />
            <input
              type='search'
              className='w-[14rem] inset-shadow-sm shadow-xs hover:w-[20rem] h-12 rounded-xl p-3 
              bg-white/90 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2
               focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              placeholder='جستجو...'
            />
          </div>
          <Link to="/admin/product/add" className='flex h-12 bg-blue-600 hover:bg-blue-700
          text-white items-center justify-center rounded-xl text-sm font-medium space-x-2 p-3 
          transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl' >
            <MdShoppingBasket size={20} />
            <span>افزودن محصول</span>
          </Link>
        </div>
      </div>

      <div className='flex flex-col w-full p-6 min-h-100 overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='w-full grid grid-cols-10 items-center bg-white/90 backdrop-blur-sm text-gray-700/90 rounded-xl
           h-16 text-md justify-center text-center border border-gray-200 shadow-sm'>
              <th className='col-span-1 font-semibold'>ردیف</th>
              <th className='col-span-1 font-semibold'>آیدی</th>
              <th className='col-span-1 font-semibold'>تصویر</th>
              <th className='col-span-1 font-semibold'>عنوان</th>
              <th className='col-span-1 font-semibold'>قیمت</th>
              <th className='col-span-1 font-semibold'>موجودی</th>
              <th className='col-span-1 font-semibold'>وضعیت</th>
              <th className='col-span-1 font-semibold'>دسته بندی</th>
              <th className='col-span-2 font-semibold'>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {
              products &&
              products.map((item, index) => {
                return (
                  <motion.tr
                    initial={{ filter: "blur(10px)", opacity: 0 }}
                    animate={{ filter: 'none', opacity: 1 }}
                    transition={{ delay: 0.2 * index, duration: 0.4, ease: "easeOut" }}
                    key={index} className='w-full grid grid-cols-10 items-center text-gray-600/90
            h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl 
            cursor-pointer transition-all duration-200 border border-gray-100/50'>
                    <td className='col-span-1'>{index + 1}</td>
                    <td className='col-span-1'>#{item.id}</td>
                    <td className='col-span-1 flex justify-center items-center'>
                      <img src={`${BASE_URL}/storage/media/${item?.media[0]?.name}`} className='w-12 h-12 rounded-xl 
                      border-2 border-white/50 shadow-md object-cover' />
                    </td>
                    <td className='col-span-1'>{item.title}</td>
                    <td className='col-span-1'>{item.price}</td>
                    <td className='col-span-1'>{item.amount}</td>
                    <td className='col-span-1 justify-center items-center w-full flex'>
                      {
                        item.status ?
                          <div className='flex items-center gap-1 bg-green-100/80 backdrop-blur-sm px-3 py-1 rounded-full'>
                            <TbCheck size={16} className='text-green-600' />
                            <span className='text-green-700 text-sm font-medium'>فعال</span>
                          </div>
                          :
                          <div className='flex items-center gap-1 bg-red-100/80 backdrop-blur-sm px-3 py-1 rounded-full'>
                            <TbX size={16} className='text-red-600' />
                            <span className='text-red-700 text-sm font-medium'>غیرفعال</span>
                          </div>
                      }
                    </td>
                    <td className='col-span-1 justify-center items-center w-full flex'>
                      <div className='flex items-center gap-1 bg-gray-100/80 backdrop-blur-sm px-3 py-1 rounded-full'>
                        <span className='text-blue-700 text-sm font-medium'>{item.category.name}</span>
                      </div>
                    </td>
                    <td className='col-span-2 flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                      <Link to={`/admin/product/show/${item.id}`} className='text-blue-600 hover:text-blue-700 
                      transition-colors duration-200' title='مشاهده'>
                        <TbEyeFilled size={20} />
                      </Link>
                      <Link to={`/admin/product/edit/${item.id}`} className='text-yellow-600 hover:text-yellow-700 
                      transition-colors duration-200' title='ویرایش'>
                        <TbEditCircle size={20} />
                      </Link>
                      <Link onClick={() => deleteHandler(item.id)} className='text-red-600 hover:text-red-700
                       transition-colors duration-200' title='حذف'>
                        <TbTrashFilled size={20} />
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

export default Adm_product_all