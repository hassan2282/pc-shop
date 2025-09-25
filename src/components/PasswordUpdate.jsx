import React, { useState } from "react";
import OrderSideBar from "../structure/OrderSideBar";
import apiClient from "../apiClient";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";

function PasswordUpdate() {

    const [formData, setFormData] = useState({
        email:'',
        password:'',
        password_confirmation:'',
    });
    const [errors, setErrors] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});

        try{
            if(formData.password !== formData.password_confirmation){
                setErrors((prev) => ({...prev, passConfirmationError: 'رمز عبورهای شما یکسان نیستند'}))
                toast.error('رمز عبورهای شما یکسان نیستند');
                return;   
            };
            const res = await apiClient.post("auth/update-password", formData);
            if(res.status >= 200 && res.status < 300) toast.success('پسورد شما با موفقیت تغییر یافت');
        }catch(err){
            setErrors(err.response.data);
            toast.error(err.response.data.message);
            toast.error('فرآیند تغییر پسورد با شکست مواجه شد');
        }finally{
            setIsLoading(false);
        }
    }
    
  return (
    <div>
      <main className="wrapper default ">
        <div className="container">
          <div className="row flex flex-row" dir="ltr">
            <div className="main-content login_content  col-12 col-md-7 col-lg-5 mx-auto">
              <header className="card-header">
                <h3 className="card-title">
                  <span>بازنشانی کلمه عبور</span>
                </h3>
              </header>
              <div className="login_box">
                <form className="">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-account-title">
                        <span>*</span> ایمیل
                      </div>
                      <div className={`form-account-row  ${errors?.errors?.email && 'border-red-500 border-2 rounded-full animate-pulse'} `}>
                        <input
                          className="input_second input_all"
                          type="email"
                          name="email"
                          onChange={handleChange}
                          required
                          placeholder="ایمیل"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="form-account-title">
                        <span>*</span> کلمه عبور
                      </div>
                      <div className={`form-account-row  ${errors?.passConfirmationError && 'border-red-500 border-2 rounded-full animate-pulse'} `}>
                        <input
                          className="input_second input_all"
                          type="password"
                          name="password"
                          onChange={handleChange}
                          required
                          placeholder="کلمه عبور جدید"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="form-account-title">
                        <span>*</span> تکرار کلمه عبور
                      </div>
                      <div className={`form-account-row  ${errors?.passConfirmationError && 'border-red-500 border-2 rounded-full animate-pulse'} `}>
                        <input
                          className="input_second input_all"
                          type="password"
                          name="password_confirmation"
                          onChange={handleChange}
                          required
                          placeholder=" تکرار کلمه عبور جدید"
                        />
                      </div>
                    </div>

                    <div className="col-12 text--center">
                      <button onClick={handleSubmit} className="btn big_btn btn-main-masai">
                        {isLoading ? <AiOutlineLoading className="animate-spin" size={20}/> : 'بازنشانی کلمه عبور'}
                      </button>
                    </div>
                    <div className="col-12 footer_login_reg text--center">
                      <p>
                        رمز عبور خود را محافظت کرده و از افشای آن به دیگران
                        خودداری کنید، همچنین از استفاده از رمزهای ضعیف و قابل
                        پیش‌بینی جلوگیری کنید
                      </p>
                    </div>
                    <div className="col-12 "></div>
                  </div>
                </form>
              </div>
            </div>
            <OrderSideBar />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PasswordUpdate;
