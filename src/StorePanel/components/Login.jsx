import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

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
          localStorage.setItem('token', token )
          localStorage.setItem('user', JSON.stringify(res.data.user));

        dispatch({
          type: "login",
          payload: {
            token: token,
            user: res.data.user}
        })
        navigate("/", { replace: true });
      } else {
      }
    } catch (err) {
      toast.error("ایمیل یا رمز عبور نادرست است");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <main className="wrapper default">
        <div className="container">
          <div className="row">
            <div className="main-content login_content  col-12 col-md-7 col-lg-5 mx-auto">
              <header className="card-header">
                <h3 className="card-title">
                  <span>ورود به حساب کاربری</span>
                </h3>
              </header>
              <div className="login_box">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
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
                    </div>
                    <div className="col-md-12 col-sm-12">
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
                    </div>

                    <div className="col-6">
                      <div className="form-account-agree">
                        <label className="checkbox-form checkbox-primary">
                          <input type="checkbox" id="agree" />
                          <span className="checkbox-check"></span>
                        </label>
                        <label htmlFor="agree"> مرا به خاطر بسپار</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <a className="faramooshi" href="#">
                        رمز عبور را فراموش کرده اید؟
                      </a>
                    </div>
                    <div className="col-12 text--center">
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
                    </div>
                    <div className="col-12 footer_login_reg text--center">
                      <p>
                        <span>کاربر جدید هستید؟</span>
                        <Link to="/register" className="text-lg">
                          عضویت
                        </Link>
                      </p>
                    </div>
                    <div className="col-12 "></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
