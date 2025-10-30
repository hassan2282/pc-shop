import { TbTruckDelivery } from 'react-icons/tb'
import { motion } from 'motion/react'

function Adm_product_show() {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y:30,
        scale: 0.95,
      }}
      animate={{
        opacity: 100,
        y:0,
        scale: 1,
        transition:{
          duration: 0.9,
        }
      }}
    
    className='flex flex-col relative justify-center items-center mt-3'>
      <div className='flex flex-row w-[80%] h-full bg-white/30 rounded-xl backdrop-blur-sm justify-between p-5'>
        <div className='flex basis-1/3 flex-col border border-white/90 bg-white/30 w-[30%] space-y-3 rounded-xl p-2'>
          <img src='../../../src/StorePanel/assets/img/product_img/p_9.jpg' className='rounded-xl 
                    w-[20rem] shadow-sm shadow-zinc-400' />
          <div className='grid grid-cols-4 gap-3 *:rounded-xl *:shadow-sm *:shadow-zinc-500 *:hover:shadow-lg 
                    *:hover:-translate-y-2 *:cursor-pointer *:duration-300'>
            <img src="../../../src/StorePanel/assets/img/product_img/p_1.jpg" className='' />
            <img src="../../../src/StorePanel/assets/img/product_img/p_6.jpg" className='' />
            <img src="../../../src/StorePanel/assets/img/product_img/p_3.jpg" className='' />
            <img src="../../../src/StorePanel/assets/img/product_img/p_5.jpg" className='' />
          </div>
        </div>


        <div className='flex basis-2/3 flex-col p-4 w-full h-full'>
          <h1 className='text-3xl p-2 text-zinc-600'>گوشی شیائومی پوکو M3</h1>

          <div className='flex flex-row relative h-20 mt-4 text-zinc-700 justify-center items-center'>
            <hr className='w-full absolute z-10 text-white/80' />
            <h3 className='rounded-full bg-blue-500 backdrop-blur-lg p-2 z-20
             text-sm text-white/80'>کارت گرافیک 8 گیگ با 32 گیگ رم و 2 هسته ای</h3>
          </div>

          <ul className='grid grid-cols-2 p-3 self-around gap-1 text-zinc-700 *:list-disc'>
            <li>
              <span> رنگ </span>
              : زرد
            </li>
            <li>
              <span> بلوتوث </span>
              : دارد
            </li>
            <li>
              <span> رزولوشن  </span>
              : 12 مگاپیکسل
            </li>
            <li>
              <span> اندازه   </span>
              : 6.1
            </li>
            <li>
              <span> قابلیت  </span>
              : ضد آب
            </li>
            <li>
              <span> سیستم عامل </span>
              : iOS 15
            </li>
            <li>
              <span> فناوری  </span>
              : Super Retina XDR OLED
            </li>
            <li>
              <span> فناوری  </span>
              : IRblaster
            </li>

          </ul>

          <div className='flex flex-row justify-start items-center space-x-2 w-full mt-7 text-zinc-700'>
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
                <span className='p-1 text-rose-800 text-md line-through'>1.599.000 تومان</span>
                <span className='flex flex-row justify-center items-center w-[9rem] text-center rounded-full text-md
                 bg-blue-500/20 text-blue-600 '>1.180.000 تومان</span>
              </div>
              <div className='row-span-2 flex justify-center items-center'>
                <button className='rounded-full active:scale-95 w-[70%] h-12 duration-300 bg-blue-500 text-blue-100 
                hover:scale-105 cursor-pointer'>افزودن به سبد خرید</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid bg-white/40 rounded-xl mt-4 backdrop-blur-2xl w-[80%]'>
      <span className='text-4xl p-2 m-5 text-blue-700'>ویژگی های محصول</span>
      <ul className='grid grid-cols-2 *:bg-white/40 *:rounded-xl *:w-full *:shadow-xs *:gap-y-2 w-full
                     *:shadow-zinc-400 *:p-2 p-7 *:hover:shadow-md *:duration-200 text-zinc-800
                      gap-1 *:hover:bg-white/70 cursor-pointer *:border *:border-white/70'>
        <li>
          <span> رنگ </span>
          : زرد
        </li>
        <li>
          <span> بلوتوث </span>
          : دارد
        </li>
        <li>
          <span> رزولوشن  </span>
          : 12 مگاپیکسل
        </li>
        <li>
          <span> اندازه   </span>
          : 6.1
        </li>
        <li>
          <span> قابلیت  </span>
          : ضد آب
        </li>
        <li>
          <span> سیستم عامل </span>
          : iOS 15
        </li>
        <li>
          <span> فناوری  </span>
          : Super Retina XDR OLED
        </li>
        <li>
          <span> فناوری  </span>
          : IRblaster
        </li>
        <li>
          <span> رنگ </span>
          : زرد
        </li>
        <li>
          <span> بلوتوث </span>
          : دارد
        </li>
        <li>
          <span> رزولوشن  </span>
          : 12 مگاپیکسل
        </li>
        <li>
          <span> اندازه   </span>
          : 6.1
        </li>
        <li>
          <span> قابلیت  </span>
          : ضد آب
        </li>
        <li>
          <span> سیستم عامل </span>
          : iOS 15
        </li>
        <li>
          <span> فناوری  </span>
          : Super Retina XDR OLED
        </li>
        <li>
          <span> فناوری  </span>
          : IRblaster
        </li>
        <li>
          <span> رنگ </span>
          : زرد
        </li>
        <li>
          <span> بلوتوث </span>
          : دارد
        </li>
        <li>
          <span> رزولوشن  </span>
          : 12 مگاپیکسل
        </li>
        <li>
          <span> اندازه   </span>
          : 6.1
        </li>
        <li>
          <span> قابلیت  </span>
          : ضد آب
        </li>
        <li>
          <span> سیستم عامل </span>
          : iOS 15
        </li>
        <li>
          <span> فناوری  </span>
          : Super Retina XDR OLED
        </li>
        <li>
          <span> فناوری  </span>
          : IRblaster
        </li>
        <li>
          <span> رنگ </span>
          : زرد
        </li>
        <li>
          <span> بلوتوث </span>
          : دارد
        </li>
        <li>
          <span> رزولوشن  </span>
          : 12 مگاپیکسل
        </li>
        <li>
          <span> اندازه   </span>
          : 6.1
        </li>
        <li>
          <span> قابلیت  </span>
          : ضد آب
        </li>
        <li>
          <span> سیستم عامل </span>
          : iOS 15
        </li>
        <li>
          <span> فناوری  </span>
          : Super Retina XDR OLED
        </li>
        <li>
          <span> فناوری  </span>
          : IRblaster
        </li>
        </ul>
      </div>



      <div className='flex flex-col gap-10 justify-center items-center text-justify 
      w-[80%] p-15 text-zinc-700 bg-white/40 rounded-xl mt-4 backdrop-blur-2xl text-lg leading-10'>
        <h1 className='text-3xl text-right w-full text-blue-700'>گوشی پوکو M3</h1>
        مدل iPhone 13 Pro Max، آخرین نسخه از سری گوشی‌های iPhone ساخت شرکت اپل است که در تاریخ 14 سپتامبر 2021 معرفی شده است.
        این گوشی با صفحه‌نمایش سوپر رتینا XDR از نوع OLED و ابعاد 6.7 اینچ، عملکردی بی‌نظیر را در ارائه
        تصاویر با کیفیت بالا به کاربران
        خود ارائه می‌دهد. صفحه آن با درجه حفاظت IP68 در برابر آب و گرد و غبار مقاوم است.
        گوشی iPhone 13 Pro Max دارای پردازنده A15 Bionic، پردازنده اختصاصی شرکت اپل است که همراه با 6 هسته و
        GPU 5 هسته‌ای طراحی شده است. این پردازنده با فناوری 5
        نانومتر قدرتمندی و قابلیت انجام عملیات پردازشی سریع در برنامه‌های گوناگون را فراهم می‌کند.
        دوربین‌های iPhone 13 Pro Max شامل سه لنز 12 مگاپیکسلی هستند که
        شامل لنز اصلی، لنز تله‌فوتو و لنز زاویه یک‌صدم گنجایش هستند که مجموعه
        ای از قابلیت‌های عکاسی شامل فوکوس خودکار بصری، حالت زوم، اپتیکال زوم،
        پورتره، ثبت عکس با رنگ‌های بیشتر و تصاویر با کیفیت بالا را فراهم می‌کند.
        این گوشی دارای سیستم عامل iOS 15 است که با مجموعه دستورالعمل‌ها و روش‌های جدید
        برای ارتقاء تجربیات کاربری و تضمین امنیت
        اطلاعات کاربر فراهم می‌شود. همچنین، دارای جعبه باتری پورت
        هسته هیدروژن است که زمان شارژ موثر گوشی را افزایش می‌دهد.
        مدل iPhone 13 Pro Max، آخرین نسخه از سری گوشی‌های iPhone ساخت شرکت اپل است که در تاریخ 14 سپتامبر 2021 معرفی شده است.
        این گوشی با صفحه‌نمایش سوپر رتینا XDR از نوع OLED و ابعاد 6.7 اینچ، عملکردی بی‌نظیر را در ارائه
        ای از قابلیت‌های عکاسی شامل فوکوس خودکار بصری، حالت زوم، اپتیکال زوم،
      </div>
    </motion.div>
  )
}

export default Adm_product_show