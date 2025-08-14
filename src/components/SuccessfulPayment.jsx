function SuccessfulPayment() {
  return (
    <div>
        <main className="single-product default">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <ul className="order-steps">
                            <li>
                                <a href="cart.html" className="active">
                                    <span>سبدخرید</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="shopping-payment.html" className="active active2">
                                    <span>روش پرداخت</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="successful-payment.html" className="active active3">
                                    <span>پایان خرید</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <main className="cart default">
                        <div className="container text-center cart_empty">

                            <img src="src/assets/img/successful-cart.png" className="" />
                            <h6>
                               تریک، سفارش با موفقیت دریافت شد 
                               
                            </h6>
                            <p>
                                این اطمینان را به شما میدهیم که بزودی محصول خریداری شده شما را ارسال خواهیم کرد.
                              
                               
                            </p>
                            <p>
                                کد سفارش: <b>2569854</b>
                            </p>
                            <a href="order-current.html" className="btn btn-main-masai">مشاهده وضعیت سفارش</a>

                        </div>
                    </main>

                    </div>
            </div>
        </main>
    </div>
  )
}

export default SuccessfulPayment