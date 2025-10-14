import { useRef, useState } from "react"
import { TbArrowBadgeLeft, TbBell, TbDoorExit, TbLogout, TbMail, TbUser } from "react-icons/tb"
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
        <div className='flex flex-row h-full w-full justify-center space-x-2 items-center group cursor-pointer'>
          <span ref={profileRef} onClick={profile} className='flex flex-row items-center text-zinc-600
             bg-zinc-200/50 shadow-sm rounded-xl p-2 justify-center hover:*:-rotate-90 duration-200'>
            <TbArrowBadgeLeft size={25} className="duration-300" />
            سید حسن تقوی
          </span>
          <img src='../../src/StorePanel/assets/img/profile.jpg' alt='user profile' className='flex w-10 h-10 rounded-circle shadow-sm' />
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
              height: 160,
              transition: {
                duration: 0.2,
              }
            }}
            style={{ left: `${Left}px` }}
            className={`absolute w-[8rem] overflow-clip duration-300 top-13 p-1 backdrop-blur-2xl bg-zinc-200/50 rounded-xl shadow-md `}>
            <ul className="flex flex-col w-full *:flex *:flex-row *:justify-between *:shadow-xs *:p-2 *:rounded-xl *:hover:bg-zinc-200 *:duration-200">
              <li><TbUser size={20} color={"white"}/>پروفایل</li>
              <li><TbMail size={20} color={"white"}/>تیکت‌ها</li>
              <li><TbBell size={20} color={"white"}/>اعلان‌ها</li>
              <li><TbLogout size={20} color={"white"}/>خروج</li>
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
            className={`absolute w-[16rem] overflow-clip duration-300 top-13 p-1 backdrop-blur-2xl bg-zinc-200/50 rounded-xl shadow-md `}>
            <ul className="grid grid-cols-2 w-full *:flex *:flex-row *:justify-between *:gap-3 *:inset-shadow-sm *:p-2 *:rounded-xl *:hover:bg-zinc-200 *:duration-200">
              <div className="grid col-span-2 grid-cols-2 justify-between items-center h-10 text-xs bg-zinc-200 border-b border-gray-400">
                <span>اعلان ها</span>
                <a href="#" className="text-danger">مشاهده همه</a>
              </div>
              <li className="col-span-2"><img src="../../src/StorePanel/assets/img/profile/4.png" className="w-10 h-10 rounded-circle"/>
              <div className="grid grid-rows-3 col-span-2 gap-1 h-14 text-xs">

                <span className="">امید نوروزی</span>
                <p className="text-[10px]">داداش ...</p>
                <span className="text-[9px]">3 دقیقه قبل ...</span>

              </div>
              </li>
              <li className="col-span-2"><img src="../../src/StorePanel/assets/img/profile/3.png" className="w-10 h-10 rounded-circle"/>
              <div className="grid grid-rows-3 col-span-2 gap-1 h-14 text-xs">

                <span className="">محمد دیدار</span>
                <p className="text-[10px]">سلام ...</p>
                <span className="text-[9px]">4 دقیقه قبل ...</span>

              </div>
              </li>
              <li className="col-span-2"><img src="../../src/StorePanel/assets/img/profile/1.png" className="w-10 h-10 rounded-circle"/>
              <div className="grid grid-rows-3 col-span-2 gap-1 h-14 text-xs">

                <span className="">شایان محمدی</span>
                <p className="text-[10px]">سلام ببخشید ...</p>
                <span className="text-[9px]">6 دقیقه قبل ...</span>

              </div>
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
            className={`absolute w-[14rem] overflow-clip duration-300 top-13 p-1 backdrop-blur-2xl bg-zinc-200/50 rounded-xl shadow-md `}>
            <ul className="grid grid-cols-2 w-full *:flex *:flex-row *:justify-between *:gap-3 *:inset-shadow-sm *:p-2 *:rounded-xl *:hover:bg-zinc-200 *:duration-200">
              <div className="grid col-span-2 grid-cols-2 justify-between items-center h-10 text-xs bg-zinc-200 border-b border-gray-400">
                <span>تیکت ها</span>
                <a href="#" className="text-danger">مشاهده همه</a>
              </div>
              <li className="col-span-2"><img src="../../src/StorePanel/assets/img/profile/1.png" className="w-10 h-10 rounded-circle"/>
              <div className="grid grid-rows-3 col-span-2 gap-1 h-14 text-xs">

                <span className="">امید نوروزی</span>
                <p className="text-[10px]">داداش ...</p>
                <span className="text-[9px]">3 دقیقه قبل ...</span>

              </div>
              </li>
              <li className="col-span-2"><img src="../../src/StorePanel/assets/img/profile/2.png" className="w-10 h-10 rounded-circle"/>
              <div className="grid grid-rows-3 col-span-2 gap-1 h-14 text-xs">

                <span className="">رضا صالحی</span>
                <p className="text-[10px]">سلام ...</p>
                <span className="text-[9px]">4 دقیقه قبل ...</span>

              </div>
              </li>
              <li className="col-span-2"><img src="../../src/StorePanel/assets/img/profile/3.png" className="w-10 h-10 rounded-circle"/>
              <div className="grid grid-rows-3 col-span-2 gap-1 h-14 text-xs">

                <span className="">حمید احمدی</span>
                <p className="text-[10px]">سلام ببخشید ...</p>
                <span className="text-[9px]">6 دقیقه قبل ...</span>

              </div>
              </li>
              
            </ul>
          </motion.div>
        }
      </div>
    </div>
  )
}

export default Navbar