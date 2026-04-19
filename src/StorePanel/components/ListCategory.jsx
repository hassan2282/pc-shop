import React, { useEffect, useState } from 'react'
import apiClient from '../../apiClient';
import DraggableProducts from './DraggableProducts';
import { Link } from 'react-router-dom';

function ListCategory() {

    const [products, setProducts] = useState();
    const BASE_URL = import.meta.env.VITE__BASEURL;


    ///////////////////////////////// Start Fetch Products ///////////////////////
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await apiClient.get('/productsForHome');
                if (res.status >= 200 && res.status < 300) {
                    setProducts(res.data);
                }

            } catch (err) {
                toast.error('خطا در واکشی محصولات');
            }
        }

        fetchProducts();
    }, []);
    ///////////////////////////////// End Fetch Products ///////////////////////


    const destroyOwl = ($elements) => {
        if (!$elements || !$elements.length) return;
        const $ = window.$;

        $elements.each(function () {
            const $el = $(this);
            if (!$el.hasClass('owl-loaded')) return;

            $el.trigger('destroy.owl.carousel');
            // OwlCarousel sometimes leaves wrappers/nav/dots behind after destroy
            $el.find('.owl-stage-outer').children().unwrap();
            $el.find('.owl-stage').children().unwrap();
            $el.find('.owl-nav, .owl-dots').remove();
            $el.removeClass('owl-center owl-loaded owl-text-select-on owl-hidden');
        });
    };

    const initOwl = (selector, options) => {
        if (!(window.$ && window.$.fn && window.$.fn.owlCarousel)) return;
        const $ = window.$;
        const $elements = $(selector);
        if (!$elements.length) return;
        destroyOwl($elements);
        $elements.owlCarousel(options);
    };

    useEffect(() => {
        // NOTE: OwlCarousel hides ".owl-carousel" by default until initialized (adds "owl-loaded").
        // We must (re)initialize after React renders the DOM.
        if (!(window.$ && window.$.fn && window.$.fn.owlCarousel)) return;

        initOwl('.slider_main', {
            rtl: true,
            dots: true,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 100,
            mouseDrag: true,
            nav: true,
            navText: ["<div class='nav-btn prev-slide '><i class='fa fa-chevron-right'></i></div>", "<div class='nav-btn next-slide '><i class='fa fa-chevron-left'></i></div>"],
            responsive: {
                0: { items: 1, dots: false },
                1200: { items: 1 },
                767: { items: 1 },
                600: { items: 1, dots: false },
                480: { items: 1, dots: false }
            }
        });

        initOwl('.product-carousel', {
            rtl: true,
            margin: 10,
            nav: true,
            navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
            dots: false,
            responsiveClass: true,
            responsive: {
                0: { items: 2, slideBy: 1 },
                576: { items: 2, slideBy: 1 },
                768: { items: 4, slideBy: 2 },
                992: { items: 5, slideBy: 2 },
                1400: { items: 6, slideBy: 3 }
            }
        });

        initOwl('.brand-slider .owl-carousel', {
            rtl: true,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 200,
            responsive: {
                0: { items: 1 },
                1200: { items: 7 },
                992: { items: 6 },
                768: { items: 5 },
                600: { items: 3 },
                480: { items: 2 }
            }
        });

        return () => {
            if (!(window.$ && window.$.fn && window.$.fn.owlCarousel)) return;
            const $ = window.$;
            destroyOwl($('.slider_main'));
            destroyOwl($('.product-carousel'));
            destroyOwl($('.brand-slider .owl-carousel'));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!products) return;

        let cancelled = false;
        let tries = 0;
        const maxTries = 15;

        const productCarouselOptions = {
            rtl: true,
            margin: 10,
            nav: true,
            navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
            dots: false,
            responsiveClass: true,
            responsive: {
                0: { items: 2, slideBy: 1 },
                576: { items: 2, slideBy: 1 },
                768: { items: 4, slideBy: 2 },
                992: { items: 5, slideBy: 2 },
                1400: { items: 6, slideBy: 3 }
            }
        };

        const bidSliderOptions = {
            rtl: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            loop: true,
            dots: false,
            onInitialized: function () {
                if (cancelled) return;
                window.$('.slide-progress').css({
                    width: '100%',
                    transition: 'width 5000ms'
                });
            },
            onTranslate: function () {
                if (cancelled) return;
                window.$('.slide-progress').css({
                    width: 0,
                    transition: 'width 0s'
                });
            },
            onTranslated: function () {
                if (cancelled) return;
                window.$('.slide-progress').css({
                    width: '100%',
                    transition: 'width 5000ms'
                });
            }
        };

        const tryInit = () => {
            if (cancelled) return;
            if (!(window.$ && window.$.fn && window.$.fn.owlCarousel)) return;

            // Wait until React has actually painted the products DOM
            window.setTimeout(() => {
                if (cancelled) return;
                initOwl('.product-carousel', productCarouselOptions);
                initOwl('#bid-s', bidSliderOptions);
            }, 0);
        };

        const intervalId = window.setInterval(() => {
            tries += 1;
            if (cancelled) {
                window.clearInterval(intervalId);
                return;
            }

            if (window.$ && window.$.fn && window.$.fn.owlCarousel) {
                tryInit();
                window.clearInterval(intervalId);
                return;
            }

            if (tries >= maxTries) {
                window.clearInterval(intervalId);
            }
        }, 200);

        // Also attempt immediately
        tryInit();

        return () => {
            cancelled = true;
            window.clearInterval(intervalId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);




    return (
        <main className="main default space-top-10">

            <div className="container-fluid">
                <div className="slider_main owl-carousel owl-theme">
                    <div className="item">
                        <Link to="/store/category-search">
                            <svg xmlns="http://www.w3.org/2000/svg" className="svg_Masai" width="231" height="75" viewBox="0 0 231 75" fill="none" style={{ float: "right", marginBottom: "-100px", position: "relative", zIndex: "9", marginTop: '0px', marginRight: "30px" }}>
                                <path clipRule="evenodd" d="M0 0C31.5006 0.949537 50.52 17.872 56.1955 26.4544L55.986 25.8011L82.4924 58.631C99.3032 79.4521 131.038 79.4521 147.849 58.6309L174.356 25.8011L174.146 26.4544C179.822 17.872 198.844 0.949537 230.349 0H0Z" fill="#FCFCFC" fillRule="" style={{ fill: "#fff" }}></path>
                            </svg>
                            <img src="/src/StorePanel/assets/img/banner_img/02/01.jpg" className="img-fluid imgslider" alt="" />
                        </Link>
                    </div>
                    <div className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="svg_Masai" width="231" height="75" viewBox="0 0 231 75" fill="none" style={{ float: "right", marginBottom: "-100px", position: "relative", zIndex: "9", marginTop: '0px', marginRight: "30px" }}>
                            <path clipRule="evenodd" d="M0 0C31.5006 0.949537 50.52 17.872 56.1955 26.4544L55.986 25.8011L82.4924 58.631C99.3032 79.4521 131.038 79.4521 147.849 58.6309L174.356 25.8011L174.146 26.4544C179.822 17.872 198.844 0.949537 230.349 0H0Z" fill="#FCFCFC" fillRule="" style={{ fill: "#fff" }}></path>
                        </svg>
                        <Link to="/store/category-search">
                            <img src="/src/StorePanel/assets/img/banner_img/02/02.jpg" className="img-fluid imgslider" alt="" />
                        </Link>
                    </div>
                    <div className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="svg_Masai" width="231" height="75" viewBox="0 0 231 75" fill="none" style={{ float: "right", marginBottom: "-100px", position: "relative", zIndex: "9", marginTop: '0px', marginRight: "30px" }}>
                            <path clipRule="evenodd" d="M0 0C31.5006 0.949537 50.52 17.872 56.1955 26.4544L55.986 25.8011L82.4924 58.631C99.3032 79.4521 131.038 79.4521 147.849 58.6309L174.356 25.8011L174.146 26.4544C179.822 17.872 198.844 0.949537 230.349 0H0Z" fill="#FCFCFC" fillRule="" style={{ fill: "#fff" }}></path>
                        </svg>
                        <Link to="/store/category-search">
                            <img src="/src/StorePanel/assets/img/banner_img/02/03.jpg" className="img-fluid imgslider" alt="" />
                        </Link>
                    </div>
                </div>


            </div>
            <div className="container space-top-50 ">
                <div className="space-bottom-30 brand-slider card border_all ">
                    <header className="card-header">
                        <h3 className="card-title"><span>بیشترین فروش</span></h3>
                    </header>

                    <div className="row">

                        <div className="col-3  contact_category  text-center">
                            <div className="row">
                                <div className="contact_category_left col-12 col-lg-6">
                                    <img src="/src/StorePanel/assets/img/product_img/p_3.jpg" className="sell_category_img" />
                                    <span className="hidden-xs hidden-md" >
                                        1
                                    </span>
                                </div>
                                <div className="contact_category_right hidden-xs hidden-md col-6 col-lg-6">
                                    <p className="title_cat1 light-black"> هدفون گیمینگ انکر مدل  </p>
                                    <p className="title_cat2 light-black">انکر مدل Soundcore Strike 1</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3  contact_category  text-center">
                            <div className="row">
                                <div className="contact_category_left col-12 col-lg-6">
                                    <img src="/src/StorePanel/assets/img/product_img/p_7.jpg" className="sell_category_img" />
                                    <span className="hidden-xs hidden-md" >
                                        2
                                    </span>
                                </div>
                                <div className="contact_category_right hidden-xs hidden-md col-6 col-lg-6">
                                    <p className="title_cat1 light-black"> گوشی موبایل اپل مدل Iphone 13 Pro Max  </p>
                                    <p className="title_cat2 light-black">گوشی موبایل اپل مدل Iphone 13 Pro Max</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3  contact_category  text-center">
                            <div className="row">
                                <div className="contact_category_left col-12 col-lg-6">
                                    <img src="/src/StorePanel/assets/img/product_img/p_17.jpg" className="sell_category_img" />
                                    <span className="hidden-xs hidden-md" >
                                        3
                                    </span>
                                </div>
                                <div className="contact_category_right hidden-xs hidden-md col-6 col-lg-6">
                                    <p className="title_cat1 light-black">گوشی موبایل سامسونگ مدل گلکسی A23   </p>
                                    <p className="title_cat2 light-black">گوشی موبایل سامسونگ مدل گلکسی A23  </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3  contact_category  text-center">
                            <div className="row">
                                <div className="contact_category_left col-12 col-lg-6">
                                    <img src="/src/StorePanel/assets/img/product_img/p_9.jpg" className="sell_category_img" />
                                    <span className="hidden-xs hidden-md" >
                                        4
                                    </span>
                                </div>
                                <div className="contact_category_right hidden-xs hidden-md col-6 col-lg-6">
                                    <p className="title_cat1 light-black"> گوشی موبایل شیائومی مدل Poco X4 Pro 5G </p>
                                    <p className="title_cat2 light-black">گوشی موبایل شیائومی مدل Poco X4 Pro 5G</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3  contact_category  text-center">
                            <div className="row">
                                <div className="contact_category_left col-12 col-lg-6">
                                    <img src="/src/StorePanel/assets/img/product_img/p_15.jpg" className="sell_category_img" />
                                    <span className="hidden-xs hidden-md" >
                                        5
                                    </span>
                                </div>
                                <div className="contact_category_right hidden-xs hidden-md col-6 col-lg-6">
                                    <p className="title_cat1 light-black"> گوشی موبایل سامسونگ گلکسی A32  </p>
                                    <p className="title_cat2 light-black">گوشی موبایل سامسونگ گلکسی A32 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3  contact_category  text-center">
                            <div className="row">
                                <div className="contact_category_left col-12 col-lg-6">
                                    <img src="/src/StorePanel/assets/img/product_img/p_19.jpg" className="sell_category_img" />
                                    <span className="hidden-xs hidden-md" >
                                        6
                                    </span>
                                </div>
                                <div className="contact_category_right hidden-xs hidden-md col-6 col-lg-6">
                                    <p className="title_cat1 light-black"> گوشی موبایل ردمی نوت 11SE شیائومی  </p>
                                    <p className="title_cat2 light-black">گوشی موبایل ردمی نوت 11SE شیائومی</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3  contact_category  text-center">
                            <div className="row">
                                <div className="contact_category_left col-12 col-lg-6">
                                    <img src="/src/StorePanel/assets/img/product_img/p_21.jpg" className="sell_category_img" />
                                    <span className="hidden-xs hidden-md" >
                                        7
                                    </span>
                                </div>
                                <div className="contact_category_right hidden-xs hidden-md col-6 col-lg-6">
                                    <p className="title_cat1 light-black"> اپل مدل Iphone 14 Pro Max  </p>
                                    <p className="title_cat2 light-black">اپل مدل Iphone 14 Pro Max </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3  contact_category  text-center">
                            <div className="row">
                                <div className="contact_category_left col-12 col-lg-6">
                                    <img src="/src/StorePanel/assets/img/product_img/p_20.jpg" className="sell_category_img" />
                                    <span className="hidden-xs hidden-md" >
                                        8
                                    </span>
                                </div>
                                <div className="contact_category_right hidden-xs hidden-md col-6 col-lg-6">
                                    <p className="title_cat1 light-black"> گوشی موبایل ردمی نوت 15 شیائومی  </p>
                                    <p className="title_cat2 light-black">گوشی موبایل ردمی نوت 15 شیائومی </p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="widget widget-product card border_all  pad_time_prod" id="shegeft_1">
                                    <header className="card-header">
                                        <h3 className="card-title">
                                            <span>
                                                <img src="/src/StorePanel/assets/img/shegeft_1.png" />
                                            </span>
                                        </h3>
                                        <div className="countdown-timer">
                                            <ul className="text_countdown">
                                                <li className="number_countdown">0</li>
                                                <li>روز</li>
                                            </ul>
                                            <ul className="text_countdown">
                                                <li className="number_countdown">0</li>
                                                <li>ساعت</li>
                                            </ul>
                                            <ul className="text_countdown">
                                                <li className="number_countdown">0</li>
                                                <li>دقیقه</li>
                                            </ul>
                                            <ul className="text_countdown">
                                                <li className="number_countdown">0</li>
                                                <li>ثانیه</li>
                                            </ul>
                                        </div>
                                    </header>

                                    {
                                        products &&
                                        <DraggableProducts products={products.slice(0, 10)} />
                                    }
                                    
                                    <a href="#" className="view_more hover:scale-95 active:scale-92">مشاهده بیشتر</a>

                                </div>
                            </div>
                        </div>

                    </div>







                    <div className="col-12">
                        <div className="brand-slider brand-slider-cat card border_all ">
                            <header className="card-header">
                                <h3 className="card-title"><span>بر اساس برند</span></h3>
                            </header>
                            <div className="owl-carousel">
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/brands/brand-1.jpg" alt="" /> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/brands/brand-2.jpg" alt="" /> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/brands/brand-3.jpg" alt="" /> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/brands/brand-4.jpg" alt="" /> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/brands/brand-5.jpg" alt="" /> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/brands/brand-6.jpg" alt="" /> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/brands/brand-7.jpg" alt="" /> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/brands/brand-8.jpg" alt="" /> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/brands/brand-9.jpg" alt="" /> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/brands/brand-10.jpg" alt="" /> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-12">
                        <div className="brand-slider brand-slider-cat2 card border_all ">
                            <header className="card-header">
                                <h3 className="card-title"><span>بر اساس قیمت</span></h3>
                            </header>
                            <div className="owl-carousel">
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/Price/02.jpg" alt="" /> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/Price/03.jpg" alt="" /> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/Price/04.jpg" alt="" /> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/Price/05.jpg" alt="" /> </a>
                                </div>
                                <div className="item borderitem">
                                    <a href="#"> <img src="/src/StorePanel/assets/img/Price/06.jpg" alt="" /> </a>
                                </div>


                            </div>
                        </div>
                    </div> */}



                </div>

                <div className="row banner-ads">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="widget-banner card border_all">
                                    <Link to="/store/category-search" target="_blank">
                                        <img className="img-fluid" src="/src/StorePanel/assets/img/banner_img/img-7.jpg" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="widget-banner card">
                                    <Link to="/store/category-search" target="_top">
                                        <img className="img-fluid" src="/src/StorePanel/assets/img/banner_img/img-8.jpg" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12">
                        <div className="brand-slider card border_all ">
                            <header className="card-header">
                                <h3 className="card-title"><span>دسته بندی ها</span></h3>
                            </header>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6 col-md-2 contact-bigicon">

                                            <a href="#" target="_blank">
                                                <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-1.png" alt="" />
                                                <b className="title-3 light-black">کالای دیجیتال</b>
                                            </a>

                                        </div>
                                        <div className="col-6 col-md-2 contact-bigicon">

                                            <a href="#" target="_top">
                                                <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-2.png" alt="" />
                                                <b className="title-3 light-black">مودم</b>
                                            </a>

                                        </div>
                                        <div className="col-6 col-md-2 contact-bigicon">

                                            <a href="#" target="_blank">
                                                <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-3.png" alt="" />
                                                <b className="title-3 light-black">تبلت</b>
                                            </a>

                                        </div>
                                        <div className="col-6 col-md-2 contact-bigicon">

                                            <a href="#" target="_top">
                                                <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-4.png" alt="" />
                                                <b className="title-3 light-black">ماوس</b>
                                            </a>

                                        </div>
                                        <div className="col-6 col-md-2 contact-bigicon">

                                            <a href="#" target="_top">
                                                <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-5.png" alt="" />
                                                <b className="title-3 light-black">هندزفری</b>
                                            </a>

                                        </div>
                                        <div className="col-6 col-md-2 contact-bigicon">

                                            <a href="#" target="_top">
                                                <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-6.png" alt="" />
                                                <b className="title-3 light-black">ساعت هوشمند</b>
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </main>
    )
}

export default ListCategory