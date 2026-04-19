import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { TbUser, TbMail, TbLock, TbPhone, TbBuilding, TbCheck } from 'react-icons/tb'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoMdCloseCircle } from 'react-icons/io'
import apiClient from '../../../apiClient'
import { toast } from 'react-toastify'

function Adm_add_user() {
  const [roles, setRoles] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    role_id: '',
  })

  const [originalData, setOriginalData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    role_id: '',
  })


  useEffect(() => {

    const findUser = async () => {
      try {
        const res = await apiClient.get(`/admin/users/${id}`);
        if (res.status >= 200 && res.status < 300) {
          const userData = {
            username: res.data.username,
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            email: res.data.email,
            password: '',
            password_confirmation: '',
            phone: res.data.phone,
            role_id: res.data.role_id,
          };
          setFormData(userData);
          setOriginalData(userData);
        }
      } catch (err) {
        toast.error('خطا در دریافت اطلاعات کاربر !')
      }
    }

    const fetchRoles = async () => {
      try {
        const response = await apiClient.get('/admin/roles');
        if (response.status >= 200 && response.status < 300) {
          setRoles(response.data.original[1].data);
        }
      } catch (err) {
        toast.error('مشکل در یافتن نقش های کاربران')
      }
    }

    findUser();
    fetchRoles();
  }, [])


  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'ایمیل معتبر نیست'
    }

  //  if (formData.password.length < 6) {
  //     newErrors.password = 'رمز عبور باید حداقل 6 کاراکتر باشد'
  //   }

  //   if (formData.password !== formData.password_confirmation) {
  //     newErrors.password_confirmation = 'رمز عبور و تکرار آن باید یکسان باشند'
  //   }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)

      // فقط داده‌های تغییر کرده را برای ارسال به سرور آماده کن
      const changedData = {};
      let hasChanges = false;
      
      Object.keys(formData).forEach(key => {
        if (formData[key] !== originalData[key]) {
          changedData[key] = formData[key];
          hasChanges = true;
        }
      });

      // اگر تغییری ایجاد نشده، عملیات را خاتمه بده
      if (!hasChanges) {
        toast.info('هیچ تغییری ایجاد نشده است');
        setIsSubmitting(false);
        return;
      }

      try {
        const res = await apiClient.patch(
          `/admin/users/${id}`,
          changedData
        );
        if (res.status >= 200 && res.status < 300) {
          toast.success('کاربر با موفقیت ویرایش شد')
          navigate('/admin/users/all', {replace: true});
        }
      } catch (err) {
        if (err.response && err.response.data) {
          setErrors(err.response.data);
          toast.error(err.response.data.message || 'خطا در ویرایش کاربر');
        } else {
          setErrors({ server: 'خطایی در ارتباط با سرور رخ داد' });
          toast.error('خطا در ارتباط با سرور');
        }
      } finally {
        setIsSubmitting(false)
      };

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
    <div className="min-lg:h-[80%] min-md:w-[80%] min-lg:mr-30 flex items-center justify-center min-sm:p-4">
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
                  ویرایش کاربر
                  <TbUser size={25} className="text-blue-600" />
                </div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نام کاربری
                  </label>
                  <div className="relative">
                    <TbUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.username ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm`}
                      placeholder="نام کاربری را وارد کنید"
                    />
                  </div>
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                  )}
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نام
                  </label>
                  <div className="relative">
                    <TbUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.first_name ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm`}
                      placeholder="نام را وارد کنید"
                    />
                  </div>
                  {errors.first_name && (
                    <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
                  )}
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نام خانوادگی
                  </label>
                  <div className="relative">
                    <TbUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.last_name ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm`}
                      placeholder="نام خانوادگی را وارد کنید"
                    />
                  </div>
                  {errors.last_name && (
                    <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ایمیل
                  </label>
                  <div className="relative">
                    <TbMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm`}
                      placeholder="ایمیل را وارد کنید"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رمز عبور
                  </label>
                  <div className="relative">
                    <TbLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.password ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm`}
                      placeholder="رمز عبور را وارد کنید"
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تکرار رمز عبور
                  </label>
                  <div className="relative">
                    <TbLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="password_confirmation"
                      value={formData.password_confirmation}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.password_confirmation ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm`}
                      placeholder="رمز عبور را تکرار کنید"
                    />
                  </div>
                  {errors.password_confirmation && (
                    <p className="text-red-500 text-sm mt-1">{errors.password_confirmation}</p>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    شماره تماس
                  </label>
                  <div className="relative">
                    <TbPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm`}
                      placeholder="شماره تماس را وارد کنید"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نقش کاربر
                  </label>
                  <div className="relative">
                    <TbBuilding className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      name="role_id"
                      value={formData.role_id}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
                    >
                      {
                        roles &&

                        roles.map((item) => {
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
                 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 transform
                  hover:scale-102 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    در حال ذخیره...
                  </>
                ) : (
                  <>
                    <TbCheck className="text-lg" />
                    ویرایش کاربر
                  </>
                )}
              </button>

              <Link to="/admin/users/all" className='flex h-12 bg-blue-600 hover:bg-blue-700
                      text-white items-center justify-center
                      rounded-xl text-sm font-medium space-x-2 p-3 transition-all duration-200 
                      transform hover:scale-105 shadow-lg hover:shadow-xl' >
                <TbUser size={20} />
                <span> همه کاربران</span>
              </Link>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Adm_add_user