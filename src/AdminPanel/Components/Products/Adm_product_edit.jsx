import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { TbCheck, TbLoader, TbPlus, TbScreenshot } from 'react-icons/tb'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoMdCloseCircle } from 'react-icons/io'
import { LiaDollyFlatbedSolid } from 'react-icons/lia'
import { FcOldTimeCamera } from 'react-icons/fc'
import Text_Editor from '../Text_Editor'
import TagComponent from '../TagComponent'
import { toast } from 'react-toastify'
import apiClient from '../../../apiClient'
import { RiDeleteBin2Fill } from 'react-icons/ri'

function Adm_product_edit() {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [rows, setRows] = useState([
    { attribute: "", value: "" },
    { attribute: "", value: "" },
    { attribute: "", value: "" },
    { attribute: "", value: "" },
    { attribute: "", value: "" },
  ]);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    amount: '',
    description: '',
    category_id: '',
    text: '',
    media_1: '',
    media_2: '',
    media_3: '',
    media_4: '',
    tags: [],
    allAttributes: rows,
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [content, setContent] = useState();
  const [_uploadedImages, setUploadedImages] = useState([]);
  const [preview_1, setPreview_1] = useState();
  const [preview_2, setPreview_2] = useState();
  const [preview_3, setPreview_3] = useState();
  const [preview_4, setPreview_4] = useState();
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE__BASEURL;


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchResponse = await apiClient.get('/admin/category/all');
        if (fetchResponse.status >= 200 && fetchResponse.status < 300) {
          setCategories(fetchResponse.data);
        }
      } catch (err) {
        console.log(err)
        toast.error('فرایند واکشی دسته بندی ها با شکست مواجه شد !');
      }
    };

    fetchCategories();

  }, []);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await apiClient.get(`/admin/products/${id}`);
        if (res.status >= 200 && res.status < 300) {
          const attrsFromApi = (res.data.attribute_values || []).map((item) => ({
            attribute: item?.attribute?.name || '',
            value: item?.value || '',
          }));

          const normalizedRows = [...attrsFromApi];
          while (normalizedRows.length < 5) normalizedRows.push({ attribute: '', value: '' });

          setRows(normalizedRows);

          const tagNames = (res.data.tags || []).map((item) => item.name);
          setContent(res.data.text || '')
          setPreview_1(res.data.media?.[0]?.name ? `${BASE_URL}/storage/media/${res.data.media[0].name}` : undefined)
          setPreview_2(res.data.media?.[1]?.name ? `${BASE_URL}/storage/media/${res.data.media[1].name}` : undefined)
          setPreview_3(res.data.media?.[2]?.name ? `${BASE_URL}/storage/media/${res.data.media[2].name}` : undefined)
          setPreview_4(res.data.media?.[3]?.name ? `${BASE_URL}/storage/media/${res.data.media[3].name}` : undefined)

          setFormData({
            title: res.data.title || '',
            price: res.data.price ?? '',
            amount: res.data.amount ?? '',
            description: res.data.description || '',
            category_id: res.data.category_id ?? '',
            text: res.data.text || '',
            media_1: res.data.media[0] || '',
            media_2: res.data.media[1] || '',
            media_3: res.data.media[2] || '',
            media_4: res.data.media[3] || '',
            tags: tagNames,
            allAttributes: normalizedRows,
          });



        }
      } catch (err) {
        toast.error('فرایند واکشی محصول با شکست مواجه شد !');
      }
    };

    fetchProduct();
  }, [id, BASE_URL]);


  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) {
      toast.error('عنوان محصول الزامی است')
      newErrors.title = 'عنوان محصول الزامی است'
    }

    if (!formData.price) {
      toast.error('قیمت الزامی است')
      newErrors.price = 'قیمت الزامی است'
    }

    if (!formData.description || formData.description.length < 20) {
      toast.error('خطا در توضیحات خلاصه')
      newErrors.description = 'خطا در توضیحات خلاصه'
    }

    if (!formData.amount) {
      toast.error('موجودی کالا الزامی است')
      newErrors.amount = 'موجودی کالا الزامی است'
    }

    if (!formData.category_id) {
      toast.error('دسته بندی کالا الزامی است')
      newErrors.category_id = 'دسته بندی کالا الزامی است'
    }

    if (!formData.media_1) {
      toast.error('تصویر مقاله الزامی است')
      newErrors.media_1 = 'تصویر مقاله الزامی است'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }


  const handleChange = (e) => {
    const { name, value, files } = e.target

    if (name === 'media_1' || name === 'media_2' || name === 'media_3' || name === 'media_4') {
      const file = files?.[0];
      if (file) {
        if (name === 'media_1') {
          setPreview_1(URL.createObjectURL(file));
          setFormData((prev) => ({
            ...prev,
            media_1: file
          }))
        }
        if (name === 'media_2') {
          setPreview_2(URL.createObjectURL(file));
          setFormData((prev) => ({
            ...prev,
            media_2: file
          }))
        }
        if (name === 'media_3') {
          setPreview_3(URL.createObjectURL(file));
          setFormData((prev) => ({
            ...prev,
            media_3: file
          }))
        }
        if (name === 'media_4') {
          setPreview_4(URL.createObjectURL(file));
          setFormData((prev) => ({
            ...prev,
            media_4: file
          }))
        }

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


  const addRow = () => {
    const newRows = [...rows, { attribute: "", value: "" }];
    setRows(newRows);
    setFormData((prev) => ({
      ...prev,
      allAttributes: newRows,
    }));
  }


  const attrChangeHandler = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field.trim()] = value;
    setRows(newRows)
    setFormData((prev) => ({
      ...prev,
      allAttributes: newRows,
    }));
  }


  const handleTagChange = (newTags) => {
    setFormData((prev) => ({
      ...prev,
      tags: newTags,
    }));
  };


  const handleContentChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      text: value,
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
    setIsSubmitting(true);
    e.preventDefault();

    try {
      if (validateForm() === true) {
        const data = new FormData();

        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('text', formData.text);
        data.append('category_id', formData.category_id);
        data.append('price', formData.price);
        data.append('amount', formData.amount);

        // Send attributes in the same bracket-notation style most Laravel backends expect
        rows.forEach((row, index) => {
          data.append(`allAttributes[${index}][attribute]`, row.attribute ?? '');
          data.append(`allAttributes[${index}][value]`, row.value ?? '');
        });

        // media fields (send only if user selected a new File)
        if (formData.media_1 instanceof File) data.append('media_1', formData.media_1);
        if (formData.media_2 instanceof File) data.append('media_2', formData.media_2);
        if (formData.media_3 instanceof File) data.append('media_3', formData.media_3);
        if (formData.media_4 instanceof File) data.append('media_4', formData.media_4);

        // تگ‌ها
        formData.tags.forEach((tag, index) => {
          data.append(`tags[${index}]`, tag);
        });

        const res = await apiClient.post(
          `/admin/products/${id}?_method=PATCH`,
          data,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        if (res.status >= 200 && res.status < 300) {
          toast.success('محصول با موفقیت ویرایش شد');
          navigate('/admin/product/all', { replace: true });
        }
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || 'خطا در فرایند ویرایش محصول');
    } finally {
      setIsSubmitting(false)
    }

  }


  const deleteImageHandler = async (item) => {
      if(formData[item]?.id){
        const res = await apiClient.delete(`/admin/removeProductPic/${formData[item].id}`);
        if (res.status >= 200 && res.status < 300) {
          toast.success('تصویر با موفقیت حذف شد');
      }

        if (item === 'media_1') {
          setPreview_1('');
          setFormData((prev) => ({
            ...prev,
            media_1: '',
          }));
        }
        if (item === 'media_2') {
          setPreview_2('');
          setFormData((prev) => ({
            ...prev,
            media_2: '',
          }));
        }
        if (item === 'media_3') {
          setPreview_3('');
          setFormData((prev) => ({
            ...prev,
            media_3: '',
          }));
        }
        if (item === 'media_4') {
          setPreview_4('');
          setFormData((prev) => ({
            ...prev,
            media_4: '',
          }));
        }
      }
    
      console.log([
        preview_1,
        preview_2,
        preview_3,
        preview_4,
      ])
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
                  ویرایش محصول
                  <LiaDollyFlatbedSolid size={30} className="text-blue-600 max-md:hidden" />
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
                      className={`w-full pl-10 pr-4 py-3 shadow-sm shadow-zinc-500 hover:shadow-md duration-200 rounded-xl
                         border ${errors?.title ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 `}
                      placeholder="عنوان محصول را وارد کنید"
                    />
                  </div>
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors?.title}</p>
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
                      className={`w-full pl-10 pr-4 py-3 shadow-sm shadow-zinc-500 hover:shadow-md duration-200 rounded-xl border ${errors?.price ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 `}
                      placeholder="قیمت "
                    />
                  </div>
                  {errors?.price && (
                    <p className="text-red-500 text-sm mt-1">{errors?.price}</p>
                  )}
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تعداد
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 shadow-sm shadow-zinc-500 hover:shadow-md duration-200 rounded-xl border ${errors?.amount ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 `}
                      placeholder="موجودی کالا "
                    />
                  </div>
                  {errors?.amount && (
                    <p className="text-red-500 text-sm mt-1">{errors?.amount}</p>
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
                      className={`w-full pl-10 pr-4 py-4 min-h-[3.7rem] h-[3.8rem] shadow-sm shadow-zinc-500
                         hover:shadow-md duration-200 rounded-xl border ${errors?.description ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 `}
                      placeholder="توضیح اختصاری ..."
                    />
                  </div>
                  {errors?.description && (
                    <p className="text-red-500 text-sm mt-1">{errors?.description}</p>
                  )}
                </div>


                <div className="relative col-span-1">
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
                         border ${errors?.category_id ? 'border-red-500' : 'border-gray-200'
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
                  {errors?.category_id && (
                    <p className="text-red-500 text-sm mt-1">{errors?.category_id}</p>
                  )}
                </div>


                <div className="relative">
                  <div className="md:flex">
                    <div className="w-full p-3">
                      <div
                        className={`relative overflow-clip h-48 rounded-xl border-2 ${errors?.media_1 ? 'border-rose-500' : 'border-blue-500/20'}  
                        bg-white/80 flex hover:border-blue-500/50
                          justify-center items-center shadow-sm shadow-zinc-600 hover:shadow-xl
                          transition-shadow duration-300 ease-in-out group`}
                      >
                        <div className="absolute flex flex-col items-center">
                          <FcOldTimeCamera size={80} className='z-20' />
                          <span className="block text-rose-600/70 font-semibold">
                            * اجباری *
                          </span>
                          تصویر اصلی
                          <span className="block text-zinc-600 font-normal mt-1">
                            افزودن تصویر محصول
                          </span>
                        </div>
                        {preview_1 &&
                          <img src={preview_1} className='absolute z-10 w-full h-full rounded-xl object-cover' />
                        }
                        <input
                          name="media_1"
                          onChange={handleChange}
                          className="h-full w-full opacity-0 cursor-pointer z-30"
                          type="file"
                        />
                        {
                          preview_1 &&

                          <div onClick={() => deleteImageHandler('media_1')} className='invisible group-hover:visible hover:duration-300 absolute flex w-full h-full
                         justify-center items-center text-center backdrop-blur-md bg-red-50 rounded-xl z-50 
                         cursor-pointer text-red-600/40 text-3xl'>

                            <RiDeleteBin2Fill size={60} className='text-red-600' />
                          </div>

                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="md:flex">
                    <div className="w-full p-3">
                      <div
                        className="relative group h-48 rounded-xl border-2 border-blue-500/20 bg-white/50 flex hover:border-blue-500/50
                          justify-center items-center shadow-sm shadow-zinc-600 hover:shadow-xl transition-shadow duration-300 ease-in-out"
                      >
                        <div className="absolute flex flex-col items-center">
                          <TbScreenshot size={80} className='text-blue-600 z-20 backdrop-blur-md rounded-xl shadow-sm shadow-black/30' />

                          تصویر فرعی
                          <span className="block text-zinc-600 font-normal mt-1">
                            افزودن تصویر محصول
                          </span>
                        </div>
                        {preview_2 &&
                          <img src={preview_2} className='absolute z-10 w-full h-full rounded-xl object-cover' />
                        }
                        <input
                          name="media_2"
                          onChange={handleChange}
                          className="h-full w-full opacity-0 cursor-pointer z-30"
                          type="file"
                        />
                        {
                          preview_2 &&

                          <div onClick={() => deleteImageHandler('media_2')} className='invisible group-hover:visible hover:duration-300 absolute flex w-full h-full
                         justify-center items-center text-center backdrop-blur-md bg-red-50 rounded-xl z-50 
                         cursor-pointer text-red-600/40 text-3xl'>

                            <RiDeleteBin2Fill size={60} className='text-red-600' />
                          </div>

                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="md:flex">
                    <div className="w-full p-3">
                      <div
                        className="relative group h-48 rounded-xl border-2 border-blue-500/20 bg-white/50 flex hover:border-blue-500/50
                          justify-center items-center shadow-sm shadow-zinc-600 hover:shadow-xl transition-shadow duration-300 ease-in-out"
                      >
                        <div className="absolute flex flex-col items-center">
                          <TbScreenshot size={80} className='text-blue-600 z-20 backdrop-blur-md rounded-xl shadow-sm shadow-black/30' />
                          تصویر فرعی
                          <span className="block text-zinc-600 font-normal mt-1">
                            افزودن تصویر محصول
                          </span>
                        </div>

                        {preview_3 &&
                          <img src={preview_3} className='absolute z-10 w-full h-full rounded-xl object-cover' />
                        }
                        <input
                          name="media_3"
                          onChange={handleChange}
                          className="h-full w-full opacity-0 cursor-pointer z-30"
                          type="file"
                        />
                        {
                          preview_3 &&

                          <div onClick={() => deleteImageHandler('media_3')} className='invisible group-hover:visible hover:duration-300 absolute flex w-full h-full
                         justify-center items-center text-center backdrop-blur-md bg-red-50 rounded-xl z-50 
                         cursor-pointer text-red-600/40 text-3xl'>

                            <RiDeleteBin2Fill size={60} className='text-red-600' />
                          </div>

                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="md:flex">
                    <div className="w-full p-3">
                      <div
                        className="relative group h-48 rounded-xl border-2 border-blue-500/20 bg-white/50 flex hover:border-blue-500/50
                          justify-center items-center shadow-sm shadow-zinc-600 hover:shadow-xl transition-shadow duration-300 ease-in-out"
                      >
                        <div className="absolute flex flex-col items-center">
                          <TbScreenshot size={80} className='text-blue-600 z-20 backdrop-blur-md rounded-xl shadow-sm shadow-black/30' />
                          تصویر فرعی
                          <span className="block text-zinc-600 font-normal mt-1">
                            افزودن تصویر محصول
                          </span>
                        </div>
                        {preview_4 &&
                          <img src={preview_4} className='absolute z-10 w-full h-full rounded-xl object-cover' />
                        }
                        <input
                          name="media_4"
                          onChange={handleChange}
                          className="h-full w-full opacity-0 cursor-pointer z-30"
                          type="file"
                        />
                        {
                          preview_4 &&

                          <div onClick={() => deleteImageHandler('media_4')} className='invisible group-hover:visible hover:duration-300 absolute flex w-full h-full
                         justify-center items-center text-center backdrop-blur-md bg-red-50 rounded-xl z-50 
                         cursor-pointer text-red-600/40 text-3xl'>

                            <RiDeleteBin2Fill size={60} className='text-red-600' />
                          </div>

                        }
                      </div>
                    </div>
                  </div>
                </div>

                <table className='grid max-md:flex max-md:flex-col col-span-4 min-md:grid-cols-2 gap-2 w-full 
                rounded-xl bg-white/20 min-md:p-4'>
                  <thead className='grid min-md:col-span-2 w-full'>
                    <tr className='grid col-span-2 shadow-sm grid-cols-3 text-zinc-500 text-lg
                     bg-white/80 rounded-xl h-15 justify-center items-center'>
                      <th className='col-span-1 flex h-full justify-center items-center'>ویژگی</th>
                      <th className='col-span-2'>مقدار</th>
                    </tr>
                  </thead>
                  <tbody className='min-md:grid min-md:grid-cols-2 flex flex-col w-full min-md:col-span-2 gap-2'>
                    {
                      rows.map((row, index) => (

                        <tr key={index} className='flex flex-col w-full min-md:grid col-span-2 gap-1 grid-cols-3 text-lg space-x-1 
                                                    *:rounded-xl h-25 min-md:h-12 justify-center items-center'>
                          <td className='flex min-md:col-span-1 w-full h-full'>
                            <input placeholder='ویژگی ...' type='text' value={row.attribute}
                              onChange={(e) => attrChangeHandler(index, "attribute", e.target.value)}
                              className='w-full h-full px-3 hover:shadow-md hover:scale-101 duration-300
                             bg-blue-500 shadow-sm shadow-zinc-600 rounded-xl focus:ring-2 focus:ring-blue-500/90
                              outline-none text-white'/>
                          </td>
                          <td className='min-md:col-span-2 flex h-full w-full'>
                            <input placeholder='مقدار ...' type='text' value={row.value}
                              onChange={(e) => attrChangeHandler(index, "value", e.target.value)}
                              className='w-full h-full px-3 hover:shadow-md hover:scale-101 duration-300
                             bg-white/50 shadow-sm shadow-zinc-500 rounded-xl focus:ring-2 focus:ring-white
                              outline-none text-zinc-600' />
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>

                <span onClick={addRow} className='grid col-span-4 justify-center duration-200 cursor-pointer 
                  text-zinc-700 items-center rounded-xl'>
                  <TbPlus size={35} className='duration-1000 cursor-pointer 
                    text-blue-600/80 rounded-full border-3 border-dotted animate-bounce hover:animate-none' />
                </span>

              </div>

              <Text_Editor
                value={content}
                onChange={handleContentChange}
                onImageUpload={handleImageUpload}
                title='product' />


              <TagComponent
                tags={formData.tags}
                onChange={handleTagChange} />

            </div>

            {/* دکمه‌های فرم */}
            <div className="flex flex-col sm:flex-row gap-4 pt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center gap-2 cursor-pointer bg-blue-600 
                hover:bg-blue-700 text-white font-medium py-3 px-2 rounded-xl transition-all 
                duration-200 transform hover:scale-102 focus:outline-none focus:ring-2 
                focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                active:scale-95"
              >
                {isSubmitting ? (
                  <TbLoader className='animate-spin' />
                ) : (
                  <>
                    <TbCheck className="text-lg" />
                    ویرایش محصول
                  </>
                )}
              </button>

              <Link to="/admin/product/all" className='flex h-12 bg-blue-600 hover:bg-blue-700
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

export default Adm_product_edit
