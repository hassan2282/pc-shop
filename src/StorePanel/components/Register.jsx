import axios from "axios";
import { useState } from "react"
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

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
                navigate("store/home", { replace: true })
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
        <main className="wrapper default min-h-screen relative">
            <img src="/src/StorePanel/assets/img/abstract-bg2.jpg" className="fixed inset-0 w-full h-full object-cover z-10" />
            <div className="container relative z-20">
                <div className="row flex justify-center items-center min-h-screen p-4">
                    <div className="w-full max-w-4xl flex justify-center items-center">
                        <form onSubmit={handleSubmit} className="flex flex-col min-sm:w-[70%] max-sm:w-full bg-[#234c4e]/30
                         backdrop-blur-sm border shadow-lg shadow-black rounded-xl p-4 md:p-8">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="w-full">
                                    <div className="form-account-title text-dark mb-2"><span>*</span> نام کاربری</div>
                                    <div className="form-account-row">
                                        <input
                                            minLength={6}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.username}
                                            required
                                            className="input_second input_all w-full p-3 rounded-lg border border-gray-300 bg-white/20 backdrop-blur text-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#52b1b6]" 
                                            name="username" 
                                            type="text" 
                                            placeholder=" نام کاربری شما" 
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="form-account-title text-dark mb-2"><span>*</span> ایمیل</div>
                                    <div className={`form-account-row ${errors.email && 'border-red-500 border-2 rounded-lg animate-pulse'} `}>
                                        <input
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.email}
                                            required
                                            className="input_second input_all w-full p-3 rounded-lg border border-gray-300 bg-white/20 backdrop-blur text-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#52b1b6]" 
                                            name="email" 
                                            type="email" 
                                            placeholder=" ایمیل شما" 
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="form-account-title text-dark mb-2"><span>*</span> کلمه عبور</div>
                                    <div className={`form-account-row ${errors.frontError && 'border-red-500 border-2 rounded-lg animate-pulse'} `}>
                                        <input
                                            minLength={6}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.password}
                                            className="input_second input_all w-full p-3 rounded-lg border border-gray-300 bg-white/20 backdrop-blur text-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#52b1b6]" 
                                            name="password" 
                                            type="password" 
                                            placeholder=" کلمه عبور شما" 
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="form-account-title text-dark mb-2"><span>*</span> تکرار کلمه عبور</div>
                                    <div className={`form-account-row ${errors.frontError && 'border-red-500 border-2 rounded-lg animate-pulse'} `}>
                                        <input
                                            minLength={6}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.password_confirmation}
                                            required
                                            className="input_second input_all w-full p-3 rounded-lg border border-gray-300 bg-white/20 backdrop-blur text-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#52b1b6]" 
                                            name="password_confirmation" 
                                            type="password" 
                                            placeholder=" تکرار کلمه عبور شما" 
                                        />
                                    </div>
                                </div>

                                <div className="flex w-full md:col-span-2 mt-4">
                                    <div className="form-account-agree flex items-start">
                                        <label className="checkbox-form checkbox-primary flex items-start">
                                            <input type="checkbox" id="agree" className="mt-1" />
                                            <span className="checkbox-check ml-2"></span>
                                        </label>
                                        <label htmlFor="agree" className="text-sm text-white">
                                            تمامی <a href="#" className="text-dark underline">شرایط و قوانین</a> استفاده از سرویس‌های سایت مَسای را به دقت مطالعه کرده و با آنها موافقت کامل دارم
                                        </label>
                                    </div>
                                </div>

                                <div className="flex w-full md:col-span-2 justify-center items-center mt-4">
                                    <button type="submit" className="btn big_btn btn-main-masai w-full py-3 px-6 bg-[#52b1b6] hover:bg-[#3d9ca1] text-dark rounded-lg font-bold transition-colors duration-300 flex justify-center items-center">
                                        {isLoading ? <AiOutlineLoading className="animate-spin" size={20} /> : 'عضویت'}
                                    </button>
                                </div>
                                
                                <div className="flex w-full md:col-span-2 justify-center items-center text-dark">
                                    {(Object.keys(errors).length > 0 || errors.server) && (
                                        <div className="w-full mt-3">
                                            <ul className="list-disc text-right space-y-2">
                                                {errors.frontError && <li className="w-full border-b border-gray-300 rounded-lg text-dark p-2 bg-red-900/80 backdrop-blur">{errors.frontError}</li>}
                                                {errors.server && <li className="w-full border-b border-gray-300 rounded-lg text-dark p-2 bg-red-900/80 backdrop-blur">{errors.server}</li>}
                                                {errors.username && <li className="w-full border-b border-gray-300 rounded-lg text-dark p-2 bg-red-900/80 backdrop-blur">{errors.username}</li>}
                                                {errors.email && <li className="w-full border-b border-gray-300 rounded-lg text-dark p-2 bg-red-900/80 backdrop-blur">{errors.email}</li>}
                                                {errors.password && <li className="w-full border-b border-gray-300 rounded-lg text-dark p-2 bg-red-900/80 backdrop-blur">{errors.password}</li>}
                                                {errors.password_confirmation && <li className="w-full border-b border-gray-300 rounded-lg text-dark p-2 bg-red-900/80 backdrop-blur">{errors.password_confirmation}</li>}
                                            </ul>
                                        </div>
                                    )}

                                    <p className="mt-4 text-white">
                                        <span>قبلا ثبت نام کرده اید؟</span>
                                        <Link to="/store/login" className="text-lg underline m-2 text-[#52b1b6] hover:text-[#3d9ca1] transition-colors">ورود</Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Register