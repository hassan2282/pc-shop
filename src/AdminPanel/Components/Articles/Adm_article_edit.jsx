
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { TbArticle, TbCheck } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { IoMdCloseCircle } from 'react-icons/io'
import { FcOldTimeCamera } from 'react-icons/fc'
import Text_Editor from '../Text_Editor'
import TagComponent from '../TagComponent'

function Adm_article_edit() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = 'عنوان مقاله الزامی است'
    }

    if (!formData.description) {
      newErrors.description = 'توضیح اختصاری الزامی است'
    } else if (formData.description.length < 20) {
      newErrors.description = 'توضیح اختصاری باید حداقل 20 کاراکتر باشد'
    }

    if (!formData.category) {
      newErrors.category = 'دسته بندی کالا الزامی است'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      // در اینجا منطق ارسال داده به سرور قرار می‌گیرد
      console.log('Form submitted:', formData)
      setTimeout(() => {
        setIsSubmitting(false)
        // نمایش پیام موفقیت
        alert('کاربر با موفقیت ایجاد شد')
      }, 1500)
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
    <div className="relative items-center justify-center min-lg:w-[75%] min-lg:mr-[12%] min-sm:p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl"
      >


        {/* فرم اصلی */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex w-full h-full justify-center items-center backdrop-blur-xl
           rounded-2xl shadow-2xl border border-white/20 min-md:p-8 p-1 bg-white/10"
        >
          <form onSubmit={handleSubmit} className="min-md:space-y-8 w-full space-y-2  flex flex-col">
            {/* اطلاعات پایه */}
            <div className="flex flex-col w-full min-md:space-y-8 space-y-2">
              <h2 className="flex text-xl font-semibold text-gray-800 w-full justify-between items-center gap-2">
                <Link to="/admin/index" className='text-gray-600 hover:scale-120 mr-3 transition-all duration-200'>
                  <IoMdCloseCircle size={27} className='text-red-500' />
                </Link>
                <div className='flex flex-row gap-2'>
                  ویرایش مقاله
                  <TbArticle size={30} className="text-blue-600 max-md:hidden" />
                </div>
              </h2>

              <div className="min-md:grid max-md:flex max-md:flex-col md:grid-cols-4 lg:grid-cols-4 gap-6">
                <div className="relative col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    عنوان
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-4 shadow-sm shadow-zinc-500 hover:shadow-md 
                        duration-200 rounded-xl border ${errors.title ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/40 `}
                      placeholder="عنوان محصول را وارد کنید"
                    />
                  </div>
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                  )}
                </div>



                 <div className="relative col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    دسته بندی
                  </label>
                  <div className="relative">
                    <select
                      type="text"
                      name="description"
                      value={formData.category}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-4 shadow-sm shadow-zinc-500 hover:shadow-md duration-200 rounded-xl
                         border ${errors.category ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/40 `}
                      placeholder="دسته بندی">

                    <option>دسته بندی</option>
                    <option>کامپیوتر</option>
                    <option>لپ تاب</option>
                    <option>میز</option>
                    <option>آهن</option>
                    <option>ماوس</option>
                    <option>جانبی موبایل</option>

                    </select>
                  </div>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">{errors.category}</p>
                  )}
                </div>   



                <div className="relative col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    توضیح مختصر
                  </label>
                  <div className="relative">
                    <textarea
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-4 min-h-[12rem] h-[3.8rem] shadow-sm shadow-zinc-500
                         hover:shadow-md duration-200 rounded-xl border ${errors.description ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/40 `}
                      placeholder="توضیح اختصاری ..."
                    />
                  </div>
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                  )}
                </div>


                <div className="relative col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تصویر مقاله
                  </label>
                  <div className="md:flex">
                    <div className="w-full h-full">
                      <div
                        className="relative h-48 rounded-xl border-2 border-blue-500/20 bg-white/40 flex hover:border-blue-500/50
                          justify-center items-center shadow-sm shadow-zinc-500 hover:shadow-md transition-shadow duration-300 ease-in-out"
                      >
                        <div className="absolute flex flex-col items-center">
                          <FcOldTimeCamera size={80} />
                          <span className="block text-rose-600/70 font-semibold">
                            * اجباری *
                          </span>
                          تصویر اصلی
                          <span className="block text-zinc-600 font-normal mt-1">
                            ویرایش تصویر محصول
                          </span>
                        </div>

                        <input
                          name=""
                          className="h-full w-full opacity-0 cursor-pointer"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <Text_Editor/>


              <TagComponent />

            </div>

            {/* دکمه‌های فرم */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center gap-2 cursor-pointer bg-blue-600 
                hover:bg-blue-700 text-white font-medium py-3 px-2 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    در حال ذخیره...
                  </>
                ) : (
                  <>
                    <TbCheck className="text-lg" />
                    ویرایش مقاله
                  </>
                )}
              </button>

              <Link to="/admin/product/all" className='flex h-12 bg-blue-600 hover:bg-blue-700
                      text-white items-center justify-center
                      rounded-xl text-sm font-medium space-x-2 p-3 transition-all duration-200 
                      transform hover:scale-105 shadow-lg hover:shadow-xl' >
                <span> همه مقالات</span>
                <TbArticle size={25} />
              </Link>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Adm_article_edit