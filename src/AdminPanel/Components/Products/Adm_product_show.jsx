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

      className='flex flex-col relative justify-center items-center mt-3'>
      <div className='flex flex-row w-[80%] h-full bg-white/30 rounded-xl backdrop-blur-sm justify-between p-5'>
        <div className='flex basis-1/3 flex-col border border-white/30 items-center justify-center overflow-hidden
         bg-white/30 w-full h-full space-y-5 rounded-xl p-3 mt-6'>
          <img src={preview && preview} alt='تصویر محصول' className='rounded-xl relative
                    w-full h-[27rem] shadow-sm shadow-zinc-400
                    object-cover cursor-pointer duration-500 ' />
          <div className='flex flex-row gap-3 *:rounded-xl relative justify-center items-center w-full 
                          *:shadow-xs *:shadow-zinc-600 *:hover:shadow-lg
                          *:hover:-translate-y-2 *:cursor-pointer *:w-18 *:h-20  *:duration-300'>
            {
              product &&
              product.media?.map((image, index) => {
                return (
                  <img className='object-cover' onClick={() => previewHandler(image.name)} key={index} src={`${BASE_URL}/storage/media/${image.name}`} />
                )
              })
            }
          </div>
        </div>


        <div className='flex basis-2/3 flex-col p-4 w-full h-full'>
          <h1 className='text-3xl p-2 text-zinc-600'>{product?.title}</h1>

          <div className='flex flex-row relative h-20 mt-4 text-zinc-500 justify-center items-center'>
            <hr className='w-full absolute z-10 text-white/80' />
            <h3 className='rounded-full bg-blue-600 backdrop-blur-lg p-2 z-20
             text-sm text-white/80'>{product?.description.length > 50 ? product?.description.slice(0, 50) + ' ...' : product?.description}</h3>
          </div>

          <ul className='grid grid-cols-2 p-5 text-sm self-around gap-5 text-zinc-600 *:list-disc'>
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

          <div className='flex flex-row justify-start items-center space-x-2 w-full mt-20 text-zinc-700'>
            <TbTruckDelivery size={25} className='text-zinc-800' />
            <span className='text-lg text-zinc-800'>زمان ارسال محصول : </span> پس از 2 روز کاری
          </div>

          <hr className='text-white/80 mt-3' />

          <div className='grid grid-cols-2 p-3 gap-2 h-[13rem] relative'>

            <div className='relative flex flex-row justify-center items-center border-l border-zinc-400'>
              <span className='absolute top-0 right-0 text-zinc-800'>زمان باقی‌مانده</span>
              <div className='grid grid-cols-4 justify-center items-center p-10 gap-2 mt-6 text-zinc-700' dir='ltr'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                  <span className='p-4 rounded-2xl border flex justify-center items-center w-12'>1</span>
                  <span>روز</span>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='p-4 rounded-2xl border flex justify-center items-center'>10</span>
                  <span>ساعت</span>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='p-4 rounded-2xl border flex justify-center items-center'>25</span>
                  <span>دقیقه</span>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='p-4 rounded-2xl border flex justify-center items-center'>32</span>
                  <span>ثانیه</span>
                </div>
              </div>
            </div>

            <div className='p-2 grid grid-rows-3'>
              <div className='flex flex-row'>
                <span className='p-1 text-rose-800 text-md line-through'>{Math.round(product?.price * 1.2)} تومان</span>
                <span className='flex flex-row z-100 justify-center items-center w-[9rem] text-center rounded-full text-md
                 bg-blue-700 backdrop-blur-lg text-white'>{product?.price} تومان</span>
              </div>
              <div className='row-span-2 flex justify-center items-center'>
                <Link to={'/admin/product/all'} className='rounded-full flex justify-center items-center
                 active:scale-95 w-[70%] h-12 duration-300 bg-blue-700 text-blue-100 
                hover:scale-105 cursor-pointer shadow-sm shadow-zinc-600'>بازگشت به صفحه محصولات</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid bg-white/20 rounded-xl mt-4 backdrop-blur-2xl w-[80%]'>
        <span className='text-3xl p-2 m-5 text-blue-700'>ویژگی های محصول</span>
        <ul className='grid grid-cols-1 p-5 w-full
                      text-zinc-600
                      gap-1 '>
          {
            product?.attribute_values &&
            product?.attribute_values?.map((item, i) => {
              return (
                <li key={i} className='flex flex-row items-center gap-1 *:bg-white/30 *:rounded-xl *:w-full 
                  *:shadow-xs *:gap-y-2 *:shadow-zinc-400 *:h-14 *:text-lg
                   *:p-2 p-2 *:hover:shadow-md *:duration-200 *:hover:bg-white/70
                    cursor-pointer *:border *:border-white/70'>
                  <span> {item.attribute?.name} </span>
                  <span> {item.value}</span>
                </li>
              )
            })
          }

        </ul>
      </div>



      <div className='flex flex-col gap-10 justify-center items-center text-justify 
      w-[80%] p-15 text-zinc-700 bg-white/40 rounded-xl mt-4 backdrop-blur-2xl text-lg leading-10'>
        <h1 className='text-3xl text-right w-full text-blue-700'>{product?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: product?.text }} ></div>
      </div>
    </motion.div>
  )
}

export default Adm_product_show