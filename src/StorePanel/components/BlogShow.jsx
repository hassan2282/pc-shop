import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import apiClient from '../../apiClient';
import { Link } from 'react-router-dom';

function BlogShow() {


    const [blogs, setBlogs] = useState([]);
    const BASE_URL = import.meta.env.VITE__BASEURL;

    const formatDate = (date) => {
        return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }).format(new Date(date));
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await apiClient.get('/blogShow');
                if (res.status >= 200 && res.status < 300) {
                    setBlogs(Array.isArray(res.data) ? res.data : []);
                }

            } catch (err) {
                console.log(err?.response?.data?.message)
                toast.error('خطا در واکشی مقالات');
            }
        }

        fetchBlogs();
    }, []);


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
        // Blog carousel must be initialized AFTER blogs are rendered.
        if (!blogs || blogs.length === 0) return;

        let cancelled = false;
        let tries = 0;
        const maxTries = 20;

        const blogCarouselOptions = {
            rtl: true,
            margin: 10,
            nav: true,
            navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
            dots: false,
            responsiveClass: true,
            responsive: {
                0: { items: 2, slideBy: 1 },
                576: { items: 2, slideBy: 1 },
                768: { items: 3, slideBy: 2 },
                992: { items: 4, slideBy: 2 },
                1400: { items: 4, slideBy: 3 }
            }
        };

        const tryInit = () => {
            if (cancelled) return;
            if (!(window.$ && window.$.fn && window.$.fn.owlCarousel)) return;
            // Let React paint DOM first
            window.setTimeout(() => {
                if (cancelled) return;
                initOwl('.Blog-carousel', blogCarouselOptions);
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
            if (!(window.$ && window.$.fn && window.$.fn.owlCarousel)) return;
            const $ = window.$;
            destroyOwl($('.Blog-carousel'));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blogs]);


    return (
        <div className="Blog-carousel owl-carousel owl-theme">
            {
                blogs &&
                blogs.map((blog, index) => {
                    return (
                        <div key={blog?.id ?? index} className="item">
                            <Link to={`/store/single-blog/${blog.id}`}>
                                <img src={blog.media?.name
                                    ?
                                    BASE_URL + "/storage/media/" + blog.media?.name
                                    :
                                    '/src/StorePanel/assets/img/ico/png-9.png'} className="h-48 object-contain" alt="" />
                            </Link>
                            <a href="single-blog">
                                <h2 className="Blog_title h-[4rem] max-sm:hidden overflow-clip">
                                    {blog.description.slice(0, 42) + ' ...'}
                                </h2>
                            </a>
                            <div className="Blog_list max-sm:h-13 h-[5rem]">
                                <span className="Blog_author max-sm:hidden">
                                    <i className="fa fa-user"></i>
                                    {blog.user?.username}
                                </span>
                                <span className="Blog_Date flex flex-row text-[1rem] w-full">
                                    <i className="fa fa-calendar"></i>
                                    {formatDate(blog.created_at)}
                                </span>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default BlogShow
