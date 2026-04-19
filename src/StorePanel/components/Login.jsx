import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "motion/react"
import { tokenManager } from "../../apiClient";
import { FcLock } from "react-icons/fc";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const res = await axios.post(
        "http://127.0.0.1:8000/api/auth/login",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.status >= 200 && res.status < 300) {
        toast.success("خوش آمدید");
        const token = res.data.authorisation.original.access_token;
        const refreshToken = res.data.authorisation.original.refresh_token || null;
        const expiresIn = res.data.authorisation.expires_in || 604800; // Default to 1 week if not provided

        // Use tokenManager to store tokens with expiry time
        tokenManager.storeTokens(token, refreshToken, expiresIn);
        localStorage.setItem('user', JSON.stringify(res.data.user));

        dispatch({
          type: "login",
          payload: {
            token: token,
            user: res.data.user
          }
        })
        navigate("/store/home", { replace: true });
      } else {
      }
    } catch (err) {
      toast.error("ایمیل یا رمز عبور نادرست است");
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
            {/* <header className="card-header">
                <h3 className="card-title text-white">
                  <span>ورود به حساب کاربری</span>
                </h3>
              </header> */}
            <div className="w-100 h-100 p-6 min-lg:basis-1/2 flex">
              <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-[95%] h-full p-3">
                <div className="space-y-5 w-full h-full">
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
                      <span>*</span> ایمیل
                    </div>
                    <div className="w-full">
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={255}
                        className="w-full p-3 rounded-full shadow-xs shadow-black/20 hover:shadow-lg bg-white/80 
                        focus:outline-none focus:ring-2 focus:ring-[#009EA4]"
                        type="email"
                        placeholder="ایمیل شما"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 1, delay: 0.5 },
                    }}
                    className="w-full">
                    <div className="form-account-title">
                      <span>*</span> کلمه عبور
                    </div>
                    <div className="form-account-row">
                      <input
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength={6}
                        maxLength={255}
                        className="w-full p-3 rounded-full shadow-xs placeholder-gray-500 shadow-black/20
                         hover:shadow-lg duration-200 backdrop-blur-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#009EA4]"
                        type="password"
                        placeholder=" کلمه عبور شما"
                      />
                    </div>
                  </motion.div>

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
                    className="flex justify-center items-center ">
                    <button
                      style={{ borderRadius: '4rem' }}
                      type="submit"
                      className="d-flex w-full justify-center items-center rounded-xl shadow-sm shadow-zinc-400 bg-white/10
                         p-2 cursor-pointer hover:scale-102 active:scale-95 duration-300 hover:bg-white/60 border-t-white/70 border-t-1"
                    >
                      {isLoading ? (
                        <AiOutlineLoading
                          className="animate-spin"
                          size={20}
                        />
                      ) : (
                        "ورود"
                      )}
                    </button>
                  </motion.div>

                  <div className="grid grid-cols-2 max-sm:grid-cols-1 *:rounded-full *:p-2 gap-2 *:shadow-sm *:bg-white/20
                          *:hover:-translate-y-1 *:cursor-pointer *:duration-300 *:hover:shadow-xl *:border-t *:border-t-white/70">

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
                      className="flex w-full justify-center items-center hover:text-red-500">
                      <Link className="" to="/store/forget-password">
                        فراموشی رمز
                      </Link>
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
                      className="flex w-full justify-center items-center hover:text-sky-800">
                      <Link className="" to="/store/phone-login">
                        ورود با تلفن
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
                      <Link to="/store/register" className="text-lg mx-2 hover:text-blue-600 text-danger ">
                        عضویت
                      </Link>
                    </p>
                  </motion.div>
                </div>
              </form>
            </div>
            <FcLock size={'21rem'} className="max-lg:hidden min-lg:basis-1/2 flex hue-rotate-140 rounded-l-2xl object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Login;
