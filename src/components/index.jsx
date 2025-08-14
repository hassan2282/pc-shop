function Index() {
  return (
    <>
        <div className="top-section fullscreen-container">
        <img src="src/assets/img/banner_img/bg_top.jpg" className="h-100"/>
    </div>
    {/* <!--start mobile header --> */}
    <nav className="navbar direction-ltr fixed-top header-responsive">
        <div className="container">
            <div className="navbar-translate">

                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navigation" aria-controls="navigation-index" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                </button>
                <div className="search-nav default">
                    <form action="">
                        <input type="text" placeholder="جستجو ..."/>
                        <button type="submit"><img src="src/assets/img/search.png" alt=""/></button>
                    </form>

                    <ul>
                        <li><a href="#"><i className="fa fa-user-large colormain" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-cart-arrow-down colormain" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navigation">
                <div className="logo-nav-res default text-center">
                    <a href="#">
                        <img src="src/assets/img/logo.png"  alt=""/>
                    </a>
                </div>
                <ul className="navbar-nav default">
                    <li className="sub-menu">
                        <a href="#">موبایل</a>
                        <ul>
                            <li className="sub-menu">
                                <a href="#">لوازم جانبی</a>
                                <ul>
                                    <li>
                                        <a href="#">کیف گوشی</a>
                                    </li>
                                    <li>
                                        <a href="#">کاور گوشی</a>
                                    </li>
                                    <li>
                                        <a href="#">شارژر همراه</a>
                                    </li>
                                    <li>
                                        <a href="#">گارد گوشی</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">برند ترین ها</a>
                                <ul>
                                    <li>
                                        <a href="#">اپل</a>
                                    </li>
                                    <li>
                                        <a href="#">سامسونگ</a>
                                    </li>
                                    <li>
                                        <a href="#">هوآوی</a>
                                    </li>
                                    <li>
                                        <a href="#">شیائومی</a>
                                    </li>
                                 
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">سیستم عامل</a>
                                <ul>
                                    <li>
                                        <a href="#">اندروید</a>
                                    </li>
                                    <li>
                                        <a href="#">آی او اس</a>
                                    </li>
                                    <li>
                                        <a href="#">ویندوز</a>
                                    </li>
                                   
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">گوشی براساس قیمت</a>
                                <ul>
                                    <li>
                                        <a href="#">گوشی تا 2 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی تا 5 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی تا 7 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی تا 15 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی بالای 15 میلیون تومان</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="sub-menu">
                                <a href="#">گوشی براساس حافظه داخلی</a>
                                <ul>
                                    <li>
                                        <a href="#">گوشی تا 16 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی تا 32 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی تا 64 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی تا 128 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی تا 256 گیگابایت</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">رزولوشن عکس</a>
                                <ul>
                                    <li>
                                        <a href="#">تا 13 مگاپیکسل</a>
                                    </li>
                                    <li>
                                        <a href="#">تا 16 مگاپیکسل</a>
                                    </li>
                                    <li>
                                        <a href="#">تا 48 مگاپیکسل</a>
                                    </li>
                                    <li>
                                        <a href="#">تا 64 مگاپیکسل</a>
                                    </li>
                                    <li>
                                        <a href="#">تا 128 مگاپیکسل</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#"> گوشی براساس کاربری</a>
                                <ul>
                                    <li>
                                        <a href="#">گوشی اقتصادی</a>
                                    </li>
                                    <li>
                                        <a href="#"> گوشی میان رده</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی دانش آموزی</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی گیمینگ</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی پرچمدار</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="sub-menu">
                        <a href="#">لپ تاپ</a>
                        <ul>
                            <li className="sub-menu">
                                <a href="#">لوازم جانبی</a>
                                <ul>
                                    <li>
                                        <a href="#">کیف لپ تاپ</a>
                                    </li>
                                    <li>
                                        <a href="#">کاور لپ تاپ</a>
                                    </li>
                                    <li>
                                        <a href="#">شارژر لپ تاپ</a>
                                    </li>
                                    <li>
                                        <a href="#">فن لپ تاپ</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">برند ترین ها</a>
                                <ul>
                                    <li>
                                        <a href="#">ایسوس</a>
                                    </li>
                                    <li>
                                        <a href="#">سامسونگ</a>
                                    </li>
                                    <li>
                                        <a href="#">اچ پی</a>
                                    </li>
                                    <li>
                                        <a href="#">اپل</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">سیستم عامل</a>
                                <ul>
                                    <li>
                                        <a href="#">لینوکس</a>
                                    </li>
                                    <li>
                                        <a href="#">آی او اس</a>
                                    </li>
                                    <li>
                                        <a href="#">ویندوز</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">لپ تاپ براساس قیمت</a>
                                <ul>
                                    <li>
                                        <a href="#">لپ تاپ تا 15 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">لپ تاپ تا 25 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">لپ تاپ تا 40 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">لپ تاپ بالای 40 میلیون تومان</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="sub-menu">
                                <a href="#">لپ تاپ براساس حافظه داخلی</a>
                                <ul>
                                    <li>
                                        <a href="#">لپ تاپ تا 16 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">لپ تاپ تا 32 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">لپ تاپ تا 64 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">لپ تاپ تا 128 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">لپ تاپ تا 256 گیگابایت</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">ابعاد صفحه نمایش</a>
                                <ul>
                                    <li>
                                        <a href="#">صفحه نمایش 14 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 16 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 18 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 20 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 22 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 24 اینچ</a>
                                    </li>
                                </ul>
                            </li>
                         
                        </ul>
                    </li>
                    <li className="sub-menu">
                        <a href="#">ساعت هوشمند</a>
                        <ul>
                            <li className="sub-menu">
                                <a href="#">لوازم جانبی</a>
                                <ul>
                                    <li>
                                        <a href="#">کیف ساعت هوشمند</a>
                                    </li>
                                    <li>
                                        <a href="#">کاور ساعت هوشمند</a>
                                    </li>
                                    <li>
                                        <a href="#">شارژر ساعت هوشمند</a>
                                    </li>
                                    <li>
                                        <a href="#">فن ساعت هوشمند</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">برند ترین ها</a>
                                <ul>
                                    <li>
                                        <a href="#">ایسوس</a>
                                    </li>
                                    <li>
                                        <a href="#">سامسونگ</a>
                                    </li>
                                    <li>
                                        <a href="#">اچ پی</a>
                                    </li>
                                    <li>
                                        <a href="#">اپل</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">سیستم عامل</a>
                                <ul>
                                    <li>
                                        <a href="#">لینوکس</a>
                                    </li>
                                    <li>
                                        <a href="#">آی او اس</a>
                                    </li>
                                    <li>
                                        <a href="#">ویندوز</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">ساعت هوشمند براساس قیمت</a>
                                <ul>
                                    <li>
                                        <a href="#">ساعت هوشمند تا 15 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">ساعت هوشمند تا 25 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">ساعت هوشمند تا 40 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">ساعت هوشمند بالای 40 میلیون تومان</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="sub-menu">
                                <a href="#">ساعت هوشمند براساس حافظه داخلی</a>
                                <ul>
                                    <li>
                                        <a href="#">ساعت هوشمند تا 16 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">ساعت هوشمند تا 32 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">ساعت هوشمند تا 64 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">ساعت هوشمند تا 128 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">ساعت هوشمند تا 256 گیگابایت</a>
                                    </li>
                                </ul>
                            </li>
                             

                        </ul>
                    </li>

                    <li className="sub-menu">
                        <a href="#">مودم</a>
                        <ul>
                           
                            <li className="sub-menu">
                                <a href="#">برند ترین ها</a>
                                <ul>
                                    <li>
                                        <a href="#">تی پی لینک</a>
                                    </li>
                                    <li>
                                        <a href="#">دی لینک</a>
                                    </li>
                                    <li>
                                        <a href="#">اچ پی</a>
                                    </li>
                                    <li>
                                        <a href="#">همراه اول</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">فرکانس تحت پوشش</a>
                                <ul>
                                    <li>
                                        <a href="#">1 گیگاهرتز</a>
                                    </li>
                                    <li>
                                        <a href="#">2.5 گیگاهرتز</a>
                                    </li>
                                    <li>
                                        <a href="#">4 گیگاهرتز</a>
                                    </li>
                                    <li>
                                        <a href="#">5.5 گیگاهرتز</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">گوشی براساس قیمت</a>
                                <ul>
                                    <li>
                                        <a href="#">گوشی تا 2 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی تا 5 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی تا 7 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">گوشی تا 15 میلیون تومان</a>
                                    </li>
                                   

                                </ul>
                            </li>

                            <li className="sub-menu">
                                <a href="#">مودم براساس رنگ</a>
                                <ul>
                                    <li>
                                        <a href="#">مودم قرمز</a>
                                    </li>
                                    <li>
                                        <a href="#">مودم قهوه ای</a>
                                    </li>
                                    <li>
                                        <a href="#">مودم آبی</a>
                                    </li>
                                    <li>
                                        <a href="#">مودم مشکی</a>
                                    </li>
                                    <li>
                                        <a href="#">مودم سفید</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">بر اساس برند</a>
                                <ul>
                                    <li >
                                        <a href="#" >مودم همراه اول</a>
                                    </li>
                                    <li >
                                        <a href="#" >مودم ایرانسل</a>
                                    </li>
                                    <li >
                                        <a href="#" >مودم تی پی لینک</a>
                                    </li>
                                    <li >
                                        <a href="#" >مودم دی لینک</a>
                                    </li>
                                    <li >
                                        <a href="#" >مودم یوتل</a>
                                    </li>
                                    <li >
                                        <a href="#" >مودم ایسوس</a>
                                    </li>
                                    <li >
                                        <a href="#" >مودم تندا</a>
                                    </li>
                                    <li >
                                        <a href="#" >مودم سورنا</a>
                                    </li>
                                    <li >
                                        <a href="#" >مودم مسای</a>
                                    </li>
                                    <li >
                                        <a href="#" >مودم ال جی</a>
                                    </li>
                                    <li >
                                        <a href="#" >مودم سامسونگ</a>
                                    </li>


                                </ul>
                            </li>
                             
                        </ul>
                    </li>

                    <li className="sub-menu">
                        <a href="#">تبلت</a>
                        <ul>
                            <li className="sub-menu">
                                <a href="#">لوازم جانبی</a>
                                <ul>
                                    <li>
                                        <a href="#">کیف تبلت</a>
                                    </li>
                                    <li>
                                        <a href="#">کاور تبلت</a>
                                    </li>
                                    <li>
                                        <a href="#">شارژر همراه</a>
                                    </li>
                                    <li>
                                        <a href="#">گارد تبلت</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">برند ترین ها</a>
                                <ul>
                                    <li>
                                        <a href="#">اپل</a>
                                    </li>
                                    <li>
                                        <a href="#">سامسونگ</a>
                                    </li>
                                    <li>
                                        <a href="#">هوآوی</a>
                                    </li>
                                    <li>
                                        <a href="#">شیائومی</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">سیستم عامل</a>
                                <ul>
                                    <li>
                                        <a href="#">اندروید</a>
                                    </li>
                                    <li>
                                        <a href="#">آی او اس</a>
                                    </li>
                                    <li>
                                        <a href="#">ویندوز</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">تبلت براساس قیمت</a>
                                <ul>
                                    <li>
                                        <a href="#">تبلت تا 2 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">تبلت تا 5 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">تبلت تا 7 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">تبلت تا 15 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">تبلت بالای 15 میلیون تومان</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="sub-menu">
                                <a href="#">تبلت براساس حافظه داخلی</a>
                                <ul>
                                    <li>
                                        <a href="#">تبلت تا 16 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">تبلت تا 32 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">تبلت تا 64 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">تبلت تا 128 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">تبلت تا 256 گیگابایت</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">رزولوشن عکس</a>
                                <ul>
                                    <li>
                                        <a href="#">تا 13 مگاپیکسل</a>
                                    </li>
                                    <li>
                                        <a href="#">تا 16 مگاپیکسل</a>
                                    </li>
                                    <li>
                                        <a href="#">تا 48 مگاپیکسل</a>
                                    </li>
                                    <li>
                                        <a href="#">تا 64 مگاپیکسل</a>
                                    </li>
                                    <li>
                                        <a href="#">تا 128 مگاپیکسل</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#"> تبلت براساس کاربری</a>
                                <ul>
                                    <li>
                                        <a href="#">تبلت اقتصادی</a>
                                    </li>
                                    <li>
                                        <a href="#"> تبلت میان رده</a>
                                    </li>
                                    <li>
                                        <a href="#">تبلت دانش آموزی</a>
                                    </li>
                                    <li>
                                        <a href="#">تبلت گیمینگ</a>
                                    </li>
                                    <li>
                                        <a href="#">تبلت پرچمدار</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>


                    <li className="sub-menu">
                        <a href="#">کامپیوتر</a>
                        <ul>
                            <li className="sub-menu">
                                <a href="#">لوازم جانبی</a>
                                <ul>
                                    <li>
                                        <a href="#">کیف کامپیوتر</a>
                                    </li>
                                    <li>
                                        <a href="#">کاور کامپیوتر</a>
                                    </li>
                                    <li>
                                        <a href="#">شارژر کامپیوتر</a>
                                    </li>
                                    <li>
                                        <a href="#">فن کامپیوتر</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">برند ترین ها</a>
                                <ul>
                                    <li>
                                        <a href="#">ایسوس</a>
                                    </li>
                                    <li>
                                        <a href="#">سامسونگ</a>
                                    </li>
                                    <li>
                                        <a href="#">اچ پی</a>
                                    </li>
                                    <li>
                                        <a href="#">اپل</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">سیستم عامل</a>
                                <ul>
                                    <li>
                                        <a href="#">لینوکس</a>
                                    </li>
                                    <li>
                                        <a href="#">آی او اس</a>
                                    </li>
                                    <li>
                                        <a href="#">ویندوز</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">کامپیوتر براساس قیمت</a>
                                <ul>
                                    <li>
                                        <a href="#">کامپیوتر تا 15 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">کامپیوتر تا 25 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">کامپیوتر تا 40 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">کامپیوتر بالای 40 میلیون تومان</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="sub-menu">
                                <a href="#">کامپیوتر براساس حافظه داخلی</a>
                                <ul>
                                    <li>
                                        <a href="#">کامپیوتر تا 16 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">کامپیوتر تا 32 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">کامپیوتر تا 64 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">کامپیوتر تا 128 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">کامپیوتر تا 256 گیگابایت</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">ابعاد صفحه نمایش</a>
                                <ul>
                                    <li>
                                        <a href="#">صفحه نمایش 14 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 16 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 18 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 20 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 22 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 24 اینچ</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </li>



                    <li className="sub-menu">
                        <a href="#">آیپد اپل</a>
                        <ul>
                            <li className="sub-menu">
                                <a href="#">لوازم جانبی</a>
                                <ul>
                                    <li>
                                        <a href="#">کیف آیپد اپل</a>
                                    </li>
                                    <li>
                                        <a href="#">کاور آیپد اپل</a>
                                    </li>
                                    <li>
                                        <a href="#">شارژر آیپد اپل</a>
                                    </li>
                                    <li>
                                        <a href="#">فن آیپد اپل</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">برند ترین ها</a>
                                <ul>
                                    <li>
                                        <a href="#">ایسوس</a>
                                    </li>
                                    <li>
                                        <a href="#">سامسونگ</a>
                                    </li>
                                    <li>
                                        <a href="#">اچ پی</a>
                                    </li>
                                    <li>
                                        <a href="#">اپل</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">سیستم عامل</a>
                                <ul>
                                    <li>
                                        <a href="#">لینوکس</a>
                                    </li>
                                    <li>
                                        <a href="#">آی او اس</a>
                                    </li>
                                    <li>
                                        <a href="#">ویندوز</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">آیپد اپل براساس قیمت</a>
                                <ul>
                                    <li>
                                        <a href="#">آیپد اپل تا 15 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">آیپد اپل تا 25 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">آیپد اپل تا 40 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">آیپد اپل بالای 40 میلیون تومان</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="sub-menu">
                                <a href="#">آیپد اپل براساس حافظه داخلی</a>
                                <ul>
                                    <li>
                                        <a href="#">آیپد اپل تا 16 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">آیپد اپل تا 32 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">آیپد اپل تا 64 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">آیپد اپل تا 128 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">آیپد اپل تا 256 گیگابایت</a>
                                    </li>
                                </ul>
                            </li>


                        </ul>
                    </li>






                    <li className="sub-menu">
                        <a href="#">تلویزیون</a>
                        <ul>
                            <li className="sub-menu">
                                <a href="#">لوازم جانبی</a>
                                <ul>
                                    <li>
                                        <a href="#">کیف تلویزیون</a>
                                    </li>
                                    <li>
                                        <a href="#">کاور تلویزیون</a>
                                    </li>
                                    <li>
                                        <a href="#">شارژر تلویزیون</a>
                                    </li>
                                    <li>
                                        <a href="#">فن تلویزیون</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">برند ترین ها</a>
                                <ul>
                                    <li>
                                        <a href="#">ایسوس</a>
                                    </li>
                                    <li>
                                        <a href="#">سامسونگ</a>
                                    </li>
                                    <li>
                                        <a href="#">اچ پی</a>
                                    </li>
                                    <li>
                                        <a href="#">اپل</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">سیستم عامل</a>
                                <ul>
                                    <li>
                                        <a href="#">لینوکس</a>
                                    </li>
                                    <li>
                                        <a href="#">آی او اس</a>
                                    </li>
                                    <li>
                                        <a href="#">ویندوز</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">تلویزیون براساس قیمت</a>
                                <ul>
                                    <li>
                                        <a href="#">تلویزیون تا 15 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">تلویزیون تا 25 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">تلویزیون تا 40 میلیون تومان</a>
                                    </li>
                                    <li>
                                        <a href="#">تلویزیون بالای 40 میلیون تومان</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="sub-menu">
                                <a href="#">تلویزیون براساس حافظه داخلی</a>
                                <ul>
                                    <li>
                                        <a href="#">تلویزیون تا 16 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">تلویزیون تا 32 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">تلویزیون تا 64 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">تلویزیون تا 128 گیگابایت</a>
                                    </li>
                                    <li>
                                        <a href="#">تلویزیون تا 256 گیگابایت</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-menu">
                                <a href="#">ابعاد صفحه نمایش</a>
                                <ul>
                                    <li>
                                        <a href="#">صفحه نمایش 14 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 16 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 18 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 20 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 22 اینچ</a>
                                    </li>
                                    <li>
                                        <a href="#">صفحه نمایش 24 اینچ</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <a href="#"> دمو محصولات</a>
                    </li>
                    <li>
                        <a href="#">تخفیفات و پیشنهادات</a>
                    </li>
                    <li>
                        <a href="#">مَسای امن</a>
                    </li>
                    <li>
                        <a href="#">مَسای پلاس</a>
                    </li>
                    <li>
                        <a href="#"> مَسای کلاب </a>
                    </li>
                    <li>
                        <a href="#">مَسای پی </a>
                    </li>
                    <li>
                        <a href="#">سوالی دارید؟</a>
                    </li>
                    <li>
                        <a href="#">فروشنده شوید</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    {/* <!-- end mobile header --> */}
    <div className="wrapper default">

        {/* <!--start pc header --> */}
        <header className="Masai-header default">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-5">
                        <div className="logo-area default">
                            <a href="index.html">
                                <img src="src/assets/img/logo.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-5 col-sm-8 col-7">
                        <div className="search-area default">
                            <form action="" className="search">
                                <input type="text" placeholder="جستجو"/>
                                <button type="submit"><img src="src/assets/img/search.png" alt=""/></button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <div className="user_head">
                            <a href="login.html" className="iconhead">

                                <i className="fa fa-user-large font-20" aria-hidden="true"></i>
                            </a>

                        </div>
                        <div className="cart dropdown masai_dropdown">
                            <span className="divider"></span>

                            <a href="#" className="dropdown-toggle iconhead" data-toggle="dropdown" id="navbar_a">
                                <i className="fa fa-cart-arrow-down font-20" aria-hidden="true"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbar_a">

                                
                                <ul className="m_cart-list">
                                    <li className="m_cart_li1">
                                        <a href="single-product.html" className="m_cart-item">
                                            <i className="fa fa-times" aria-hidden="true"></i>

                                         
                                            <div className="m_cart-item-content">
                                                <div className="m_cart-item-image">
                                                    <img src="src/assets/img/product_img/p_6.jpg" />
                                                </div>
                                                <div className="m_cart-item-details">
                                                    <div className="m_cart-item-title">
                                                        ساعت هوشمند امیزفیت 
                                                    </div>
                                                    <div className="m_cart-item-params">
                                                        <div className="m_cart-item-props">
                                                            <span>تعداد : 2</span>
                                                            <span>رنگ: سبز ارتشی</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="m_cart_li2">
                                        <a href="single-product.html" className="m_cart-item">
                                            <i className="fa fa-times" aria-hidden="true"></i>


                                            <div className="m_cart-item-content">
                                                
                                                <div className="m_cart-item-details">
                                                    <div className="m_cart-item-title">
                                                         شیائومی مدل Poco X4
                                                    </div>
                                                    <div className="m_cart-item-params">
                                                        <div className="m_cart-item-props">
                                                            <span>تعداد : 1</span>
                                                            <span>رنگ: مشکی</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="m_cart-item-image">
                                                    <img src="src/assets/img/product_img/p_9.jpg" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="m_cart-header">
                                    <div className="m_cart-total">
                                        <span>مجموع سبد:</span>
                                        <span> ۳۵,۲۵۳,۵۰۰</span>
                                        <span> تومان</span>
                                    </div>
                                </div>
                                <div className="btn_cart">
                                    <a href="cart.html" className="btn btn_sabad">مشاهده سبد</a>
                                    <a href="Final-payment.html" className="btn btn_pardakht btn-main-masai">پرداخت</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <nav className="nav_header">
                <ul className="nav__ullist">
                    <li className="list_style">
                        <i className="fa fa-bars icon-icon" aria-hidden="true"></i><a href="#" className="list__link">دسته بندی کالاها</a>
                        <div className="submeno">
                            <ul className="main_meno-drobdown">
                                <li className="child_mno-drobdown">
                                    <a href="#" className="run">موبایل</a>
                                    <div className="mega_meno">
                                        <ul className="list_drobdown--item">
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#"
                                                   className="list__drobdown--link texr_header block_block">
                                                    همه محصولات موبایل
                                                </a>
                                            </li>
                                            <ul className="ul_list">
                                                <ul className="mega_meno--block">
                                                
                                                  
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">گوشی براساس قیمت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 2 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> گوشی تا 5 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 7 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی بالای 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">گوشی براساس حافظه داخلی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 16 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 32 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 32 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 128 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 256 گیگابایت</a>
                                                    </li>
                                                </ul>
                                            </ul>
                                            <ul className="ul_list--cecond">
                                                <ul className="mega_meno__cecond">
                                                    
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            رزولوشن عکس
                                                        </a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تا ۱۳ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> تا ۱۶ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تا ۴۸ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list_mega ">
                                                        <a href="#" className="mega_link--link ">تا ۶۴ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list_mega ">
                                                        <a href="#" className="mega_link--link ">تا ۱۰۸ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            گوشی براساس کاربری
                                                        </a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی اقتصادی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> گوشی میان رده</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی دانش آموزی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی گیمینگ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی پرچمدار</a>
                                                    </li>
                                                    
                                                </ul>
                                            </ul>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کیف گوشی </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کاور گوشی </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> شارژر همراه</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">گارد گوشی</a>
                                            </li>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">برند ترین ها</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">اپل</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">سامسونگ</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">هوآوی  </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">شیائومی</a>
                                            </li>
                                          
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">سیستم عامل</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> اندروید</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">آی او اس</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">ویندوز</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="child_mno-drobdown">
                                    <a href="#" className="run">لپ تاپ</a>
                                    <div className="mega_meno">
                                        <ul className="list_drobdown--item">
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#"
                                                   className="list__drobdown--link texr_header block_block">
                                                    همه محصولات لپ تاپ
                                                </a>
                                            </li>
                                            <ul className="ul_list">
                                                <ul className="mega_meno--block">


                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">لپ تاپ براساس قیمت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">لپ تاپ تا 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> لپ تاپ تا 25 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">لپ تاپ تا 40 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">لپ تاپ بالای 40 میلیون تومان</a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">لپ تاپ براساس حافظه داخلی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">لپ تاپ تا 120 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">لپ تاپ تا 240 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">لپ تاپ تا 520 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">لپ تاپ تا 1024 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">لپ تاپ بالای 1024 گیگابایت</a>
                                                    </li>
                                                </ul>
                                            </ul>
                                            <ul className="ul_list--cecond">
                                                <ul className="mega_meno__cecond">

                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            ابعاد صفحه نمایش
                                                        </a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 14 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 16 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 18 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 20 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 22 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 24 اینچ</a>
                                                    </li>
                                                

                                                </ul>
                                            </ul>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کیف لپ تاپ </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کاور لپ تاپ </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> شارژر لپ تاپ</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">خنک کنند لپ تاپ</a>
                                            </li>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">برند ترین ها</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">ایسوس</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">سامسونگ</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">اچ پی  </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">اپل</a>
                                            </li>

                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">سیستم عامل</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> لینوکس</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">آی او اس</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">ویندوز</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="child_mno-drobdown">
                                    <a href="#" className="run">ساعت هوشمند</a>
                                    <div className="mega_meno">
                                        <ul className="list_drobdown--item">
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#"
                                                   className="list__drobdown--link texr_header block_block">
                                                    همه محصولات ساعت هوشمند
                                                </a>
                                            </li>
                                            <ul className="ul_list">
                                                <ul className="mega_meno--block">


                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">ساعت هوشمند براساس قیمت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">ساعت هوشمند تا 2 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> ساعت هوشمند تا 5 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">ساعت هوشمند تا 7 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">ساعت هوشمند تا 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">ساعت هوشمند بالای 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">ساعت هوشمند براساس حافظه داخلی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">ساعت هوشمند تا 16 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">ساعت هوشمند تا 32 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">ساعت هوشمند تا 32 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">ساعت هوشمند تا 128 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">ساعت هوشمند تا 256 گیگابایت</a>
                                                    </li>
                                                </ul>
                                            </ul>
                                            <ul className="ul_list--cecond">
                                                <ul className="mega_meno__cecond">

                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                           ساعت هوشمند دخترانه
                                                        </a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            ساعت هوشمند پسرانه
                                                        </a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            ساعت هوشمند هوشمند
                                                        </a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            ساعت هوشمند پرچم دار
                                                        </a>
                                                    </li>
                                                </ul>
                                            </ul>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کیف ساعت هوشمند </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کاور ساعت هوشمند </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> شارژر همراه</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">گارد ساعت هوشمند</a>
                                            </li>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">برند ترین ها</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">اپل</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">سامسونگ</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">هوآوی  </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">شیائومی</a>
                                            </li>

                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">سیستم عامل</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> اندروید</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">آی او اس</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">ویندوز</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="child_mno-drobdown">
                                    <a href="#" className="run">مودم </a>
                                    <div className="mega_meno">
                                        <ul className="list_drobdown--item">
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#"
                                                   className="list__drobdown--link texr_header block_block">
                                                    همه محصولات مودم
                                                </a>
                                            </li>
                                            <ul className="ul_list">
                                                <ul className="mega_meno--block">


                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">مودم براساس قیمت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">مودم تا 2 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> مودم تا 5 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">مودم تا 7 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">مودم تا 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list_drobdown--items border_left--red">
                                                        <a href="#" className="list__drobdown--link texr_header">برند ترین ها</a>
                                                    </li>
                                                    <li className="list_drobdown--items">
                                                        <a href="#" className="list__drobdown--link">تی پی لینک</a>
                                                    </li>
                                                    <li className="list_drobdown--items">
                                                        <a href="#" className="list__drobdown--link">دی لینک</a>
                                                    </li>
                                                    <li className="list_drobdown--items">
                                                        <a href="#" className="list__drobdown--link">اچ پی  </a>
                                                    </li>
                                                    <li className="list_drobdown--items">
                                                        <a href="#" className="list__drobdown--link">همراه اول</a>
                                                    </li>
                                                   
                                                </ul>
                                            </ul>
                                            <ul className="ul_list--cecond">
                                                <ul className="mega_meno__cecond">

                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            فرکانس تحت پوشش
                                                        </a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">1 گیگاهرتز</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">2.5 گیگاهرتز</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">4 گیگاهرتز</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">5.5 گیگاهرتز</a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            مودم براساس رنگ
                                                        </a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">مودم قرمز</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> مودم قهوه ای</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">مودم آبی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> مودم مشکی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">مودم سفید</a>
                                                    </li>
                                                  
                                                </ul>
                                            </ul>
                                            <li className="list_mega border_left">
                                                <a href="#" className="mega_link--link texr_header">مودم براساس برند</a>
                                            </li>
                                            <li className="list__mega--itmes">
                                                <a href="#" className="list__mega--link">مودم همراه اول</a>
                                            </li>
                                            <li className="list__mega--itmes">
                                                <a href="#" className="list__mega--link">مودم ایرانسل</a>
                                            </li>
                                            <li className="list__mega--itmes">
                                                <a href="#" className="list__mega--link">مودم تی پی لینک</a>
                                            </li>
                                            <li className="list__mega--itmes">
                                                <a href="#" className="list__mega--link">مودم دی لینک</a>
                                            </li>
                                            <li className="list__mega--itmes">
                                                <a href="#" className="list__mega--link">مودم یوتل</a>
                                            </li>
                                            <li className="list__mega--itmes">
                                                <a href="#" className="list__mega--link">مودم ایسوس</a>
                                            </li>
                                            <li className="list__mega--itmes">
                                                <a href="#" className="list__mega--link">مودم تندا</a>
                                            </li>
                                            <li className="list__mega--itmes">
                                                <a href="#" className="list__mega--link">مودم سورنا</a>
                                            </li>
                                            <li className="list__mega--itmes">
                                                <a href="#" className="list__mega--link">مودم مسای</a>
                                            </li>
                                            <li className="list__mega--itmes">
                                                <a href="#" className="list__mega--link">مودم ال جی</a>
                                            </li>
                                            <li className="list__mega--itmes">
                                                <a href="#" className="list__mega--link">مودم سامسونگ</a>
                                            </li>
                                          
                                            

                                             
                                        </ul>
                                    </div>
                                </li>
                                <li className="child_mno-drobdown">
                                    <a href="#" className="run">تبلت</a>
                                    <div className="mega_meno">
                                        <ul className="list_drobdown--item">
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#"
                                                   className="list__drobdown--link texr_header block_block">
                                                    همه محصولات تبلت
                                                </a>
                                            </li>
                                            <ul className="ul_list">
                                                <ul className="mega_meno--block">


                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">تبلت براساس قیمت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تبلت تا 2 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> تبلت تا 5 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تبلت تا 7 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تبلت تا 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تبلت بالای 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">تبلت براساس حافظه داخلی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تبلت تا 16 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تبلت تا 32 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تبلت تا 32 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تبلت تا 128 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تبلت تا 256 گیگابایت</a>
                                                    </li>
                                                </ul>
                                            </ul>
                                            <ul className="ul_list--cecond">
                                                <ul className="mega_meno__cecond">

                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            رزولوشن عکس
                                                        </a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تا ۱۳ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> تا ۱۶ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تا ۴۸ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list_mega ">
                                                        <a href="#" className="mega_link--link ">تا ۶۴ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list_mega ">
                                                        <a href="#" className="mega_link--link ">تا ۱۰۸ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            تبلت براساس کاربری
                                                        </a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تبلت اقتصادی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> تبلت میان رده</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تبلت دانش آموزی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تبلت گیمینگ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تبلت پرچمدار</a>
                                                    </li>

                                                </ul>
                                            </ul>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کیف تبلت </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کاور تبلت </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> شارژر همراه</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">گارد تبلت</a>
                                            </li>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">برند ترین ها</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">اپل</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">سامسونگ</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">هوآوی  </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">شیائومی</a>
                                            </li>

                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">سیستم عامل</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> اندروید</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">آی او اس</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">ویندوز</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="child_mno-drobdown">
                                    <a href="#" className="run">کامپیوتر</a>
                                    <div className="mega_meno">
                                        <ul className="list_drobdown--item">
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#"
                                                   className="list__drobdown--link texr_header block_block">
                                                    همه محصولات کامپیوتر
                                                </a>
                                            </li>
                                            <ul className="ul_list">
                                                <ul className="mega_meno--block">


                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">کامپیوتر براساس قیمت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">کامپیوتر تا 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> کامپیوتر تا 25 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">کامپیوتر تا 40 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">کامپیوتر بالای 40 میلیون تومان</a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">کامپیوتر براساس حافظه داخلی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">کامپیوتر تا 120 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">کامپیوتر تا 240 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">کامپیوتر تا 520 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">کامپیوتر تا 1024 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">کامپیوتر بالای 1024 گیگابایت</a>
                                                    </li>
                                                </ul>
                                            </ul>
                                            <ul className="ul_list--cecond">
                                                <ul className="mega_meno__cecond">

                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            ابعاد صفحه نمایش
                                                        </a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 14 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 16 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 18 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 20 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 22 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 24 اینچ</a>
                                                    </li>


                                                </ul>
                                            </ul>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کیف کامپیوتر </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کاور کامپیوتر </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> شارژر کامپیوتر</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">خنک کنند کامپیوتر</a>
                                            </li>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">برند ترین ها</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">ایسوس</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">سامسونگ</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">اچ پی  </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">اپل</a>
                                            </li>

                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">سیستم عامل</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> لینوکس</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">آی او اس</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">ویندوز</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="child_mno-drobdown">
                                    <a href="#" className="run">آیپد اپل</a>
                                    <div className="mega_meno">
                                        <ul className="list_drobdown--item">
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#"
                                                   className="list__drobdown--link texr_header block_block">
                                                    همه محصولات آیپد اپل
                                                </a>
                                            </li>
                                            <ul className="ul_list">
                                                <ul className="mega_meno--block">


                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">آیپد اپل براساس قیمت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">آیپد اپل تا 2 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> آیپد اپل تا 5 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">آیپد اپل تا 7 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">آیپد اپل تا 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">آیپد اپل بالای 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">آیپد اپل براساس حافظه داخلی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">آیپد اپل تا 16 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">آیپد اپل تا 32 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">آیپد اپل تا 32 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">آیپد اپل تا 128 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">آیپد اپل تا 256 گیگابایت</a>
                                                    </li>
                                                </ul>
                                            </ul>
                                            <ul className="ul_list--cecond">
                                                <ul className="mega_meno__cecond">

                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            آیپد اپل دخترانه
                                                        </a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            آیپد اپل پسرانه
                                                        </a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            آیپد اپل هوشمند
                                                        </a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            آیپد اپل پرچم دار
                                                        </a>
                                                    </li>
                                                </ul>
                                            </ul>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کیف آیپد اپل </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کاور آیپد اپل </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> شارژر همراه</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">گارد آیپد اپل</a>
                                            </li>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">برند ترین ها</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">اپل</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">سامسونگ</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">هوآوی  </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">شیائومی</a>
                                            </li>

                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">سیستم عامل</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> اندروید</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">آی او اس</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">ویندوز</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="child_mno-drobdown">
                                    <a href="#" className="run">تلویزیون</a>
                                    <div className="mega_meno">
                                        <ul className="list_drobdown--item">
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#"
                                                   className="list__drobdown--link texr_header block_block">
                                                    همه محصولات تلویزیون
                                                </a>
                                            </li>
                                            <ul className="ul_list">
                                                <ul className="mega_meno--block">


                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">تلویزیون براساس قیمت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تلویزیون تا 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> تلویزیون تا 25 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تلویزیون تا 40 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تلویزیون بالای 40 میلیون تومان</a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">تلویزیون براساس حافظه داخلی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تلویزیون تا 120 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تلویزیون تا 240 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تلویزیون تا 520 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تلویزیون تا 1024 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تلویزیون بالای 1024 گیگابایت</a>
                                                    </li>
                                                </ul>
                                            </ul>
                                            <ul className="ul_list--cecond">
                                                <ul className="mega_meno__cecond">

                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            ابعاد صفحه نمایش
                                                        </a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 14 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 16 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 18 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 20 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 22 اینچ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">صفحه نمایش 24 اینچ</a>
                                                    </li>


                                                </ul>
                                            </ul>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کیف تلویزیون </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کاور تلویزیون </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> شارژر تلویزیون</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">خنک کنند تلویزیون</a>
                                            </li>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">برند ترین ها</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">ایسوس</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">سامسونگ</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">اچ پی  </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">اپل</a>
                                            </li>

                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">سیستم عامل</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> لینوکس</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">آی او اس</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">ویندوز</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                   <li className="child_mno-drobdown">
                                    <a href="#" className="run">هارد و فلش</a>
                                    <div className="mega_meno">
                                        <ul className="list_drobdown--item">
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#"
                                                   className="list__drobdown--link texr_header block_block">
                                                    همه محصولات هارد و فلش
                                                </a>
                                            </li>
                                            <ul className="ul_list">
                                                <ul className="mega_meno--block">
                                                
                                                  
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">گوشی براساس قیمت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 2 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> گوشی تا 5 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 7 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی بالای 15 میلیون تومان</a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">گوشی براساس حافظه داخلی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 16 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 32 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 32 گیگا بایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 128 گیگابایت</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی تا 256 گیگابایت</a>
                                                    </li>
                                                </ul>
                                            </ul>
                                            <ul className="ul_list--cecond">
                                                <ul className="mega_meno__cecond">
                                                    
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            رزولوشن عکس
                                                        </a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تا ۱۳ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> تا ۱۶ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">تا ۴۸ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list_mega ">
                                                        <a href="#" className="mega_link--link ">تا ۶۴ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list_mega ">
                                                        <a href="#" className="mega_link--link ">تا ۱۰۸ مگاپیکسل</a>
                                                    </li>
                                                    <li className="list_mega border_left">
                                                        <a href="#" className="mega_link--link texr_header">
                                                            گوشی براساس کاربری
                                                        </a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی اقتصادی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link"> گوشی میان رده</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی دانش آموزی</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی گیمینگ</a>
                                                    </li>
                                                    <li className="list__mega--itmes">
                                                        <a href="#" className="list__mega--link">گوشی پرچمدار</a>
                                                    </li>
                                                    
                                                </ul>
                                            </ul>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کیف گوشی </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">کاور گوشی </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> شارژر همراه</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">گارد گوشی</a>
                                            </li>
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">برند ترین ها</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">اپل</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">سامسونگ</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">هوآوی  </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">شیائومی</a>
                                            </li>
                                          
                                            <li className="list_drobdown--items border_left--red">
                                                <a href="#" className="list__drobdown--link texr_header">بر اساس نوع</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link"> ssd </a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">sd</a>
                                            </li>
                                            <li className="list_drobdown--items">
                                                <a href="#" className="list__drobdown--link">vd</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="list_style">
                        <i className="fa fa-film icon-icon" aria-hidden="true"></i><a href="#" className="list__link">دمو محصولات</a>
                    </li>
                    <li className="list_style">
                        <i className="fa fa-percent icon-icon" aria-hidden="true"></i><a href="#" className="list__link">
                            تخفیفات و
                            پیشنهادات
                        </a>
                    </li>
                    <li className="list_style">
                        <i className="fa fa-user-secret icon-icon" aria-hidden="true"></i><a href="#" className="list__link">
                            مَسای امن
                        </a>
                    </li>
                    <li className="list_style">
                        <i className="fa fa-plus icon-icon" aria-hidden="true"></i><a href="#" className="list__link">مَسای پلاس</a>
                    </li>
                    <li className="list_style">
                        <i className="fa fa-link icon-icon" aria-hidden="true"></i>
                        <a href="#" className="list__link">مَسای کلاب</a>
                    </li>
                    <li className="list_style">
                        <i className="fa fa-handshake-o icon-icon icon-color-2" aria-hidden="true"></i>
                        <a href="#" className="list__link">مَسای پی</a>
                    </li>
                    <li className="list_style">
                        <a href="#" className="list__link">سوالی دارید؟</a>
                    </li>
                    <li className="list_style">
                        <a href="#" className="list__link">فروشنده شوید</a>
                    </li>
                    <ul className="nav_header-2">
                        <li className="list_style">
                            <i className="fa fa-map icon-icon" aria-hidden="true"></i>
                            <a href="order-address.html" className="list__link">انتخاب موقعیت</a>
                        </li>
                    </ul>
                </ul>
            </nav>
        </header>
        {/* <!-- end pc header --> */}

        <main className="main default space-top-10">
        
            <div className="container-fluid">
                <div className="slider_main owl-carousel owl-theme">
                
                    <div className="item">
                        <a href="category-search.html">
                            <svg xmlns="http://www.w3.org/2000/svg"  className="svg_Masai mb-[-100px] relative z-10 mt-0 mr-[30px] float-right" width="231" height="75" viewBox="0 0 231 75" fill="none" >
                                <path clip-rule="evenodd" d="M0 0C31.5006 0.949537 50.52 17.872 56.1955 26.4544L55.986 25.8011L82.4924 58.631C99.3032 79.4521 131.038 79.4521 147.849 58.6309L174.356 25.8011L174.146 26.4544C179.822 17.872 198.844 0.949537 230.349 0H0Z" fill="#FCFCFC" fill-rule="" className="text-red-500" ></path>
                            </svg>
                            <img src="src/assets/img/banner_img/01/16781944460617.jpg" className="img-fluid imgslider" alt=""/>
                        </a>
                    </div>
                    <div className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="svg_Masai mb-[-100px] relative z-10 mt-0 mr-[30px] float-right" width="231" height="75" viewBox="0 0 231 75" fill="none">
                            <path clip-rule="evenodd" d="M0 0C31.5006 0.949537 50.52 17.872 56.1955 26.4544L55.986 25.8011L82.4924 58.631C99.3032 79.4521 131.038 79.4521 147.849 58.6309L174.356 25.8011L174.146 26.4544C179.822 17.872 198.844 0.949537 230.349 0H0Z" fill="#FCFCFC" fill-rule="" className="text-red-500" ></path>
                        </svg>
                        <a href="category-search.html">
                            <img src="src/assets/img/banner_img/01/16785213091818.jpg" className="img-fluid imgslider" alt=""/>
                        </a>
                    </div>
                    <div className="item">
                        <svg xmlns="http://www.w3.org/2000/svg"  className="svg_Masai mb-[-100px] relative z-10 mt-0 mr-[30px] float-right" width="231" height="75" viewBox="0 0 231 75" fill="none">
                            <path clip-rule="evenodd" d="M0 0C31.5006 0.949537 50.52 17.872 56.1955 26.4544L55.986 25.8011L82.4924 58.631C99.3032 79.4521 131.038 79.4521 147.849 58.6309L174.356 25.8011L174.146 26.4544C179.822 17.872 198.844 0.949537 230.349 0H0Z" fill="#FCFCFC" fill-rule="" className="text-red-500" ></path>
                        </svg>
                        <a href="category-search.html">
                            <img src="src/assets/img/banner_img/01/16789575390919.jpg" className="img-fluid imgslider" alt=""/>
                        </a>
                    </div>
                </div>
                
                    
                     
            </div>
            <div className="container space-top-50 ">
                <div className="row space-bottom-30">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className=" col-3  contact-miniicon  text-center">
                                <div className="space-5">
                                    <img src="src/assets/img/Masai/minilogo/1.png" className="minilogo_w"/>
                                    <b className="title-3 light-black">مَسای مارکت</b>
                                </div>
                            </div>
                            <div className="col-3  contact-miniicon  text-center">
                                <div className="space-5">
                                    <img src="src/assets/img/Masai/minilogo/2.png" className="minilogo_w"/>
                                    <b className="title-3 light-black">حراج مَسای</b>
                                </div>
                            </div>
                            <div className="col-3  contact-miniicon  text-center">
                                <div className="space-5">
                                    <img src="src/assets/img/Masai/minilogo/3.png" className="minilogo_w"/>
                                    <b className="title-3 light-black">خرید اقساطی</b>
                                </div>
                            </div>

                            <div className=" col-3  contact-miniicon  text-center">
                                <div className="space-5">
                                    <img src="src/assets/img/Masai/minilogo/4.png" className="minilogo_w"/>
                                    <b className="title-3 light-black">مَسای سرویس</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">

                            <div className="col-3   contact-miniicon  text-center">
                                <div className="space-5">
                                    <img src="src/assets/img/Masai/minilogo/5.png" className="minilogo_w"/>
                                    <b className="title-3 light-black">ماه رمضان</b>
                                </div>
                            </div>
                            <div className="col-3  contact-miniicon  text-center">
                                <div className="space-5">
                                    <img src="src/assets/img/Masai/minilogo/6.png" className="minilogo_w"/>
                                    <b className="title-3 light-black">مَسای پلاس</b>
                                </div>
                            </div>
                            <div className="col-3  contact-miniicon  text-center">
                                <div className="space-5">
                                    <img src="src/assets/img/Masai/minilogo/7.png" className="minilogo_w"/>
                                    <b className="title-3 light-black">هدیه خرید</b>
                                </div>
                            </div>
                            <div className="col-3  contact-miniicon  text-center">
                                <div className="space-5">
                                    <img src="src/assets/img/Masai/minilogo/8.png" className="minilogo_w"/>
                                    <b className="title-3 light-black">بیشتر</b>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="row">



                    <div className="col-9 hidden-xs hidden-md">
                        <section id="offercarousel" className="carousel slide carousel-fade card border_all" data-ride="carousel">
                            <div className="row m-0">

                                <div className="carousel-inner p-0 col-12 col-lg-12">
                                    <ol className="carousel-indicators pr-0 d-flex flex-column ">
                                        <li className="active" data-target="#offercarousel" data-slide-to="0">

                                        </li>
                                        <li data-target="#offercarousel" data-slide-to="1" className="">

                                        </li>
                                        <li data-target="#offercarousel" data-slide-to="2" className="">

                                        </li>
                                        <li data-target="#offercarousel" data-slide-to="3" className="">

                                        </li>
                                        <li data-target="#offercarousel" data-slide-to="4" className="">

                                        </li>
                                        <li data-target="#offercarousel" data-slide-to="5" className="">

                                        </li>
                                        <li data-target="#offercarousel" data-slide-to="6">

                                        </li>
                                        <li data-target="#offercarousel" data-slide-to="7">

                                        </li>
                                        <li data-target="#offercarousel" data-slide-to="8">

                                        </li>

                                    </ol>
                                    <div className="carousel-item active">
                                        <div className="row m-0">
                                            <div className="right-col col-5 d-flex imgboxofer">
                                                <a className="w-100 text-center" href="single-product.html">
                                                    <img src="src/assets/img/product_img/p_1.jpg" className="img-fluid" alt=""/>
                                                    <span className="discount-percent">7 % تخفیف</span>

                                                </a>
                                            </div>
                                            <div className="left-col col-7">
                                               
                                                <h2 className="product-title ">
                                                    <a href="#">  هندزفری بلوتوث انکر   </a>

                                                </h2>
                                                <hr className="hr-text" data-content="Soundcore Life A1 -مدل A3927"/>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">رنگ: مشکی</li>
                                                            <li className="list-group-item">بلوتوث:دارد</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">قابلیت‌های مقاومتی : مقاوم در برابر آب</li>
                                                            <li className="list-group-item"> نوع گوشی : دو گوشی</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            
                                                <div className="price space-15">
                                                    <del><span>1,599,000<span>تومان</span></span></del>
                                                    <ins><span>1,180,000<span>تومان</span></span></ins>
                                                </div>
                                                
                                                <div className="row space-15">
                                                    <div className="col-5 timer-title">


                                                        <h5>یه ثانیه هم غنیمته</h5>
                                                        <p>زمان باقی مانده </p>

                                                    </div>
                                                    <div className="col-7">
                                                        <div className="countdown-timer" countdown data-date="11 12 2023 20:20:22">
                                                            <ul className="text_countdown">
                                                                <li data-days className="number_countdown">0</li>
                                                                <li>روز</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-hours className="number_countdown">0</li>
                                                                <li>ساعت</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-minutes className="number_countdown">0</li>
                                                                <li>دقیقه</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-seconds className="number_countdown">0</li>
                                                                <li>ثانیه</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                               
                                            
                                             
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row m-0">
                                            <div className="right-col col-5 d-flex imgboxofer">
                                                <a className="w-100 text-center" href="single-product.html">
                                                    <img src="src/assets/img/product_img/p_3.jpg" className="img-fluid" alt=""/>
                                                    <span className="discount-percent">4 % تخفیف</span>

                                                </a>
                                            </div>
                                            <div className="left-col col-7">

                                                <h2 className="product-title ">
                                                    <a href="#"> هدفون گیمینگ انکر مدل  </a>

                                                </h2>
                                                <hr className="hr-text" data-content="انکر مدل Soundcore Strike 1"/>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">رنگ: مشکی قرمز</li>
                                                            <li className="list-group-item">رابط‌ها : جک 3.5 میلی‌متری صدا</li>
                                                            <li className="list-group-item"> نوع اتصال: باسیم</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">وزن: ۷۰۰ گرم</li>
                                                            <li className="list-group-item"> نوع گوشی : دو گوشی</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="price space-15">
                                                    <del><span>799,000<span>تومان</span></span></del>
                                                    <ins><span>580,000<span>تومان</span></span></ins>
                                                </div>

                                                <div className="row space-15">
                                                    <div className="col-5 timer-title">


                                                        <h5>یه ثانیه هم غنیمته</h5>
                                                        <p>زمان باقی مانده </p>

                                                    </div>
                                                    <div className="col-7">
                                                        <div className="countdown-timer" countdown data-date="09 12 2023 20:20:22">
                                                            <ul className="text_countdown">
                                                                <li data-days className="number_countdown">0</li>
                                                                <li>روز</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-hours className="number_countdown">0</li>
                                                                <li>ساعت</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-minutes className="number_countdown">0</li>
                                                                <li>دقیقه</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-seconds className="number_countdown">0</li>
                                                                <li>ثانیه</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>





                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row m-0">
                                            <div className="right-col col-5 d-flex imgboxofer">
                                                <a className="w-100 text-center" href="single-product.html">
                                                    <img src="src/assets/img/product_img/p_5.jpg" className="img-fluid" alt=""/>
                                                    <span className="discount-percent">11 % تخفیف</span>

                                                </a>
                                            </div>
                                            <div className="left-col col-7">

                                                <h2 className="product-title ">
                                                    <a href="#"> ساعت هوشمند امیزفیت  </a>

                                                </h2>
                                                <hr className="hr-text" data-content="ساعت هوشمند امیزفیت مدل Bip"/>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">نوع کاربری : رسمی، روزمره </li>
                                                            <li className="list-group-item"> فرم صفحه : مستطیل</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">رنگ: مشکی</li>
                                                            <li className="list-group-item">جنس بند :سیلیکون</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="price space-15">
                                                    <del><span>7,499,000<span>تومان</span></span></del>
                                                    <ins><span>5,380,000<span>تومان</span></span></ins>
                                                </div>

                                                <div className="row space-15">
                                                    <div className="col-5 timer-title">


                                                        <h5>یه ثانیه هم غنیمته</h5>
                                                        <p>زمان باقی مانده </p>

                                                    </div>
                                                    <div className="col-7">
                                                        <div className="countdown-timer" countdown data-date="08 12 2023 20:20:22">
                                                            <ul className="text_countdown">
                                                                <li data-days className="number_countdown">0</li>
                                                                <li>روز</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-hours className="number_countdown">0</li>
                                                                <li>ساعت</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-minutes className="number_countdown">0</li>
                                                                <li>دقیقه</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-seconds className="number_countdown">0</li>
                                                                <li>ثانیه</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>





                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item  finished">
                                        <div className="row m-0">
                                            <div className="right-col col-5 d-flex imgboxofer">
                                                <a className="w-100 text-center" href="single-product.html">
                                                    <img src="src/assets/img/product_img/p_7.jpg" className="img-fluid" alt=""/>
                                                    <img src="src/assets/img/sell.png" className="imgfinish"/>

                                                    <span className="discount-percent">5 % تخفیف</span>

                                                </a>
                                            </div>
                                            <div className="left-col col-7">

                                                <h2 className="product-title ">
                                                    <a href="#">کاملترین گوشی اپل  </a>

                                                </h2>
                                                <hr className="hr-text" data-content="  اپل مدل Iphone 13 Pro Max "/>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item"> صفحه‌نمایش : Super Retina XDR OLED</li>
                                                            <li className="list-group-item">رزولوشن عکس : 12 مگاپیکسل</li>
                                                            <li className="list-group-item">نسخه سیستم عامل : iOS 15</li>

                                                        </ul>
                                                    </div>
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">اندازه : 6.7</li>
                                                            <li className="list-group-item">وزن : ۲۴۰ گرم</li>
                                                            <li className="list-group-item">تعداد سیم کارت: دو عدد</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="price space-15">
                                                    <del><span>50,209,000<span>تومان</span></span></del>
                                                    <ins><span>48,100,000<span>تومان</span></span></ins>
                                                </div>

                                               





                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item  finished">
                                        <div className="row m-0">
                                            <div className="right-col col-5 d-flex imgboxofer">
                                                <a className="w-100 text-center" href="single-product.html">
                                                    <img src="src/assets/img/product_img/p_9.jpg" className="img-fluid" alt=""/>
                                                    <span className="discount-percent">7 % تخفیف</span>

                                                </a>
                                            </div>
                                            <div className="left-col col-7">

                                                <h2 className="product-title ">
                                                    <a href="#">  شیائومی مدل Poco X4 Pro  </a>

                                                </h2>
                                                <hr className="hr-text" data-content=" مدل Poco X4 Pro 5G 2201116PG"/>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">رنگ: مشکی</li>
                                                            <li className="list-group-item"> صفحه‌نمایش : Super AMOLED</li>
                                                            <li className="list-group-item">نسخه سیستم عامل : Android 11</li>

                                                        </ul>
                                                    </div>
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">اندازه : 6.67</li>
                                                            <li className="list-group-item">رزولوشن عکس : 108 مگاپیکسل</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="price space-15">
                                                    <del><span>13,299,000<span>تومان</span></span></del>
                                                    <ins><span>11,180,000<span>تومان</span></span></ins>
                                                </div>

                                                <div className="row space-15">
                                                    <div className="col-5 timer-title">


                                                        <h5>یه ثانیه هم غنیمته</h5>
                                                        <p>زمان باقی مانده </p>

                                                    </div>
                                                    <div className="col-7">
                                                        <div className="countdown-timer" countdown data-date="08 12 2023 20:20:22">
                                                            <ul className="text_countdown">
                                                                <li data-days className="number_countdown">0</li>
                                                                <li>روز</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-hours className="number_countdown">0</li>
                                                                <li>ساعت</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-minutes className="number_countdown">0</li>
                                                                <li>دقیقه</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-seconds className="number_countdown">0</li>
                                                                <li>ثانیه</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>





                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row m-0">
                                            <div className="right-col col-5 d-flex imgboxofer">
                                                <a className="w-100 text-center" href="single-product.html">
                                                    <img src="src/assets/img/product_img/p_11.jpg" className="img-fluid" alt=""/>
                                                    <span className="discount-percent">9 % تخفیف</span>

                                                </a>
                                            </div>
                                            <div className="left-col col-7">

                                                <h2 className="product-title ">
                                                    <a href="#">  کنسول خانگی سونی   </a>
                                                    
                                                </h2>
                                                <hr className="hr-text" data-content="کنسول بازی  Playstation 5 "/>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">ابعاد: ۲۶۰x۱۰۴x۳۹۰ سانتی‌متر</li>
                                                            <li className="list-group-item">انواع حافظه: هارد دیسک</li>
                                                            <li className="list-group-item">تعداد دسته: یک عدد</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">امکانات ظاهری: دسته بی سیم</li>
                                                            <li className="list-group-item">865 گیگابایت</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="price space-15">
                                                    <del><span>32,299,000<span>تومان</span></span></del>
                                                    <ins><span>29,180,000<span>تومان</span></span></ins>
                                                </div>

                                                <div className="row space-15">
                                                    <div className="col-5 timer-title">


                                                        <h5>یه ثانیه هم غنیمته</h5>
                                                        <p>زمان باقی مانده </p>

                                                    </div>
                                                    <div className="col-7">
                                                        <div className="countdown-timer" countdown data-date="09 15 2023 20:20:22">
                                                            <ul className="text_countdown">
                                                                <li data-days className="number_countdown">0</li>
                                                                <li>روز</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-hours className="number_countdown">0</li>
                                                                <li>ساعت</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-minutes className="number_countdown">0</li>
                                                                <li>دقیقه</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-seconds className="number_countdown">0</li>
                                                                <li>ثانیه</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>





                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item  finished">
                                        <div className="row m-0">
                                            <div className="right-col col-5 d-flex imgboxofer">
                                                <a className="w-100 text-center" href="single-product.html">
                                                    <img src="src/assets/img/product_img/p_3.jpg" className="img-fluid" alt=""/>
                                                    <span className="discount-percent">4 % تخفیف</span>

                                                </a>
                                            </div>
                                            <div className="left-col col-7">

                                                <h2 className="product-title ">
                                                    <a href="#">  هدفون مخصوص بازی تی دگر  </a>

                                                </h2>
                                                <hr className="hr-text" data-content="مدل Caspian T-RGH211"/>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">رنگ: مشکی</li>
                                                            <li className="list-group-item">نوع گوشی: دو گوشی</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">وزن: ۴۰۰ گرم</li>
                                                            <li className="list-group-item">نوع اتصال: با سیم</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="price space-15">
                                                    <del><span>999,000<span>تومان</span></span></del>
                                                    <ins><span>780,000<span>تومان</span></span></ins>
                                                </div>

                                                <div className="row space-15">
                                                    <div className="col-5 timer-title">


                                                        <h5>یه ثانیه هم غنیمته</h5>
                                                        <p>زمان باقی مانده </p>

                                                    </div>
                                                    <div className="col-7">
                                                        <div className="countdown-timer" countdown data-date="08 19 2023 20:20:22">
                                                            <ul className="text_countdown">
                                                                <li data-days className="number_countdown">0</li>
                                                                <li>روز</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-hours className="number_countdown">0</li>
                                                                <li>ساعت</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-minutes className="number_countdown">0</li>
                                                                <li>دقیقه</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-seconds className="number_countdown">0</li>
                                                                <li>ثانیه</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>





                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row m-0">
                                            <div className="right-col col-5 d-flex imgboxofer">
                                                <a className="w-100 text-center finished" href="single-product.html">
                                                    <img src="src/assets/img/product_img/p_15.jpg" className="img-fluid " alt=""/>
                                                    <img src="src/assets/img/sell.png" className="imgfinish"/>
                                                    <span className="discount-percent">3 % تخفیف</span>

                                                </a>
                                            </div>
                                            <div className="left-col col-7">

                                                <h2 className="product-title ">
                                                    <a href="#">  گوشی موبایل سامسونگ گلکسی A32  </a>

                                                </h2>
                                                <hr className="hr-text" data-content="سامسونگ مدل Galaxy A32 SM-A325F/DS "/>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">فناوری صفحه‌نمایش : Super AMOLED</li>
                                                            <li className="list-group-item">اندازه : 6.4</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">رزولوشن عکس : 64 مگاپیکسل</li>
                                                            <li className="list-group-item">نسخه سیستم عامل : Android 11</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="price space-15">
                                                    <del><span>13,299,000<span>تومان</span></span></del>
                                                    <ins><span>12,180,000<span>تومان</span></span></ins>
                                                </div>

                                                 





                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row m-0">
                                            <div className="right-col col-5 d-flex imgboxofer">
                                                <a className="w-100 text-center" href="single-product.html">
                                                    <img src="src/assets/img/product_img/p_17.jpg" className="img-fluid" alt=""/>
                                                    <span className="discount-percent">3 % تخفیف</span>

                                                </a>
                                            </div>
                                            <div className="left-col col-7">

                                                <h2 className="product-title ">
                                                    <a href="#"> گوشی موبایل سامسونگ گلکسی A23  </a>

                                                </h2>
                                                <hr className="hr-text" data-content="مدل Galaxy A23 SM-A235 "/>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">فناوری صفحه‌نمایش : PLS IPS</li>
                                                            <li className="list-group-item">اندازه : 6.6</li>
                                                            <li className="list-group-item">اقلام همراه : دفترچه‌ راهنما، شارژر</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-6">
                                                        <ul className="list-group space-15">
                                                            <li className="list-group-item">رزولوشن عکس : 50 مگاپیکسل</li>
                                                            <li className="list-group-item">نسخه سیستم عامل : Android 12</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="price space-15">
                                                    <del><span>18,299,000<span>تومان</span></span></del>
                                                    <ins><span>17,180,000<span>تومان</span></span></ins>
                                                </div>

                                                <div className="row space-15">
                                                    <div className="col-5 timer-title">


                                                        <h5>یه ثانیه هم غنیمته</h5>
                                                        <p>زمان باقی مانده </p>

                                                    </div>
                                                    <div className="col-7">
                                                        <div className="countdown-timer" countdown data-date="08 22 2023 20:20:22">
                                                            <ul className="text_countdown">
                                                                <li data-days className="number_countdown">0</li>
                                                                <li>روز</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-hours className="number_countdown">0</li>
                                                                <li>ساعت</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-minutes className="number_countdown">0</li>
                                                                <li>دقیقه</li>
                                                            </ul>
                                                            <ul className="text_countdown">
                                                                <li data-seconds className="number_countdown">0</li>
                                                                <li>ثانیه</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>





                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-3 hidden-xs hidden-md">
                        <div className="widget-bid-s widget card border_all ">


                            <div id="bid-s" className="owl-carousel owl-theme">
                                <div className="item">
                                    <a href="single-product.html">
                                        <img src="src/assets/img/product_img/p_3.jpg" className="w-100" alt=""/>
                                    </a>
                                    <h3 className="product-title">
                                        <a href="#"> هدفون مخصوص بازی تی دگر </a>
                                    </h3>
                                    <div className="price">
                                        <span className="amount">700,000<span>تومان</span></span>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="single-product.html">
                                        <img src="src/assets/img/product_img/p_15.jpg" className="w-100" alt=""/>
                                        <img src="src/assets/img/img_icon.png" className="type_icon"/>

                                    </a>
                                    <h3 className="product-title">
                                        <a href="#">
                                           
                                            گوشی موبایل سامسونگ گلکسی A32
                                        </a>
                                    </h3>
                                    <div className="price">
                                        <del><span className="amount">13,299,000<span>تومان</span></span> </del>

                                        <span className="amount">12,180,000<span>تومان</span> <span className="discount_badge">3%</span></span>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="single-product.html">
                                        <img src="src/assets/img/product_img/p_11.jpg" className="w-100" alt=""/>
                                    </a>
                                    <h3 className="product-title">
                                        <a href="#">
                                            کنسول خانگی سونی
                                        </a>
                                    </h3>
                                    <div className="price">
                                        <del><span className="amount">26,800,000<span>تومان</span></span></del>
                                        <span className="amount">22,286,000<span>تومان</span></span>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="single-product.html">
                                        <img src="src/assets/img/product_img/p_5.jpg" className="w-100" alt=""/>
                                    </a>
                                    <h3 className="product-title">
                                        <a href="#">ساعت هوشمند امیزفیت </a>
                                    </h3>
                                    <div className="price">
                                        <del><span className="amount">70,800,000<span>تومان</span></span></del>
                                        <span className="amount">60,286,000<span>تومان</span></span>
                                    </div>
                                </div>
                            </div>
                            <div id="progressBar">
                                <div className="slide-progress"></div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12">

                        <div className="row banner-ads">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6 col-lg-3">
                                        <div className="widget-banner card border_all">
                                            <a href="category-search.html" target="_blank">
                                                <img className="img-fluid" src="src/assets/img/banner_img/img-3.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <div className="widget-banner card">
                                            <a href="category-search.html" target="_top">
                                                <img className="img-fluid" src="src/assets/img/banner_img/img-4.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <div className="widget-banner card border_all">
                                            <a href="category-search.html" target="_blank">
                                                <img className="img-fluid" src="src/assets/img/banner_img/img-5.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <div className="widget-banner card">
                                            <a href="category-search.html" target="_top">
                                                <img className="img-fluid" src="src/assets/img/banner_img/img-6.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="widget widget-product card border_all bglight pad_time_prod" id="shegeft_1">
                                    <header className="card-header">
                                        <h3 className="card-title">
                                            <span>
                                                <img src="src/assets/img/shegeft_1.png" />
                                            </span>
                                        </h3>
                                        <div className="countdown-timer" countdown data-date="10 12 2023 20:20:22">
                                            <ul className="text_countdown">
                                                <li data-days className="number_countdown">0</li>
                                                <li>روز</li>
                                            </ul>
                                            <ul className="text_countdown">
                                                <li data-hours className="number_countdown">0</li>
                                                <li>ساعت</li>
                                            </ul>
                                            <ul className="text_countdown">
                                                <li data-minutes className="number_countdown">0</li>
                                                <li>دقیقه</li>
                                            </ul>
                                            <ul className="text_countdown">
                                                <li data-seconds className="number_countdown">0</li>
                                                <li>ثانیه</li>
                                            </ul>
                                        </div>
                                    </header>
                                    <div className="product-carousel owl-carousel owl-theme">
                                        <div className="item">
                                            <a href="single-product.html">
                                                <img src="src/assets/img/product_img/p_14.jpg"  className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="single-product.html"> کیبورد مخصوص بازی برند تی دگر  </a>
                                            </h2>
                                            <div className="price">
                                                <del><span>735,000<span>تومان</span></span></del>
                                                <span className="discount_badge">2%</span>
                                                <ins><span>665,000<span>تومان</span></span></ins>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a href="single-product.html">
                                                <img src="src/assets/img/product_img/p_2.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="single-product.html">  هندزفری بلوتوث مدل انکر با فرکانس بالا   </a>
                                            </h2>
                                            <div className="price">
                                                <del><span>290,000<span>تومان</span></span></del>
                                                <span className="discount_badge">2%</span>

                                                <ins><span>180,000<span>تومان</span></span></ins>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a href="single-product.html">
                                                <img src="src/assets/img/product_img/p_12.jpg"  className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="single-product.html">  کنسول بازی  Playstation 5 با هارد 870 مگابایت  </a>
                                            </h2>
                                            <div className="price">
                                                <del><span>29,799,000<span>تومان</span></span></del>
                                                <span className="discount_badge">2%</span>

                                                <ins><span>26,699,000<span>تومان</span></span></ins>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a href="single-product.html">
                                                <img src="src/assets/img/product_img/p_6.jpg"  className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="single-product.html">  ساعت هوشمند مقاوم در برابر آب امیزفیت </a>
                                            </h2>
                                            <div className="price">
                                                <span>9,780,000<span>تومان</span></span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a href="single-product.html">
                                                <img src="src/assets/img/product_img/p_10.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="single-product.html"> گوشی موبایل شیائومی مدل Poco X4 Pro  </a>
                                            </h2>
                                            <div className="price">
                                                <del><span>13,500,000<span>تومان</span></span></del>
                                                <span className="discount_badge">2%</span>

                                                <ins><span>12,000,000<span>تومان</span></span></ins>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a href="single-product.html">
                                                <img src="src/assets/img/product_img/p_7.jpg"  className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="single-product.html">  گوشی موبایل اپل مدل Iphone 13 Pro Max  </a>
                                            </h2>
                                            <div className="price">
                                                <span>72,279,000<span>تومان</span></span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a href="single-product.html">
                                                <img src="src/assets/img/product_img/p_17.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="single-product.html">  گوشی موبایل سامسونگ مدل گلکسی A23  </a>
                                            </h2>
                                            <div className="price">
                                                <span>32,279,000<span>تومان</span></span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a href="single-product.html">
                                                <img src="src/assets/img/product_img/p_9.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="single-product.html">   گوشی موبایل شیائومی مدل Poco X4 Pro 5G  </a>
                                            </h2>
                                            <div className="price">
                                                <span>15,279,000<span >تومان</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="view_more">مشاهده بیشتر</a>

                                </div>
                            </div>
                        </div>
                        <div className="row banner-ads">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="widget-banner card border_all">
                                            <a href="category-search.html" target="_blank">
                                                <img className="img-fluid" src="src/assets/img/banner_img/img-7.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="widget-banner card">
                                            <a href="category-search.html" target="_top">
                                                <img className="img-fluid" src="src/assets/img/banner_img/img-8.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="widget widget-product card border_all bglight">
                                    <header className="card-header">
                                        <h3 className="card-title">
                                            <span><img src="src/assets/img/seller_1.png" /></span>
                                        </h3>
                                    </header>
                                    <div className="product-carousel owl-carousel owl-theme">
                                        <div className="item">
                                            <a href="#">
                                                <img src="src/assets/img/product_img/p_9.jpg"  className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="#"> گوشی شیائومی مدل Poco X4 Pro 5G </a>
                                            </h2>
                                            <div className="price">
                                                <del><span>13,159,000<span>تومان</span></span></del>
                                                <span className="discount_badge">5%</span>

                                                <ins><span>12,000,000<span>تومان</span></span></ins>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a href="#">
                                                <img src="src/assets/img/product_img/p_7.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="#">  گوشی اپل مدل Iphone 13 Pro Max  </a>
                                            </h2>
                                            <div className="price">
                                                <del><span>72,990,000<span>تومان</span></span></del>
                                                <span className="discount_badge">2%</span>

                                                <ins><span>68,280,000<span>تومان</span></span></ins>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a href="#">
                                                <img src="src/assets/img/product_img/p_15.jpg"  className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="#"> گوشی موبایل سامسونگ گلکسی A32 </a>
                                            </h2>
                                            <div className="price">
                                                <del><span>18,799,000<span>تومان</span></span></del>
                                                <span className="discount_badge">2%</span>

                                                <ins><span>16,699,000<span>تومان</span></span></ins>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a href="#">
                                                <img src="src/assets/img/product_img/p_17.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="#"> گوشی موبایل سامسونگ گلکسی A23</a>
                                            </h2>
                                            <div className="price">
                                                <span>15,780,000<span>تومان</span></span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a href="#">
                                                <img src="src/assets/img/product_img/p_19.jpg"  className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="#"> گوشی موبایل ردمی نوت 11SE شیائومی </a>
                                            </h2>
                                            <div className="price">
                                                <del><span>25,156,000<span>تومان</span></span></del>
                                                   <span className="discount_badge">2%</span>

                                                <ins><span>16,255,000<span>تومان</span></span></ins>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a href="#">
                                                <img src="src/assets/img/product_img/p_21.jpg"  className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="#">  اپل مدل Iphone 14 Pro Max </a>
                                            </h2>
                                            <div className="price">
                                                <span>79,279,000<span>تومان</span></span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a href="#">
                                                <img src="src/assets/img/product_img/p_20.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <h2 className="product_title">
                                                <a href="#">  گوشی موبایل ردمی نوت 15  شیائومی  </a>
                                            </h2>
                                            <div className="price">
                                                <span>28,450,000<span>تومان</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="view_more">مشاهده بیشتر  </a>

                                </div>
                            </div>
                        </div>
                     
                       
                       
                    </div>
                    
                </div>
                <div className="row banner-ads">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="widget widget-banner card border_all">
                                    <a href="category-search.html" target="_blank">
                                        <img className="img-fluid" src="src/assets/img/banner_img/img-9.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12">
                        <div className="brand-slider card border_all bglight">
                            <header className="card-header">
                                <h3 className="card-title"><span>دسته بندی های مَسای</span></h3>
                            </header>
                             <div className="row">
                                 <div className="col-12">
                                     <div className="row">
                                         <div className="col-6 col-md-2 contact-bigicon">

                                             <a href="#" target="_blank">
                                                 <img className="img-responsive imgpad" src="src/assets/img/Masai/bigicon/img-1.png" alt="" />
                                                 <b className="title-3 light-black">کالای دیجیتال</b>
                                             </a>

                                         </div>
                                         <div className="col-6 col-md-2 contact-bigicon">

                                             <a href="#" target="_top">
                                                 <img className="img-responsive imgpad" src="src/assets/img/Masai/bigicon/img-2.png" alt="" />
                                                 <b className="title-3 light-black">مودم</b>
                                             </a>

                                         </div>
                                         <div className="col-6 col-md-2 contact-bigicon">

                                             <a href="#" target="_blank">
                                                 <img className="img-responsive imgpad" src="src/assets/img/Masai/bigicon/img-3.png" alt="" />
                                                 <b className="title-3 light-black">تبلت</b>
                                             </a>

                                         </div>
                                         <div className="col-6 col-md-2 contact-bigicon">

                                             <a href="#" target="_top">
                                                 <img className="img-responsive imgpad" src="src/assets/img/Masai/bigicon/img-4.png" alt="" />
                                                 <b className="title-3 light-black">ماوس</b>
                                             </a>

                                         </div>
                                         <div className="col-6 col-md-2 contact-bigicon">

                                             <a href="#" target="_top">
                                                 <img className="img-responsive imgpad" src="src/assets/img/Masai/bigicon/img-5.png" alt="" />
                                                 <b className="title-3 light-black">هندزفری</b>
                                             </a>

                                         </div>
                                         <div className="col-6 col-md-2 contact-bigicon">

                                             <a href="#" target="_top">
                                                 <img className="img-responsive imgpad" src="src/assets/img/Masai/bigicon/img-6.png" alt="" />
                                                 <b className="title-3 light-black">ساعت هوشمند</b>
                                             </a>

                                         </div>
                                     </div>
                                 </div>
                                 <div className="col-12">
                                     <div className="row">
                                         <div className="col-6 col-md-2 contact-bigicon">

                                             <a href="#" target="_blank">
                                                 <img className="img-responsive imgpad" src="src/assets/img/Masai/bigicon/img-7.png" alt="" />
                                                 <b className="title-3 light-black">کنسول خانگی</b>
                                             </a>

                                         </div>
                                         <div className="col-6 col-md-2 contact-bigicon">

                                             <a href="#" target="_top">
                                                 <img className="img-responsive imgpad" src="src/assets/img/Masai/bigicon/img-8.png" alt="" />
                                                 <b className="title-3 light-black">کیبورد (صفحه کلید)</b>
                                             </a>

                                         </div>
                                         <div className="col-6 col-md-2 contact-bigicon">

                                             <a href="#" target="_blank">
                                                 <img className="img-responsive imgpad" src="src/assets/img/Masai/bigicon/img-9.png" alt="" />
                                                 <b className="title-3 light-black">اسپیکر (بلندگو)</b>
                                             </a>

                                         </div>
                                         <div className="col-6 col-md-2 contact-bigicon">

                                             <a href="#" target="_top">
                                                 <img className="img-responsive imgpad" src="src/assets/img/Masai/bigicon/img-10.png" alt="" />
                                                 <b className="title-3 light-black">لپ تاپ و الترابوک</b>
                                             </a>

                                         </div>
                                         <div className="col-6 col-md-2 contact-bigicon">

                                             <a href="#" target="_top">
                                                 <img className="img-responsive imgpad" src="src/assets/img/Masai/bigicon/img-11.png" alt="" />
                                                 <b className="title-3 light-black">موبایل</b>
                                             </a>

                                         </div>
                                         <div className="col-6 col-md-2 contact-bigicon">

                                             <a href="#" target="_top">
                                                 <img className="img-responsive imgpad" src="src/assets/img/Masai/bigicon/img-12.png" alt="" />
                                                 <b className="title-3 light-black">هدفون، هدست </b>
                                             </a>

                                         </div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
               
                <div className="row">

                    <div className="col-12">
                        <div className="brand-slider card border_all bglight">
                            <header className="card-header">
                                <h3 className="card-title"><span>محبوب‌ترین برندها</span></h3>
                            </header>
                            <div className="owl-carousel">
                                <div className="item borderitem">
                                    <a href="#"> <img src="src/assets/img/brands/brand-1.jpg" alt=""/> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="src/assets/img/brands/brand-2.jpg" alt=""/> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="src/assets/img/brands/brand-3.jpg" alt=""/> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="src/assets/img/brands/brand-4.jpg" alt=""/> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="src/assets/img/brands/brand-5.jpg" alt=""/> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="src/assets/img/brands/brand-6.jpg" alt=""/> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="src/assets/img/brands/brand-7.jpg" alt=""/> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="src/assets/img/brands/brand-8.jpg" alt=""/> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="src/assets/img/brands/brand-9.jpg" alt=""/> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="src/assets/img/brands/brand-10.jpg" alt=""/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
          <div className="container-fluid bgGray blog-box-footer">
       
                  <div className="container">
                      <div className="col-12">
                          <div className=" widget-blog  border_all ">
                              <header className="card-header">
                                  <h3 className="card-title"><span>مَسای مگ</span></h3>
                              </header>
                              <div className="Blog-carousel owl-carousel owl-theme">
                                  <div className="item">
                                      <a href="single-blog.html">
                                          <img src="src/assets/img/blog/post-1.jpg" className="img-fluid" alt=""/>
                                      </a>
                                      <a href="single-blog.html">
                                          <h2 className="Blog_title">
                                              این‌ بار هوش مصنوعی، تصاویری از کارخانه تولید عروس دریایی را افشا می‌کند!
                                          </h2>
                                      </a>
                                      <div className="Blog_list">
                                          <span className="Blog_author">
                                              <i className="fa fa-user"></i>
                                              رضایی
                                          </span>
                                          <span className="Blog_Date">
                                              <i className="fa fa-calendar "></i>
                                              ۱9 مهر 1402
                                          </span>
                                      </div>
                                  </div>
                                  <div className="item">
                                      <a href="single-blog.html">
                                          <img src="src/assets/img/blog/post-2.jpg" className="img-fluid" alt=""/>
                                      </a>
                                      <a href="single-blog.html">
                                          <h2 className="Blog_title">
                                              خط سفید روی نمایشگر گلکسی A71 سامسونگ؛ ماجرا چیست؟
                                          </h2>
                                      </a>
                                      <div className="Blog_list">
                                          <span className="Blog_author">
                                              <i className="fa fa-user"></i>
                                              صادقی
                                          </span>
                                          <span className="Blog_Date">
                                              <i className="fa fa-calendar "></i>
                                              ۱4 اسفند 1402
                                          </span>
                                      </div>
                                  </div>
                                  <div className="item">
                                      <a href="single-blog.html">
                                          <img src="src/assets/img/blog/post-3.jpg" className="img-fluid" alt=""/>
                                      </a>
                                      <a href="single-blog.html">
                                          <h2 className="Blog_title">
                                              بهترین گوشی های مناسب عکاسی در بازار ایران
                                          </h2>
                                      </a>
                                      <div className="Blog_list">
                                          <span className="Blog_author">
                                              <i className="fa fa-user"></i>
                                              میرعظیمی
                                          </span>
                                          <span className="Blog_Date">
                                              <i className="fa fa-calendar "></i>
                                              ۱4 شهریور 1402
                                          </span>
                                      </div>
                                  </div>
                                  <div className="item">
                                      <a href="single-blog.html">
                                          <img src="src/assets/img/blog/post-4.jpg" className="img-fluid" alt=""/>
                                      </a>
                                      <a href="single-blog.html">
                                          <h2 className="Blog_title">
                                              هزینه ساخت بازی‌های انحصاری پلی استیشن با فیلم‌های بلاک‌باستر برابری می‌کند
                                          </h2>
                                      </a>
                                      <div className="Blog_list">
                                          <span className="Blog_author">
                                              <i className="fa fa-user"></i>
                                              میرعظیمی
                                          </span>
                                          <span className="Blog_Date">
                                              <i className="fa fa-calendar "></i>
                                             25 شهریور 1402
                                          </span>
                                      </div>
                                  </div>
                                  <div className="item">
                                      <a href="single-blog.html">
                                          <img src="src/assets/img/blog/post-5.jpg" className="img-fluid" alt=""/>
                                      </a>
                                      <a href="single-blog.html">
                                          <h2 className="Blog_title">
                                              یک دهه سکوت شکست؛ مایکروسافت آمار فروش ایکس باکس را فاش کرد!

                                          </h2>
                                      </a>
                                      <div className="Blog_list">
                                          <span className="Blog_author">
                                              <i className="fa fa-user"></i>
                                              میرعظیمی
                                          </span>
                                          <span className="Blog_Date">
                                              <i className="fa fa-calendar "></i>
                                              25 آذر 1402
                                          </span>
                                      </div>
                                  </div>
                                  <div className="item">
                                      <a href="single-blog.html">
                                          <img src="src/assets/img/blog/post-6.jpg" className="img-fluid" alt=""/>
                                      </a>
                                      <a href="single-blog.html">
                                          <h2 className="Blog_title">
                                              بررسی تلویزیون 4K اسنوا؛ ۵۵ اینچی اقتصادی برای فیلم‌بازها!
                                          </h2>
                                      </a>
                                      <div className="Blog_list">
                                          <span className="Blog_author">
                                              <i className="fa fa-user"></i>
                                              میرعظیمی
                                          </span>
                                          <span className="Blog_Date">
                                              <i className="fa fa-calendar "></i>
                                              10 دی 1402
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  
               
          </div>
        </main>
        

    <footer className="main-footer default">
        <div className="back-to-top ">
            <a href="#">
                <span className="icon"><i className="fa fa-chevron-up"></i></span> <span>
                    بازگشت بالا
                </span>
            </a>
        </div>
        <div className=" servicesbg">
            <div className="footer-services container  space-10">
                <div className="row">
                    <div className="service-item col-2 contact-box text-center">
                        <img src="src/assets/img/ico/png-4.png" className="width-40" />
                        <span className="title-1 light-black">ضمانت اصل بودن</span>
                    </div>
                    <div className="service-item col-2 contact-box text-center">
                        <img src="src/assets/img/ico/png-1.png" className="width-40" />
                        <span className="title-1 light-black">پرداخت در محل</span>
                    </div>
                    <div className="service-item col-2 contact-box text-center">
                        <img src="src/assets/img/ico/png-2.png" className="width-40" />
                        <span className="title-1 light-black">ارسال سریع</span>
                    </div>
                    <div className="service-item col-2 contact-box text-center">
                        <img src="src/assets/img/ico/png-5.png" className="width-40" />
                        <span className="title-1 light-black">فرصت 7 روزه استرداد</span>
                    </div>
                    <div className="service-item col-2 contact-box text-center">
                        <img src="src/assets/img/ico/png-3.png" className="width-40" />
                        <span className="title-1 light-black">پشتیبانی تلفنی</span>
                    </div>
                    <div className="service-item col-2 contact-box text-center">
                        <img src="src/assets/img/ico/png-7.png" className="width-40" />
                        <span className="title-1 light-black">هدیه نقدی</span>
                    </div>
                   
                </div>
                
            </div>
        </div>
        <div className="container-fluid space-30 bg-map">
            
            <div className="footer-widgets container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="widget-menu widget card">
                            <div className="card-header">
                                <h3 className="card-title">درباره ما</h3>
                            </div>
                            <p className="about_footer">
                                قالب مَسای یک پکیج کامل ایرانی با هدف بی نهایت قالب HTML و WordPress و به روز رسانی همیشگی است، که تمام ویژگی های لازم طراحی سایت را در نظر میگیرد
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="widget-menu widget card">
                            <div className="card-header">
                                <h3 className="card-title">خدمات مشتریان</h3>
                            </div>
                            <ul className="footer-menu">
                                <li>
                                    <a href="#">ارسال فوری</a>
                                </li>
                                <li>
                                    <a href="#">پشتیبانی سریع</a>
                                </li>
                                <li>
                                    <a href="#">بازگشت وجه</a>
                                </li>
                                <li>
                                    <a href="#">بسته بندی کالا</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="widget-menu widget card">
                            <div className="card-header">
                                <h3 className="card-title">با مَسای شاپ</h3>
                            </div>
                            <ul className="footer-menu">
                          
                                <li>
                                    <a href="#">تامین کالا همکار</a>
                                </li>
                                <li>
                                    <a href="#">تخفیف سازمانی</a>
                                </li>
                                <li>
                                    <a href="#">تماس با ما</a>
                                </li>
                                <li>
                                    <a href="#">درباره ما</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="widget-menu widget card">
                            <div className="card-header">
                                <h3 className="card-title">مجوزات</h3>
                            </div>
                            <div className="License_img">
                                <a href="#" target="_blank"><img src="src/assets/img/License_2.png" alt=""/></a>
                                <a href="#" target="_blank"><img src="src/assets/img/License_1.png" alt=""/></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
          
        </div>
         
        <div className="copyright">
            <div className="container">
                <p>
                   این قالب به وسیله گروه برنامه نویسی <a href="https://www.rtl-theme.com/author/rashid_mirazimi/products/" target="_blank"> گرزک </a> پشتیبانی میشود.
                </p>
            </div>
        </div>
    </footer>
    </div>
    </>
  )
}

export default Index
    