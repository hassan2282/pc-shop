function ShoppingPayment() {
  return (
    <div>

        <main className="cart-page default">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <ul className="order-steps">
                            <li>
                                <a href="cart.html"  className="active">
                                    <span>سبدخرید</span>
                                </a>
                            </li>
                            <li  className="active">
                                <a href="shopping-payment.html"  className="active active2">
                                    <span>روش پرداخت</span>
                                </a>
                            </li>
                            <li >
                                <a href="successful-payment.html" >
                                    <span>پایان خرید</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    

                    <div className="cart-page-content col-xl-12 col-lg-12 col-md-12">
                        <header className="card-header">
                            <h3 className="card-title"><span>انتخاب روش پرداخت</span></h3>
                        </header>
                        <div className="row cart_details">
                           
                            <div className="cart-page-content col-xl-8 col-lg-7 col-md-7 ">
                    
                                    <div className="plans">
                                        <label className="plan basic-plan" for="pay1">
                                            <input checked type="radio" name="plan" id="pay1" />
                                            <div className="plan-content">
                                                <img loading="lazy" src="src/assets/img/ico/png-10.png" alt="" />
                                                <div className="plan-details">
                                                    <span>پرداخت اینترنتی</span>
                                                    <p>از طریق کارت های عضو شتاب</p>
                                                </div>
                                            </div>
                                        </label>

                                        <label className="plan complete-plan" for="pay2">
                                            <input type="radio" id="pay2" name="plan" />
                                            <div className="plan-content">
                                                <img loading="lazy" src="src/assets/img/ico/png-11.png" alt="" />
                                                <div className="plan-details">
                                                    <span>پرداخت در محل </span>
                                                    <p>با کارت بانکی</p>
                                                </div>
                                            </div>
                                        </label>

                                        <label className="plan complete-plan" for="pay3">
                                            <input type="radio" id="pay3" name="plan" />
                                            <div className="plan-content">
                                                <img loading="lazy" src="src/assets/img/ico/png-9.png" alt="" />
                                                <div className="plan-details">
                                                    <span>خرید اقساطی </span>
                                                    <p>با استفاده از مسای پی</p>
                                                </div>
                                            </div>
                                        </label>
                                        <label className="plan complete-plan" for="pay4">
                                            <input type="radio" id="pay4" name="plan" />
                                            <div className="plan-content">
                                                <img loading="lazy" src="src/assets/img/ico/png-8.png" alt="" />
                                                <div className="plan-details">
                                                    <span>پرداخت اعتباری </span>
                                                    <p>الان بخر بعدا پرداخت کن</p>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                               
                               
                             
                            </div>
                            <div className="cart-page-aside col-xl-4 col-lg-5 col-md-5 divider_details">
                                <table className="table table_details">
                                    <tbody>
                                        <tr>
                                            <td>قیمت کل سفارش:</td>
                                            <td>5,398,000 <span>تومان</span></td>
                                        </tr>
                                        <tr>
                                            <td>بسته‌بندی و ارسال:</td>
                                            <td>وابسته به نوع ارسال</td>
                                        </tr>
                                        <tr className="all">
                                            <td>قیمت قابل پرداخت:</td>
                                            <td>5,398,000 <span>تومان</span></td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"><a href="successful-payment.html" className="btn big_btn btn-main-masai"> اتصال به درگاه</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </div>
  )
}

export default ShoppingPayment