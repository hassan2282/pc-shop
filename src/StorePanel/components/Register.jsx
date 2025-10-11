import axios from "axios";
import { useState } from "react"
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "motion/react"


function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    })
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});

        try {
            if (formData.password !== formData.password_confirmation) {
                setErrors(prev => ({ ...prev, frontError: 'رمز عبورهای شما یکسان نیستند' }))
                return;
            }

            const res = await axios.post(
                'http://127.0.0.1:8000/api/auth/register',
                formData,
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            if (res.status >= 200 && res.status < 300) {
                toast.success('کاربر با موفقیت افزوده شد');
                const token = res.data.authorisation.original.access_token;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                dispatch({
                    type: "setUser",
                    payload: {
                        user: res.data.user,
                    }
                })
                navigate("/store/home", { replace: true })
            }

        } catch (err) {
            if (err.response && err.response.data) {
                setErrors(err.response.data);
            } else {
                setErrors({ server: 'خطایی در ارتباط با سرور رخ داد' });
                toast.error('خطا در ارتباط با سرور')
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <img src="/src/StorePanel/assets/img/abstract-bg2.jpg" className="absolute object-cover w-full h-full z-10 top-0" />
            <div className="flex flex-row w-full h-full z-20 justify-center items-center">
                <div className="flex flex-col justify-center items-center h-50">
                    <div className="flex w-full justify-center items-center h-75">
                        <motion.form
                            initial={{
                                opacity: 0,
                                x: 100,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: 0.5 },
                                transition: { duration: 1 },
                            }}
                            onSubmit={handleSubmit} className="flex flex-col justify-center items-center min-sm:w-[50%]
                                                max-sm:w-full bg-[#234c4e]/30 
                                                backdrop-blur-sm border-t shadow-lg shadow-black p-4 md:p-8 rounded-3xl ">
                            <div className="max-sm:flex w-full h-full justify-center items-center grid
                             md:grid-cols-2 min-md:gap-4">
                                <div

                                    className="w-full">
                                    <div className="form-account-title text-white"><span>*</span> نام کاربری</div>
                                    <div className="form-account-row">
                                        <motion.input
                                            initial={{
                                                scale: 1.2,
                                                y: 30,
                                                boxShadow: '5px 5px 100px black',
                                            }}
                                            animate={{
                                                scale: 1,
                                                y: 0,
                                                boxShadow: '5px 5px 5px rgba(70 130 130)',
                                                transition: { delay: 0.4 },
                                                transition: { duration: 1.2 }
                                            }}

                                            minLength={6}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.username}
                                            required
                                            className="input_second input_all w-full rounded-lg border border-gray-300 bg-white/20 backdrop-blur text-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#52b1b6]"
                                            name="username"
                                            type="text"
                                            placeholder=" نام کاربری شما"
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="form-account-title text-white"><span>*</span> ایمیل</div>
                                    <div className={`form-account-row ${errors.email && 'border-red-500 border-2 rounded-lg animate-pulse'} `}>
                                        <motion.input
                                            initial={{
                                                scale: 1.2,
                                                y: 30,
                                                boxShadow: '5px 5px 100px black',
                                            }}
                                            animate={{
                                                scale: 1,
                                                y: 0,
                                                boxShadow: '5px 5px 5px rgba(70 130 130)',
                                                transition: { delay: 0.6 },
                                                transition: { duration: 1.4 }
                                            }}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.email}
                                            required
                                            className="input_second input_all w-full rounded-lg border border-gray-300 bg-white/20 backdrop-blur text-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#52b1b6]"
                                            name="email"
                                            type="email"
                                            placeholder=" ایمیل شما"
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="form-account-title text-white"><span>*</span> کلمه عبور</div>
                                    <div className={`form-account-row ${errors.frontError && 'border-red-500 border-2 rounded-lg animate-pulse'} `}>
                                        <motion.input
                                            initial={{
                                                scale: 1.2,
                                                x: -60,
                                                boxShadow: '5px 5px 100px black',
                                            }}
                                            animate={{
                                                scale: 1,
                                                x: 0,
                                                boxShadow: '5px 5px 5px rgba(70 130 130)',
                                                transition: { delay: 0.8 },
                                                transition: { duration: 1.6 }
                                            }}
                                            minLength={6}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.password}
                                            className="input_second input_all w-full rounded-lg border border-gray-300 bg-white/20 backdrop-blur text-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#52b1b6]"
                                            name="password"
                                            type="password"
                                            placeholder=" کلمه عبور شما"
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="form-account-title text-white"><span>*</span> تکرار کلمه عبور</div>
                                    <div className={`form-account-row ${errors.frontError && 'border-red-500 border-2 rounded-lg animate-pulse'} `}>
                                        <motion.input
                                            initial={{
                                                scale: 1.2,
                                                x: -30,
                                                boxShadow: '5px 5px 100px black',
                                            }}
                                            animate={{
                                                scale: 1,
                                                x: 0,
                                                boxShadow: '5px 5px 5px rgba(70 130 130)',
                                                transition: { delay: 1 },
                                                transition: { duration: 1.8 }
                                            }}
                                            minLength={6}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.password_confirmation}
                                            required
                                            className="input_second input_all w-full rounded-lg border border-gray-300 bg-white/20 backdrop-blur text-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#52b1b6]"
                                            name="password_confirmation"
                                            type="password"
                                            placeholder=" تکرار کلمه عبور شما"
                                        />
                                    </div>
                                </div>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: -30
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 0.6 },
                                        transition: { duration: 0.8 },
                                    }}
                                    className="flex w-full justify-center items-center">
                                    <div className="flex items-center justify-center">
                                        <label className="checkbox-form checkbox-primary flex items-center justify-center">
                                            {/* <input type="checkbox" id="agree" className="" /> */}
                                            {/* <span className="checkbox-check ml-2"></span> */}
                                        </label>
                                        <label htmlFor="agree" className="text-sm text-white">
                                            تمامی <a href="#" className="text-dark underline text-center">شرایط و قوانین</a>  استفاده از سرویس‌های سایت مَسای را به دقت مطالعه کرده و با آنها موافقت کامل دارم و
                                        </label>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 30
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 1.6 },
                                        transition: { duration: 1 },
                                    }}
                                    className="flex flex-col w-full justify-center items-center">
                                    <button type="submit" className="btn big_btn btn-main-masai w-full px-6 
                                        bg-[#52b1b6] hover:bg-[#3d9ca1] text-dark rounded-lg font-bold transition-colors 
                                        duration-300 flex justify-center items-center">
                                        {isLoading ? <AiOutlineLoading className="animate-spin" size={20} /> : 'عضویت'}
                                    </button>
                                    <p className="text-white">
                                        <span>قبلا ثبت نام کرده اید؟</span>
                                        <Link to="/store/login" className="text-lg underline  text-[#52b1b6] hover:text-[#3d9ca1] transition-colors">ورود</Link>
                                    </p>
                                </motion.div>

                                <div className="flex w-full md:col-span-2 justify-center items-center text-dark">
                                    {(Object.keys(errors).length > 0 || errors.server) && (
                                        <div className="w-full mt-3">
                                            <ul className="list-disc text-right space-y-2">
                                                {errors.frontError && <li className="w-full border-b border-gray-300 rounded-lg text-white p-2 bg-red-900/80 backdrop-blur">{errors.frontError}</li>}
                                                {errors.server && <li className="w-full border-b border-gray-300 rounded-lg text-white p-2 bg-red-900/80 backdrop-blur">{errors.server}</li>}
                                                {errors.username && <li className="w-full border-b border-gray-300 rounded-lg text-white p-2 bg-red-900/80 backdrop-blur">{errors.username}</li>}
                                                {errors.email && <li className="w-full border-b border-gray-300 rounded-lg text-white p-2 bg-red-900/80 backdrop-blur">{errors.email}</li>}
                                                {errors.password && <li className="w-full border-b border-gray-300 rounded-lg text-white p-2 bg-red-900/80 backdrop-blur">{errors.password}</li>}
                                                {errors.password_confirmation && <li className="w-full border-b border-gray-300 rounded-lg text-white p-2 bg-red-900/80 backdrop-blur">{errors.password_confirmation}</li>}
                                            </ul>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register