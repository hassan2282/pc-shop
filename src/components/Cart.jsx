import React from 'react'
import Header from '../structure/Header'
import Footer from '../structure/footer'

function Cart() {
  return (
    <div>
        <Header />
        <main className="cart-page default space-top-30">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <ul className="order-steps">
                            <li>
                                <a href="cart.html" className="active">
                                    <span>سبدخرید</span>
                                </a>
                            </li>
                            <li>
                                <a href="shopping-payment.html">
                                    <span>پرداخت</span>
                                </a>
                            </li>
                            <li>
                                <a href="successful-payment.html">
                                    <span>اتمام خرید و ارسال</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="cart_content col-xl-12 col-lg-12 col-md-12">
                        <header className="card-header">
                            <h3 className="card-title"><span>سبد خرید شما</span></h3>
                        </header>
                        <div className="table-responsive default">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">محصول</th>
                                        <th scope="col">سبد خرید شما</th>
                                        <th scope="col">قیمت واحد</th>
                                        <th scope="col">تعداد</th>
                                        <th scope="col">قیمت نهایی</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="cart_item">
                                        <td>
                                            <img src="src/assets/img/product_img/p_9.jpg" alt=""/>
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </td>
                                        <td>
                                            <h3 className="cart_title">
                                               <a href="">
                                                   شیائومی مدل Poco X4
                                               </a>
                                            </h3>
                                            <div className="cart_content">
                                                <div><span>بیمه </span><span  className="item_property">پارسیان</span></div>
                                                <span className="cart_divider"></span>
                                                <div><span>رنگ </span><span  className="item_property">مشکی</span></div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="cart_price">
                                                <del><span>1,599,000<span>تومان</span></span></del>
                                                <ins><span>1,180,000<span>تومان</span></span></ins>
                                            </div>
                                        </td>
                                        <td><input type="number" className="tedad" value="1" /></td>
                                        <td className="price_alltd"> ۱۵,۳۹۰,۰۰۰ <span>تومان</span></td>
                                    </tr>
                                    <tr className="cart_item">
                                        <td>
                                            <img src="src/assets/img/product_img/p_6.jpg" />
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </td>
                                        <td>
                                            <h3 className="cart_title">
                                                <a href="">
                                                    ساعت هوشمند امیزفیت 
                                                </a>
                                            </h3>
                                        </td>
                                        <td>
                                            <div className="cart_price">
                                                <del><span>1,599,000<span>تومان</span></span></del>
                                                <ins><span>1,180,000<span>تومان</span></span></ins>
                                            </div>
                                        </td>
                                        <td><input type="number" className="tedad" value="1" /></td>
                                        <td className="price_alltd"> 29,45۰,۰۰۰ <span>تومان</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="cart-page-content col-xl-12 col-lg-12 col-md-12">
                        <div className="row cart_details">
                            
                            <div className="cart-page-content col-xl-8 col-lg-7 col-md-7 ">
                                <input type="text" placeholder="کد تخفیف" className="input_second input_all width-200"/>
                                <a href="#" className="btn btn-main-masai"> اعمال</a>
                                <a href="#" className="btn btn-second-masai">به روز رسانی</a>
                                <div className="text_details">
                                    <p>
                                        ارسال رایگان برای سفارش‌های بالای 1 میلیون و 400 هزار تومان
                                    </p>
                                    <p>
                                        افزودن کالا به سبد خرید به معنی رزرو آن نیست با توجه به محدودیت موجودی سبد خود را ثبت و خرید را تکمیل کنید.
                                    </p>
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
                                            <td colspan="2"><a href="shopping-payment.html" className="btn big_btn btn-main-masai"> گام بعدی</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                   </div>
                      
                    </div>
                    </div>
        
        <Footer />
        </main>
    </div>
  )
}

export default Cart