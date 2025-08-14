import React from 'react'

function PasswordUpdate() {
  return (
    <div>

        <main className="wrapper default ">
        <div className="container">
            <div className="row">
                <div className="main-content login_content  col-12 col-md-7 col-lg-5 mx-auto">
                    <header className="card-header">
                        <h3 className="card-title"><span>بازنشانی کلمه عبور</span></h3>
                    </header>
                    <div className="login_box">



                        <form className="">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <div className="form-account-title"><span>*</span> کلمه عبور جدید </div>
                                    <div className="form-account-row">
                                        <input className="input_second input_all" type="text" placeholder="کلمه عبور حداقل باید ۶ کارکتر باشد"/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="form-account-title"><span>*</span> تکرار کلمه عبور</div>
                                    <div className="form-account-row">
                                        <input className="input_second input_all" type="password" placeholder=" تکرار کلمه عبور جدید"/>
                                    </div>
                                </div>




                                <div className="col-12 text--center">
                                    <a href="#" className="btn big_btn btn-main-masai">بازنشانی کلمه عبور  </a>
                                </div>
                                <div className="col-12 footer_login_reg text--center">
                                    <p>
                                        رمز عبور خود را محافظت کرده و از افشای آن به دیگران خودداری کنید، همچنین از استفاده از رمزهای ضعیف و قابل پیش‌بینی جلوگیری کنید.

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

    </main>

    </div>
  )
}

export default PasswordUpdate