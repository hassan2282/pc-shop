import React, { useEffect, useState } from 'react'
import apiClient from '../../apiClient';

function CategorySearch() {



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
            if (!$el.hasclassName('owl-loaded')) return;

            $el.trigger('destroy.owl.carousel');
            // OwlCarousel sometimes leaves wrappers/nav/dots behind after destroy
            $el.find('.owl-stage-outer').children().unwrap();
            $el.find('.owl-stage').children().unwrap();
            $el.find('.owl-nav, .owl-dots').remove();
            $el.removeclassName('owl-center owl-loaded owl-text-select-on owl-hidden');
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
            navText: ["<div className='nav-btn prev-slide '><i className='fa fa-chevron-right'></i></div>", "<div className='nav-btn next-slide '><i className='fa fa-chevron-left'></i></div>"],
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
            navText: ['<i className="fas fa-chevron-right"></i>', '<i className="fas fa-chevron-left"></i>'],
            dots: false,
            responsiveclassName: true,
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
            navText: ['<i className="fas fa-chevron-right"></i>', '<i className="fas fa-chevron-left"></i>'],
            dots: false,
            responsiveclassName: true,
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
        <main className="search-page default space-top-30">
            <div className="container">
                <div className="row">
                    <div className="col-12 hidden-xs">
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
                    <aside className="sidebar-page col-12 col-sm-12 col-md-4 col-lg-3 ">
                        <div className="box">
                            <header className="card-header">
                                <h3 className="card-title"><span className="space-right-10">رنگ</span></h3>
                            </header>
                            <div className="box-content">
                                {/* <div className="collapse show"> */}
                                <div className="">
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> مشکی</label>
                                        <span className="color_pro_sel" style={{ backgroundColor: "#000" }}></span>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> قرمز</label>
                                        <span className="color_pro_sel" style={{ backgroundColor: "#ff0000" }}></span>

                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> زرد</label>
                                        <span className="color_pro_sel" style={{ backgroundColor: "#ffd800" }}></span>

                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> آبی</label>
                                        <span className="color_pro_sel" style={{ backgroundColor: "#0000ff" }}></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box ">

                            <header className="card-header">
                                <h3 className="card-title"><span className="space-right-10">قیمت</span></h3>
                            </header>
                            <div className="box-content space-40 space-right-25 space-left-25">
                                <div id="slider" className="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                                    <div className="noUi-base"><div className="noUi-connects">
                                        <div className="noUi-connect" style={{transform: "translate(22.449%, 0px) scale(0.622449, 1)"}}>
                                        </div></div><div className="noUi-origin" style={{transform: "translate(-775.51%, 0px)", zIndex: '5'}}>
                                            <div className="noUi-handle noUi-handle-lower" dataHandle="0" tabIndex="0" role="slider"
                                                ariaOrientation="horizontal" ariaValuemin="1000.0" ariaValuemax="42500.0"
                                                ariaValuenow="12000.0" aria-valuetext="12000 تومان"><div className="noUi-touch-area">
                                                </div><div className="noUi-tooltip">12000 تومان</div></div></div><div className="noUi-origin"
                                                    style={{transform: "translate(-153.061%, 0px)", zIndex: "4"}}>
                                            <div className="noUi-handle noUi-handle-upper" dataHandle="1" tabIndex="0" role="slider"
                                                ariaOrientation="horizontal" ariaValuemin="12000.0" ariaValuemax="50000.0"
                                                ariaValuenow="42500.0" aria-valuetext="42500 تومان"><div className="noUi-touch-area">
                                                </div><div className="noUi-tooltip">42500 تومان</div></div></div></div></div>
                            </div>


                        </div>
                        <div className="box">
                            <header className="card-header">
                                <h3 className="card-title"><span className="space-right-10">لیست برند ها</span></h3>
                            </header>
                            <div className="box-content">
                                {/* <div className="collapse show" > */}
                                <div className="" >

                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree">سامسونگ</label>
                                    </div>


                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> اپل</label>
                                    </div>

                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> هواوی</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> شیائومی</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> سونی</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> ایسوس</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> نوکیا</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <header className="card-header">
                                <h3 className="card-title"><span className="space-right-10">سیستم عامل</span></h3>
                            </header>
                            <div className="box-content">
                                {/* <div className="collapse show"> */}
                                <div className="">
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> اندروید</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> iOS</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> ویندوز فون</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> سایر</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="box-content">
                                <input type="checkbox" name="checkbox" className="bootstrap-switch" />
                                <label htmlFor="">موجود در انبار مسای</label>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <input type="checkbox" name="checkbox" className="bootstrap-switch" />
                                <label htmlFor="">ارسال فوری</label>
                            </div>
                        </div>
                    </aside>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-9">

                        <div className="listing default ">
                            <div className="listing-header default marg_all0">
                                <ul className="Search_list nav nav-tabs " role="tablist" >
                                    <li>
                                        <a className="active" data-toggle="tab" href="#suggestion" role="tab"
                                            aria-expanded="false">پیشنهاد خریداران</a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="#most-visited" role="tab" aria-expanded="false">پربازدیدترین</a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="#delivery" role="tab" aria-expanded="true">سریع‌ترین ارسال</a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="#most-seller" role="tab"
                                            aria-expanded="false">‌بیشترین فروش‌</a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="#price" role="tab"
                                            aria-expanded="false">‌براساس قیمت</a>
                                    </li>
                                </ul>
                                <div className="box_filter_search">
                                    <ul className="filter_search">
                                        <li>
                                            <i className="fa fa-times" aria-hidden="true"></i>

                                            <span>1200 تومن به بالا</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-times" aria-hidden="true"></i>

                                            <span>مشکی</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="tab-content default text-center">
                                <div className="tab-pane active" id="suggestion" role="tabpanel" aria-expanded="true">

                                    <div className="row listing-items">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_7.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#2fabd3", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#4e1dac", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff0075", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل اپل مدل Iphone 13 Pro Max
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>72,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">2%</span>
                                                            <ins><span>69,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_17.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#f00", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#0f0", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل سامسونگ مدل گلکسی A23
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>32,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_9.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#794cc3", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#18bd71", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل شیائومی مدل Poco X4 Pro 5G
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>15,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_15.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#37d3c0", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#93d337", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل سامسونگ گلکسی A32
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>16,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_19.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#f00", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#0f0", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل ردمی نوت 11SE شیائومی
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>72,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">2%</span>
                                                            <ins><span>69,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_21.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff6a00", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#278e3c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                اپل مدل Iphone 14 Pro Max
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>85,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">5%</span>
                                                            <ins><span>75,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_20.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff6a00", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#278e3c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل ردمی نوت 15  شیائومی
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>35,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>25,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_22.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff0075", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#1aea44", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#70367c", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                آیفون 12 پرو مکس اپل
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>65,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>62,200,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_23.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#272082", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#8e278c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff004e", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گلکسی اس 21 اولترا سامسونگ

                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>65,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>62,200,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane" id="most-visited" role="tabpanel" aria-expanded="false">
                                    <div className="row listing-items">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_21.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff6a00", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#278e3c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                اپل مدل Iphone 14 Pro Max
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>85,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">5%</span>
                                                            <ins><span>75,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_20.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff6a00", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#278e3c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل ردمی نوت 15  شیائومی
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>35,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>25,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_15.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#37d3c0", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#93d337", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل سامسونگ گلکسی A32
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>16,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_19.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#f00", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#0f0", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل ردمی نوت 11SE شیائومی
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>72,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">2%</span>
                                                            <ins><span>69,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_17.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#f00", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#0f0", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل سامسونگ مدل گلکسی A23
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>32,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_9.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#794cc3", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#18bd71", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل شیائومی مدل Poco X4 Pro 5G
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>15,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_22.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff0075", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#1aea44", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#70367c", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                آیفون 12 پرو مکس اپل
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>65,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>62,200,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_23.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#272082", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#8e278c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff004e", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گلکسی اس 21 اولترا سامسونگ

                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>65,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>62,200,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_7.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#2fabd3", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#4e1dac", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff0075", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل اپل مدل Iphone 13 Pro Max
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>72,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">2%</span>
                                                            <ins><span>69,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="delivery" role="tabpanel" aria-expanded="false">
                                    <div className="row listing-items">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_19.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#f00", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#0f0", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل ردمی نوت 11SE شیائومی
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>72,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">2%</span>
                                                            <ins><span>69,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_21.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff6a00", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#278e3c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                اپل مدل Iphone 14 Pro Max
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>85,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">5%</span>
                                                            <ins><span>75,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_9.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#794cc3", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#18bd71", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل شیائومی مدل Poco X4 Pro 5G
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>15,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_7.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#2fabd3", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#4e1dac", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff0075", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل اپل مدل Iphone 13 Pro Max
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>72,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">2%</span>
                                                            <ins><span>69,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_17.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#f00", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#0f0", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل سامسونگ مدل گلکسی A23
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>32,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_15.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#37d3c0", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#93d337", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل سامسونگ گلکسی A32
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>16,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_20.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff6a00", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#278e3c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل ردمی نوت 15  شیائومی
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>35,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>25,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_23.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#272082", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#8e278c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff004e", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گلکسی اس 21 اولترا سامسونگ

                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>65,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>62,200,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_22.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff0075", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#1aea44", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#70367c", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                آیفون 12 پرو مکس اپل
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>65,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>62,200,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane" id="most-seller" role="tabpanel" aria-expanded="false">
                                    <div className="row listing-items">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_9.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#794cc3", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#18bd71", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل شیائومی مدل Poco X4 Pro 5G
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>15,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_7.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#2fabd3", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#4e1dac", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff0075", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل اپل مدل Iphone 13 Pro Max
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>72,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">2%</span>
                                                            <ins><span>69,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_17.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#f00", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#0f0", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل سامسونگ مدل گلکسی A23
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>32,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_23.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#272082", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#8e278c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff004e", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گلکسی اس 21 اولترا سامسونگ

                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>65,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>62,200,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_22.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff0075", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#1aea44", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#70367c", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                آیفون 12 پرو مکس اپل
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>65,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>62,200,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_19.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#f00", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#0f0", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل ردمی نوت 11SE شیائومی
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>72,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">2%</span>
                                                            <ins><span>69,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_21.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff6a00", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#278e3c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                اپل مدل Iphone 14 Pro Max
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>85,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">5%</span>
                                                            <ins><span>75,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_15.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#37d3c0", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#93d337", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل سامسونگ گلکسی A32
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>16,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_20.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff6a00", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#278e3c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل ردمی نوت 15  شیائومی
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>35,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>25,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="tab-pane" id="price" role="tabpanel" aria-expanded="false">
                                    <div className="row listing-items">

                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_22.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff0075", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#1aea44", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#70367c", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                آیفون 12 پرو مکس اپل
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>65,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>62,200,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_19.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#f00", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#0f0", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل ردمی نوت 11SE شیائومی
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>72,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">2%</span>
                                                            <ins><span>69,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_21.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff6a00", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#278e3c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                اپل مدل Iphone 14 Pro Max
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>85,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">5%</span>
                                                            <ins><span>75,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_9.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#794cc3", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#18bd71", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل شیائومی مدل Poco X4 Pro 5G
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>15,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_7.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#2fabd3", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#4e1dac", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff0075", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل اپل مدل Iphone 13 Pro Max
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>72,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">2%</span>
                                                            <ins><span>69,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_17.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#f00", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#0f0", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل سامسونگ مدل گلکسی A23
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>32,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_23.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#272082", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#8e278c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff004e", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گلکسی اس 21 اولترا سامسونگ

                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>65,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>62,200,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_15.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#37d3c0", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#000", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#93d337", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل سامسونگ گلکسی A32
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">

                                                            <ins><span>16,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                            <div className="product-box">
                                                <div className="product-seller-details product-seller-details-item-grid">
                                                    <span className="search_prod_icon">
                                                        <i className="fa fa-search search_icon_search" aria-hidden="true"></i>
                                                        <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                    </span>


                                                    <span className="search_prod_btn">
                                                        <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <a className="product-box-img" href="single-product.html">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_20.jpg" alt="" />
                                                    <ul>
                                                        <li className="color_pro" style={{ backgroundColor: "#ff6a00", top: "7px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#278e3c", top: "20px" }}></li>
                                                        <li className="color_pro" style={{ backgroundColor: "#d500ff", top: "33px" }}></li>
                                                    </ul>
                                                </a>
                                                <div className="product-box-content">
                                                    <div className="product-box-content-row">
                                                        <div className="product_title">
                                                            <a href="#">
                                                                گوشی موبایل ردمی نوت 15  شیائومی
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-box-row product_price_search">
                                                        <div className="price">
                                                            <del><span>35,156,000<span>تومان</span></span></del>
                                                            <span className="discount_badge">10%</span>
                                                            <ins><span>25,255,000<span>تومان</span></span></ins>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default CategorySearch