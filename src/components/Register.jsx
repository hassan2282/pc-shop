import axios from "axios";
import { useState } from "react"
import { toast} from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Register() {
const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
})

const [isLoading, setIsLoading] = useState(false);
const [errors, setErrors] = useState({});
const navigate = useNavigate();

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
}

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    
    try{

        if(formData.password !== formData.password_confirmation) {
            setErrors(prev => ({...prev, frontError:'رمز عبورهای شما یکسان نیستند'}))
            return;
        }


        const res = await axios.post(
            'http://127.0.0.1:8000/api/auth/register',
            formData,
            {
                headers: {'Content-Type': 'application/json'}
            }
        )
        if(res.status >= 200 && res.status < 300){
            toast.success('کاربر با موفقیت افزوده شد');
            navigate("/",{replace:true})
        }
        
    }catch (err) {
        if (err.response && err.response.data) {
                setErrors(err.response.data);
                errors.email && toast.error(errors.email[0]);
            } else {
                // General server error
                setErrors({ server: 'خطایی در ارتباط با سرور رخ داد' });
                toast.error('خطا در ارتباط با سرور')
            }
    }finally {
        setIsLoading(false);
    }
}



  return (
    <div>
            <main className="wrapper default ">
                    <div className="container">
                        <div className="row">
                            <div className="main-content login_content  col-12 col-md-7 col-lg-5 mx-auto ">
                                <header className="card-header">
                                    <h3 className="card-title"><span>ایجاد به حساب کاربری</span></h3>
                                </header>
                                <div className="login_box">

                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-account-title"><span>*</span> نام کاربری</div>
                                                <div className="form-account-row">
                                                    <input 
                                                    minLength={6}
                                                    maxLength={255}
                                                    onChange={handleChange}
                                                    value={FormData.username}
                                                    required
                                                     className="input_second input_all" name="username" type="text" placeholder=" نام کاربری شما"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-account-title"><span>*</span> ایمیل</div>
                                                <div className={`form-account-row  ${errors.email && 'border-red-500 border-2 rounded-full animate-pulse'} `}>
                                                    <input 
                                                    maxLength={255}
                                                    onChange={handleChange}
                                                    value={FormData.email}
                                                    required
                                                    className="input_second input_all" name="email" type="email" placeholder="شماره تماس شما"/></div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-account-title"><span>*</span> کلمه عبور</div>
                                                <div className={`form-account-row  ${errors.frontError && 'border-red-500 border-2 rounded-full animate-pulse'} `}>
                                                    <input
                                                    minLength={6}
                                                    maxLength={255}
                                                    onChange={handleChange}
                                                    value={FormData.password}
                                                    className="input_second input_all" name="password" type="password" placeholder=" کلمه عبور شما"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-account-title"><span>*</span> تکرار کلمه عبور</div>
                                                <div className={`form-account-row  ${errors.frontError && 'border-red-500 border-2 rounded-full animate-pulse'} `}>
                                                    <input
                                                    minLength={6}
                                                    maxLength={255}
                                                    onChange={handleChange}
                                                    value={FormData.password_confirmation}
                                                    required
                                                    className="input_second input_all" name="password_confirmation" type="password" placeholder=" تکرار کلمه عبور شما"/>
                                                </div>
                                            </div>


                                            <div className="col-12">
                                                <div className="form-account-agree">
                                                    <label className="checkbox-form checkbox-primary">
                                                        <input type="checkbox" id="agree"/>
                                                        <span className="checkbox-check"></span>
                                                    </label>
                                                    <label for="agree">
                                                        تمامی <a href="#">شرایط و قوانین</a> استفاده از سرویس‌های سایت مَسای را به دقت مطالعه کرده و با آنها موافقت کامل دارم 
                                                    </label>
                                                </div>
                                            </div>
                                        
                                            <div className="col-12 text--center">
                                                <button type="submit" className="btn big_btn btn-main-masai flex justify-center items-center">
                                                    {isLoading ? <AiOutlineLoading className="animate-spin" size={20}/> : 'عضویت'}
                                                </button>
                                            </div>
                                            <div className="col-12 footer_login_reg text--center">
                                            {(Object.keys(errors).length > 0 || errors.server) && (
                                                <div className="col-12 mt-3">
                                                    <div className="w-full">
                                                        <ul className="list-disc ml-5 mt-2 *:w-full w-full *:border-b *:rounded-2xl *:border-b-gray text-right space-y-2 *:text-white *:p-2 *:bg-red-900">
                                                            {errors.frontError && <li>{errors.frontError}</li>}
                                                            {errors.server && <li>{errors.server}</li>}
                                                            {errors.username && <li>{errors.username}</li>}
                                                            {errors.email && <li>{errors.email}</li>}
                                                            {errors.password && <li>{errors.password}</li>}
                                                            {errors.password_confirmation && <li>{errors.password_confirmation}</li>}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}

                                                <p>
                                                    <span>قبلا ثبت نام کرده اید؟</span>
                                                    <a href="login" className="text-lg">ورود</a>
                                                </p>

                                            </div>
                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
            </main>
    </div>
  )
}

export default Register