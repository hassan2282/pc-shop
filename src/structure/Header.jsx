function Header() {
  return (
    <header className="Masai-header default relative top-[-15px]">

                <div className="top-section fullscreen-container ">
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
                            <li><a href="category-search"><i className="fa fa-user-large colormain" aria-hidden="true"></i></a></li>
                            <li><a href="category-search"><i className="fa fa-cart-arrow-down colormain" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                    <div className="logo-nav-res default text-center">
                        <a href="category-search">
                            <img src="src/assets/img/logo.png"  alt=""/>
                        </a>
                    </div>
                    <ul className="navbar-nav default">
                        <li className="sub-menu">
                            <a href="category-search">موبایل</a>
                            <ul>
                                <li className="sub-menu">
                                    <a href="category-search">لوازم جانبی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">کیف گوشی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کاور گوشی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">شارژر همراه</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گارد گوشی</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">برند ترین ها</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">اپل</a>
                                        </li>
                                        <li>
                                            <a href="category-search">سامسونگ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">هوآوی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">شیائومی</a>
                                        </li>
                                    
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">سیستم عامل</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">اندروید</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آی او اس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ویندوز</a>
                                        </li>
                                    
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">گوشی براساس قیمت</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">گوشی تا 2 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی تا 5 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی تا 7 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی تا 15 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی بالای 15 میلیون تومان</a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="sub-menu">
                                    <a href="category-search">گوشی براساس حافظه داخلی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">گوشی تا 16 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی تا 32 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی تا 64 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی تا 128 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی تا 256 گیگابایت</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">رزولوشن عکس</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">تا 13 مگاپیکسل</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تا 16 مگاپیکسل</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تا 48 مگاپیکسل</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تا 64 مگاپیکسل</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تا 128 مگاپیکسل</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search"> گوشی براساس کاربری</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">گوشی اقتصادی</a>
                                        </li>
                                        <li>
                                            <a href="category-search"> گوشی میان رده</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی دانش آموزی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی گیمینگ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی پرچمدار</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="category-search">لپ تاپ</a>
                            <ul>
                                <li className="sub-menu">
                                    <a href="category-search">لوازم جانبی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">کیف لپ تاپ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کاور لپ تاپ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">شارژر لپ تاپ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">فن لپ تاپ</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">برند ترین ها</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">ایسوس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">سامسونگ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">اچ پی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">اپل</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">سیستم عامل</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">لینوکس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آی او اس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ویندوز</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">لپ تاپ براساس قیمت</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">لپ تاپ تا 15 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">لپ تاپ تا 25 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">لپ تاپ تا 40 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">لپ تاپ بالای 40 میلیون تومان</a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="sub-menu">
                                    <a href="category-search">لپ تاپ براساس حافظه داخلی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">لپ تاپ تا 16 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">لپ تاپ تا 32 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">لپ تاپ تا 64 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">لپ تاپ تا 128 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">لپ تاپ تا 256 گیگابایت</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">ابعاد صفحه نمایش</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">صفحه نمایش 14 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 16 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 18 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 20 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 22 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 24 اینچ</a>
                                        </li>
                                    </ul>
                                </li>
                            
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="category-search">ساعت هوشمند</a>
                            <ul>
                                <li className="sub-menu">
                                    <a href="category-search">لوازم جانبی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">کیف ساعت هوشمند</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کاور ساعت هوشمند</a>
                                        </li>
                                        <li>
                                            <a href="category-search">شارژر ساعت هوشمند</a>
                                        </li>
                                        <li>
                                            <a href="category-search">فن ساعت هوشمند</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">برند ترین ها</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">ایسوس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">سامسونگ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">اچ پی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">اپل</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">سیستم عامل</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">لینوکس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آی او اس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ویندوز</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">ساعت هوشمند براساس قیمت</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">ساعت هوشمند تا 15 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ساعت هوشمند تا 25 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ساعت هوشمند تا 40 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ساعت هوشمند بالای 40 میلیون تومان</a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="sub-menu">
                                    <a href="category-search">ساعت هوشمند براساس حافظه داخلی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">ساعت هوشمند تا 16 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ساعت هوشمند تا 32 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ساعت هوشمند تا 64 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ساعت هوشمند تا 128 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ساعت هوشمند تا 256 گیگابایت</a>
                                        </li>
                                    </ul>
                                </li>
                                

                            </ul>
                        </li>

                        <li className="sub-menu">
                            <a href="category-search">مودم</a>
                            <ul>
                            
                                <li className="sub-menu">
                                    <a href="category-search">برند ترین ها</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">تی پی لینک</a>
                                        </li>
                                        <li>
                                            <a href="category-search">دی لینک</a>
                                        </li>
                                        <li>
                                            <a href="category-search">اچ پی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">همراه اول</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">فرکانس تحت پوشش</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">1 گیگاهرتز</a>
                                        </li>
                                        <li>
                                            <a href="category-search">2.5 گیگاهرتز</a>
                                        </li>
                                        <li>
                                            <a href="category-search">4 گیگاهرتز</a>
                                        </li>
                                        <li>
                                            <a href="category-search">5.5 گیگاهرتز</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">گوشی براساس قیمت</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">گوشی تا 2 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی تا 5 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی تا 7 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گوشی تا 15 میلیون تومان</a>
                                        </li>
                                    

                                    </ul>
                                </li>

                                <li className="sub-menu">
                                    <a href="category-search">مودم براساس رنگ</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">مودم قرمز</a>
                                        </li>
                                        <li>
                                            <a href="category-search">مودم قهوه ای</a>
                                        </li>
                                        <li>
                                            <a href="category-search">مودم آبی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">مودم مشکی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">مودم سفید</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">بر اساس برند</a>
                                    <ul>
                                        <li >
                                            <a href="category-search" >مودم همراه اول</a>
                                        </li>
                                        <li >
                                            <a href="category-search" >مودم ایرانسل</a>
                                        </li>
                                        <li >
                                            <a href="category-search" >مودم تی پی لینک</a>
                                        </li>
                                        <li >
                                            <a href="category-search" >مودم دی لینک</a>
                                        </li>
                                        <li >
                                            <a href="category-search" >مودم یوتل</a>
                                        </li>
                                        <li >
                                            <a href="category-search" >مودم ایسوس</a>
                                        </li>
                                        <li >
                                            <a href="category-search" >مودم تندا</a>
                                        </li>
                                        <li >
                                            <a href="category-search" >مودم سورنا</a>
                                        </li>
                                        <li >
                                            <a href="category-search" >مودم مسای</a>
                                        </li>
                                        <li >
                                            <a href="category-search" >مودم ال جی</a>
                                        </li>
                                        <li >
                                            <a href="category-search" >مودم سامسونگ</a>
                                        </li>


                                    </ul>
                                </li>
                                
                            </ul>
                        </li>

                        <li className="sub-menu">
                            <a href="category-search">تبلت</a>
                            <ul>
                                <li className="sub-menu">
                                    <a href="category-search">لوازم جانبی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">کیف تبلت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کاور تبلت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">شارژر همراه</a>
                                        </li>
                                        <li>
                                            <a href="category-search">گارد تبلت</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">برند ترین ها</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">اپل</a>
                                        </li>
                                        <li>
                                            <a href="category-search">سامسونگ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">هوآوی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">شیائومی</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">سیستم عامل</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">اندروید</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آی او اس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ویندوز</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">تبلت براساس قیمت</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">تبلت تا 2 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تبلت تا 5 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تبلت تا 7 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تبلت تا 15 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تبلت بالای 15 میلیون تومان</a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="sub-menu">
                                    <a href="category-search">تبلت براساس حافظه داخلی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">تبلت تا 16 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تبلت تا 32 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تبلت تا 64 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تبلت تا 128 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تبلت تا 256 گیگابایت</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">رزولوشن عکس</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">تا 13 مگاپیکسل</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تا 16 مگاپیکسل</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تا 48 مگاپیکسل</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تا 64 مگاپیکسل</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تا 128 مگاپیکسل</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search"> تبلت براساس کاربری</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">تبلت اقتصادی</a>
                                        </li>
                                        <li>
                                            <a href="category-search"> تبلت میان رده</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تبلت دانش آموزی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تبلت گیمینگ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تبلت پرچمدار</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>


                        <li className="sub-menu">
                            <a href="category-search">کامپیوتر</a>
                            <ul>
                                <li className="sub-menu">
                                    <a href="category-search">لوازم جانبی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">کیف کامپیوتر</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کاور کامپیوتر</a>
                                        </li>
                                        <li>
                                            <a href="category-search">شارژر کامپیوتر</a>
                                        </li>
                                        <li>
                                            <a href="category-search">فن کامپیوتر</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">برند ترین ها</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">ایسوس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">سامسونگ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">اچ پی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">اپل</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">سیستم عامل</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">لینوکس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آی او اس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ویندوز</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">کامپیوتر براساس قیمت</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">کامپیوتر تا 15 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کامپیوتر تا 25 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کامپیوتر تا 40 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کامپیوتر بالای 40 میلیون تومان</a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="sub-menu">
                                    <a href="category-search">کامپیوتر براساس حافظه داخلی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">کامپیوتر تا 16 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کامپیوتر تا 32 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کامپیوتر تا 64 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کامپیوتر تا 128 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کامپیوتر تا 256 گیگابایت</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">ابعاد صفحه نمایش</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">صفحه نمایش 14 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 16 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 18 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 20 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 22 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 24 اینچ</a>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </li>



                        <li className="sub-menu">
                            <a href="category-search">آیپد اپل</a>
                            <ul>
                                <li className="sub-menu">
                                    <a href="category-search">لوازم جانبی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">کیف آیپد اپل</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کاور آیپد اپل</a>
                                        </li>
                                        <li>
                                            <a href="category-search">شارژر آیپد اپل</a>
                                        </li>
                                        <li>
                                            <a href="category-search">فن آیپد اپل</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">برند ترین ها</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">ایسوس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">سامسونگ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">اچ پی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">اپل</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">سیستم عامل</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">لینوکس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آی او اس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ویندوز</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">آیپد اپل براساس قیمت</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">آیپد اپل تا 15 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آیپد اپل تا 25 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آیپد اپل تا 40 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آیپد اپل بالای 40 میلیون تومان</a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="sub-menu">
                                    <a href="category-search">آیپد اپل براساس حافظه داخلی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">آیپد اپل تا 16 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آیپد اپل تا 32 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آیپد اپل تا 64 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آیپد اپل تا 128 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آیپد اپل تا 256 گیگابایت</a>
                                        </li>
                                    </ul>
                                </li>


                            </ul>
                        </li>






                        <li className="sub-menu">
                            <a href="category-search">تلویزیون</a>
                            <ul>
                                <li className="sub-menu">
                                    <a href="category-search">لوازم جانبی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">کیف تلویزیون</a>
                                        </li>
                                        <li>
                                            <a href="category-search">کاور تلویزیون</a>
                                        </li>
                                        <li>
                                            <a href="category-search">شارژر تلویزیون</a>
                                        </li>
                                        <li>
                                            <a href="category-search">فن تلویزیون</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">برند ترین ها</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">ایسوس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">سامسونگ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">اچ پی</a>
                                        </li>
                                        <li>
                                            <a href="category-search">اپل</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">سیستم عامل</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">لینوکس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">آی او اس</a>
                                        </li>
                                        <li>
                                            <a href="category-search">ویندوز</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">تلویزیون براساس قیمت</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">تلویزیون تا 15 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تلویزیون تا 25 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تلویزیون تا 40 میلیون تومان</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تلویزیون بالای 40 میلیون تومان</a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="sub-menu">
                                    <a href="category-search">تلویزیون براساس حافظه داخلی</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">تلویزیون تا 16 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تلویزیون تا 32 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تلویزیون تا 64 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تلویزیون تا 128 گیگابایت</a>
                                        </li>
                                        <li>
                                            <a href="category-search">تلویزیون تا 256 گیگابایت</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="category-search">ابعاد صفحه نمایش</a>
                                    <ul>
                                        <li>
                                            <a href="category-search">صفحه نمایش 14 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 16 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 18 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 20 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 22 اینچ</a>
                                        </li>
                                        <li>
                                            <a href="category-search">صفحه نمایش 24 اینچ</a>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a href="category-search"> دمو محصولات</a>
                        </li>
                        <li>
                            <a href="category-search">تخفیفات و پیشنهادات</a>
                        </li>
                        <li>
                            <a href="category-search">مَسای امن</a>
                        </li>
                        <li>
                            <a href="category-search">مَسای پلاس</a>
                        </li>
                        <li>
                            <a href="category-search"> مَسای کلاب </a>
                        </li>
                        <li>
                            <a href="category-search">مَسای پی </a>
                        </li>
                        <li>
                            <a href="category-search">سوالی دارید؟</a>
                        </li>
                        <li>
                            <a href="category-search">فروشنده شوید</a>
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
                                <a href="/">
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
                                <a href="/login" className="iconhead">

                                    <i className="fa fa-user-large font-20" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="cart dropdown masai_dropdown">
                                <span className="divider"></span>

                                <a href="category-search" className="dropdown-toggle iconhead" data-toggle="dropdown" id="navbar_a">
                                    <i className="fa fa-cart-arrow-down font-20" aria-hidden="true"></i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbar_a">

                                    
                                    <ul className="m_cart-list">
                                        <li className="m_cart_li1">
                                            <a href="/single-product" className="m_cart-item">
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
                                            <a href="/single-product" className="m_cart-item">
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
                            <i className="fa fa-bars icon-icon" aria-hidden="true"></i><a href="category-search" className="list__link">دسته بندی کالاها</a>
                            <div className="submeno">
                                <ul className="main_meno-drobdown">
                                    <li className="child_mno-drobdown">
                                        <a href="category-search" className="run">موبایل</a>
                                        <div className="mega_meno">
                                            <ul className="list_drobdown--item">
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search"
                                                    className="list__drobdown--link texr_header block_block">
                                                        همه محصولات موبایل
                                                    </a>
                                                </li>
                                                <ul className="ul_list">
                                                    <ul className="mega_meno--block">
                                                    
                                                    
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">گوشی براساس قیمت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 2 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> گوشی تا 5 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 7 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی بالای 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">گوشی براساس حافظه داخلی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 16 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 32 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 32 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 128 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 256 گیگابایت</a>
                                                        </li>
                                                    </ul>
                                                </ul>
                                                <ul className="ul_list--cecond">
                                                    <ul className="mega_meno__cecond">
                                                        
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                رزولوشن عکس
                                                            </a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تا ۱۳ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> تا ۱۶ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تا ۴۸ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list_mega ">
                                                            <a href="category-search" className="mega_link--link ">تا ۶۴ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list_mega ">
                                                            <a href="category-search" className="mega_link--link ">تا ۱۰۸ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                گوشی براساس کاربری
                                                            </a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی اقتصادی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> گوشی میان رده</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی دانش آموزی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی گیمینگ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی پرچمدار</a>
                                                        </li>
                                                        
                                                    </ul>
                                                </ul>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کیف گوشی </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کاور گوشی </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> شارژر همراه</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">گارد گوشی</a>
                                                </li>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">برند ترین ها</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">اپل</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">سامسونگ</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">هوآوی  </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">شیائومی</a>
                                                </li>
                                            
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">سیستم عامل</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> اندروید</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">آی او اس</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">ویندوز</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="child_mno-drobdown">
                                        <a href="category-search" className="run">لپ تاپ</a>
                                        <div className="mega_meno">
                                            <ul className="list_drobdown--item">
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search"
                                                    className="list__drobdown--link texr_header block_block">
                                                        همه محصولات لپ تاپ
                                                    </a>
                                                </li>
                                                <ul className="ul_list">
                                                    <ul className="mega_meno--block">


                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">لپ تاپ براساس قیمت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">لپ تاپ تا 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> لپ تاپ تا 25 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">لپ تاپ تا 40 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">لپ تاپ بالای 40 میلیون تومان</a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">لپ تاپ براساس حافظه داخلی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">لپ تاپ تا 120 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">لپ تاپ تا 240 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">لپ تاپ تا 520 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">لپ تاپ تا 1024 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">لپ تاپ بالای 1024 گیگابایت</a>
                                                        </li>
                                                    </ul>
                                                </ul>
                                                <ul className="ul_list--cecond">
                                                    <ul className="mega_meno__cecond">

                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                ابعاد صفحه نمایش
                                                            </a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 14 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 16 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 18 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 20 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 22 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 24 اینچ</a>
                                                        </li>
                                                    

                                                    </ul>
                                                </ul>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کیف لپ تاپ </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کاور لپ تاپ </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> شارژر لپ تاپ</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">خنک کنند لپ تاپ</a>
                                                </li>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">برند ترین ها</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">ایسوس</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">سامسونگ</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">اچ پی  </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">اپل</a>
                                                </li>

                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">سیستم عامل</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> لینوکس</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">آی او اس</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">ویندوز</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="child_mno-drobdown">
                                        <a href="category-search" className="run">ساعت هوشمند</a>
                                        <div className="mega_meno">
                                            <ul className="list_drobdown--item">
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search"
                                                    className="list__drobdown--link texr_header block_block">
                                                        همه محصولات ساعت هوشمند
                                                    </a>
                                                </li>
                                                <ul className="ul_list">
                                                    <ul className="mega_meno--block">


                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">ساعت هوشمند براساس قیمت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">ساعت هوشمند تا 2 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> ساعت هوشمند تا 5 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">ساعت هوشمند تا 7 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">ساعت هوشمند تا 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">ساعت هوشمند بالای 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">ساعت هوشمند براساس حافظه داخلی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">ساعت هوشمند تا 16 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">ساعت هوشمند تا 32 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">ساعت هوشمند تا 32 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">ساعت هوشمند تا 128 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">ساعت هوشمند تا 256 گیگابایت</a>
                                                        </li>
                                                    </ul>
                                                </ul>
                                                <ul className="ul_list--cecond">
                                                    <ul className="mega_meno__cecond">

                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                            ساعت هوشمند دخترانه
                                                            </a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                ساعت هوشمند پسرانه
                                                            </a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                ساعت هوشمند هوشمند
                                                            </a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                ساعت هوشمند پرچم دار
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </ul>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کیف ساعت هوشمند </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کاور ساعت هوشمند </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> شارژر همراه</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">گارد ساعت هوشمند</a>
                                                </li>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">برند ترین ها</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">اپل</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">سامسونگ</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">هوآوی  </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">شیائومی</a>
                                                </li>

                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">سیستم عامل</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> اندروید</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">آی او اس</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">ویندوز</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="child_mno-drobdown">
                                        <a href="category-search" className="run">مودم </a>
                                        <div className="mega_meno">
                                            <ul className="list_drobdown--item">
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search"
                                                    className="list__drobdown--link texr_header block_block">
                                                        همه محصولات مودم
                                                    </a>
                                                </li>
                                                <ul className="ul_list">
                                                    <ul className="mega_meno--block">


                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">مودم براساس قیمت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">مودم تا 2 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> مودم تا 5 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">مودم تا 7 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">مودم تا 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list_drobdown--items border_left--red">
                                                            <a href="category-search" className="list__drobdown--link texr_header">برند ترین ها</a>
                                                        </li>
                                                        <li className="list_drobdown--items">
                                                            <a href="category-search" className="list__drobdown--link">تی پی لینک</a>
                                                        </li>
                                                        <li className="list_drobdown--items">
                                                            <a href="category-search" className="list__drobdown--link">دی لینک</a>
                                                        </li>
                                                        <li className="list_drobdown--items">
                                                            <a href="category-search" className="list__drobdown--link">اچ پی  </a>
                                                        </li>
                                                        <li className="list_drobdown--items">
                                                            <a href="category-search" className="list__drobdown--link">همراه اول</a>
                                                        </li>
                                                    
                                                    </ul>
                                                </ul>
                                                <ul className="ul_list--cecond">
                                                    <ul className="mega_meno__cecond">

                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                فرکانس تحت پوشش
                                                            </a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">1 گیگاهرتز</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">2.5 گیگاهرتز</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">4 گیگاهرتز</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">5.5 گیگاهرتز</a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                مودم براساس رنگ
                                                            </a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">مودم قرمز</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> مودم قهوه ای</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">مودم آبی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> مودم مشکی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">مودم سفید</a>
                                                        </li>
                                                    
                                                    </ul>
                                                </ul>
                                                <li className="list_mega border_left">
                                                    <a href="category-search" className="mega_link--link texr_header">مودم براساس برند</a>
                                                </li>
                                                <li className="list__mega--itmes">
                                                    <a href="category-search" className="list__mega--link">مودم همراه اول</a>
                                                </li>
                                                <li className="list__mega--itmes">
                                                    <a href="category-search" className="list__mega--link">مودم ایرانسل</a>
                                                </li>
                                                <li className="list__mega--itmes">
                                                    <a href="category-search" className="list__mega--link">مودم تی پی لینک</a>
                                                </li>
                                                <li className="list__mega--itmes">
                                                    <a href="category-search" className="list__mega--link">مودم دی لینک</a>
                                                </li>
                                                <li className="list__mega--itmes">
                                                    <a href="category-search" className="list__mega--link">مودم یوتل</a>
                                                </li>
                                                <li className="list__mega--itmes">
                                                    <a href="category-search" className="list__mega--link">مودم ایسوس</a>
                                                </li>
                                                <li className="list__mega--itmes">
                                                    <a href="category-search" className="list__mega--link">مودم تندا</a>
                                                </li>
                                                <li className="list__mega--itmes">
                                                    <a href="category-search" className="list__mega--link">مودم سورنا</a>
                                                </li>
                                                <li className="list__mega--itmes">
                                                    <a href="category-search" className="list__mega--link">مودم مسای</a>
                                                </li>
                                                <li className="list__mega--itmes">
                                                    <a href="category-search" className="list__mega--link">مودم ال جی</a>
                                                </li>
                                                <li className="list__mega--itmes">
                                                    <a href="category-search" className="list__mega--link">مودم سامسونگ</a>
                                                </li>
                                            
                                                

                                                
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="child_mno-drobdown">
                                        <a href="category-search" className="run">تبلت</a>
                                        <div className="mega_meno">
                                            <ul className="list_drobdown--item">
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search"
                                                    className="list__drobdown--link texr_header block_block">
                                                        همه محصولات تبلت
                                                    </a>
                                                </li>
                                                <ul className="ul_list">
                                                    <ul className="mega_meno--block">


                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">تبلت براساس قیمت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تبلت تا 2 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> تبلت تا 5 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تبلت تا 7 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تبلت تا 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تبلت بالای 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">تبلت براساس حافظه داخلی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تبلت تا 16 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تبلت تا 32 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تبلت تا 32 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تبلت تا 128 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تبلت تا 256 گیگابایت</a>
                                                        </li>
                                                    </ul>
                                                </ul>
                                                <ul className="ul_list--cecond">
                                                    <ul className="mega_meno__cecond">

                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                رزولوشن عکس
                                                            </a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تا ۱۳ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> تا ۱۶ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تا ۴۸ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list_mega ">
                                                            <a href="category-search" className="mega_link--link ">تا ۶۴ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list_mega ">
                                                            <a href="category-search" className="mega_link--link ">تا ۱۰۸ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                تبلت براساس کاربری
                                                            </a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تبلت اقتصادی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> تبلت میان رده</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تبلت دانش آموزی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تبلت گیمینگ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تبلت پرچمدار</a>
                                                        </li>

                                                    </ul>
                                                </ul>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کیف تبلت </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کاور تبلت </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> شارژر همراه</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">گارد تبلت</a>
                                                </li>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">برند ترین ها</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">اپل</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">سامسونگ</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">هوآوی  </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">شیائومی</a>
                                                </li>

                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">سیستم عامل</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> اندروید</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">آی او اس</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">ویندوز</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="child_mno-drobdown">
                                        <a href="category-search" className="run">کامپیوتر</a>
                                        <div className="mega_meno">
                                            <ul className="list_drobdown--item">
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search"
                                                    className="list__drobdown--link texr_header block_block">
                                                        همه محصولات کامپیوتر
                                                    </a>
                                                </li>
                                                <ul className="ul_list">
                                                    <ul className="mega_meno--block">


                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">کامپیوتر براساس قیمت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">کامپیوتر تا 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> کامپیوتر تا 25 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">کامپیوتر تا 40 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">کامپیوتر بالای 40 میلیون تومان</a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">کامپیوتر براساس حافظه داخلی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">کامپیوتر تا 120 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">کامپیوتر تا 240 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">کامپیوتر تا 520 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">کامپیوتر تا 1024 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">کامپیوتر بالای 1024 گیگابایت</a>
                                                        </li>
                                                    </ul>
                                                </ul>
                                                <ul className="ul_list--cecond">
                                                    <ul className="mega_meno__cecond">

                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                ابعاد صفحه نمایش
                                                            </a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 14 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 16 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 18 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 20 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 22 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 24 اینچ</a>
                                                        </li>


                                                    </ul>
                                                </ul>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کیف کامپیوتر </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کاور کامپیوتر </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> شارژر کامپیوتر</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">خنک کنند کامپیوتر</a>
                                                </li>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">برند ترین ها</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">ایسوس</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">سامسونگ</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">اچ پی  </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">اپل</a>
                                                </li>

                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">سیستم عامل</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> لینوکس</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">آی او اس</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">ویندوز</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="child_mno-drobdown">
                                        <a href="category-search" className="run">آیپد اپل</a>
                                        <div className="mega_meno">
                                            <ul className="list_drobdown--item">
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search"
                                                    className="list__drobdown--link texr_header block_block">
                                                        همه محصولات آیپد اپل
                                                    </a>
                                                </li>
                                                <ul className="ul_list">
                                                    <ul className="mega_meno--block">


                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">آیپد اپل براساس قیمت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">آیپد اپل تا 2 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> آیپد اپل تا 5 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">آیپد اپل تا 7 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">آیپد اپل تا 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">آیپد اپل بالای 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">آیپد اپل براساس حافظه داخلی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">آیپد اپل تا 16 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">آیپد اپل تا 32 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">آیپد اپل تا 32 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">آیپد اپل تا 128 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">آیپد اپل تا 256 گیگابایت</a>
                                                        </li>
                                                    </ul>
                                                </ul>
                                                <ul className="ul_list--cecond">
                                                    <ul className="mega_meno__cecond">

                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                آیپد اپل دخترانه
                                                            </a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                آیپد اپل پسرانه
                                                            </a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                آیپد اپل هوشمند
                                                            </a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                آیپد اپل پرچم دار
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </ul>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کیف آیپد اپل </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کاور آیپد اپل </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> شارژر همراه</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">گارد آیپد اپل</a>
                                                </li>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">برند ترین ها</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">اپل</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">سامسونگ</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">هوآوی  </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">شیائومی</a>
                                                </li>

                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">سیستم عامل</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> اندروید</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">آی او اس</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">ویندوز</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="child_mno-drobdown">
                                        <a href="category-search" className="run">تلویزیون</a>
                                        <div className="mega_meno">
                                            <ul className="list_drobdown--item">
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search"
                                                    className="list__drobdown--link texr_header block_block">
                                                        همه محصولات تلویزیون
                                                    </a>
                                                </li>
                                                <ul className="ul_list">
                                                    <ul className="mega_meno--block">


                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">تلویزیون براساس قیمت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تلویزیون تا 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> تلویزیون تا 25 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تلویزیون تا 40 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تلویزیون بالای 40 میلیون تومان</a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">تلویزیون براساس حافظه داخلی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تلویزیون تا 120 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تلویزیون تا 240 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تلویزیون تا 520 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تلویزیون تا 1024 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تلویزیون بالای 1024 گیگابایت</a>
                                                        </li>
                                                    </ul>
                                                </ul>
                                                <ul className="ul_list--cecond">
                                                    <ul className="mega_meno__cecond">

                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                ابعاد صفحه نمایش
                                                            </a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 14 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 16 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 18 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 20 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 22 اینچ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">صفحه نمایش 24 اینچ</a>
                                                        </li>


                                                    </ul>
                                                </ul>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کیف تلویزیون </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کاور تلویزیون </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> شارژر تلویزیون</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">خنک کنند تلویزیون</a>
                                                </li>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">برند ترین ها</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">ایسوس</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">سامسونگ</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">اچ پی  </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">اپل</a>
                                                </li>

                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">سیستم عامل</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> لینوکس</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">آی او اس</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">ویندوز</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="child_mno-drobdown">
                                        <a href="category-search" className="run">هارد و فلش</a>
                                        <div className="mega_meno">
                                            <ul className="list_drobdown--item">
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search"
                                                    className="list__drobdown--link texr_header block_block">
                                                        همه محصولات هارد و فلش
                                                    </a>
                                                </li>
                                                <ul className="ul_list">
                                                    <ul className="mega_meno--block">
                                                    
                                                    
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">گوشی براساس قیمت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 2 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> گوشی تا 5 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 7 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی بالای 15 میلیون تومان</a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">گوشی براساس حافظه داخلی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 16 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 32 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 32 گیگا بایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 128 گیگابایت</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی تا 256 گیگابایت</a>
                                                        </li>
                                                    </ul>
                                                </ul>
                                                <ul className="ul_list--cecond">
                                                    <ul className="mega_meno__cecond">
                                                        
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                رزولوشن عکس
                                                            </a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تا ۱۳ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> تا ۱۶ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">تا ۴۸ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list_mega ">
                                                            <a href="category-search" className="mega_link--link ">تا ۶۴ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list_mega ">
                                                            <a href="category-search" className="mega_link--link ">تا ۱۰۸ مگاپیکسل</a>
                                                        </li>
                                                        <li className="list_mega border_left">
                                                            <a href="category-search" className="mega_link--link texr_header">
                                                                گوشی براساس کاربری
                                                            </a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی اقتصادی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link"> گوشی میان رده</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی دانش آموزی</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی گیمینگ</a>
                                                        </li>
                                                        <li className="list__mega--itmes">
                                                            <a href="category-search" className="list__mega--link">گوشی پرچمدار</a>
                                                        </li>
                                                        
                                                    </ul>
                                                </ul>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">لوازم جانبی</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کیف گوشی </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">کاور گوشی </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> شارژر همراه</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">گارد گوشی</a>
                                                </li>
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">برند ترین ها</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">اپل</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">سامسونگ</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">هوآوی  </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">شیائومی</a>
                                                </li>
                                            
                                                <li className="list_drobdown--items border_left--red">
                                                    <a href="category-search" className="list__drobdown--link texr_header">بر اساس نوع</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link"> ssd </a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">sd</a>
                                                </li>
                                                <li className="list_drobdown--items">
                                                    <a href="category-search" className="list__drobdown--link">vd</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="list_style">
                            <i className="fa fa-film icon-icon" aria-hidden="true"></i><a href="category-search" className="list__link">دمو محصولات</a>
                        </li>
                        <li className="list_style">
                            <i className="fa fa-percent icon-icon" aria-hidden="true"></i><a href="category-search" className="list__link">
                                تخفیفات و
                                پیشنهادات
                            </a>
                        </li>
                        <li className="list_style">
                            <i className="fa fa-user-secret icon-icon" aria-hidden="true"></i><a href="category-search" className="list__link">
                                مَسای امن
                            </a>
                        </li>
                        <li className="list_style">
                            <i className="fa fa-plus icon-icon" aria-hidden="true"></i><a href="category-search" className="list__link">مَسای پلاس</a>
                        </li>
                        <li className="list_style">
                            <i className="fa fa-link icon-icon" aria-hidden="true"></i>
                            <a href="category-search" className="list__link">مَسای کلاب</a>
                        </li>
                        <li className="list_style">
                            <i className="fa fa-handshake-o icon-icon icon-color-2" aria-hidden="true"></i>
                            <a href="category-search" className="list__link">مَسای پی</a>
                        </li>
                        <li className="list_style">
                            <a href="category-search" className="list__link">سوالی دارید؟</a>
                        </li>
                        <li className="list_style">
                            <a href="category-search" className="list__link">فروشنده شوید</a>
                        </li>
                        <ul className="nav_header-2">
                            <li className="list_style">
                                <i className="fa fa-map icon-icon" aria-hidden="true"></i>
                                <a href="/order-address" className="list__link">انتخاب موقعیت</a>
                            </li>
                        </ul>
                    </ul>
                </nav>
            </header>
            {/* <!-- end pc header --> */}
        </div>
    </header>
  )
}

export default Header