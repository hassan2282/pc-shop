function ProfileFavorites() {
  return (
    <div>

        <main className="order-delivered default space-top-30">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-12 order-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <header className="card-header">
                                    <h3 className="card-title"><span>محصولات مورد علاقه</span></h3>
                                </header>
                                <div className="content-section default">
                                    <div className="row">

                                        <div className="col-md-6 col-sm-12 order_delivered_sec">
                                            <div className="profile-recent-fav-row">
                                                <div className="col-12 text--center">
                                                    <img src="src/assets/img/product_img/p_1.jpg" className="max_w200"/>
                                                </div>
                                                <div className="col-12">
                                                    <h4 className="profile-recent-fav-name_sec">
                                                        هندزفری بلوتوث انکر
                                                    </h4>

                                                    <h4 className="profile-recent-Club">
                                                        <i className="fa fa-gift" aria-hidden="true"></i> هدیه نقدی <b>75،000 تومان</b>
                                                    </h4>
                                                </div>
                                                <div className="col-6 text-left">
                                                    <a className="btn btn-main-masai"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> افزودن به سبد</a>
                                                </div>
                                                <div className="col-6 text-right">
                                                    <a className="btn btn-second-masai"><i className="fa fa-trash" aria-hidden="true"></i> حذف از لیست</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12 order_delivered_sec">
                                            <div className="profile-recent-fav-row">
                                                <div className="col-12 text--center">
                                                    <img src="src/assets/img/product_img/p_6.jpg" className="max_w200"/>
                                                </div>
                                                <div className="col-12">
                                                    <h4 className="profile-recent-fav-name">
                                                        ساعت هوشمند
                                                    </h4>

                                                    <h4 className="profile-recent-today">
                                                        <i className="fa fa-truck" aria-hidden="true"></i> ارسال  <b>امروز</b>
                                                    </h4>
                                                </div>
                                                <div className="col-6 text-left">
                                                    <a className="btn btn-main-masai"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> افزودن به سبد</a>
                                                </div>
                                                <div className="col-6 text-right">
                                                    <a className="btn btn-second-masai"><i className="fa fa-trash" aria-hidden="true"></i> حذف از لیست</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12 order_delivered_sec">
                                            <div className="profile-recent-fav-row">
                                                <div className="col-12 text--center">
                                                    <img src="src/assets/img/product_img/p_8.jpg" className="max_w200"/>
                                                </div>
                                                <div className="col-12">
                                                    <h4 className="profile-recent-fav-name">
                                                       گوشی اپل 14 پرو مکس
                                                    </h4>

                                                    <h4 className="profile-recent-limit">
                                                        <i className="fa fa-ban" aria-hidden="true"></i> تنها 5 عدد در انبار باقی مانده
                                                    </h4>
                                                </div>
                                                <div className="col-6 text-left">
                                                    <a className="btn btn-main-masai"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> افزودن به سبد</a>
                                                </div>
                                                <div className="col-6 text-right">
                                                    <a className="btn btn-second-masai"><i className="fa fa-trash" aria-hidden="true"></i> حذف از لیست</a>
                                                </div>
                                            </div>
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


                                    <a href="profile-favorites.html" className="dropdown-item active-menu">
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


                                    <a href="profile.html" className="dropdown-item">
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
                                    <a href="profile-favorites.html" className="dropdown-item active">
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
                                    <a href="profile.html" className="dropdown-item">
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

    </div>
  )
}

export default ProfileFavorites