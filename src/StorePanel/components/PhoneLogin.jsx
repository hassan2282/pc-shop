import { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "motion/react";
import apiClient from "../../apiClient";
import { FcLock } from "react-icons/fc";

function PhoneLogin() {
  const [formData, setFormData] = useState({
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await apiClient.post("/auth/phone-verify", formData);
      if (res.status >= 200 && res.status < 300) {
        dispatch({
          type: "CLIENT_PHONE",
          payload: formData.phone,
        })
        toast.success("کد با موفقیت ارسال شد");
        navigate("/store/phone-confirm", { replace: true });
      }
    } catch (err) {
      console.log(err.response.data.message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-[url('/src/StorePanel/assets/img/abstract-bg2.jpg')] fixed bg-cover z-10">
      <div className="w-full h-full flex flex-row z-20" dir="rtl">
        <div className="h-full w-full z-20 flex justify-center items-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5 },
            }}
            className="flex flex-row xl:w-[60%] lg:w-[80%] md:w-[50%] sm:w-[70%] max-sm:w-[90%] h-auto justify-center 
              items-center backdrop-blur-lg shadow-black/20
            bg-[#eaf6f748] rounded-3xl shadow-xl border-white/60 border-t border-l">

            <div className="w-100 h-100 p-6 min-lg:basis-1/2 flex">
              <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-[95%] h-full p-3">
                <div className="flex flex-col space-y-5 w-full h-full justify-center items-center ">
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 1, delay: 0.4 },
                    }}
                    className="w-full">
                    <div className="text-zinc-800">
                      <span>*</span> تلفن
                    </div>
                    <div className="w-full">
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-full shadow-xs shadow-black/20 hover:shadow-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#009EA4]"
                        type="number"
                        placeholder="شماره تلفن"
                      />
                    </div>
                  </motion.div>


                  <div className="grid grid-cols-2 max-sm:grid-cols-1 w-full *:rounded-full *:p-2 gap-2 *:shadow-md *:bg-white/20
                          *:hover:-translate-y-1 *:cursor-pointer *:duration-300 *:hover:shadow-xl text-zinc-800">



                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 1, delay: 0.7 },
                      }}
                      className="flex w-full justify-center items-center border-t border-t-white/40">
                      <button
                        style={{ borderRadius: '4rem' }}
                        type="submit"
                        className="d-flex w-full justify-center items-center rounded-xl shadow-sm shadow-gray-500
                         p-2 cursor-pointer hover:scale-102 active:scale-95 duration-300 hover:bg-white/60
                         border-t-white/60 border-t-1 bg-[#00C8D1]/30"
                      >
                        {isLoading ? (
                          <AiOutlineLoading
                            className="animate-spin"
                            size={20}
                          />
                        ) : (
                          "ارسال کد به تلفن"
                        )}
                      </button>
                    </motion.div>



                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 1, delay: 0.6 },
                      }}
                      className="flex w-full justify-center items-center border-t border-t-white/40">
                      <Link className="d-flex w-full justify-center items-center rounded-full shadow-sm shadow-gray-500
                         p-2 cursor-pointer hover:scale-102 active:scale-95 duration-300
                         border-t-white/60 border-t-1 text-center" to="/store/login">
                        ورود با ایمیل
                      </Link>
                    </motion.div>



                  </div>


                  <motion.div

                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 1, delay: 0.8 },
                    }}
                    className="rounded-xl">
                    <p>
                      <span>کاربر جدید هستید؟</span>
                      <Link to="/store/register" className="text-lg mx-2 hover:text-blue-600 text-danger">
                        عضویت
                      </Link>
                    </p>
                  </motion.div>
                </div>
              </form>
            </div>
            <FcLock size={'18rem'} className="max-lg:hidden min-lg:basis-1/2 flex hue-rotate-140 rounded-l-2xl object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PhoneLogin;
