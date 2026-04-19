import axios from "axios";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "motion/react"
import apiClient from "../../apiClient";
import { tokenManager } from "../../apiClient";


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

            const res = await apiClient.post(
                '/auth/register',
                formData
            );
            if (res.status >= 200 && res.status < 300) {
                const token = res.data.authorisation.original.access_token;
                const refreshToken = res.data.authorisation.original.refresh_token || null;
                const expiresIn = res.data.authorisation.expires_in || 604800; // Default to 1 week if not provided

                // Use tokenManager to store tokens with expiry time
                tokenManager.storeTokens(token, refreshToken, expiresIn);
                dispatch({
                    type: "setUser",
                    payload: {
                        user: res.data.user,
                    }
                })
                localStorage.setItem('user', JSON.stringify(res.data.user));
                navigate("/store/home", { replace: true })
                toast.success('کاربر با موفقیت افزوده شد');
            }

        } catch (err) {
            setErrors(err.response?.data);
            toast.error(err.response?.data?.message);
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
                                y: 60,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.5, duration: 1 },
                            }}
                            onSubmit={handleSubmit} className="flex flex-col justify-center items-center min-sm:w-[50%]
                                                w-full bg-white/30 border-t border-l border-white/60 
                                                backdrop-blur-xl shadow-lg shadow-black/20 p-4 md:p-8 rounded-3xl ">
                            <div className="w-full h-full justify-center items-center grid
                             min-md:grid-cols-2 min-md:gap-4" dir="rtl">
                                <div

                                    className="w-full">
                                    <div className="text-white"><span>*</span> نام کاربری</div>
                                    <div className="">
                                        <motion.input
                                            initial={{
                                                opacity: 0,
                                                scale: 0.8,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.5, delay: 0.3 },
                                            }}

                                            minLength={6}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.username}
                                            required
                                            className="w-full rounded-full border p-3 border-gray-300 bg-white/90
                                            text-dark placeholder-gray-700 outline-none shadow-xs shadow-black/30 
                                            hover:scale-102 hover:shadow-md duration-300"
                                            name="username"
                                            type="text"
                                            placeholder="نام کاربری"
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className=" text-white"><span>*</span> ایمیل</div>
                                    <div className={` ${errors?.email && 'border-red-500 border-2 rounded-lg animate-pulse'} `}>
                                        <motion.input
                                            initial={{
                                                opacity: 0,
                                                scale: 0.8,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.5, delay: 0.5 },
                                            }}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.email}
                                            required
                                            className="w-full rounded-full border p-3 border-gray-300 bg-white/90
                                             text-dark placeholder-gray-700 outline-none shadow-xs shadow-black/30 hover:scale-102 hover:shadow-md duration-300"
                                            name="email"
                                            type="email"
                                            placeholder=" ایمیل شما"
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="form-account-title text-white"><span>*</span> کلمه عبور</div>
                                    <div className={`form-account-row ${errors?.frontError && 'border-red-500 border-2 rounded-lg animate-pulse'} `}>
                                        <motion.input
                                            initial={{
                                                opacity: 0,
                                                scale: 0.8,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.5, delay: 0.7 },
                                            }}
                                            minLength={6}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.password}
                                            className="w-full rounded-full border p-3 border-gray-300 bg-white/90
                                             text-dark placeholder-gray-700 outline-none shadow-xs shadow-black/30 hover:scale-102 hover:shadow-md duration-300"                                            name="password"
                                            type="password"
                                            placeholder=" کلمه عبور شما"
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className=" text-white"><span>*</span> تکرار کلمه عبور</div>
                                    <div className={` ${errors?.frontError && 'border-red-500 border-2 rounded-lg animate-pulse'} `}>
                                        <motion.input
                                            initial={{
                                                opacity: 0,
                                                scale: 0.8,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.5, delay: 0.9 },
                                            }}
                                            minLength={6}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.password_confirmation}
                                            required
                                            className="w-full rounded-full border p-3 border-gray-300 bg-white/90
                                             text-dark placeholder-gray-700 outline-none shadow-xs shadow-black/40 
                                             hover:scale-102 hover:shadow-md duration-300" name="password_confirmation"
                                            type="password"
                                            placeholder=" تکرار کلمه عبور شما"
                                        />
                                    </div>
                                </div>

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
                                    className="flex w-full justify-center items-center">
                                    <Link className="d-flex w-full justify-center items-center rounded-full shadow-sm shadow-gray-500
                                        p-2 cursor-pointer hover:scale-102 active:scale-95 duration-300 py-[0.65rem] mt-3
                                        border-t-white/60 border-t-1 text-center" to="/store/phone-login">
                                        ورود با تلفن
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
                                        transition: { duration: 0.5, delay: 1.3 },
                                    }}
                                    className="flex flex-col space-y-2 mt-3 w-full justify-center items-center">
                                    <button type="submit" style={{ borderRadius: '3rem' }} className="w-full p-3 bg-stone-700 hover:bg-sky-900 text-white 
                                    shadow-xs hover:shadow-md cursor-pointer
                                     hover:scale-102 shadow-zinc-500 rounded-full duration-300 flex justify-center items-center">
                                        {isLoading ? <AiOutlineLoading className="animate-spin" size={20} /> : 'ثبت نام '}
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
                                        transition: { duration: 0.5, delay: 1.1 },
                                    }}
                                    className="flex w-full justify-center items-center">
                                    <div className="flex items-center justify-center">
                                        <label className="checkbox-form checkbox-primary flex items-center justify-center">
                                        </label>
                                        <label htmlFor="agree" className="text-sm text-white">
                                            تمامی <a href="#" className="text-dark underline text-center">شرایط و قوانین</a>  استفاده از سرویس‌های سایت مَسای را به دقت مطالعه کرده و با آنها موافقت کامل دارم
                                        </label>
                                    </div>
                                </motion.div>
                                <p className="text-white">
                                    <span>قبلا ثبت نام کرده اید؟</span>
                                    <Link to="/store/login" className="text-lg underline mx-2 text-zinc-700 hover:text-[#3d9ca1] transition-colors text-danger mt-2">ورود</Link>
                                </p>

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