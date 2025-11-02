import { motion } from 'motion/react'
import { FaPhoneSquare, FaUser} from 'react-icons/fa'
import { MdMarkEmailRead } from 'react-icons/md'
import { TbBan, TbEdit } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function Adm_order_show() {
  return (
    <motion.div
      initial={{
        y: 20,
        scale: 0.9,
        opacity: 0
      }}
      animate={{
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.8,
        }
      }}
      className='min-md:grid min-md:grid-cols-4 justify-center items-center min-lg:w-[90%] w-full z-20 
                rounded-xl gap-4 max-md:space-y-3' dir="ltr">

      
      {/* start profile section */}
      <div className='flex flex-col w-full justify-center
                          shadow-[0_2px_1px_#3333] items-center col-span-1 rounded-4xl
                            backdrop-blur-lg bg-white/40'>

        <div className='relative flex flex-col w-full justify-center items-center'>
            <h2 className='absolute text-2xl text-white p-1 rounded-xl backdrop-blur-lg translate-y-15'>نرگس محمدی</h2>
          <img src='../../../src/StorePanel/assets/img/profile_2.jpg' className='rounded-3xl w-full' />
          <div className='absolute grid grid-cols-2 bottom-0 bg-blue-100 translate-y-7 backdrop-blur-xl
                          w-[80%] p-2 rounded-full justify-center items-center shadow-2xs shadow-blue-300'>
            <div className='flex flex-col border-r border-blue-700 text-sm justify-center items-center text-zinc-600'>
              <span className='text-[0.8rem]'>5.200.000</span>
              <span className='text-[0.8rem]'>مجموع خرید</span>
            </div>
            <div className='flex flex-col text-sm justify-center items-center text-zinc-600'>
              <span className='text-[0.8rem]'>1404/07/11</span>
              <span className='text-[0.8rem]'>تاریخ ثبت‌ نام</span>
            </div>
          </div>
        </div>
        <div className='relative my-7 w-full p-3' dir='rtl'>
          <ul className='flex flex-col *:flex *:flex-row *:gap-2 *:justify-between *:items-center *:w-full
                      *:rounded-xl *:p-2 text-zinc-700 text-[0.8rem]' dir='rtl'>
              <li><MdMarkEmailRead size={20} className='text-blue-600'/> ایمیل :  taghavey.hassan@gmail.com</li>
              <li><FaUser size={20} className='text-blue-600'/>نام کاربری : photoshopbaz98</li>
              <li><FaPhoneSquare size={20} className='text-blue-600'/>تلفن : 09170249855</li>
          </ul>
        </div>
        <div className='absolute mt-5 bottom-0 justify-items-center text-zinc-200 w-full *:flex *:translate-y-4
         *:flex-row *:items-center *:justify-center *:rounded-md *:rounded-b-4xl *:w-full *:px-3 *:py-1 cursor-pointer group *:shadow-sm '>
          <Link to="/admin/user/edit" className='w-full bg-blue-500 duration-200'><TbEdit size={35}/></Link>
        </div>
      </div>

      {/* end profile section */}





    </motion.div>
  )
}

export default Adm_order_show