import { TbArticle, TbCheck, TbEditCircle, TbEyeFilled, TbLoader, TbSearch, TbTrashFilled, TbX } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { IoMdCloseCircle } from 'react-icons/io'
import { useEffect, useState } from 'react'
import apiClient from '../../../apiClient'
import { toast } from 'react-toastify'
import DefaultImg from '../../../StorePanel/assets/img/ico/png-9.png';


function Adm_article_all() {
  
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState();
  const BASE_URL = import.meta.env.VITE__BASEURL;
  

  useEffect(() => {
    setIsLoading(true);
    const fetchArticles = async () => {
      try {
        const res = await apiClient.get('/admin/articles');

        if (res.status >= 200 && res.status < 300) {
          setArticles(res.data);
        }

      } catch (err) {
        toast.error('خطا در واکشی مقالات');
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticles();
  }, []);



  const deleteHandler = async (id) => {
    try{
      const res = await apiClient.delete(`/admin/articles/${id}`)
  
      if(res.status >= 200 && res.status < 300){
        toast.success('مقاله با موفقیت حذف شد');
        setArticles((prev) => prev.filter((item) => {
          return item.id !== id
        }))
      }

    }catch(err){
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
        <h3 className='text-2xl font-bold text-gray-800'>مدیریت مقالات</h3>
        <div className='flex flex-row relative justify-center items-center space-x-4'>
          <div className='relative flex justify-center items-center'>
            <TbSearch size={20} className='absolute left-3 text-gray-400' />
            <input
              type='search'
              className='w-[14rem] inset-shadow-sm shadow-xs hover:w-[20rem] h-12 rounded-xl p-3 bg-white/90 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              placeholder='جستجو...'
            />
          </div>
          <Link to="/admin/article/add" className='flex h-12 bg-blue-600 hover:bg-blue-700
          text-white items-center justify-center
           rounded-xl text-sm font-medium space-x-2 p-3 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl' >
            <TbArticle size={20} />
            <span>افزودن مقاله</span>
          </Link>
        </div>
      </div>

      <div className='flex flex-col w-full justify-start items-center p-6 min-h-100 overflow-x-auto'>
        {
          !isLoading ?
          <table className='w-full'>
            <thead>
              <tr className='w-full grid grid-cols-10 items-center bg-white/90 backdrop-blur-sm text-gray-700/90 rounded-xl
            h-16 text-md justify-center text-center border border-gray-200 shadow-sm'>
                <th className='col-span-1 font-semibold'>ردیف</th>
                <th className='col-span-1 font-semibold'>آیدی</th>
                <th className='col-span-1 font-semibold'>تصویر</th>
                <th className='col-span-1 font-semibold'>عنوان</th>
                <th className='col-span-1 font-semibold'>بازدید</th>
                <th className='col-span-1 font-semibold'>نویسنده</th>
                <th className='col-span-1 font-semibold'>وضعیت</th>
                <th className='col-span-1 font-semibold'>دسته بندی</th>
                <th className='col-span-2 font-semibold'>عملیات</th>
              </tr>
            </thead>
            <tbody>
            
              {

                articles &&
                articles.map((item, index) => {
                  return (
                    <tr key={index} className='w-full grid grid-cols-10 items-center text-gray-600/90
                      h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50 rounded-xl
                      cursor-pointer transition-all duration-200 border border-gray-100/50'>
                      <td className='col-span-1'>{index + 1}</td>
                      <td className='col-span-1'>#{item.id}</td>
                      <td className='col-span-1 flex justify-center items-center'>
                        <img 
                        src={`${BASE_URL}/storage/media/${item.media}`} 
                        onError={(e) => {
                          e.currentTarget.src = DefaultImg;
                        }}
                        className='w-12 h-12 rounded-xl border-2 border-white/50 shadow-md' />
                      </td>
                      <td className='col-span-1'>{item.title.length > 12 ? item.title.slice(0, 12) + '...' : item.title}</td>
                      <td className='col-span-1'>{item.views}</td>
                      <td className='col-span-1'>{item.author?.first_name + ' ' + item.author?.last_name}</td>
                      <td className='col-span-1 justify-center items-center w-full flex'>
                        {
                          item.status
                            ?
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
                          <span className='text-blue-700 text-sm font-medium'>{item.category}</span>
                        </div>
                      </td>
                      <td className='col-span-2 flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                        <Link to={`/admin/article/edit/${item.id}`} className='text-yellow-600 hover:text-yellow-700 
                        transition-colors duration-200' title='ویرایش'>
                          <TbEditCircle size={21} />
                        </Link>
                        <Link onClick={() => deleteHandler(item.id)} className='text-red-600 hover:text-red-700
                         transition-colors duration-200' title='حذف'>
                          <TbTrashFilled size={21} />
                        </Link>
                      </td>
                    </tr>
                  )
                })


              }


            </tbody>
          </table>
          :
          <TbLoader className='flex animate-spin'  size={30}/>
        }
      </div>
    </motion.div>
  )
}

export default Adm_article_all