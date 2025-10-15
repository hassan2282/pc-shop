import React from 'react'
import { FaUser, FaUserSecret } from 'react-icons/fa'
import { FcApproval, FcCancel, FcOk } from 'react-icons/fc'
import { TbEditCircle, TbEyeFilled, TbSearch, TbTrashFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function Adm_all_users() {
  return (
    <div className='flex flex-col items-center bg-zinc-200/20 rounded-xl backdrop-blur-lg mr-10 mt-4 min-h-96 w-[90%]'>
      <div className='flex flex-row w-full justify-between items-center p-3 bg-zinc-200/30 h-20 rounded-t-xl'>
        <h5 className='text-zinc-600'>جدول کاربران</h5>
        <div className='flex flex-row relative justify-center items-center'>
          <input type='search' className='w-[12rem] duration-400 inset-shadow-sm shadow-xs hover:w-[20rem] h-10 rounded-xl p-2 bg-zinc-200/50' placeholder='جستجو...' />
          <TbSearch size={20} className='absolute left-4' />
        </div>
      </div>

      <table className='flex flex-col w-full p-3 min-h-100'>
        <tr className='w-full grid grid-cols-10 items-center bg-zinc-200/60 text-zinc-600/90 rounded-md
       h-20 text-md justify-center text-center'>
          <th className='col-span-1'>ردیف</th>
          <th className='col-span-1'>آیدی</th>
          <th className='col-span-1'>پروفایل</th>
          <th className='col-span-1'>نام</th>
          <th className='col-span-1'>نام خانوادگی</th>
          <th className='col-span-1'>تاریخ عضویت</th>
          <th className='col-span-1'>وضعیت</th>
          <th className='col-span-1'>نوع کاربر</th>
          <th className='col-span-2'>عملیات</th>
        </tr>



        <tr className='w-full grid grid-cols-10 items-center text-zinc-600/90
       h-20 text-md justify-center text-center hover:bg-stone-200/50 rounded-xl cursor-pointer'>
          <td className='col-span-1'>1</td>
          <td className='col-span-1'>50905</td>
          <td className='col-span-1 flex justify-center items-center'>
            <img src='../../../src/StorePanel/assets/img/profile.jpg' className='w-12 h-12 rounded-xl' />
          </td>
          <td className='col-span-1'>سید حسن</td>
          <td className='col-span-1'>تقوی</td>
          <td className='col-span-1'>1403/10/17</td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FcApproval size={40} className='' />
          </td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FaUserSecret size={30} className='text-red-400' />
          </td>
          <td className='col-span-2 flex flex-row space-x-5 *:hover:scale-120 justify-center items-center'>
            <Link className='hover:text-blue-500'><TbEyeFilled size={22} /></Link>
            <Link className='hover:text-yellow-500'><TbEditCircle size={22} /></Link>
            <Link className='hover:text-red-500'><TbTrashFilled size={22} /></Link>
          </td>
        </tr>
        <tr className='w-full grid grid-cols-10 items-center text-zinc-600/90
       h-20 text-md justify-center text-center hover:bg-stone-200/50 rounded-xl cursor-pointer'>
          <td className='col-span-1'>2</td>
          <td className='col-span-1'>50905</td>
          <td className='col-span-1 flex justify-center items-center'>
            <img src='../../../src/StorePanel/assets/img/profile.jpg' className='w-12 h-12 rounded-xl' />
          </td>
          <td className='col-span-1'>سید حسن</td>
          <td className='col-span-1'>تقوی</td>
          <td className='col-span-1'>1403/10/17</td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FcApproval size={40} className='' />
          </td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FaUser size={30} className='text-blue-400' />
          </td>
          <td className='col-span-2 flex flex-row space-x-5 *:hover:scale-120 justify-center items-center'>
            <Link className='hover:text-blue-500'><TbEyeFilled size={22} /></Link>
            <Link className='hover:text-yellow-500'><TbEditCircle size={22} /></Link>
            <Link className='hover:text-red-500'><TbTrashFilled size={22} /></Link>
          </td>
        </tr>
        <tr className='w-full grid grid-cols-10 items-center text-zinc-600/90
       h-20 text-md justify-center text-center hover:bg-stone-200/50 rounded-xl cursor-pointer'>
          <td className='col-span-1'>3</td>
          <td className='col-span-1'>50905</td>
          <td className='col-span-1 flex justify-center items-center'>
            <img src='../../../src/StorePanel/assets/img/profile.jpg' className='w-12 h-12 rounded-xl' />
          </td>
          <td className='col-span-1'>سید حسن</td>
          <td className='col-span-1'>تقوی</td>
          <td className='col-span-1'>1403/10/17</td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FcCancel size={40} className='' />
          </td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FaUser size={30} className='text-blue-400' />
          </td>
          <td className='col-span-2 flex flex-row space-x-5 *:hover:scale-120 justify-center items-center'>
            <Link className='hover:text-blue-500'><TbEyeFilled size={22} /></Link>
            <Link className='hover:text-yellow-500'><TbEditCircle size={22} /></Link>
            <Link className='hover:text-red-500'><TbTrashFilled size={22} /></Link>
          </td>
        </tr>









<tr className='w-full grid grid-cols-10 items-center text-zinc-600/90
       h-20 text-md justify-center text-center hover:bg-stone-200/50 rounded-xl cursor-pointer'>
          <td className='col-span-1'>1</td>
          <td className='col-span-1'>50905</td>
          <td className='col-span-1 flex justify-center items-center'>
            <img src='../../../src/StorePanel/assets/img/profile.jpg' className='w-12 h-12 rounded-xl' />
          </td>
          <td className='col-span-1'>سید حسن</td>
          <td className='col-span-1'>تقوی</td>
          <td className='col-span-1'>1403/10/17</td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FcApproval size={40} className='' />
          </td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FaUserSecret size={30} className='text-red-400' />
          </td>
          <td className='col-span-2 flex flex-row space-x-5 *:hover:scale-120 justify-center items-center'>
            <Link className='hover:text-blue-500'><TbEyeFilled size={22} /></Link>
            <Link className='hover:text-yellow-500'><TbEditCircle size={22} /></Link>
            <Link className='hover:text-red-500'><TbTrashFilled size={22} /></Link>
          </td>
        </tr>
        <tr className='w-full grid grid-cols-10 items-center text-zinc-600/90
       h-20 text-md justify-center text-center hover:bg-stone-200/50 rounded-xl cursor-pointer'>
          <td className='col-span-1'>2</td>
          <td className='col-span-1'>50905</td>
          <td className='col-span-1 flex justify-center items-center'>
            <img src='../../../src/StorePanel/assets/img/profile.jpg' className='w-12 h-12 rounded-xl' />
          </td>
          <td className='col-span-1'>سید حسن</td>
          <td className='col-span-1'>تقوی</td>
          <td className='col-span-1'>1403/10/17</td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FcApproval size={40} className='' />
          </td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FaUser size={30} className='text-blue-400' />
          </td>
          <td className='col-span-2 flex flex-row space-x-5 *:hover:scale-120 justify-center items-center'>
            <Link className='hover:text-blue-500'><TbEyeFilled size={22} /></Link>
            <Link className='hover:text-yellow-500'><TbEditCircle size={22} /></Link>
            <Link className='hover:text-red-500'><TbTrashFilled size={22} /></Link>
          </td>
        </tr>
        <tr className='w-full grid grid-cols-10 items-center text-zinc-600/90
       h-20 text-md justify-center text-center hover:bg-stone-200/50 rounded-xl cursor-pointer'>
          <td className='col-span-1'>3</td>
          <td className='col-span-1'>50905</td>
          <td className='col-span-1 flex justify-center items-center'>
            <img src='../../../src/StorePanel/assets/img/profile.jpg' className='w-12 h-12 rounded-xl' />
          </td>
          <td className='col-span-1'>سید حسن</td>
          <td className='col-span-1'>تقوی</td>
          <td className='col-span-1'>1403/10/17</td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FcCancel size={40} className='' />
          </td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FaUser size={30} className='text-blue-400' />
          </td>
          <td className='col-span-2 flex flex-row space-x-5 *:hover:scale-120 justify-center items-center'>
            <Link className='hover:text-blue-500'><TbEyeFilled size={22} /></Link>
            <Link className='hover:text-yellow-500'><TbEditCircle size={22} /></Link>
            <Link className='hover:text-red-500'><TbTrashFilled size={22} /></Link>
          </td>
        </tr>
        <tr className='w-full grid grid-cols-10 items-center text-zinc-600/90
       h-20 text-md justify-center text-center hover:bg-stone-200/50 rounded-xl cursor-pointer'>
          <td className='col-span-1'>1</td>
          <td className='col-span-1'>50905</td>
          <td className='col-span-1 flex justify-center items-center'>
            <img src='../../../src/StorePanel/assets/img/profile.jpg' className='w-12 h-12 rounded-xl' />
          </td>
          <td className='col-span-1'>سید حسن</td>
          <td className='col-span-1'>تقوی</td>
          <td className='col-span-1'>1403/10/17</td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FcApproval size={40} className='' />
          </td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FaUserSecret size={30} className='text-red-400' />
          </td>
          <td className='col-span-2 flex flex-row space-x-5 *:hover:scale-120 justify-center items-center'>
            <Link className='hover:text-blue-500'><TbEyeFilled size={22} /></Link>
            <Link className='hover:text-yellow-500'><TbEditCircle size={22} /></Link>
            <Link className='hover:text-red-500'><TbTrashFilled size={22} /></Link>
          </td>
        </tr>
        <tr className='w-full grid grid-cols-10 items-center text-zinc-600/90
       h-20 text-md justify-center text-center hover:bg-stone-200/50 rounded-xl cursor-pointer'>
          <td className='col-span-1'>2</td>
          <td className='col-span-1'>50905</td>
          <td className='col-span-1 flex justify-center items-center'>
            <img src='../../../src/StorePanel/assets/img/profile.jpg' className='w-12 h-12 rounded-xl' />
          </td>
          <td className='col-span-1'>سید حسن</td>
          <td className='col-span-1'>تقوی</td>
          <td className='col-span-1'>1403/10/17</td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FcApproval size={40} className='' />
          </td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FaUser size={30} className='text-blue-400' />
          </td>
          <td className='col-span-2 flex flex-row space-x-5 *:hover:scale-120 justify-center items-center'>
            <Link className='hover:text-blue-500'><TbEyeFilled size={22} /></Link>
            <Link className='hover:text-yellow-500'><TbEditCircle size={22} /></Link>
            <Link className='hover:text-red-500'><TbTrashFilled size={22} /></Link>
          </td>
        </tr>
        <tr className='w-full grid grid-cols-10 items-center text-zinc-600/90
       h-20 text-md justify-center text-center hover:bg-stone-200/50 rounded-xl cursor-pointer'>
          <td className='col-span-1'>3</td>
          <td className='col-span-1'>50905</td>
          <td className='col-span-1 flex justify-center items-center'>
            <img src='../../../src/StorePanel/assets/img/profile.jpg' className='w-12 h-12 rounded-xl' />
          </td>
          <td className='col-span-1'>سید حسن</td>
          <td className='col-span-1'>تقوی</td>
          <td className='col-span-1'>1403/10/17</td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FcCancel size={40} className='' />
          </td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FaUser size={30} className='text-blue-400' />
          </td>
          <td className='col-span-2 flex flex-row space-x-5 *:hover:scale-120 justify-center items-center'>
            <Link className='hover:text-blue-500'><TbEyeFilled size={22} /></Link>
            <Link className='hover:text-yellow-500'><TbEditCircle size={22} /></Link>
            <Link className='hover:text-red-500'><TbTrashFilled size={22} /></Link>
          </td>
        </tr>
        <tr className='w-full grid grid-cols-10 items-center text-zinc-600/90
       h-20 text-md justify-center text-center hover:bg-stone-200/50 rounded-xl cursor-pointer'>
          <td className='col-span-1'>1</td>
          <td className='col-span-1'>50905</td>
          <td className='col-span-1 flex justify-center items-center'>
            <img src='../../../src/StorePanel/assets/img/profile.jpg' className='w-12 h-12 rounded-xl' />
          </td>
          <td className='col-span-1'>سید حسن</td>
          <td className='col-span-1'>تقوی</td>
          <td className='col-span-1'>1403/10/17</td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FcApproval size={40} className='' />
          </td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FaUserSecret size={30} className='text-red-400' />
          </td>
          <td className='col-span-2 flex flex-row space-x-5 *:hover:scale-120 justify-center items-center'>
            <Link className='hover:text-blue-500'><TbEyeFilled size={22} /></Link>
            <Link className='hover:text-yellow-500'><TbEditCircle size={22} /></Link>
            <Link className='hover:text-red-500'><TbTrashFilled size={22} /></Link>
          </td>
        </tr>
        <tr className='w-full grid grid-cols-10 items-center text-zinc-600/90
       h-20 text-md justify-center text-center hover:bg-stone-200/50 rounded-xl cursor-pointer'>
          <td className='col-span-1'>2</td>
          <td className='col-span-1'>50905</td>
          <td className='col-span-1 flex justify-center items-center'>
            <img src='../../../src/StorePanel/assets/img/profile.jpg' className='w-12 h-12 rounded-xl' />
          </td>
          <td className='col-span-1'>سید حسن</td>
          <td className='col-span-1'>تقوی</td>
          <td className='col-span-1'>1403/10/17</td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FcApproval size={40} className='' />
          </td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FaUser size={30} className='text-blue-400' />
          </td>
          <td className='col-span-2 flex flex-row space-x-5 *:hover:scale-120 justify-center items-center'>
            <Link className='hover:text-blue-500'><TbEyeFilled size={22} /></Link>
            <Link className='hover:text-yellow-500'><TbEditCircle size={22} /></Link>
            <Link className='hover:text-red-500'><TbTrashFilled size={22} /></Link>
          </td>
        </tr>
        <tr className='w-full grid grid-cols-10 items-center text-zinc-600/90
       h-20 text-md justify-center text-center hover:bg-stone-200/50 rounded-xl cursor-pointer'>
          <td className='col-span-1'>3</td>
          <td className='col-span-1'>50905</td>
          <td className='col-span-1 flex justify-center items-center'>
            <img src='../../../src/StorePanel/assets/img/profile.jpg' className='w-12 h-12 rounded-xl' />
          </td>
          <td className='col-span-1'>سید حسن</td>
          <td className='col-span-1'>تقوی</td>
          <td className='col-span-1'>1403/10/17</td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FcCancel size={40} className='' />
          </td>
          <td className='col-span-1 justify-center items-center w-full flex'>
            <FaUser size={30} className='text-blue-400' />
          </td>
          <td className='col-span-2 flex flex-row space-x-5 *:hover:scale-120 justify-center items-center'>
            <Link className='hover:text-blue-500'><TbEyeFilled size={22} /></Link>
            <Link className='hover:text-yellow-500'><TbEditCircle size={22} /></Link>
            <Link className='hover:text-red-500'><TbTrashFilled size={22} /></Link>
          </td>
        </tr>

      </table>


    </div>
  )
}

export default Adm_all_users