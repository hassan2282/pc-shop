import { TbTruckDelivery } from 'react-icons/tb'
import { motion } from 'motion/react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import apiClient from '../../../apiClient';

function Adm_product_show() {

  const { id } = useParams();
  const [product, setProduct] = useState();
  const BASE_URL = import.meta.env.VITE__BASEURL;
  const [preview, setPreview] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await apiClient.get(`/admin/products/${id}`);
        if (res.status >= 200 && res.status < 300) {
          setProduct(res.data);
          setPreview(BASE_URL + '/storage/media/' + res?.data?.media[0]?.name);
        }
      } catch (err) {
        toast.error(err.response.data.message);
      }
    }
    fetchProduct();

  }, []);


  const previewHandler = (imageName) => {
    setPreview(BASE_URL + '/storage/media/' + imageName)
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}
      animate={{
        opacity: 100,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.9,
        }
      }}

      className='flex flex-col relative justify-center items-center mt-3 px-3 sm:px-6 pb-10'>
      <div className='flex flex-col lg:flex-row w-full max-w-6xl h-full bg-white/30 rounded-xl backdrop-blur-xl justify-between gap-6 p-4 sm:p-6'>
        <div className='flex w-full lg:basis-1/3 flex-col border border-white/30 items-center justify-center overflow-hidden
         bg-white/30 h-full space-y-4 sm:space-y-5 rounded-xl p-3 sm:p-4 lg:mt-6'>
          <motion.img
            key={preview}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            src={preview && preview} alt='تصویر محصول' className='rounded-xl relative
                    w-full h-64 sm:h-80 lg:h-[27rem] shadow-sm shadow-zinc-400
                    object-cover cursor-pointer duration-500 ' />

          <div className='flex gap-3 relative justify-start lg:justify-center items-center w-full overflow-x-auto lg:overflow-visible py-1'>
            {
              product &&
              product.media?.map((image, index) => {
                return (
                  <img
                    className='shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shadow-sm shadow-zinc-600 hover:shadow-lg hover:-translate-y-1 cursor-pointer duration-300'
                    onClick={() => previewHandler(image.name)}
                    key={index}
                    src={`${BASE_URL}/storage/media/${image.name}`}
                    alt={`تصویر محصول ${index + 1}`}
                  />
                )
              })
            }
          </div>
        </div>


        <div className='flex w-full lg:basis-2/3 flex-col p-2 sm:p-4 h-full'>
          <h1 className='text-xl sm:text-2xl lg:text-3xl p-2 text-zinc-600 break-words'>{product?.title}</h1>

          <div className='flex relative min-h-16 mt-4 text-zinc-500 justify-center items-center px-2'>
            <hr className='w-full absolute z-10 text-white/80' />
            <h3 className='rounded-full bg-blue-600 backdrop-blur-lg p-2 z-20
             text-xs sm:text-sm text-white/80 text-center max-w-full truncate'>
              {product?.description.length > 50 ? product?.description.slice(0, 50) + ' ...' : product?.description}
            </h3>
          </div>

          <ul className='grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 text-sm gap-3 sm:gap-5 text-zinc-600 *:list-disc'>
            {
              product?.attribute_values &&
              product?.attribute_values?.map((item, i) => {
                return (
                  <li key={i}>
                    <span> {item.attribute?.name} </span>
                    : {item.value}
                  </li>
                )
              })
            }

          </ul>

          <div className='flex flex-row flex-wrap justify-start items-center gap-2 w-full mt-8 lg:mt-20 text-zinc-700'>
            <TbTruckDelivery size={25} className='text-zinc-800' />
            <span className='text-base sm:text-lg text-zinc-800'>زمان ارسال محصول : </span>
            <span className='text-sm sm:text-base'>پس از 2 روز کاری</span>
          </div>

          <hr className='text-white/80 mt-3' />

          <div className='grid grid-cols-1 md:grid-cols-2 p-3 gap-4 relative'>

            <div className='relative flex flex-row justify-center items-center md:border-l border-zinc-400'>
              <span className='absolute top-0 right-0 text-zinc-800'>زمان باقی‌مانده</span>
              <div className='grid grid-cols-4 justify-center items-center p-4 sm:p-8 gap-2 mt-8 text-zinc-700' dir='ltr'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                  <span className='p-3 sm:p-4 rounded-2xl border flex justify-center items-center w-12 sm:w-14'>1</span>
                  <span className='text-xs sm:text-sm'>روز</span>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='p-3 sm:p-4 rounded-2xl border flex justify-center items-center'>10</span>
                  <span className='text-xs sm:text-sm'>ساعت</span>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='p-3 sm:p-4 rounded-2xl border flex justify-center items-center'>25</span>
                  <span className='text-xs sm:text-sm'>دقیقه</span>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='p-3 sm:p-4 rounded-2xl border flex justify-center items-center'>32</span>
                  <span className='text-xs sm:text-sm'>ثانیه</span>
                </div>
              </div>
            </div>

            <div className='p-2 grid grid-rows-3'>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
                <span className='p-1 text-rose-800 text-sm sm:text-base line-through'>{Math.round(product?.price * 1.2)} تومان</span>
                <span className='flex flex-row z-10 justify-center items-center w-full sm:w-[9rem] text-center rounded-full text-sm sm:text-base
                 bg-blue-700 backdrop-blur-lg text-white py-2 px-3'>{product?.price} تومان</span>
              </div>
              <div className='row-span-2 flex justify-center items-center'>
                <Link to={'/admin/product/all'} className='rounded-full flex justify-center items-center
                 active:scale-95 w-full sm:w-[70%] h-12 duration-300 bg-blue-700 text-blue-100 
                hover:scale-105 cursor-pointer shadow-sm shadow-zinc-600'>همه محصولات</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid bg-white/30 rounded-xl mt-4 backdrop-blur-2xl w-full max-w-6xl'>
        <span className='text-xl sm:text-2xl lg:text-3xl p-2 m-4 sm:m-5 text-blue-700'>ویژگی های محصول</span>
        <ul className='grid grid-cols-1 p-4 sm:p-5 w-full
                      text-zinc-600
                      gap-1 '>
          {
            product?.attribute_values &&
            product?.attribute_values?.map((item, i) => {
              return (
                <li key={i} className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1 *:flex *:items-center *:justify-center
                *:bg-white/60 *:text-zinc-600 *:rounded-xl *:w-full 
                   *:gap-y-1 *:shadow-zinc-400 *:p-2 *:text-sm'>
                  <span> {item.attribute?.name} </span>
                  <span> {item.value}</span>
                </li>
              )
            })
          }

        </ul>
      </div>



      <div className='flex flex-col gap-6 sm:gap-10 justify-center items-center text-justify 
      w-full max-w-6xl p-4 sm:p-6 lg:p-10 text-zinc-700 bg-white/40 rounded-xl mt-4 backdrop-blur-2xl text-base sm:text-lg leading-8 sm:leading-10'>
        <h1 className='text-xl sm:text-2xl lg:text-3xl text-right w-full text-blue-700 break-words'>{product?.title}</h1>
        <div className='w-full break-words overflow-hidden' dangerouslySetInnerHTML={{ __html: product?.text }} ></div>
      </div>
    </motion.div>
  )
}

export default Adm_product_show
