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
        <div className="w-full h-full flex flex-row z-20">
          <div className="h-full min-md:basis-1/2 z-20 flex justify-center items-center">
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
              className="flex flex-col justify-center items-center overflow-clip min-lg:w-[65%] w-[90%]
               min-h-[70%] max-h-[90%] backdrop-blur-sm 
              p-3 bg-[#eaf6f748] rounded-xl border-t-[#D2F5F9]">
              {/* <header className="card-header">
                <h3 className="card-title">
                  <span>ورود به حساب کاربری</span>
                </h3>
              </header> */}
              <div className="login_box">
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-[95%]">
                  <div className="row min-xl:space-y-5 w-full">
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
                      className="col-md-12 col-sm-12">
                      <div className="form-account-title">
                        <span>*</span> ایمیل
                      </div>
                      <div className="form-account-row">
                        <input
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          maxLength={255}
                          className="input_second input_all"
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
                    className="col-md-12 col-sm-12">
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
                          className="input_second input_all"
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
                    className="min-sm:col-6 flex w-full justify-center items-center">
                      <div className="form-account-agree">
                        <label className="checkbox-form checkbox-primary">
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
                    className="min-sm:col-6 flex w-full justify-center items-center">
                      <a className="faramooshi" href="/store/password-update">
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
                    className="flex w-full justify-center items-center ">
                      <button
                        type="submit"
                        className="btn big_btn btn-main-masai flex justify-center items-center"
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
                    className="col-12 footer_login_reg text--center rounded-xl">
                      <p>
                        <span>کاربر جدید هستید؟</span>
                        <Link to="/store/register" className="text-lg">
                          عضویت
                        </Link>
                      </p>
                    </motion.div>
                    <div className="col-12 "></div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
          <div className="max-sm:basis-0 min-sm:basis-1/2"></div>
        </div>
      </div>
  );
}

export default Login;
