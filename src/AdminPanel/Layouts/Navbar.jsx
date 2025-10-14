import { TbArrowBadgeLeft, TbBell, TbMail, TbMenu2, TbSearch } from "react-icons/tb"

function Navbar() {
  return (
    <div className="grid grid-cols-2 justify-center items-center w-full p-2 z-20">

      <div className="grid col-span-2 justify-start">
          <div className='flex flex-row h-full w-full justify-center space-x-2 items-center group cursor-pointer'>
            <span className='flex flex-row items-center text-zinc-600 bg-zinc-200/50 shadow-sm rounded-xl p-2 justify-center hover:*:-rotate-90 duration-200'>
              <TbArrowBadgeLeft size={25} className="duration-300" />
              سید حسن تقوی
            </span>
            <img src='../../src/StorePanel/assets/img/profile.jpg' alt='user profile' className='flex w-10 h-10 rounded-circle shadow-sm' />
            <span className="rounded-full w-[2.6rem] h-[2.6rem] shadow-md hover:*:scale-120 flex opacity-60 justify-center items-center bg-zinc-200">
            <TbMail size={20} className=" duration-200" /></span>
          <span className="rounded-full w-[2.6rem] h-[2.6rem] shadow-md flex hover:*:scale-120 opacity-60 justify-center items-center bg-zinc-200">
            <TbBell size={20} className="duration-200" /></span>
          </div>
          
      </div>
    </div>
  )
}

export default Navbar