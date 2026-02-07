import { useState } from "react";
import { FcKey, FcLock, FcUnlock } from "react-icons/fc";
import { motion } from 'motion/react'
import { PiFingerprintThin } from "react-icons/pi";

function AdminPanelPass() {
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Admin password:", password);
  };

  return (
    <div
      className="absolute min-w-screen overflow-clip
        min-h-screen flex flex-row
        items-center justify-center
        backdrop-blur-3xl z-100 top-0"
    >
      {
        toggle ?
          <FcLock
            onClick={() => setToggle(!toggle)}
            className={`cursor-pointer duration-500 z-10 mb-15 mr-181 peer  w-[420px] h-[420px] hue-rotate-200 max-lg:hidden`}
          />
          :
          <FcUnlock
          onClick={() => setToggle(!toggle)}
          className={`cursor-pointer duration-500 z-10 mb-15 mr-181 peer  w-[420px] h-[420px] hue-rotate-200 max-lg:hidden`} />
          
        }
        <PiFingerprintThin onClick={() => setToggle(!toggle)} className="w-15 h-15 cursor-pointer max-lg:hidden text-white/70 rounded-xl absolute z-20
         animate-pulse peer-hover:text-black/60 hover:text-black/60 -translate-x-90.5 translate-y-7.5 " />
      
      {/* ${toggle ? " invisible -ml-170 w-[50px]" : "visible min-lg:w-[470px] min-lg:ml-45"} */}
      <motion.div
      initial={{ x: -200, width: 470 }}
      animate={{ x: toggle ? -400 : 0, width: toggle ? 50 : 470, }}
      transition={{duration:0.1}}
        className={`
          fixed h-[220px] w-[470px] rounded-3xl overflow-hidden
          bg-white/20 border border-white/30 duration-1000 mt-15
          ${toggle ? " invisible" : "visible"}
          `}
          >
        

        {/* Content */}
        <form dir="rtl"
          className="
            relative z-30 h-full
            flex flex-col justify-center
            gap-4 px-8"
        >
          <h2 className="text-stone-800 text-xl font-semibold tracking-wide">
            ورود به پنل ادمین
          </h2>

          <input
            type="password"
            placeholder="رمز عبور را وارد کنید ..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              flex
              w-full px-4 py-3 rounded-xl
              bg-white/90 text-stone-700
              border border-white/30
              outline-none z-30 placeholder:text-zinc-400
              focus:ring-2 focus:ring-sky-400/60
            "
          />

          <button
            onClick={submitHandler}
            type="submit"
            className="
              mt-2 py-3 rounded-xl
              bg-blue-600
              cursor-pointer
              text-white
              transition
              z-50
              hover:-translate-y-0.5
              hover:shadow-lg hover:shadow-black/20
              active:translate-y-0
            "
          >
            ورود
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default AdminPanelPass;