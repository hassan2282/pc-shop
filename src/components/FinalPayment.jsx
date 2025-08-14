function FinalPayment() {
  return (
    <div>

        <main className="wrapper default">

        <main className="cart-page default ">
            <div className="container">
                <div className="row">
                    <div className="Final_payment_content col-12 mx-auto">
                        <header className="card-header">
                            <h3 className="card-title"><span>تسویه حساب</span></h3>
                        </header>
                        <div className="account-box Final_payment_page">

                            <div className="account-box-content">
                                <form className="form-account">
                                    <div className="row">
                                        <div className="col-md-8 col-sm-12">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-account-title"><span>*</span> نام</div>
                                                    <div className="form-account-row">
                                                        <input className="input_second input_all" type="text" placeholder=" نام شما"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-account-title"><span>*</span> نام خانوادگی</div>
                                                    <div className="form-account-row">
                                                        <input className="input_second input_all" type="text" placeholder=" نام خانوادگی شما"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12">
                                                    <div className="form-account-title"> نام شرکت (اختیاری)</div>
                                                    <div className="form-account-row">
                                                        <input className="input_second input_all" type="text"
                                                               placeholder=" نام شرکت شما"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-account-title"><span>*</span> شماره تماس</div>
                                                    <div className="form-account-row">
                                                        <input className="input_second input_all" type="text"
                                                               placeholder=" شماره تماس شما"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-account-title"><span>*</span> پست الکترونیک</div>
                                                    <div className="form-account-row">
                                                        <input className="input_second input_all" type="text"
                                                               placeholder=" پست الکترونیک شما"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-account-title">آدرس پستی</div>
                                                    <div className="form-account-row">
                                                        <textarea className="input_second input_all input_textarea text-right" rows="5"
                                                                  placeholder=" شماره موبایل خود را وارد نمایید"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-account-agree">
                                                        <label className="checkbox-form checkbox-primary">
                                                            <input type="checkbox" id="agree"/>
                                                            <span className="checkbox-check"></span>
                                                        </label>
                                                        <label for="agree"> گیرنده خودم هستم</label>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="row">

                                                <table className="table table_details table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>محصول</th>
                                                            <th>قیمت کل</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>شیائومی مدل Poco X4</td>
                                                            <td>5,398,000 <span>تومان</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td> ساعت هوشمند امیزفیت</td>
                                                            <td>5,398,000 <span>تومان</span></td>
                                                        </tr>
                                                        <tr className="all">
                                                            <td>مجموع	</td>
                                                            <td>10,798,000 <span>تومان</span></td>
                                                        </tr>

                                                        <tr>
                                                            <td colspan="2" className="Final_payment_det">

                                                                <div className="col-12 ">
                                                                    <p>
                                                                        <i className="fa fa-circle"></i> بعد از پرداخت مستقیم به شماره حساب شرکت، از قسمت چت آنلاین سایت رسید را برای ما ارسال کرده تا پس از تایید محصول برای شما ارسال گردد.
                                                                        <br />
                                                                        <i className="fa fa-circle"></i> برای حفظ محیط زیست از نسخه الکترونیکی فاکتور در پروفایل خود به جای چاپ کاغذی می توانید استفاده کنید.
                                                                    </p>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2"><a href="#" className="btn big_btn btn-main-masai">ثبت سفارش </a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>


                                            </div>
                                        </div>
                                    </div>



                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>

        </main>

    </div>
  )
}

export default FinalPayment