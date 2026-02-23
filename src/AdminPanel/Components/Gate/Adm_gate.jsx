import { useState } from "react";
import { FcLock, FcUnlock } from "react-icons/fc";
import { PiFingerprintThin } from "react-icons/pi";
import { toast } from "react-toastify";
import apiClient from "../../../apiClient";
import { useNavigate } from "react-router-dom";
import { TbLoader } from "react-icons/tb";
import {motion} from 'motion/react';

function Adm_gate() {
  const [toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({
    gkey: '',
  })
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const validate = (gkey) => {
    if (gkey.trim() === '' && gkey.trim().length < 15) {
      toast.error('رمز عبور معتبر نیست')
      return false;
    } else {
      return true;
    }

  }


  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    if (validate(formData.gkey)) {
      try {
        const res = await apiClient.post('/admin/gateGuard', formData, {
          withCredentials: true,
        })
        if (res.status >= 200 && res.status < 300) {
          res.data ?
            toast.success('به پنل مدیریت خوش آمدید') &&
            navigate('/admin/index', { replace: true })
            :
            toast.error('رمز عبور وارد شده صحیح نمی‌باشد')
        }
      } catch (err) {
        toast.error(err?.response?.data?.message || 'خطا در اتصال به سرور');
      } finally {
        setIsLoading(false)
      }
    }

  };

  

  return (
    <div
      className="absolute min-w-screen overflow-clip
        min-h-screen flex flex-row
        items-center justify-center
        backdrop-blur-3xl z-100 top-0"
    >
      <motion.div
      animate={{rotate: 360}}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      }}
      className="absolute w-screen h-screen opacity-40">
        <span className="absolute -z-0 bottom-50 right-200 w-[20rem] h-[20rem] blur-3xl rounded-full 
      bg-gradient-to-r from-pink-700 to-purple-700"></span>
        <span className="absolute -z-0 top-50 left-200 w-[20rem] h-[20rem] blur-3xl rounded-full 
      bg-gradient-to-r from-purple-600 to-pink-600"></span>
      </motion.div>
      {
        toggle ?
          <FcLock
            onClick={() => setToggle(!toggle)}
            className={`cursor-pointer duration-500 z-10 mb-8 mr-125 peer  w-[320px] h-[420px] hue-rotate-200 max-lg:hidden`}
          />
          :
          <FcUnlock
            onClick={() => setToggle(!toggle)}
            className={`cursor-pointer duration-500 z-10 mb-8 mr-125 peer  w-[320px] h-[420px] hue-rotate-200 max-lg:hidden`} />

      }
      <PiFingerprintThin onClick={() => setToggle(!toggle)} className="w-12 h-12 cursor-pointer max-lg:hidden
       text-white rounded-xl absolute z-20
         animate-pulse peer-hover:text-black/60 hover:text-black/60 -translate-x-62.5 translate-y-7.5 " />

      <div
        className={`
          min-lg:fixed max-lg:flex max-lg:flex-row h-[170px] rounded-3xl overflow-clip
          bg-white/20 border border-white/30 duration-1000 mt-15
          
          ${toggle ? "max-lg:visible max-lg:min-w-[250px] max-lg:justify-center max-lg:ml-0 invisible -ml-150 w-[50px]" : "visible min-lg:w-[470px] min-lg:ml-45"}
          `}
      >


        {/* Content */}
        <form dir="rtl"
          className="
            relative z-30 h-full
            flex flex-col justify-center items-center
            gap-2 px-8"
        >
          <h2 className="text-right w-full text-stone-800 text-xl font-semibold tracking-wide">
            ورود به پنل ادمین
          </h2>

          <input
            type="password"
            placeholder="رمز عبور را وارد کنید ..."
            onChange={(e) => setFormData({ gkey: e.target.value.trim() })}
            required
            className="
              flex
              pr-2
              w-full h-12 rounded-xl
              bg-white/90 text-stone-700
              border border-white/30
              outline-none z-30 
              placeholder:text-zinc-400
              focus:ring-2 focus:ring-sky-400/60
            "
          />

          <button
            onClick={submitHandler}
            type="submit"
            className="
              flex justify-center items-center
               w-full h-11 rounded-xl
              bg-blue-600
              cursor-pointer
              text-white
              text-xl
              transition
              z-50
              hover:-translate-y-0.5
              hover:shadow-lg hover:shadow-black/20
              active:translate-y-0
            "
          >
            {
              isLoading ?
                <TbLoader size={20} className="animate-spin" />
                :
                "ورود"
            }
          </button>
        </form>
      </div>

    </div>
  );
}

export default Adm_gate;