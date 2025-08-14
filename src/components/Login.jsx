import Footer from "../structure/footer";
import Header from "../structure/Header";

function Login() {
  return (
    <>
        {/* <!--start pc header --> */}
        <Header />
        {/* <!-- end pc header --> */}

        <main className="wrapper default">
            <div className="container">
                <div className="row">
                    <div className="main-content login_content  col-12 col-md-7 col-lg-5 mx-auto">
                        <header className="card-header">
                            <h3 className="card-title"><span>ورود به حساب کاربری</span></h3>
                        </header>
                        <div className="login_box">
                         
                          
                            
                                <form className="">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-account-title"><span>*</span> نام کاربری</div>
                                            <div className="form-account-row">
                                                <input className="input_second input_all" type="text" placeholder=" نام کاربری شما"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-account-title"><span>*</span> کلمه عبور</div>
                                            <div className="form-account-row">
                                                <input className="input_second input_all" type="password" placeholder=" کلمه عبور شما"/>
                                            </div>
                                        </div>



                                        <div className="col-6">
                                            <div className="form-account-agree">
                                                <label className="checkbox-form checkbox-primary">
                                                    <input type="checkbox" id="agree"/>
                                                    <span className="checkbox-check"></span>
                                                </label>
                                                <label htmlFor="agree"> مرا به خاطر بسپار</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <a className="faramooshi" href="#">رمز عبور را فراموش کرده اید؟</a>
                                        </div>
                                        <div className="col-12 text--center">
                                            <a href="#" className="btn big_btn btn-main-masai">ورود  </a>
                                        </div>
                                        <div className="col-12 footer_login_reg text--center">
                                            <p>
                                                <span>کاربر جدید هستید؟</span>
                                                 <a href="register.html" >ثبت نام</a>

                                            </p>

                                        </div>
                                        <div className="col-12 ">

                                        </div>
                                    </div>
                                </form>
                           
                            
                        </div>
                    </div>
                </div>
            </div>


        <Footer />    
            
        </main>
    </>

    )}

    export default Login;