import { Link } from "react-router-dom";
import OrderSideBar from "../structure/OrderSideBar"
import {useSelector } from "react-redux"

function Profile() {

    const user = useSelector(state => state.user);

  return (

    <>
            <main className="profile-user-page default space-top-30">
                <div className="container">
                    <div className="row">
                        <div className="profile-page col-xl-9 col-lg-8 col-md-12 order-2">
                            <div className="row">
                                <div className="col-lg-12">
                                    <header className="card-header">
                                        <h3 className="card-title"><span>اطلاعات حساب کاربری</span></h3>
                                    </header>
                                    <div className="content-section default">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <p>
                                                    <span className="title">نام  :</span>
                                                    <span>{user ? user.first_name : ' '} 
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <p>
                                                    <span className="title"> نام خانوادگی :</span>
                                                    <span>
                                                        {user ? user.last_name : ' '}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <p>
                                                    <span className="title">پست الکترونیک :</span>
                                                    <span>{user ? user.email : ' '}</span>
                                                </p>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <p>
                                                    <span className="title">شماره تلفن همراه:</span>
                                                    <span>{user ? user.phone : ' '}</span>
                                                </p>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <p>
                                                    <span className="title">کد پستی :</span>
                                                    <span>(نامشخص)</span>
                                                </p>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <p>
                                                    <span className="title">روش بازگرداندن پول من :</span>
                                                    <span>ﺷﻤﺎره ﺷﺒﺎ</span>
                                                </p>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <p>
                                                    <span className="title">شغل :</span>
                                                    <span>توسعه نرم افزار و برنامه نویسی</span>
                                                </p>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <p>
                                                    <span className="title">تاریخ تولد :</span>
                                                    <span>۱۳۷۰/۶/۱۴</span>
                                                </p>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <p>
                                                    <span className="title">کد ملی :</span>
                                                    <span>297865432</span>
                                                </p>
                                            </div>
                                            <div className="col-12 text-center">
                                                <Link to="/edit-profile" className="btn btn-main-masai big_btn">
                                                    ویرایش
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <header className="card-header">
                                        <h3 className="card-title"><span>آدرس</span></h3>
                                    </header>
                                    <div className="content-section default">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p>لطفا آدرس محل سکونت یا محل کار خود را با دقت وارد نمایید</p>
                                            </div>
                                            <div className="col-12 text-center">
                                                <Link to='/order-address' className="btn btn-main-masai big_btn">
                                                    ثبت آدرس جدید
                                                </Link>
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

    </>

  )
}

export default Profile;