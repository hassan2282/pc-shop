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

        <main className="flex justify-center items-center h-screen w-screen">
            <img src="/src/StorePanel/assets/img/abstract-bg2.jpg" className="fixed w-screen h-screen z-10 bg-cover" />
            <div className="w-screen flex flex-row z-20 h-screen">
                <div className="h-full basis-1/2 z-20 flex justify-center items-center space-y-3">
                    <div className="w-[65%] backdrop-blur-sm p-4 bg-[#eaf6f748] rounded-xl border-t-[#D2F5F9] border-2  shadow-[#93D5DF] shadow-xl">
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="flex flex-col items-center space-y-4">
                                <div className="w-full max-w-sm md:max-w-md">
                                    <div className="form-account-title"><span>*</span> نام کاربری</div>
                                    <div className="form-account-row">
                                        <input
                                            minLength={6}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.username}
                                            required
                                            className="input_second input_all w-full" name="username" type="text" placeholder=" نام کاربری شما" />
                                    </div>
                                </div>
                                <div className="w-full max-w-sm md:max-w-md">
                                    <div className="form-account-title"><span>*</span> ایمیل</div>
                                    <div className={`form-account-row  ${errors.email && 'border-red-500 border-danger border-2 rounded-full animate-pulse'} `}>
                                        <input
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.email}
                                            required
                                            className="input_second input_all w-full" name="email" type="email" placeholder="شماره تماس شما" /></div>
                                </div>
                                <div className="w-full max-w-sm md:max-w-md">
                                    <div className="form-account-title"><span>*</span> کلمه عبور</div>
                                    <div className={`form-account-row  ${errors.frontError && 'border-red-500 border-danger border-2 rounded-full animate-pulse'} `}>
                                        <input
                                            minLength={6}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.password}
                                            className="input_second input_all w-full" name="password" type="password" placeholder=" کلمه عبور شما" />
                                    </div>
                                </div>
                                <div className="w-full max-w-sm md:max-w-md">
                                    <div className="form-account-title"><span>*</span> تکرار کلمه عبور</div>
                                    <div className={`form-account-row  ${errors.frontError && 'border-red-500 border-danger border-2 rounded-full animate-pulse'} `}>
                                        <input
                                            minLength={6}
                                            maxLength={255}
                                            onChange={handleChange}
                                            value={formData.password_confirmation}
                                            required
                                            className="input_second input_all w-full" name="password_confirmation" type="password" placeholder=" تکرار کلمه عبور شما" />
                                    </div>
                                </div>


                                <div className="w-full max-w-sm md:max-w-md">
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree">
                                            تمامی <a href="#">شرایط و قوانین</a> استفاده از سرویس‌های سایت مَسای را به دقت مطالعه کرده و با آنها موافقت کامل دارم
                                        </label>
                                    </div>
                                </div>

                                <div className="flex w-full justify-center items-center mt-4">
                                    <button type="submit" className="btn big_btn btn-main-masai w-full max-w-sm md:max-w-md flex justify-center items-center">
                                        {isLoading ? <AiOutlineLoading className="animate-spin" size={20} /> : 'عضویت'}
                                    </button>
                                </div>
                                <div className="w-full max-w-sm md:max-w-md footer_login_reg text-center">
                                    {(Object.keys(errors).length > 0 || errors.server) && (
                                        <div className="w-full mt-3">
                                            <ul className="list-disc text-right space-y-2">
                                                {errors.frontError && <li className="w-full border-b border-gray-300 rounded-2xl text-white p-2 bg-red-900">{errors.frontError}</li>}
                                                {errors.server && <li className="w-full border-b border-gray-300 rounded-2xl text-white p-2 bg-red-900">{errors.server}</li>}
                                                {errors.username && <li className="w-full border-b border-gray-300 rounded-2xl text-white p-2 bg-red-900">{errors.username}</li>}
                                                {errors.email && <li className="w-full border-b border-gray-300 rounded-2xl text-white p-2 bg-red-900">{errors.email}</li>}
                                                {errors.password && <li className="w-full border-b border-gray-300 rounded-2xl text-white p-2 bg-red-900">{errors.password}</li>}
                                                {errors.password_confirmation && <li className="w-full border-b border-gray-300 rounded-2xl text-white p-2 bg-red-900">{errors.password_confirmation}</li>}
                                            </ul>
                                        </div>
                                    )}

                                    <p>
                                        <span>قبلا ثبت نام کرده اید؟</span>
                                        <Link to="/login" className="text-lg">ورود</Link>
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