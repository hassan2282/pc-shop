import React, { useEffect, useRef, useState } from 'react'
import apiClient from '../../apiClient';
import Paginate from '../../AdminPanel/Components/Paginate'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function CategorySearch() {


    const [products, setProducts] = useState();
    const BASE_URL = import.meta.env.VITE__BASEURL;
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1);
    const [category, setCategory] = useState('');
    const [sortFilter, setSortFilter] = useState('newest');
    const [minRange, setMinRange] = useState(0);
    const [maxRange, setMaxRange] = useState(100000000);
    const dispatch = useDispatch();


    ///////////////////////////////// Start Fetch Products ///////////////////////
    useEffect(() => {
        const fetchProducts = async (page, category, sortFilter, minRange, maxRange) => {
            try {
                const res = await apiClient.get(`/productsWithFilters?page=${page}&category=${category}&sortFilter=${sortFilter}&minRange=${minRange}&maxRange=${maxRange}`);
                if (res.status >= 200 && res.status < 300) {
                    setCount(Math.ceil(res.data[0]));
                    setProducts(res.data[1].data);
                }

            } catch (err) {
                toast.error('خطا در واکشی محصولات');
            }
        }

        fetchProducts(page, category, sortFilter, minRange, maxRange);
    }, [page, category, sortFilter, minRange, maxRange]);
    ///////////////////////////////// End Fetch Products ///////////////////////


    const handlePurchase = (product) => {

        dispatch({
            type: "purchase",
            payload: {
                id: product.id,
                media: product.media[0]?.name,
                price: product.price,
                title: product.title,
                count: product.count ? (product.count + 1) : 1,
            },
        });

        toast.success('محصول به سبد خرید اضافه شد');

    };



    const CategoryFilterHandler = (e) => {
        const { name } = e.target;
        setSortFilter(name)
    }


    const minRangeHandler = (e) => {
        setMinRange(e.target.value);
    }

    const maxRangeHandler = (e) => {
        setMaxRange(e.target.value);
    }


    const radioButtonFilter = (e) => {
        const { value } = e.target
        setCategory(value);
    }


    const destroyOwl = ($elements) => {
    if (!$elements || !$elements.length) return;
    const $ = window.$;

    $elements.each(function () {
        const $el = $(this);
        if (!$el.hasClass('owl-loaded')) return; // Changed hasclassName to hasClass

        $el.trigger('destroy.owl.carousel');
        $el.find('.owl-stage-outer').children().unwrap();
        $el.find('.owl-stage').children().unwrap();
        $el.find('.owl-nav, .owl-dots').remove();
        $el.removeClass('owl-center owl-loaded owl-text-select-on owl-hidden'); // Changed removeclassName to removeClass
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

                                            <div onClick={() => setCategory(29)} target="_blank" className='cursor-pointer'>
                                                <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-1.png" alt="" />
                                                <b className="title-3 light-black">لپ تاپ</b>
                                            </div>

                                        </div>
                                        <div className="col-6 col-md-2 contact-bigicon">

                                            <div onClick={() => setCategory(1)} target="_top" className='cursor-pointer'>
                                                <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-2.png" alt="" />
                                                <b className="title-3 light-black">کامپیوتر</b>
                                            </div>

                                        </div>
                                        <div className="col-6 col-md-2 contact-bigicon">

                                            <div onClick={() => setCategory(8)} target="_blank" className='cursor-pointer'>
                                                <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-3.png" alt="" />
                                                <b className="title-3 light-black">موبایل و تبلت</b>
                                            </div>

                                        </div>
                                        <div className="col-6 col-md-2 contact-bigicon">

                                            <div onClick={() => setCategory(20)} target="_top" className='cursor-pointer'>
                                                <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-4.png" alt="" />
                                                <b className="title-3 light-black">لوازم جانبی کامپیوتر</b>
                                            </div>

                                        </div>
                                        <div className="col-6 col-md-2 contact-bigicon">

                                            <div onClick={() => setCategory(34)} target="_top" className='cursor-pointer'>
                                                <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-5.png" alt="" />
                                                <b className="title-3 light-black">لوازم جانبی لپ‌تاپ</b>
                                            </div>

                                        </div>
                                        <div className="col-6 col-md-2 contact-bigicon">

                                            <div onClick={() => setCategory(46)} target="_top" className='cursor-pointer'>
                                                <img className="img-responsive imgpad" src="/src/StorePanel/assets/img/Masai/bigicon/img-6.png" alt="" />
                                                <b className="title-3 light-black">سایر ...</b>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <aside className="sidebar-page col-12 col-sm-12 col-md-4 col-lg-3 ">
                        <div className="box">
                            <header className="card-header">
                                <h3 className="card-title"><span className="space-right-10">دسته‌بندی‌ها</span></h3>
                            </header>
                            <div className="box-content">
                                {/* <div className="collapse show"> */}
                                <div className="">
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input value='29' onChange={radioButtonFilter} type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> لپ تاپ</label>
                                        <span className="color_pro_sel" style={{ backgroundColor: "#000" }}></span>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input value='1' onChange={radioButtonFilter} type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> کامپیوتر</label>
                                        <span className="color_pro_sel" style={{ backgroundColor: "#ff0000" }}></span>

                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input value='8' onChange={radioButtonFilter} type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> موبایل و تبلت</label>
                                        <span className="color_pro_sel" style={{ backgroundColor: "#ffd800" }}></span>

                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input value='34' onChange={radioButtonFilter} type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> لوازم جانبی لپ‌تاپ</label>
                                        <span className="color_pro_sel" style={{ backgroundColor: "#0000ff" }}></span>

                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input value='46' onChange={radioButtonFilter} type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> سایر ...</label>
                                        <span className="color_pro_sel" style={{ backgroundColor: "#f34fe0" }}></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box ">
                            <header className="w-full h-full d-flex flex-col p-2 justify-center rounded-xl">
                                <span className="space-right-10 text-muted">کمترین قیمت</span>
                                <input onChange={minRangeHandler} type='range' step="1000000" min="0" max="100000000" className="w-100 cursor-pointer" />
                                <span className="space-right-10 text-blue-700">{minRange / 1000000} میلیون</span>
                                <hr />
                                <span className="space-right-10 text-muted">بیشترین قیمت</span>
                                <input onChange={maxRangeHandler} type='range' step="1000000" min="0" max="100000000" className="w-100 cursor-pointer" />
                                <span className="space-right-10 text-blue-700">{maxRange / 1000000} میلیون</span>
                            </header>

                        </div>
                        <div className="box">
                            <div className="box-content">
                                <input onChange={CategoryFilterHandler} type="checkbox" name="inventoryExist" className="bootstrap-switch" />
                                <label htmlFor="">موجود در انبار</label>
                            </div>
                        </div>
                        {/* <div className="box">
                            <div className="box-content">
                                <input type="checkbox" name="checkbox" className="bootstrap-switch" />
                                <label htmlFor="">ارسال فوری</label>
                            </div>
                        </div> */}
                        <div className="box" disabled>
                            <header className="card-header">
                                <h3 className="card-title"><span className="space-right-10">لیست برند ها</span></h3>
                            </header>
                            <div className="box-content">
                                {/* <div className="collapse show" > */}
                                <div className="opacity-40" >

                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input disabled type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree">سامسونگ</label>
                                    </div>


                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input disabled type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> اپل</label>
                                    </div>

                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input disabled type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> هواوی</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input disabled type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> شیائومی</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input disabled type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> سونی</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input disabled type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> ایسوس</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input disabled type="checkbox" id="agree" />
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
                                
                                <div className="opacity-40">
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input disabled type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> اندروید</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input disabled type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> iOS</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input disabled type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> ویندوز فون</label>
                                    </div>
                                    <div className="form-account-agree">
                                        <label className="checkbox-form checkbox-primary">
                                            <input disabled type="checkbox" id="agree" />
                                            <span className="checkbox-check"></span>
                                        </label>
                                        <label htmlFor="agree"> سایر</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </aside>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-9">

                        <div className="listing default ">
                            <div className="listing-header default marg_all0">
                                <ul className="flex flex-row gap-36 w-full h-auto justify-center items-center p-5">
                                    <li>
                                        <input type='checkbox'
                                            name="newest"
                                            onClick={CategoryFilterHandler}
                                            className='appearance-none absolute w-full h-full cursor-pointer opacity-0 z-10' />
                                        <span className={`absolute z-0 rounded-lg ${sortFilter === 'newest' ?
                                            'bg-[#a3d9dd] shadow-xs scale-95 duration-300' :
                                            'bg-[#CFEBED] shadow-md shadow-zinc-400 duration-300'} 
                                             w-[8rem] p-2 text-sm text-black cursor-pointer`}>جدید ترین</span>
                                    </li>
                                    <li>
                                        <input type='checkbox'
                                            name="mostVisited"
                                            onClick={CategoryFilterHandler}
                                            className='appearance-none absolute w-full h-full cursor-pointer opacity-0 z-10' />

                                        <span className={`absolute z-0 rounded-lg ${sortFilter === 'mostVisited' ?
                                            'bg-[#a3d9dd] shadow-xs scale-95 duration-300' :
                                            'bg-[#CFEBED] shadow-md shadow-zinc-400 duration-300'}
                                               w-[8rem] p-2 text-sm text-black cursor-pointer`}>پربازدید ترین</span>
                                    </li>
                                    <li>
                                        <input type='checkbox'
                                            name="mostSold"
                                            onClick={CategoryFilterHandler}
                                            className='appearance-none absolute w-full h-full cursor-pointer opacity-0 z-10' />

                                        <span className={`absolute z-0 rounded-lg ${sortFilter === 'mostSold' ?
                                            'bg-[#a3d9dd] shadow-xs scale-95 duration-300' :
                                            'bg-[#CFEBED] shadow-md shadow-zinc-400 duration-300'}
                                             w-[8rem] p-2 text-sm text-black cursor-pointer`}>پرفروش ترین</span>
                                    </li>
                                    <li>
                                        <input type='checkbox'
                                            name="maxPrice"
                                            onClick={CategoryFilterHandler}
                                            className='appearance-none absolute w-full h-full cursor-pointer opacity-0 z-10' />
                                        <span className={`absolute z-0 rounded-lg ${sortFilter === 'maxPrice' ?
                                            'bg-[#a3d9dd] shadow-xs scale-95 duration-300' :
                                            'bg-[#CFEBED] shadow-md shadow-zinc-400 duration-300'}
                                               w-[8rem] p-2 text-sm text-black cursor-pointer`}>بیشترین قیمت</span>
                                    </li>
                                    <li>
                                        <input type='checkbox'
                                            name="minPrice"
                                            onClick={CategoryFilterHandler}
                                            className='appearance-none absolute w-full h-full cursor-pointer opacity-0 z-10' />

                                        <span className={`absolute z-0 rounded-lg ${sortFilter === 'minPrice' ?
                                            'bg-[#a3d9dd] shadow-sm scale-95 duration-300' :
                                            'bg-[#CFEBED] shadow-md shadow-zinc-400 duration-300'}
                                               w-[8rem] p-2 text-sm text-black cursor-pointer`}>کمترین قیمت</span>
                                    </li>

                                </ul>
                                {/* <div className="box_filter_search">
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
                                </div> */}

                            </div>
                            <div className="tab-content default text-center">
                                <div className="tab-pane active" id="suggestion" role="tabpanel" aria-expanded="true">

                                    <div className="row listing-items">
                                        {
                                            products &&
                                            products.map((item, index) => {
                                                return (
                                                    <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-12 list_search_p ">
                                                        <div className="product-box">
                                                            <div className="product-seller-details product-seller-details-item-grid">
                                                                <span className="search_prod_icon">
                                                                    <Link to={`/store/single-product/${item.id}`}><i className="fa fa-search search_icon_search"
                                                                        aria-hidden="true"></i></Link>
                                                                    <i className="fa fa-heart search_icon_like" aria-hidden="true"></i>
                                                                </span>

                                                                <span onClick={() => handlePurchase(item)} className="search_prod_btn">
                                                                    <i className="fa fa fa-cart-arrow-down search_icon_cart" aria-hidden="true"></i>
                                                                </span>
                                                            </div>
                                                            <Link className="product-box-img" to={`/store/single-product/${item.id}`}>
                                                                <img src={item?.media[0] !== undefined ? BASE_URL + '/storage/media/' + item?.media[0]?.name :
                                                                    `../src/StorePanel/assets/img/product_img/p_${Math.floor(Math.random(0, 1) * 23)}.jpg`} alt="" />
                                                                <ul>
                                                                    <li className="color_pro" style={{ backgroundColor: "#2fabd3", top: "7px" }}></li>
                                                                    <li className="color_pro" style={{ backgroundColor: "#4e1dac", top: "20px" }}></li>
                                                                    <li className="color_pro" style={{ backgroundColor: "#ff0075", top: "33px" }}></li>
                                                                </ul>
                                                            </Link>
                                                            <div className="product-box-content">
                                                                <div className="product-box-content-row">
                                                                    <div className="product_title">
                                                                        <a href="#">
                                                                            {item.title}
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="product-box-row product_price_search">
                                                                    <div className="price">
                                                                        <del><span>{Math.round(item.price * 1.1).toLocaleString()}<span>تومان</span></span></del>
                                                                        <span className="discount_badge">2%</span>
                                                                        <ins><span>{item.price.toLocaleString()}<span>تومان</span></span></ins>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

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
                        <Paginate setPage={setPage} count={count} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CategorySearch