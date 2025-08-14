import React from 'react'
import OrderSideBar from '../structure/OrderSideBar'

function OrderCancelled() {
  return (
    <div>

         <main className="order-delivered default space-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-12 order-2">
                            <div className="row">
                                <div className="col-lg-12">
                                    <header className="card-header">
                                        <h3 className="card-title"><span>سفارشات لغو شده</span></h3>
                                    </header>
                                    <div className="content-section default">
                                        <div className="row">
                                             
                                            <div className="col-md-6 col-sm-12 order_delivered_sec">
                                                <div className="profile-recent-fav-row">
                                                    <div className="col-12">
                                                         
                                                            <h4 className="profile-recent-fav-name">
                                                                <i className="fa fa-times-circle color_cancelled" aria-hidden="true"></i> لغو شده
                                                            </h4>
                                                        <ul>
                                                            <li>
                                                                ۲ اردیبهشت ۱۴۰۲
                                                            </li>
                                                            <li>
                                                                کد سفارش <b>2569854</b>
                                                            </li>
                                                            <li>
                                                                تخفیف <b>0 تومان</b>
                                                                
                                                            </li>
                                                            <li>
                                                                مجموع سبد <b>0 تومان</b>

                                                            </li>
                                                        </ul>
                                                        
                                                    </div>
                                                 
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-4 col-lg-2 col-md-2">
                                                                <img src="src/assets/img/product_img/p_1.jpg"/>
                                                            </div>
                                                         
                                                           
                                                        </div>
                                                       

                                                    </div>



                                                    <div className="col-12 text-left">
                                                        <a className="btn btn-main-masai">مشاهده جزئیات</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 order_delivered_sec">
                                                <div className="profile-recent-fav-row">
                                                    <div className="col-12">

                                                        <h4 className="profile-recent-fav-name">
                                                            <i className="fa fa-times-circle color_cancelled" aria-hidden="true"></i> لغو شده
                                                        </h4>
                                                        <ul>
                                                            <li>
                                                                15 اردیبهشت ۱۴۰۲
                                                            </li>
                                                            <li>
                                                                کد سفارش <b>2569984</b>
                                                            </li>
                                                            <li>
                                                                تخفیف <b>0 تومان</b>

                                                            </li>
                                                            <li>
                                                                مجموع سبد <b>0 تومان</b>

                                                            </li>
                                                        </ul>
                                                      
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-4 col-lg-2 col-md-2">
                                                                <img src="src/assets/img/product_img/p_7.jpg"/>
                                                            </div>
                                                          

                                                        </div>


                                                    </div>



                                                    <div className="col-12 text-left">
                                                        <a className="btn btn-main-masai">مشاهده جزئیات</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 order_delivered_sec">
                                                <div className="profile-recent-fav-row">
                                                    <div className="col-12">

                                                        <h4 className="profile-recent-fav-name">
                                                            <i className="fa fa-times-circle color_cancelled" aria-hidden="true"></i> لغو شده
                                                        </h4>
                                                        <ul>
                                                            <li>
                                                                15 فروردین ۱۴۰۲
                                                            </li>
                                                            <li>
                                                                کد سفارش <b>2569984</b>
                                                            </li>
                                                            <li>
                                                                تخفیف <b>0 تومان</b>

                                                            </li>
                                                            <li>
                                                                مجموع سبد <b>0 تومان</b>

                                                            </li>
                                                        </ul>

                                                    </div>

                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-4 col-lg-2 col-md-2">
                                                                <img src="src/assets/img/product_img/p_9.jpg"/>
                                                            </div>


                                                        </div>


                                                    </div>



                                                    <div className="col-12 text-left">
                                                        <a className="btn btn-main-masai">مشاهده جزئیات</a>
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

export default OrderCancelled