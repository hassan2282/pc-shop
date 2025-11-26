import { FaUser, FaUserSecret } from 'react-icons/fa'
import { TbCheck, TbEditCircle, TbEyeFilled, TbSearch, TbTrashFilled, TbX } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { MdPersonAdd } from 'react-icons/md'
import { IoMdCloseCircle } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import apiClient from '../../../apiClient'

function Adm_all_users() {

  const [users, setUsers] = useState([]);
  const [isChangingStatus, setIsChangingStatus] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await apiClient.get('/admin/users');
        if (res.status >= 200 && res.status < 300) {
          setUsers(Array.isArray(res.data) ? res.data : []);
        }
      } catch (err) {
        toast.error('اطلاعات کاربران یافت نشد!')
      }
    }

    fetchUsers();
  }, []);


   const changeStatus = async (id) => {
    setIsChangingStatus(true);
    try {
      const res = await apiClient.post(`/admin/users/changeStatus/${id}`);
      if (res.status >= 200 && res.status < 300) {
        toast.success('وضعیت کاربر با موفقیت تغییر یافت');
        setUsers(prevUsers => prevUsers.map((item) => item.id === id ? {...item, status: !item.status} : item))
      }
    } catch (err) {
      toast.error('متاسفانه در فرایند تغییر وضعیت کاربر مشکلی پیش اومده')
    }finally{
      setIsChangingStatus(false);
    }
  }

  const deleteHandler = async (id) => {
    try {
      const res = await apiClient.delete(`/admin/users/${id}`);
      if (res.status >= 200 && res.status < 300) {
        toast.success('کاربر با موفقیت حذف شد♥');
        setUsers((prev) => prev.filter(user => user.id !== id));
      }
    } catch (err) {
      toast.error('متاسفانه در فرایند حذف کاربر مشکلی پیش اومده')
    }
  }

 

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
      className='flex flex-col items-center bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl border
     border-white/20 mr-10 mt-4 min-h-96 w-[92%] min-w-[60rem] overflow-x-auto'>
      <div className='flex flex-row w-full justify-between items-center p-6 bg-white/30 
      backdrop-blur-md h-24 rounded-t-2xl border-b border-white/20'>
        <Link to="/admin/index" className='text-gray-600 hover:scale-120 mr-3 transition-all duration-200'>
          <IoMdCloseCircle size={27} className='text-red-500' />
        </Link>
        <h3 className='text-2xl font-bold text-gray-800'>مدیریت کاربران</h3>
        <div className='flex flex-row relative justify-center items-center space-x-4'>
          <div className='relative flex justify-center items-center'>
            <TbSearch size={20} className='absolute left-3 text-gray-400' />
            <input
              type='search'
              className='w-[14rem] inset-shadow-sm shadow-xs hover:w-[20rem] h-12 rounded-xl p-3 bg-white/90 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              placeholder='جستجو...'
            />
          </div>
          <Link to="/admin/users/add" className='flex h-12 bg-blue-600 hover:bg-blue-700
          text-white items-center justify-center
           rounded-xl text-sm font-medium space-x-2 p-3 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl' >
            <MdPersonAdd size={20} />
            <span>افزودن کاربر</span>
          </Link>
        </div>
      </div>

      <div className='flex flex-col w-full p-6 min-h-100 overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='w-full grid grid-cols-10 items-center bg-white/90 backdrop-blur-sm text-gray-700/90 rounded-xl
           h-16 text-md justify-center text-center border border-gray-200 shadow-sm'>
              <th className='col-span-1 font-semibold'>ردیف</th>
              <th className='col-span-1 font-semibold'>آیدی</th>
              <th className='col-span-1 font-semibold'>پروفایل</th>
              <th className='col-span-1 font-semibold'>نام</th>
              <th className='col-span-1 font-semibold'>نام خانوادگی</th>
              <th className='col-span-1 font-semibold'>تاریخ عضویت</th>
              <th className='col-span-1 font-semibold'>وضعیت</th>
              <th className='col-span-1 font-semibold'>نوع کاربر</th>
              <th className='col-span-2 font-semibold'>عملیات</th>
            </tr>
          </thead>
          <tbody className='*:hover:bg-blue-500/10'>

            {
              users &&
              users.map((user, index) => {
                return (

                  <tr key={user.id} className='w-full grid grid-cols-10 items-center text-gray-600/90
                    h-16 text-md justify-center text-center bg-white/60 hover:bg-blue-50/50]
                     rounded-xl cursor-pointer transition-all duration-200 border border-gray-100/50'>
                    <td className='col-span-1'>{index + 1}</td>
                    <td className='col-span-1'>{user.id}</td>
                    <td className='col-span-1 flex justify-center items-center'>
                      <img src='../../../src/StorePanel/assets/img/profile.jpg' className='w-12 h-12 rounded-xl border-2 border-white/50 shadow-md' />
                    </td>
                    <td className='col-span-1'>{user.first_name}</td>
                    <td className='col-span-1'>{user.last_name}</td>
                    <td className='col-span-1'>{new Date(user.created_at).toLocaleDateString('fa-IR')}</td>
                    <td onClick={() => changeStatus(user.id)} className={`col-span-1 justify-center items-center w-full flex 
                    hover:*:scale-110 *:duration-300  ${isChangingStatus && 'cursor-wait'} `}>

                      {
                        !user.status ? (
                          <>
                            <div className='flex items-center gap-1 bg-red-100/80 backdrop-blur-sm px-3 shadow-xs 
                              hover:shadow-md shadow-zinc-400 py-1 rounded-full'>
                              <TbX size={16} className='text-red-600' />
                              <span className='text-red-700 text-sm font-medium'>غیرفعال</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className='flex items-center gap-1 bg-green-100/80 backdrop-blur-sm px-3 py-1 rounded-full 
                              shadow-xs hover:shadow-md shadow-zinc-400'>
                              <TbCheck size={16} className='text-green-600' />
                              <span className='text-green-700 text-sm font-medium'>فعال</span>
                            </div>
                          </>
                        )
                      }

                    </td>
                    <td className='col-span-1 justify-center items-center w-full flex'>

                      {
                        user.role_id === 1 ? (
                          <>
                            <div className='flex items-center gap-1 hover:scale-110 duration-300 shadow-xs hover:shadow-md shadow-zinc-400 bg-gray-100/80 backdrop-blur-sm px-3 py-1 rounded-full'>
                              <FaUser size={16} className='text-gray-600' />
                              <span className='text-gray-700 text-sm font-medium'>کاربر</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className='flex items-center gap-1 hover:scale-110 duration-300 shadow-xs hover:shadow-md shadow-zinc-400 bg-blue-200/80 backdrop-blur-sm px-3 py-1 rounded-full'>
                              <FaUserSecret size={16} className='text-blue-600' />
                              <span className='text-blue-700 text-sm font-medium'>{user.role.name}</span>
                            </div>
                          </>
                        )
                      }
                    </td>
                    <td className='col-span-2 flex flex-row space-x-3 *:hover:scale-110 justify-center items-center'>
                      <Link to={`/admin/user/show/${user.id}`} className='text-blue-600 hover:text-blue-700 transition-colors duration-200' title='مشاهده'>
                        <TbEyeFilled size={20} />
                      </Link>
                      <Link to={`/admin/user/edit/${user.id}`}
                        className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200' title='ویرایش'>
                        <TbEditCircle size={20} />
                      </Link>
                      <Link onClick={() => deleteHandler(user.id)} className='text-red-600 hover:text-red-700 transition-colors duration-200' title='حذف'>
                        <TbTrashFilled size={20} />
                      </Link>
                    </td>
                  </tr>
                )
              })
            }



          </tbody>
        </table>
      </div>
    </motion.div >
  )
}

export default Adm_all_users