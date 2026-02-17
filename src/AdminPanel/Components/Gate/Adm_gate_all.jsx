import { FaLock } from 'react-icons/fa'
import { TbTrashFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { IoMdCloseCircle } from 'react-icons/io'
import { useEffect, useState } from 'react'
import apiClient from '../../../apiClient'
import { toast } from 'react-toastify'

function Adm_gate_all() {
  const [gate, setGate] = useState();

  useEffect(() => {
    const fetchGate = async () => {
      try {
        const res = await apiClient.get('/admin/admGate');
        if (res.status >= 200 && res.status < 300) {
          setGate(res.data[0]);
        }
      } catch (err) {
        toast.error('خطا در فرایند واکشی داده ها');
      }
    }
    fetchGate();

  }, []);

  const deleteHandler = async (id) => {

    try {
      const removeGate = await apiClient.delete(`/admin/admGate/${id}`);
      if (removeGate.status >= 200 && removeGate.status < 300) {
        setGate('');
        toast.success('کد دسترسی با موفقیت حذف شد')
      }
    } catch (err) {
      toast.error(err.response.data.message);
      toast.error('خطا در فرایند حذف کد دسترسی');
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
      className='flex flex-col items-center bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border
     border-white/20 min-md:mr-10 mt-4 min-h-96 max-md:w-full min-md:w-[92%] min-w-[50rem]'>
      <div className='flex flex-row w-full justify-between items-center min-md:p-6 bg-white/40 
      backdrop-blur-md h-24 rounded-t-2xl border-b border-white/20'>
        <Link to="/admin/index" className='text-gray-600 hover:scale-120 mr-3 transition-all duration-200'>
          <IoMdCloseCircle size={27} className='text-red-500' />
        </Link>
        <h3 className='min-md:text-2xl text-lg font-bold text-stone-800'>مدیریت کد دسترسی</h3>
        <div className='flex flex-row relative justify-center items-center space-x-4'>

          {
            !gate &&
            <Link to="/admin/admGate/add" className='flex h-12 bg-blue-600 hover:bg-blue-700
            text-white items-center justify-center
            rounded-xl text-sm font-medium space-x-2 p-3 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl' >
              <span>افزودن کد دسترسی جدید</span>
              <FaLock size={20} />
            </Link>
          }
        </div>
      </div>

      <div className='flex flex-col w-full min-md:p-6 min-h-100 '>
        {
          gate &&
          <div className="group relative">
            <div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 opacity-30 blur-lg transition-all duration-500 group-hover:opacity-70 group-hover:blur-xl"
            ></div>

            <div
              className="relative rounded-lg border border-white bg-white/90 px-8 py-4 shadow-xl"
            >
              <div
                className="absolute inset-x-0 top-px h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></div>
              <div
                className="absolute inset-x-0 bottom-px h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></div>

              <div className="relative flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-12 w-12 items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full border border-rose-500/20 border-t-rose-500 transition-transform duration-1000 group-hover:rotate-180"
                    ></div>
                    <div className="absolute inset-[3px] rounded-full bg-gray-950"></div>
                    <span className="relative text-sm font-bold text-rose-500">#{gate.id}</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-stone-700">{gate.gkey}</span>
                      <div
                        className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50"
                      ></div>
                    </div>

                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
                      <div
                        className="h-full w-2/3 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 
                        transition-all duration-300 group-hover:w-full"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    onClick={() => deleteHandler(gate.id)}
                    className="relative flex h-8 w-8 items-center cursor-pointer hover:scale-130 duration-300
                     justify-center rounded-lg bg-rose-500/50 hover:bg-rose-950 border-t border-rose-500"
                  >
                    <button className='text-red-800 cursor-pointer hover:text-red-700 transition-colors duration-200' title='حذف'>
                      <TbTrashFilled size={17} />
                    </button>
                    <div
                      className="absolute inset-0 rounded-lg bg-rose-500/10 blur-sm transition-all duration-300 group-hover:blur-md"
                    ></div>
                  </div>

                  <span className="text-sm font-semibold text-stone-700">حذف</span>

                  <div className="flex gap-1">
                    <div
                      className="h-2 w-2 rounded-full bg-orange-500/40 transition-all duration-300 group-hover:bg-orange-500"
                    ></div>
                    <div
                      className="h-2 w-2 rounded-full bg-orange-500/40 transition-all duration-300 group-hover:bg-orange-500 group-hover:delay-75"
                    ></div>
                    <div
                      className="h-2 w-2 rounded-full bg-orange-500/40 transition-all duration-300 group-hover:bg-orange-500 group-hover:delay-150"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        }

      </div>



    </motion.div>
  )
}

export default Adm_gate_all