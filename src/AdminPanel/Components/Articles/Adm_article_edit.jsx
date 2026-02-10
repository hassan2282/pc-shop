
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { TbArticle, TbCheck } from 'react-icons/tb'
import { Link, replace, useNavigate, useParams } from 'react-router-dom'
import { IoMdCloseCircle } from 'react-icons/io'
import { FcOldTimeCamera } from 'react-icons/fc'
import Text_Editor from '../Text_Editor'
import TagComponent from '../TagComponent'
import apiClient from '../../../apiClient'
import { toast } from 'react-toastify'

function Adm_article_edit() {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    text: '',
    category_id: '',
    media: null,
    tags: [],
  })
  const [preview, setPreview] = useState();
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [content, setContent] = useState();
  const [uploadedImages, setUploadedImages] = useState([]);
  const BASE_URL = import.meta.env.VITE__BASEURL;
  const navigate = useNavigate();


  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await apiClient.get(`/admin/articles/${id}`)
        if (res.status >= 200 && res.status < 300) {
          setFormData({
            title: res.data.title,
            description: res.data.description,
            text: res.data.text,
            category_id: res.data.category_id,
            media: res.data.media,
          })
          handleTagChange(res.data.tags)
          setContent(res.data.text)
          setPreview(BASE_URL + '/storage/media/' + res.data.media.name)
          const tagNames = res.data.tags.map(item => item.name);
          handleTagChange(tagNames)
        }
      } catch (err) {
        toast.error('خطا در واکشی مقاله');
      }

    }

    fetchArticle();
  }, []);



  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchResponse = await apiClient.get('/admin/categories');
        if (fetchResponse.status >= 200 && fetchResponse.status < 300) {
          setCategories(fetchResponse.data);
        }
      } catch (err) {
        toast.error('فرایند واکشی دسته بندی ها با شکست مواجه شد !');
      }
    };

    fetchCategories();
  }, []);


  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) {
      toast.error('عنوان مقاله الزامی است')
      newErrors.title = 'عنوان مقاله الزامی است'
    }

    if (!formData.description) {
      toast.error('توضیح اختصاری الزامی است')
      newErrors.description = 'توضیح اختصاری الزامی است'
    } else if (formData.description.length < 20) {
      toast.error('توضیح اختصاری باید حداقل 20 کاراکتر باشد')
      newErrors.description = 'توضیح اختصاری باید حداقل 20 کاراکتر باشد'
    }

    if (!formData.category_id) {
      toast.error('دسته بندی مقاله الزامی است')
      newErrors.category_id = 'دسته بندی مقاله الزامی است'
    }
    if (!formData.media) {
      toast.error('تصویر مقاله الزامی است')
      newErrors.media = 'تصویر مقاله الزامی است'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target

    if (name === 'media') {
      const file = files?.[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
        setFormData((prev) => ({
          ...prev,
          media: file
        }))
      } else {
        setFormData((prev) => ({
          ...prev,
          media: file,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // پاک کردن خطا هنگام تایپ
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleContentChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      text: value,
    }));
  };

  const handleTagChange = (newTags) => {
    setFormData((prev) => ({
      ...prev,
      tags: newTags,
    }));
  };

  const handleImageUpload = (imageUrl, fileName) => {
    // اضافه کردن تصویر آپلود شده به لیست
    const newImage = {
      url: imageUrl,
      name: fileName,
      timestamp: new Date().toISOString()
    };

    setUploadedImages(prev => [...prev, newImage]);

    // همچنین میتوانی اطلاعات تصویر را در formData هم ذخیره کنی
    setFormData(prev => ({
      ...prev,
      uploadedImages: [...(prev.uploadedImages || []), newImage]
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)

      try {
        const data = new FormData();

        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('text', formData.text);
        data.append('category_id', formData.category_id);

        // اگر مدیا فایل جدید انتخاب شده
        if (formData.media instanceof File) {
          data.append('media', formData.media);
        }

        // تگ‌ها
        formData.tags.forEach((tag, index) => {
          data.append(`tags[${index}]`, tag);
        });

        const res = await apiClient.post(
          `/admin/articles/${id}?_method=PATCH`,
          data
        );

        if (res.status >= 200 && res.status < 300) {
          toast.success('مقاله با موفقیت ویرایش شد');
          navigate('/admin/article/all', {replace:true})
        }

      } catch (err) {
        toast.error('فرایند ویرایش مقاله با شکست مواجه شد');
      } finally {
        setIsSubmitting(false);
      }

    }
  }


  return (
    <div className="relative items-center justify-center min-lg:w-[75%] min-lg:mr-[12%] min-sm:p-10">
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
           rounded-2xl shadow-2xl border border-white/20 min-md:p-8 p-1 bg-white/30"
        >
          <form onSubmit={handleSubmit} className="min-md:space-y-2 w-full space-y-2  flex flex-col">
            {/* اطلاعات پایه */}
            <div className="flex flex-col w-full min-md:space-y-2 space-y-2">
              <h2 className="flex text-xl font-semibold text-gray-800 w-full justify-between items-center gap-2">
                <Link to="/admin/index" className='text-gray-600 hover:scale-120 mr-3 transition-all duration-200'>
                  <IoMdCloseCircle size={27} className='text-red-500' />
                </Link>
                <div className='flex flex-row gap-2'>
                  ویرایش مقاله
                  <TbArticle size={30} className="text-blue-600 max-md:hidden" />
                </div>
              </h2>

              <div className="min-md:grid max-md:flex max-md:flex-col md:grid-cols-4 lg:grid-cols-4 gap-3">
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
                      className={`w-full pl-10 pr-4 py-4 
                        duration-200 rounded-xl border ${errors.title ? 'border-red-500' : 'border-gray-200'}
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 `}
                      placeholder="عنوان مقاله را وارد کنید"
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
                      name="category_id"
                      value={formData.category_id}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-4 duration-200 rounded-xl
                         border ${errors.category_id ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 `}
                      placeholder="دسته بندی">
                      {
                        categories &&
                        categories.map((item, index) => {
                          return (
                            <option className='text-zinc-500' value={item.id} key={index}>{item.name}</option>
                          )
                        })
                      }

                    </select>
                  </div>
                  {errors.category_id && (
                    <p className="text-red-500 text-sm mt-1">{errors.category_id}</p>
                  )}
                </div>



                <div className="relative col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    توضیح مختصر
                  </label>
                  <div className="relative">
                    <textarea
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-4 min-h-[12rem] h-[3.8rem] duration-200 rounded-xl border ${errors.description ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 `}
                      placeholder="توضیح اختصاری ..."
                    />
                  </div>
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                  )}
                </div>


                <div className="relative col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تصویر مقاله
                  </label>
                  <div className="md:flex">
                    <div className="w-full h-full">
                      <div
                        className="relative h-48 rounded-xl border-2 border-blue-500/20 bg-white/90 flex hover:border-blue-500/50
                          justify-center items-center transition-shadow duration-300 ease-in-out"
                      >
                        <div className="absolute backdrop-blur-md cursor-pointer z-20 rounded-xl p-2 flex flex-col items-center">
                          <FcOldTimeCamera size={80} />
                        </div>

                        {preview &&
                          <img src={preview} className='absolute z-10 w-full h-full rounded-xl' />
                        }

                        <input
                          name="media"
                          onChange={handleChange}
                          className="h-full w-full opacity-0 cursor-pointer z-30"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <Text_Editor
                value={content}
                onChange={handleContentChange}
                onImageUpload={handleImageUpload}
                title='article' />


              <TagComponent
                tags={formData.tags}
                onChange={handleTagChange} />

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

              <Link to="/admin/article/all" className='flex h-12 bg-blue-600 hover:bg-blue-700
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