import { useRef, useState } from "react"
import { TbArrowBadgeRight, TbBell, TbLogout, TbMail, TbUser } from "react-icons/tb"
import { motion } from 'motion/react'

function Navbar() {
  const [Left, setLeft] = useState(0)
  const [ProfileToggle, setProfileToggle] = useState(false)
  const [MailToggle, setMailToggle] = useState(false)
  const [NotifToggle, setNotifToggle] = useState(false)

  const profileRef = useRef();
  const profile = () => {
    setMailToggle(false)
    setNotifToggle(false)
    setProfileToggle(!ProfileToggle)
    setLeft(profileRef.current.offsetLeft)
  }
  const notifyRef = useRef();
  const notify = () => {
    setProfileToggle(false)
    setMailToggle(false)
    setNotifToggle(!NotifToggle)
    setLeft(notifyRef.current.offsetLeft)
  }
  const emailRef = useRef();
  const email = () => {
    setProfileToggle(false)
    setNotifToggle(false)
    setMailToggle(!MailToggle)
    setLeft(emailRef.current.offsetLeft)
  }

  return (
    <div className="grid grid-cols-2 justify-center items-center w-full p-2 z-20">
      <div className="grid col-span-2 justify-start">
        <div className='flex flex-row h-full w-full justify-center space-x-2 items-center text-zinc-700 group cursor-pointer'>
          <span ref={profileRef} onClick={profile} className='flex flex-row items-center backdrop-blur-xl
             bg-zinc-200/50 shadow-sm rounded-xl p-2 justify-center hover:*:rotate-90 duration-200 text-zinc-700/70'>
            <TbArrowBadgeRight size={25} className="duration-300" />
            سید حسن تقوی
          </span>
          <img src='../../src/StorePanel/assets/img/profile.jpg' alt='user profile' className='flex w-10 h-10 rounded-full shadow-md shadow-zinc-500' />
          <span
            ref={emailRef} onClick={email}
            className="rounded-full w-[2.6rem] h-[2.6rem] shadow-md hover:*:scale-120 flex opacity-60 justify-center items-center bg-zinc-200">
            <TbMail size={20} className=" duration-200" /></span>

          <span
            ref={notifyRef} onClick={notify}
            className="rounded-full w-[2.6rem] h-[2.6rem] shadow-md flex hover:*:scale-120 opacity-60 justify-center items-center bg-zinc-200">
            <TbBell size={20} className="duration-200" /></span>
        </div>



        {
          ProfileToggle &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 170,
              transition: {
                duration: 0.2,
              }
            }}
            style={{ left: `${Left}px` }}
            className={`absolute z-20 w-[9rem] overflow-clip duration-300 top-13 p-1 backdrop-blur-sm bg-zinc-200/50 rounded-xl shadow-md `}>
            <ul className="flex flex-col w-full *:flex *:flex-row cursor-pointer text-zinc-600 *:justify-between *:shadow-xs *:p-2 
                          *:rounded-xl *:hover:bg-blue-400/30 *:duration-200">
              <li>پروفایل<TbUser size={20} /></li>
              <li>تیکت‌ها<TbMail size={20} /></li>
              <li>اعلان‌ها<TbBell size={20} /></li>
              <li>خروج<TbLogout size={20} /></li>
            </ul>
          </motion.div>
        }
        {
          NotifToggle &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 270,
              transition: {
                duration: 0.2,
              }
            }}
            style={{ left: `${Left}px` }}
            className={`absolute w-[14rem] z-20 overflow-clip duration-300 top-13 p-1 backdrop-blur-2xl bg-zinc-200/30 rounded-xl shadow-md `}>
            <ul className="grid grid-cols-2 w-full *:hover:bg-blue-400/30 *:flex *:flex-row cursor-pointer *:justify-between *:gap-3
              *:p-2 *:rounded-xl *:duration-200">
              <div className="grid col-span-2 grid-cols-2 justify-between border-b border-b-stone-300 items-center h-10 text-xs text-zinc-700">
                <span>اعلان ها</span>
                <a href="#" className="hover:text-blue-800">مشاهده همه</a>
              </div>
              <li className="col-span-2">
              <div className="grid grid-rows-3 col-span-2 gap-1 h-14 text-xs text-zinc-700" dir="rtl">

                <span className="">سید حسن تقوی</span>
                <p className="text-[10px]">مرگ بر آمریکای لاشی ...</p>
                <span className="text-[9px]">3 دقیقه قبل ...</span>

              </div>
                <img src="../../src/StorePanel/assets/img/profile/4.png" className="w-10 h-10 rounded-circle"/>
              </li>
              <li className="col-span-2">
              <div className="grid grid-rows-3 col-span-2 gap-1 h-14 text-xs text-zinc-700" dir="rtl">

                <span className="">سیامک بشکار</span>
                <p className="text-[10px]">داداش میشه به شماره...</p>
                <span className="text-[9px]">4 دقیقه قبل ...</span>

              </div>
                <img src="../../src/StorePanel/assets/img/profile/3.png" className="w-10 h-10 rounded-circle"/>
              </li>
              <li className="col-span-2">
              <div className="grid grid-rows-3 col-span-2 gap-1 h-14 text-xs text-zinc-700" dir="rtl">

                <span className="">فرید اشنود</span>
                <p className="text-[10px]">سلام ببخشید چطور ...</p>
                <span className="text-[9px]">6 دقیقه قبل ...</span>

              </div>
                <img src="../../src/StorePanel/assets/img/profile/1.png" className="w-10 h-10 rounded-circle"/>
              </li>
              
            </ul>
          </motion.div>
        }
        {
          MailToggle &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 270,
              transition: {
                duration: 0.2,
              }
            }}
            style={{ left: `${Left}px` }}
            className={`absolute w-[14rem] z-20 overflow-clip duration-300 top-13 p-1 backdrop-blur-2xl bg-zinc-200/30 rounded-xl shadow-md `}>
            <ul className="grid grid-cols-2 w-full cursor-pointer *:flex *:flex-row *:justify-between 
            *:gap-3 *:p-2 *:hover:bg-blue-400/30 *:duration-200 *:rounded-xl">
              <div className="grid col-span-2 grid-cols-2 justify-between items-center h-10 text-xs text-zinc-700 border-b border-b-stone-300">
                <span>تیکت ها</span>
                <a href="#" className="hover:text-blue-800">مشاهده همه</a>
              </div>
              <li className="col-span-2 text-zinc-700">
              <div className="grid grid-rows-3 col-span-2 gap-1 h-14 text-xs">

                <span className="">امید نوروزی</span>
                <p className="text-[10px]">داداش چطور باید در ...</p>
                <span className="text-[9px]">3 دقیقه قبل ...</span>

              </div>
                <img src="../../src/StorePanel/assets/img/profile/1.png" className="w-10 h-10 rounded-circle"/>
              </li>
              <li className="col-span-2 text-zinc-700">
              <div className="grid grid-rows-3 col-span-2 gap-1 h-14 text-xs">

                <span className="">رضا صالحی</span>
                <p className="text-[10px]">سلام من در خرید محصور...</p>
                <span className="text-[9px]">4 دقیقه قبل ...</span>

              </div>
                <img src="../../src/StorePanel/assets/img/profile/2.png" className="w-10 h-10 rounded-circle"/>
              </li>
              <li className="col-span-2 text-zinc-700">
              <div className="grid grid-rows-3 col-span-2 gap-1 h-14 text-xs">

                <span className="">حمید احمدی</span>
                <p className="text-[10px]">سلام ببخشید من در ثبت  ...</p>
                <span className="text-[9px]">6 دقیقه قبل ...</span>

              </div>
                <img src="../../src/StorePanel/assets/img/profile/3.png" className="w-10 h-10 rounded-circle"/>
              </li>
              
            </ul>
          </motion.div>
        }
      </div>
    </div>
  )
}

export default Navbar