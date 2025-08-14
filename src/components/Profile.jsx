function Profile() {
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
                                                    <span>حسین 
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <p>
                                                    <span className="title"> نام خانوادگی :</span>
                                                    <span>
                                                        رضایی
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <p>
                                                    <span className="title">پست الکترونیک :</span>
                                                    <span>info@Masai.ir</span>
                                                </p>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <p>
                                                    <span className="title">شماره تلفن همراه:</span>
                                                    <span>09111234567</span>
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
                                                <a href="edit-profile.jpg" className="btn btn-main-masai big_btn">
                                                    ویرایش
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <header className="card-header">
                                        <h3 className="card-title"><span>اطلاعات حقوقی</span></h3>
                                    </header>
                                    <div className="content-section default">
                                        <div className="row">
                                        <div className="col-lg-12">
                                            <p>این گزینه برای کسانی است که نیاز به خرید سازمانی (با فاکتور رسمی و گواهی ارزش‌افزوده) دارند.</p>
                                        </div>
                                            <div className="col-12 text-center">
                                                <a href="edit-profile.jpg" className="btn btn-main-masai big_btn">
                                                    ویرایش اطلاعات حقوقی
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div className="profile-page-aside col-xl-3 col-lg-4 col-md-6 center-section order-1">
                            <div className="profile-card-1">
                                {/* <!--image--> */}
                                <div className="img">
                                    <img src="src/assets/img/profile.jpg" />
                                </div>
                                <a className="view-more" href="" data-toggle="modal" data-target="#myModal">
                                    <i className="fa fa-plus-circle"></i>
                                </a>
                                <div className="modal-share modal-width-custom modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                <h4 className="modal-title" id="myModalLabel">تغییر پروفایل</h4>
                                            </div>
                                            <div className="modal-body">
                                                <ul className="profile-avatars default text-center">
                                                    <li>
                                                        <img className="profile-avatars-item" src="src/assets/img/profile/1.png" />
                                                    </li>
                                                    <li>
                                                        <img className="profile-avatars-item" src="src/assets/img/profile/2.png" />
                                                    </li>
                                                    <li>
                                                        <img className="profile-avatars-item" src="src/assets/img/profile/3.png" />
                                                    </li>
                                                    <li>
                                                        <img className="profile-avatars-item" src="src/assets/img/profile/4.png" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--text--> */}
                                <div className="mid-section">
                                    <div className="name">حسین رضایی</div>
                                    <div className="description">
                                        <a href="#" className="btn btn-main-masai">افزایش موجودی</a>
                                        <a href="#" className="btn btn-second-masai">مسای کلاب</a>
                                    </div>
                                    <div className="line"></div>
                                    <div className="stats">
                                        <div className="stat">
                                            2
                                            <div className="subtext">سفارش جاری</div>
                                        </div>
                                        <div className="stat">
                                            68
                                            <div className="subtext">تحویل داده</div>
                                        </div>
                                        <div className="stat">
                                            15
                                            <div className="subtext">مرجوع شده</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="responsive-profile-menu show-md location_me">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-second-masai dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-navicon"></i>
                                        حساب کاربری شما
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right text-right">
                                        <a href="order-delivered.jpg" className="dropdown-item  ">
                                            <i className="fa fa-cart-arrow-down colormain" aria-hidden="true"></i>
                                            تحویل داده شده
                                        </a>
                                        <a href="order-current.jpg" className="dropdown-item ">
                                            <i className="fa fa-cart-arrow-down colormain" aria-hidden="true"></i>   سفارش جاری
                                        </a>
                                        <a href="order-cancelled.html" className="dropdown-item">
                                            <i className="fa fa-times colormain" aria-hidden="true"></i>
                                            لغو شده
                                        </a>
                                        <a href="orders-return.html" className="dropdown-item">
                                            <i className="fa fa-thumbs-down colormain" aria-hidden="true"></i>
                                            مرجوع محصول
                                        </a>

                                        <a href="profile-favorites.html" className="dropdown-item">
                                            <i className="fa fa-bookmark colormain" aria-hidden="true"></i>
                                            لیست های من
                                        </a>

                                        <a href="order-address.html" className="dropdown-item">
                                            <i className="fa fa-map icon-icon colormain" aria-hidden="true"></i>
                                            آدرس ها
                                        </a>

                                        <a href="order-message.html" className="dropdown-item">
                                            <i className="fa fa-bell colormain" aria-hidden="true"></i>
                                            پیغام ها
                                        </a>

                                        <a href="profile.html" className="dropdown-item active-menu">
                                            <i className="fa fa-user-large colormain"></i>
                                            پروفایل
                                        </a>

                                        <a href="edit-profile.jpg" className="dropdown-item">
                                            <i className="fa fa-pencil colormain" aria-hidden="true"></i>
                                            ویرایش اطلاعات
                                        </a>

                                        <a href="password-update.html" className="dropdown-item">
                                            <i className="fa fa-shield colormain" aria-hidden="true"></i>
                                            امنیت و تغییر رمز
                                        </a>

                                    
                                    </div>
                                </div>
                            </div>
                            <div className="profile-menu ">
                                <ul className="profile-menu-items">
                                    <li>
                                        <a href="order-delivered.jpg" className="dropdown-item ">
                                            <i className="fa fa-cart-arrow-down colormain" aria-hidden="true"></i>
                                            تحویل داده شده
                                        </a>
                                    </li>
                                    <li>
                                        <a href="order-current.jpg" className="dropdown-item ">
                                            <i className="fa fa-cart-arrow-down colormain" aria-hidden="true"></i>    سفارش جاری
                                        </a>
                                    </li>
                                    <li>
                                        <a href="order-cancelled.html" className="dropdown-item">
                                            <i className="fa fa-times colormain" aria-hidden="true"></i>
                                            لغو شده
                                        </a>
                                    </li>
                                    <li>
                                        <a href="orders-return.html" className="dropdown-item">
                                            <i className="fa fa-thumbs-down colormain" aria-hidden="true"></i>
                                            مرجوع محصول
                                        </a>
                                    </li>
                                    <li>
                                        <a href="profile-favorites.html" className="dropdown-item">
                                            <i className="fa fa-bookmark colormain" aria-hidden="true"></i>
                                            لیست های من
                                        </a>
                                    </li>
                                    <li>
                                        <a href="order-address.html" className="dropdown-item">
                                            <i className="fa fa-map icon-icon colormain" aria-hidden="true"></i>
                                            آدرس ها
                                        </a>
                                    </li>
                                    <li>
                                        <a href="order-message.html" className="dropdown-item">
                                            <i className="fa fa-bell colormain" aria-hidden="true"></i>
                                            پیغام ها
                                        </a>
                                    </li>
                                    <li>
                                        <a href="profile.html" className="dropdown-item active">
                                            <i className="fa fa-user-large colormain"></i>
                                            پروفایل
                                        </a>
                                    </li>
                                    <li>
                                        <a href="edit-profile.jpg" className="dropdown-item">
                                            <i className="fa fa-pencil colormain" aria-hidden="true"></i>
                                            ویرایش اطلاعات
                                        </a>
                                    </li>
                                    <li>
                                        <a href="password-update.html" className="dropdown-item">
                                            <i className="fa fa-shield colormain" aria-hidden="true"></i>
                                            امنیت و تغییر رمز
                                        </a>
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

    </>

  )
}

export default Profile