import { TbArrowBadgeRight, TbBell, TbMail, TbMenu2, TbSearch } from "react-icons/tb"

function Navbar() {
  return (
    <div className="grid grid-cols-2 bg-zinc-200/20 shadow-sm justify-center items-center w-full p-2">

      <div className="grid col-start-1 justify-start">
          <div className='flex flex-row h-full w-full justify-center space-x-2 items-center group cursor-pointer'>
            <span className='flex flex-row items-center text-zinc-600 justify-center hover:*:rotate-90 duration-200'>
              <TbArrowBadgeRight size={20} className="duration-300" />
              سید حسن تقوی
            </span>
            <img src='../../src/StorePanel/assets/img/profile/1.png' alt='user profile' className='w-10 h-10 rounded-full' />
            <span className="rounded-full w-10 h-10 shadow-md hover:*:scale-120 flex opacity-60 justify-center items-center bg-zinc-200">
            <TbMail size={20} className=" duration-200" /></span>
          <span className="rounded-full w-10 h-10 shadow-md flex hover:*:scale-120 opacity-60 justify-center items-center bg-zinc-200">
            <TbBell size={20} className="duration-200" /></span>
          </div>
          
      </div>
      <div className="grid col-start-5 grid-cols-10 h-full gap-x-4 justify-center items-center ">
        <div className="relative grid col-span-9 h-full justify-center items-center cursor-pointer">
          <input type="search" className="absolute left-0 border rounded-full bg-zinc-200 
          opacity-60 shadow-sm w-[45%] duration-300 hover:w-[80%] p-2" />
          <TbSearch size={20} className="absolute left-2" />
        </div>
        <div className="flex flex-row justify-center items-center h-full">
          <span className="rounded-full w-10 h-10 cursor-pointer hover:*:scale-120 shadow-md opacity-60 bg-zinc-200 flex justify-center items-center">
            <TbMenu2 size={20} className="duration-200" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar