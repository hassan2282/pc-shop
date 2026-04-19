import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { TbUser, TbBuilding, TbCheck, TbCategoryPlus } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { IoMdCloseCircle } from 'react-icons/io'
import { toast } from 'react-toastify'
import apiClient from '../../../apiClient'


function Adm_add_category() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    parent_id: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchResponse = await apiClient.get('/admin/category/all');
        if (fetchResponse.status >= 200 && fetchResponse.status < 300) {
          setCategories(fetchResponse.data);
        }
      } catch (err) {
        toast.error('فرایند واکشی دسته بندی ها با شکست مواجه شد !')
      }

    }

    fetchCategories();
  }, [formData]);



  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'نام دسته بندی الزامی است'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      try {
        const res = await apiClient.post(
          '/admin/categories',
          formData
        );
        if (res.status >= 200 && res.status < 300) {
          toast.success('دسته بندی با موفقیت افزوده شد');
          setFormData({
            name: '',
            parent_id: '',
          }
          );
        }
      } catch (err) {
        toast.error('متاسفانه در فراید مشکلی بوجود آمده');
        console.log(err.response.data)
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // پاک کردن خطا هنگام تایپ
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }))
    }
  }

  return (
    <div className="min-lg:h-[80%] min-md:w-[80%] w-full min-lg:mr-30 flex items-center justify-center min-sm:p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full max-w-7xl flex flex-row justify-center items-center"
      >

        {/* فرم اصلی */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-center items-center bg-white/30 backdrop-blur-xl min-sm:w-[70%] rounded-2xl 
          shadow-2xl border border-white/20 p-8"
        >
          <form onSubmit={handleSubmit} className="min-sm:space-y-8 w-full">
            {/* اطلاعات پایه */}
            <div className="space-y-6 w-full">
              <h2 className="min-sm:text-xl font-semibold text-gray-800 flex w-full justify-between items-center gap-2">
                <Link to="/admin/index" className='text-gray-600 hover:scale-120 mr-3 transition-all duration-200'>
                  <IoMdCloseCircle size={27} className='text-red-500' />
                </Link>
                <div className='flex flex-row gap-2'>
                  افزودن دسته‌بندی
                  <TbCategoryPlus size={25} className="text-blue-600 max-sm:hidden" />
                </div>
              </h2>

              <div className="grid min-md:grid-cols-2 gap-6 w-full">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    عنوان دسته‌بندی
                  </label>
                  <div className="relative">
                    <TbUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      required
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm`}
                      placeholder="عنوان دسته‌بندی ..."
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>


                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    والد
                  </label>
                  <div className="relative">
                    <TbBuilding className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      name="parent_id"
                      value={formData.parent_id}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm">
                      <option value="" >
                        دسته بندی اصلی
                      </option>
                      {
                        categories &&
                        categories?.map((item) => {
                          return (
                            <option key={item.id} value={item.id}>{item.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* دکمه‌های فرم */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700
                 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105
                  focus:outline-none focus:ring-2 cursor-pointer focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    در حال ذخیره...
                  </>
                ) : (
                  <>
                    <TbCheck className="text-lg" />
                    ایجاد دسته‌بندی
                  </>
                )}
              </button>

              <Link to="/admin/categories/all" className='flex h-12 bg-blue-600 hover:bg-blue-700
                      text-white items-center justify-center
                      rounded-xl text-sm font-medium space-x-2 p-3 transition-all duration-200 
                      transform hover:scale-105 shadow-lg hover:shadow-xl' >
                <TbCategoryPlus size={20} />
                <span> همه دسته بندی ها</span>
              </Link>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div >
  )
}

export default Adm_add_category