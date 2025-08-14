import Header from '../structure/Header'
import Footer from '../structure/footer'

function Register() {
  return (
    <div>
        <Header />
            <main className="wrapper default ">
                    <div className="container">
                        <div className="row">
                            <div className="main-content login_content  col-12 col-md-7 col-lg-5 mx-auto ">
                                <header className="card-header">
                                    <h3 className="card-title"><span>ایجاد به حساب کاربری</span></h3>
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
                                                <div className="form-account-title"><span>*</span> شماره تماس</div>
                                                <div className="form-account-row">
                                                    <input className="input_second input_all" type="text" placeholder=" شماره تماس شما"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-account-title"><span>*</span> کلمه عبور</div>
                                                <div className="form-account-row">
                                                    <input className="input_second input_all" type="password" placeholder=" کلمه عبور شما"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-account-title"><span>*</span> تکرار کلمه عبور</div>
                                                <div className="form-account-row">
                                                    <input className="input_second input_all" type="password" placeholder=" تکرار کلمه عبور شما"/>
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
                                                <a href="#" className="btn big_btn btn-main-masai">عضویت  </a>
                                            </div>
                                            <div className="col-12 footer_login_reg text--center">
                                                <p>
                                                    <span>قبلا ثبت نام کرده اید؟</span>
                                                    <a href="login.html">ورود</a>

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
    </div>
  )
}

export default Register