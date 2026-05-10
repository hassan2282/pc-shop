import React, { Suspense, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import apiClient from '../../apiClient'
import ProductsAdvanceShow from './ProductsAdvanceShow';
import ProductsSimpleShow from './ProductsSimpleShow';
import DraggableProducts from './DraggableProducts';
import BlogShow from './BlogShow';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { TbLoader, TbLoader2 } from 'react-icons/tb';

function Index() {

    const [products, setProducts] = useState();
    const BASE_URL = import.meta.env.VITE__BASEURL;


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


    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const res = await apiClient.get('/productsForHome');
    //             if (res.status >= 200 && res.status < 300) {
    //                 setProducts(res.data);
    //             }

    //         } catch (err) {
    //             toast.error('خطا در واکشی محصولات');
    //         }
    //     }

    //     fetchProducts();
    // }, []);



    const { data, error, isLoading, isError } = useQuery(
        'productsForHome', // کلید کش
        async () => {
            const res = await apiClient.get('/productsForHome');
            setProducts(res.data);
            return res.data;
        }
    );
    if (isLoading) return <div className='flex w-full justify-center min-h-96 items-center'><TbLoader2 color='blue' size={28} className='animate-spin' /></div>;
    if (isError) {
        toast.error('خطا در واکشی محصولات');
        return <div>Error</div>;
    }


    return (
        <>

            <main className="main default space-top-10">

                <div className="container-fluid">
                    <div className="slider_main owl-carousel owl-theme">

                        <div className="item">
                            <a href="category-search">
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg_Masai mb-[-100px] relative z-10 mt-0 mr-[30px] float-right" width="231" height="75" viewBox="0 0 231 75" fill="none" >
                                    <path clipRule="evenodd" d="M0 0C31.5006 0.949537 50.52 17.872 56.1955 26.4544L55.986 25.8011L82.4924 58.631C99.3032 79.4521 131.038 79.4521 147.849 58.6309L174.356 25.8011L174.146 26.4544C179.822 17.872 198.844 0.949537 230.349 0H0Z" fill="#FCFCFC" fillRule="" className="text-red-500" ></path>
                                </svg>
                                <img src="/src/StorePanel/assets/img/banner_img/01/16781944460617.jpg" className="img-fluid imgslider" alt="" />
                            </a>
                        </div>
                        <div className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="svg_Masai mb-[-100px] relative z-10 mt-0 mr-[30px] float-right" width="231" height="75" viewBox="0 0 231 75" fill="none">
                                <path clipRule="evenodd" d="M0 0C31.5006 0.949537 50.52 17.872 56.1955 26.4544L55.986 25.8011L82.4924 58.631C99.3032 79.4521 131.038 79.4521 147.849 58.6309L174.356 25.8011L174.146 26.4544C179.822 17.872 198.844 0.949537 230.349 0H0Z" fill="#FCFCFC" fillRule="" className="text-red-500" ></path>
                            </svg>
                            <a href="category-search">
                                <img src="/src/StorePanel/assets/img/banner_img/01/16785213091818.jpg" className="img-fluid imgslider" alt="" />
                            </a>
                        </div>
                        <div className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="svg_Masai mb-[-100px] relative z-10 mt-0 mr-[30px] float-right" width="231" height="75" viewBox="0 0 231 75" fill="none">
                                <path clipRule="evenodd" d="M0 0C31.5006 0.949537 50.52 17.872 56.1955 26.4544L55.986 25.8011L82.4924 58.631C99.3032 79.4521 131.038 79.4521 147.849 58.6309L174.356 25.8011L174.146 26.4544C179.822 17.872 198.844 0.949537 230.349 0H0Z" fill="#FCFCFC" fillRule="" className="text-red-500" ></path>
                            </svg>
                            <a href="category-search">
                                <img src="/src/StorePanel/assets/img/banner_img/01/16789575390919.jpg" className="img-fluid imgslider" alt="" />
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
                                        <img src="/src/StorePanel/assets/img/Masai/minilogo/1.png" className="minilogo_w" />
                                        <b className="title-3 light-black">مارکت فروشگاه</b>
                                    </div>
                                </div>
                                <div className="col-3  contact-miniicon  text-center">
                                    <div className="space-5">
                                        <img src="/src/StorePanel/assets/img/Masai/minilogo/2.png" className="minilogo_w" />
                                        <b className="title-3 light-black">قیمت مناسب</b>
                                    </div>
                                </div>
                                <div className="col-3  contact-miniicon  text-center">
                                    <div className="space-5">
                                        <img src="/src/StorePanel/assets/img/Masai/minilogo/3.png" className="minilogo_w" />
                                        <b className="title-3 light-black">کیفیت بالا</b>
                                    </div>
                                </div>

                                <div className=" col-3  contact-miniicon  text-center">
                                    <div className="space-5">
                                        <img src="/src/StorePanel/assets/img/Masai/minilogo/4.png" className="minilogo_w" />
                                        <b className="title-3 light-black">پرداخت امن</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">

                                <div className="col-3 contact-miniicon  text-center">
                                    <div className="space-5">
                                        <img src="/src/StorePanel/assets/img/Masai/minilogo/5.png" className="minilogo_w" />
                                        <b className="title-3 light-black">نماد اعتماد</b>
                                    </div>
                                </div>
                                <div className="col-3  contact-miniicon  text-center">
                                    <div className="space-5">
                                        <img src="/src/StorePanel/assets/img/Masai/minilogo/6.png" className="minilogo_w" />
                                        <b className="title-3 light-black">ارسال سریع</b>
                                    </div>
                                </div>
                                <div className="col-3  contact-miniicon  text-center">
                                    <div className="space-5">
                                        <img src="/src/StorePanel/assets/img/Masai/minilogo/7.png" className="minilogo_w" />
                                        <b className="title-3 light-black">هدیه خرید</b>
                                    </div>
                                </div>
                                <div className="col-3  contact-miniicon  text-center">
                                    <div className="space-5">
                                        <img src="/src/StorePanel/assets/img/Masai/minilogo/8.png" className="minilogo_w" />
                                        <b className="title-3 light-black">با ما همراه باشید</b>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="row">


                        <Suspense fallback={<div>Loading...</div>}>
                            <>
                                <ProductsAdvanceShow products={data.slice(0, 6)} />
                                <ProductsSimpleShow products={data.slice(0, 8)} />
                            </>
                        </Suspense>



                        <div className="col-12">

                            <div className="row banner-ads">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6 col-lg-3">
                                            <div className="widget-banner card border_all">
                                                <Link to={"/store/category-search"}>
                                                    <img className="img-fluid" src="/src/StorePanel/assets/img/banner_img/img-3.jpg" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3">
                                            <div className="widget-banner card">
                                                <Link to={"/store/category-search"}>
                                                    <img className="img-fluid" src="/src/StorePanel/assets/img/banner_img/img-4.jpg" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3">
                                            <div className="widget-banner card border_all">
                                                <Link to={"/store/category-search"}>
                                                    <img className="img-fluid" src="/src/StorePanel/assets/img/banner_img/img-5.jpg" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3">
                                            <div className="widget-banner card">
                                                <Link to={"/store/category-search"}>
                                                    <img className="img-fluid" src="/src/StorePanel/assets/img/banner_img/img-6.jpg" alt="" />
                                                </Link>
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
                                            <div className="flex flex-row w-full justify-around items-center">
                                                <h3 className="card-title flex basis-1/2 max-sm:hidden">
                                                    <span>
                                                        <img src="/src/StorePanel/assets/img/shegeft_1.png" />
                                                    </span>
                                                </h3>
                                                <div dir="ltr" className="flex flex-row relative max-sm:w-[1rem] max-sm:space-x-0 space-x-2 basis-1/2 max-sm:justify-center justify-start items-center">
                                                    <ul className="text_countdown">
                                                        <li className="border-2 p-3 max-sm:border-0 max-sm: border-gray-700 rounded-xl number_countdown">5</li>
                                                        <li>روز</li>
                                                    </ul>
                                                    <ul className="text_countdown">
                                                        <li className="border-2 p-3 max-sm:border-0 max-sm: border-gray-700 rounded-xl number_countdown">10</li>
                                                        <li>ساعت</li>
                                                    </ul>
                                                    <ul className="text_countdown">
                                                        <li className="border-2 p-3 max-sm:border-0 max-sm: border-gray-700 rounded-xl number_countdown">25</li>
                                                        <li>دقیقه</li>
                                                    </ul>
                                                    <ul className="text_countdown">
                                                        <li className="border-2 p-3 max-sm:border-0 max-sm: border-gray-700 rounded-xl number_countdown">08</li>
                                                        <li>ثانیه</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </header>


                                        {
                                            data &&

                                            <DraggableProducts products={data.slice(0, 10)} />
                                        }

                                        <a href="category-search" className="view_more">مشاهده بیشتر</a>

                                    </div>
                                </div>
                            </div>
                            <div className="row banner-ads">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <div className="widget-banner card border_all">
                                                <Link to={"/store/category-search"}>
                                                    <img className="img-fluid" src="/src/StorePanel/assets/img/banner_img/img-7.jpg" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="widget-banner card">
                                                <Link to={"/store/category-search"}>
                                                    <img className="img-fluid" src="/src/StorePanel/assets/img/banner_img/img-8.jpg" alt="" />
                                                </Link>
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
                                                <span><img src="/src/StorePanel/assets/img/seller_1.png" /></span>
                                            </h3>
                                        </header>
                                        {
                                            data &&

                                            <DraggableProducts products={[...data]
                                                .sort(() => 0.5 - Math.random())
                                                .slice(0, 10)}
                                            />
                                        }
                                        <a href="category-search" className="view_more">مشاهده بیشتر  </a>

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
                                        <Link to={"/store/category-search"}>
                                            <img className="img-fluid" src="/src/StorePanel/assets/img/banner_img/img-9.jpg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-12">
                            <div className="brand-slider card border_all bglight">
                                <header className="card-header">
                                    <h3 className="card-title"><span>دسته بندی های فروشگاه</span></h3>
                                </header>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-6 col-md-2 contact-bigicon">

                                                <Link to={"/store/category-search"}>
                                                    <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-1.png" alt="" />
                                                    <b className="title-3 light-black">کالای دیجیتال</b>
                                                </Link>

                                            </div>
                                            <div className="col-6 col-md-2 contact-bigicon">

                                                <Link to={"/store/category-search"}>
                                                    <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-2.png" alt="" />
                                                    <b className="title-3 light-black">مودم</b>
                                                </Link>

                                            </div>
                                            <div className="col-6 col-md-2 contact-bigicon">

                                                <Link to={"/store/category-search"}>
                                                    <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-3.png" alt="" />
                                                    <b className="title-3 light-black">تبلت</b>
                                                </Link>

                                            </div>
                                            <div className="col-6 col-md-2 contact-bigicon">

                                                <Link to={"/store/category-search"}>
                                                    <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-4.png" alt="" />
                                                    <b className="title-3 light-black">ماوس</b>
                                                </Link>

                                            </div>
                                            <div className="col-6 col-md-2 contact-bigicon">

                                                <Link to={"/store/category-search"}>
                                                    <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-5.png" alt="" />
                                                    <b className="title-3 light-black">هندزفری</b>
                                                </Link>

                                            </div>
                                            <div className="col-6 col-md-2 contact-bigicon">

                                                <Link to={"/store/category-search"}>
                                                    <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-6.png" alt="" />
                                                    <b className="title-3 light-black">ساعت هوشمند</b>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-6 col-md-2 contact-bigicon">

                                                <Link to={"/store/category-search"}>
                                                    <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-7.png" alt="" />
                                                    <b className="title-3 light-black">کنسول خانگی</b>
                                                </Link>

                                            </div>
                                            <div className="col-6 col-md-2 contact-bigicon">

                                                <Link to={"/store/category-search"}>
                                                    <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-8.png" alt="" />
                                                    <b className="title-3 light-black">کیبورد (صفحه کلید)</b>
                                                </Link>

                                            </div>
                                            <div className="col-6 col-md-2 contact-bigicon">

                                                <Link to={"/store/category-search"}>
                                                    <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-9.png" alt="" />
                                                    <b className="title-3 light-black">اسپیکر (بلندگو)</b>
                                                </Link>

                                            </div>
                                            <div className="col-6 col-md-2 contact-bigicon">

                                                <Link to={"/store/category-search"}>
                                                    <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-10.png" alt="" />
                                                    <b className="title-3 light-black">لپ تاپ و الترابوک</b>
                                                </Link>

                                            </div>
                                            <div className="col-6 col-md-2 contact-bigicon">

                                                <Link to={"/store/category-search"}>
                                                    <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-11.png" alt="" />
                                                    <b className="title-3 light-black">موبایل</b>
                                                </Link>

                                            </div>
                                            <div className="col-6 col-md-2 contact-bigicon">

                                                <Link to={"/store/category-search"}>
                                                    <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-12.png" alt="" />
                                                    <b className="title-3 light-black">هدفون، هدست </b>
                                                </Link>

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
                                        <Link to={"/store/category-search"}> <img src="/src/StorePanel/assets/img/brands/brand-1.jpg" alt="" /> </Link>
                                    </div>
                                    <div className="item borderitem">
                                        <Link to={"/store/category-search"}> <img src="/src/StorePanel/assets/img/brands/brand-2.jpg" alt="" /> </Link>
                                    </div>
                                    <div className="item borderitem">
                                        <Link to={"/store/category-search"}> <img src="/src/StorePanel/assets/img/brands/brand-3.jpg" alt="" /> </Link>
                                    </div>
                                    <div className="item borderitem">
                                        <Link to={"/store/category-search"}> <img src="/src/StorePanel/assets/img/brands/brand-4.jpg" alt="" /> </Link>
                                    </div>
                                    <div className="item borderitem">
                                        <Link to={"/store/category-search"}> <img src="/src/StorePanel/assets/img/brands/brand-5.jpg" alt="" /> </Link>
                                    </div>
                                    <div className="item borderitem">
                                        <Link to={"/store/category-search"}> <img src="/src/StorePanel/assets/img/brands/brand-6.jpg" alt="" /> </Link>
                                    </div>
                                    <div className="item borderitem">
                                        <Link to={"/store/category-search"}> <img src="/src/StorePanel/assets/img/brands/brand-7.jpg" alt="" /> </Link>
                                    </div>
                                    <div className="item borderitem">
                                        <Link to={"/store/category-search"}> <img src="/src/StorePanel/assets/img/brands/brand-8.jpg" alt="" /> </Link>
                                    </div>
                                    <div className="item borderitem">
                                        <Link to={"/store/category-search"}> <img src="/src/StorePanel/assets/img/brands/brand-9.jpg" alt="" /> </Link>
                                    </div>
                                    <div className="item borderitem">
                                        <Link to={"/store/category-search"}> <img src="/src/StorePanel/assets/img/brands/brand-10.jpg" alt="" /> </Link>
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


                                <BlogShow />



                            </div>
                        </div>
                    </div>


                </div>

            </main>


        </>
    )
}

export default Index
