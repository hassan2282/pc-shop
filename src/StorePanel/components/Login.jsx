import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "motion/react"

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
        localStorage.setItem('token', token)
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
      <div className="h-screen w-screen bg-[url(/src/StorePanel/assets/img/abstract-bg2.jpg)] fixed bg-cover z-10">
        <div className="w-full h-full flex flex-row z-20" dir="rtl">
          <div className="h-full min-lg:basis-1/2 w-full z-20 flex justify-center items-center">
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
              className="flex flex-col xl:w-[60%] lg:w-[80%] md:w-[50%] sm:w-[70%] max-sm:w-[90%] h-auto justify-center 
              items-center backdrop-blur-sm shadow-black/20
              p-5 bg-[#eaf6f748] rounded-3xl shadow-xl border-t-[#D2F5F9]">
              {/* <header className="card-header">
                <h3 className="card-title">
                  <span>ورود به حساب کاربری</span>
                </h3>
              </header> */}
              <div className="w-full h-full">
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-[95%] h-full p-4">
                  <div className="space-y-5 w-full h-full">
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 1 },
                        transition: {delay: 0.4}
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
                          className="w-full p-2 h-14 rounded-full shadow-xs shadow-black/20 hover:shadow-lg bg-white/50"
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
                        transition: { duration: 1 },
                        transition: {delay: 0.5}
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
                          className="w-full p-2 h-14 rounded-full shadow-xs shadow-black/20 hover:shadow-lg duration-200 backdrop-blur-md bg-white/50"
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
                        transition: { duration: 1 },
                        transition: {delay: 0.6}
                      }}
                    className="flex w-full justify-center items-center">
                      <div className="">
                        <label className="">
                          <input type="checkbox" id="agree" />
                          <span className="checkbox-check"></span>
                        </label>
                        <label htmlFor="agree"> مرا به خاطر بسپار</label>
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
                        transition: { duration: 1 },
                        transition: {delay: 0.6}
                      }}
                    className="flex w-full justify-center items-center">
                      <a className="" href="/store/password-update">
                        رمز عبور را فراموش کرده اید؟
                      </a>
                    </motion.div>
                    <motion.div 
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 1 },
                        transition: {delay: 0.7}
                      }}
                    className="flex w-[97%] justify-center items-center ">
                      <button
                        type="submit"
                        className="flex w-full relative justify-center items-center rounded-full overflow-clip shadow-sm shadow-black/60
                         p-2 cursor-pointer hover:scale-102 active:scale-95 z-10 group border-dotted border-white border-1"
                      >
                        {isLoading ? (
                          <AiOutlineLoading
                            className="animate-spin"
                            size={20}
                          />
                        ) : (
                          "ورود"
                        )}

                        <span className="absolute w-15 h-15 rotate-45 z-30 backdrop-blur-md bg-blue-500/70
                        -left-12  scale-300 group-hover:translate-x-95 duration-700 max-md:hidden"></span>
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
                        transition: { duration: 1 },
                        transition: {delay: 0.8}
                      }}
                    className="rounded-xl">
                      <p>
                        <span>کاربر جدید هستید؟</span>
                        <Link to="/store/register" className="text-lg">
                          عضویت
                        </Link>
                      </p>
                    </motion.div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  );
}

export default Login;
