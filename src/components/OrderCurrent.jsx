import React from 'react'
import OrderSideBar from '../structure/OrderSideBar'

function OrderCurrent() {
  return (
    <div>

        <main className="order-delivered default space-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-12 order-2">
                            <div className="row">
                                <div className="col-lg-12">
                                    <header className="card-header">
                                        <h3 className="card-title"><span>سفارشات در جریان</span></h3>
                                    </header>
                                    <div className="content-section default">
                                        <div className="row">
                                             
                                            <div className="col-md-12 col-sm-12 order_delivered_sec">
                                                <div className="profile-recent-fav-row">
                                                    <div className="col-12">
                                                         
                                                            <h4 className="profile-recent-fav-name">
                                                                <i className="fa fa-truck" aria-hidden="true"></i> خروج از انبار
                                                            </h4>
                                                        <ul>
                                                            <li>
                                                                ۲ اردیبهشت ۱۴۰۲
                                                            </li>
                                                            <li>
                                                                کد سفارش <b>2569854</b>
                                                            </li>
                                                            <li>
                                                                تخفیف <b>25،000 تومان</b>
                                                                
                                                            </li>
                                                            <li>
                                                                مجموع سبد <b>585،000 تومان</b>

                                                            </li>
                                                        </ul>
                                                        <h4 className="profile-recent-Club">
                                                            <i className="fa fa-gift" aria-hidden="true"></i> امتیاز مسای‌کلاب <b>15</b>
                                                        </h4>
                                                    </div>
                                                 
                                                    <div className="col-12">
                                                        <div className="row">
                                                           
                                                            <div className="col-4 col-lg-1 col-md-1">
                                                                <img src="src/assets/img/product_img/p_6.jpg"/>
                                                            </div>
                                                            <div className="col-4 col-lg-1 col-md-1">
                                                                <img src="src/assets/img/product_img/p_2.jpg"/>
                                                            </div>
                                                            <div className="col-4 col-lg-1 col-md-1">
                                                                <img src="src/assets/img/product_img/p_7.jpg"/>
                                                            </div>
                                                           
                                                        </div>
                                                       

                                                    </div>



                                                    <div className="col-12 text-left">
                                                        <a className="btn btn-error-masai">لغو سبد</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12 order_delivered_sec">
                                                <div className="profile-recent-fav-row">
                                                    <div className="col-12">

                                                        <h4 className="profile-recent-fav-name">
                                                            <i className="fa fa-spinner" aria-hidden="true"></i> پردازش انبار
                                                        </h4>
                                                        <ul>
                                                            <li>
                                                                15 اردیبهشت ۱۴۰۲
                                                            </li>
                                                            <li>
                                                                کد سفارش <b>2569984</b>
                                                            </li>
                                                            <li>
                                                                تخفیف <b>85،000 تومان</b>

                                                            </li>
                                                            <li>
                                                                مجموع سبد <b>785،000 تومان</b>

                                                            </li>
                                                        </ul>
                                                        <h4 className="profile-recent-Club">
                                                            <i className="fa fa-gift" aria-hidden="true"></i> امتیاز مسای‌کلاب <b>18</b>
                                                        </h4>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-4 col-lg-1 col-md-1">
                                                                <img src="src/assets/img/product_img/p_12.jpg"/>
                                                            </div>
                                                            <div className="col-4 col-lg-1 col-md-1">
                                                                <img src="src/assets/img/product_img/p_23.jpg"/>
                                                            </div>
                                                            <div className="col-4 col-lg-1 col-md-1">
                                                                <img src="src/assets/img/product_img/p_9.jpg"/>
                                                            </div>
                                                           
                                                           

                                                        </div>


                                                    </div>



                                                    <div className="col-12 text-left">
                                                        <a className="btn btn-error-masai">لغو سبد</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <OrderSideBar />
                    </div>
                </div>
            </main>

    </div>
  )
}

export default OrderCurrent