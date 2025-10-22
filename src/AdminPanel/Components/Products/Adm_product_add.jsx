import React, { useState } from 'react'
import { motion } from 'motion/react'
import { TbUser, TbCheck, TbScreenshot } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { IoMdCloseCircle } from 'react-icons/io'
import { LiaDollyFlatbedSolid } from 'react-icons/lia'
import { FcOldTimeCamera } from 'react-icons/fc'

function Adm_product_add() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    amount: '',
    joinDate: new Date().toISOString().split('T')[0]
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = 'عنوان محصول الزامی است'
    }

    if (!formData.price.trim()) {
      newErrors.price = 'قیمت الزامی است'
    } else if (!/\S+@\S+\.\S+/.test(formData.price)) {
      newErrors.price = 'قیمت معتبر نیست'
    }

    if (!formData.description) {
      newErrors.description = 'توضیح اختصاری الزامی است'
    } else if (formData.description.length < 20) {
      newErrors.description = 'توضیح اختصاری باید حداقل 20 کاراکتر باشد'
    }

    if (!formData.amount) {
      newErrors.amount = 'موجودی کالا الزامی است'
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
    <div className="min-lg:h-[90%] min-md:w-[80%] md:mr-20 min-lg:mt-20 min-lg:mr-30 flex items-center justify-center min-sm:p-4">
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
          className="bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* اطلاعات پایه */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 flex w-full justify-between items-center gap-2">
                <Link to="/admin/index" className='text-gray-600 hover:scale-120 mr-3 transition-all duration-200'>
                  <IoMdCloseCircle size={27} className='text-red-500' />
                </Link>
                <div className='flex flex-row gap-2'>
                  افزودن محصول
                  <LiaDollyFlatbedSolid size={30} className="text-blue-600" />
                </div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
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
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.title ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/60 backdrop-blur-sm`}
                      placeholder="عنوان محصول را وارد کنید"
                    />
                  </div>
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    قیمت
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.price ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/40 backdrop-blur-sm`}
                      placeholder="قیمت "
                    />
                  </div>
                  {errors.price && (
                    <p className="text-red-500 text-sm mt-1">{errors.price}</p>
                  )}
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تعداد موجودی کالا
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.amount ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/40 backdrop-blur-sm`}
                      placeholder="موجودی کالا "
                    />
                  </div>
                  {errors.amount && (
                    <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
                  )}
                </div>


                <div className="relative col-span-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    توضیح مختصر
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-4 rounded-xl border ${errors.description ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/40 backdrop-blur-sm`}
                      placeholder="توضیح اختصاری ..."
                    />
                  </div>
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                  )}
                </div>


                <div class="relative">
                  <div class="md:flex">
                    <div class="w-full p-3">
                      <div
                        class="relative h-48 rounded-lg border-2 border-blue-500/20 bg-white/40 flex hover:border-blue-500/50
                          justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                      >
                        <div class="absolute flex flex-col items-center">
                          <FcOldTimeCamera size={80} />
                          <span class="block text-rose-600/70 font-semibold">
                              * اجباری *
                          </span>
                          تصویر اصلی
                          <span class="block text-zinc-600 font-normal mt-1">
                            آپلود تصویر محصول
                          </span>
                        </div>

                        <input
                          name=""
                          class="h-full w-full opacity-0 cursor-pointer"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <div class="md:flex">
                    <div class="w-full p-3">
                      <div
                        class="relative h-48 rounded-lg border-2 border-blue-500/20 bg-white/50 flex hover:border-blue-500/50
                          justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                      >
                        <div class="absolute flex flex-col items-center">
                          <TbScreenshot size={80} className='text-blue-600' />
                          
                          تصویر فرعی
                          <span class="block text-zinc-600 font-normal mt-1">
                            آپلود تصویر محصول
                          </span>
                        </div>

                        <input
                          name=""
                          class="h-full w-full opacity-0 cursor-pointer"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <div class="md:flex">
                    <div class="w-full p-3">
                      <div
                        class="relative h-48 rounded-lg border-2 border-blue-500/20 bg-white/50 flex hover:border-blue-500/50
                          justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                      >
                        <div class="absolute flex flex-col items-center">
                          <TbScreenshot size={80} className='text-blue-600' />
                          تصویر فرعی
                          <span class="block text-zinc-600 font-normal mt-1">
                            آپلود تصویر محصول
                          </span>
                        </div>

                        <input
                          name=""
                          class="h-full w-full opacity-0 cursor-pointer"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <div class="md:flex">
                    <div class="w-full p-3">
                      <div
                        class="relative h-48 rounded-lg border-2 border-blue-500/20 bg-white/50 flex hover:border-blue-500/50
                          justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                      >
                        <div class="absolute flex flex-col items-center">
                          <TbScreenshot size={80} className='text-blue-600' />
                          تصویر فرعی
                          <span class="block text-zinc-600 font-normal mt-1">
                            آپلود تصویر محصول
                          </span>
                        </div>

                        <input
                          name=""
                          class="h-full w-full opacity-0 cursor-pointer"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>

            {/* دکمه‌های فرم */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-2 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    در حال ذخیره...
                  </>
                ) : (
                  <>
                    <TbCheck className="text-lg" />
                    ایجاد محصول
                  </>
                )}
              </button>

              <Link to="/admin/users/all" className='flex h-12 bg-blue-600 hover:bg-blue-700
                      text-white items-center justify-center
                      rounded-xl text-sm font-medium space-x-2 p-3 transition-all duration-200 
                      transform hover:scale-105 shadow-lg hover:shadow-xl' >
                <span> همه محصولات</span>
                <LiaDollyFlatbedSolid size={25} />
              </Link>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Adm_product_add