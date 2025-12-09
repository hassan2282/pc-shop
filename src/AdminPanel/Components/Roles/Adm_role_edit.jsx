import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { TbUser, TbCheck } from 'react-icons/tb'
import { Link, useParams } from 'react-router-dom'
import { IoMdCloseCircle } from 'react-icons/io'
import { FaUnlockAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import apiClient from '../../../apiClient'

function Adm_role_add() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    permissions: [],
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [permissions, setPermissions] = useState([]);

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'عنوان نقش الزامی است'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }


  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const fetchResponse = await apiClient.get('/admin/permissions');
        if (fetchResponse.status >= 200 && fetchResponse.status < 300) {
          setPermissions(fetchResponse.data);
        }
        const getTargetRole = await apiClient.get(`/admin/roles/${id}`);
        if (getTargetRole.status >= 200 && getTargetRole.status < 300) {
          setFormData({
            name: getTargetRole.data.name,
            permissions: getTargetRole.data.permissions.map(item => String(item.id))
          });
        }

      } catch (err) {
        toast.error('خطا در فرایند واکشی داده ها');
      }
    }
    fetchRoles();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      try {
        const res = await apiClient.patch(`/admin/roles/${id}`, formData)
        if (res.status >= 200 && res.status < 300) {
          toast.success('نقش با موفقیت ویرایش شد');
          setFormData({ name: '', permissions: [] });
        }
      } catch (err) {
        console.log(err.response.data)
        toast.error('خطا در فرایند ویرایش نقش ');

      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'permissions' && type === 'checkbox') {
      setFormData(prev => {
        const newPermissions = checked
          ? [...prev.permissions, value]
          : prev.permissions?.filter(permissionId => permissionId !== value);
        return {
          ...prev,
          permissions: newPermissions,
        };
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // پاک کردن خطا هنگام تایپ
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  return (
    <div className="min-lg:h-[80%] min-md:w-[80%] w-full mt-10 md:mr-20 min-lg:mr-30 flex items-center justify-center min-sm:p-4">
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
          className="flex flex-col justify-center items-center bg-white/30 backdrop-blur-xl min-sm:w-[80%] rounded-2xl 
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
                  ویرایش نقش
                  <FaUnlockAlt size={25} className="text-blue-600 max-sm:hidden" />
                </div>
              </h2>

              <div className="grid gap-6 w-full">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    عنوان نقش
                  </label>
                  <div className="relative">
                    <TbUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm`}
                      placeholder="عنوان نقش ..."
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
              </div>



              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  دسترسی ها
                </label>
                <div className="grid max-sm:grid-cols-1 sm:grid-cols-3 min-md:grid-cols-5 gap-2 text-zinc-600 
                  justify-center items-center w-full h-full
                  
                    *:flex *:w-full *:h-full *:bg-white/40 *:has-[:checked]:shadow-blue-800 *:has-[:checked]:shadow-md
                     *:has-[:checked]:text-white *:has-[:checked]:border *:has-[:checked]:border-blue-700
                    *:duration-300 *:border *:border-white/80 *:has-[:checked]:bg-blue-500/70
                    *:relative *:items-center *:justify-center *:text-center *:cursor-pointer *:rounded-xl *:p-2">

                  {
                    permissions &&
                    permissions.map((item) => {
                      return (
                        <label key={item.id} className=''>
                          <input
                            onChange={handleChange}
                            name='permissions'
                            className='absolute appearance-none cursor-pointer rounded-xl w-full h-full'
                            type='checkbox'
                            value={item.id}
                            checked={formData.permissions?.includes(String(item.id))}
                          />
                          <span className='z-20'>{item.name}</span>
                        </label>
                      )
                    })
                  }
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
                    ویرایش نقش
                  </>
                )}
              </button>

              <Link to="/admin/role/all" className='flex h-12 bg-blue-600 hover:bg-blue-700
                      text-white items-center justify-center
                      rounded-xl text-sm font-medium space-x-2 p-3 transition-all duration-200 
                      transform hover:scale-105 shadow-lg hover:shadow-xl' >
                <span> همه نقش ها</span>
                <FaUnlockAlt size={20} />
              </Link>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Adm_role_add