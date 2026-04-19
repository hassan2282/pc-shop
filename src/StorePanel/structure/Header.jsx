import { useEffect, useRef, useState } from "react";
import { TbBasket, TbCircleFilled, TbLogout2, TbUser } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import apiClient from "../../apiClient";
import PurchaseBasket from "../components/PurchaseBasket";
import { FcMenu, FcPackage } from "react-icons/fc";

function Header() {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const wrapperRef = useRef(null);
    const [categories, setCategories] = useState([]);
    const [menuToggle, setMenuToggle] = useState(false);
    const [clientAddress, setClientAddress] = useState([]);
    const storeUser = (res) => {
        dispatch({ type: 'setUser', payload: { user: res.data } });
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await apiClient.post('auth/me');
                if (res.status >= 200 && res.status < 300) {
                    storeUser(res)
                }
            } catch (err) {
                err.status === 401 && dispatch({ type: 'logout' })
            }
        };

        fetchUser();
    }, []);


    useEffect(() => {
        const allCategories = async () => {
            try {
                const { data, status } = await apiClient.get('/category/all');
                if (status >= 200 && status < 300) {
                    setCategories(data);
                }
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };
        allCategories();
    }, []);


    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setToggle(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    const handleLogout = (e) => {
        localStorage.clear();
        dispatch({
            type: "logout",
        })
        toast.success('شما با موفقیت از حساب کاربری خود خارج شدید');
    }


    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const res = await apiClient.get(`user-address/${user.id}`);
                if (res.status >= 200 && res.status < 300) {
                    setClientAddress({
                        id: res.data?.id,
                        province_id: res.data?.province.id,
                        province_name: res.data?.province.name,
                        city_id: res.data?.city.id,
                        city_name: res.data?.city.name,
                        postal_code: res.data?.postal_code,
                        address: res.data?.address,
                        user_id: user?.id,
                    });
                }
            } catch (err) {
                console.log('آدرسی ثبت نیست');
            }
        }
        fetchAddress();
    }, []);

    dispatch({
        type: "ADD_ADDRESS",
        payload: clientAddress,
    });
    localStorage.setItem("address", JSON.stringify(clientAddress))


    return (
        // <header className="Masai-header default relative top-[-15px]">
        <header className="flex flex-row justify-items-center items-center">

            <div className="top-section fullscreen-container ">
                <img src="/src/StorePanel/assets/img/banner_img/bg_top.jpg" className="h-100" />
            </div>
            {/* <!--start mobile header --> */}
            <nav className="fixed z-100 w-[90%] header-responsive top-5">
                <div className="flex flex-row justify-between items-center backdrop-blur-xl bg-[#50b0b51c]
                 border-t-1 border-t-white/60 shadow-xs shadow-zinc-400 p-3 rounded-full">
                    <div className="d-flex max-sm:flex-col min-sm:flex-row w-100">
                        <div className="d-flex flex-row justify-center items-center w-100" dir="ltr">
                            <li ref={wrapperRef} className="max-md:flex hidden p-[0.6rem] cursor-pointer backdrop-blur-xl border shadow-sm rounded-full mx-2 text-zinc-600">
                                <div onClick={(e) => setToggle(!toggle)} className="bg-transparent" >
                                    <TbBasket size={23} className="hover:scale-105" />
                                </div>
                                {toggle &&
                                    <div className="d-flex flex-col absolute min-md:top-20 max-md:top-15 left-0 -translate-x-8 max-md:bg-white min-md:backdrop-blur-2xl z-100 rounded-xl">
                                        <PurchaseBasket toggle={toggle} setToggle={setToggle} />
                                    </div>
                                }
                            </li>
                            <form>
                                <input style={{ borderRadius: '3rem' }} disabled className="border-2 border-info bg-white opacity-40" type="text" placeholder="جستجو ..." />
                                <button className="mr-2" disabled><img src="/src/StorePanel/assets/img/search.png" alt="" /></button>
                            </form>
                            <button onClick={() => setMenuToggle(!menuToggle)} className="min-xl:hidden" type="button">
                                <FcMenu size={40} className="hover:scale-105" />
                            </button>

                        </div>
                        <div className="d-none d-md-block flex-row w-100 justify-items-center items-center-safe ">

                            <ul className="d-flex flex-row max-sm:*:mt-4 w-100 h-100 *:bg-white/60 *:shadow-sm *:rounded-full
                             *:shadow-gray-300 *:duration-300 gap-2
                             justify-end max-sm:justify-around pl-2 items-center">
                                <li className="justify-center items-center d-none d-md-block">
                                    <Link to={isAuthenticated ? "/store/profile" : "/store/login"} className="bg-transparent">
                                        <TbUser size={23} className="hover:scale-105" />
                                    </Link>
                                </li>
                                <li ref={wrapperRef} className="min-sm:flex hidden p-[0.6rem] cursor-pointer backdrop-blur-xl border shadow-sm rounded-full mx-2 text-zinc-600">
                                    <div onClick={(e) => setToggle(!toggle)} className="bg-transparent" >
                                        <TbBasket size={23} className="hover:scale-105" />
                                    </div>
                                    {toggle &&
                                        <div className="d-flex flex-col absolute min-md:top-20 max-sm:top-15 left-0 -translate-x-8 bg-white z-100 rounded-xl">
                                            <PurchaseBasket toggle={toggle} setToggle={setToggle} />
                                        </div>
                                    }
                                </li>
                                <li>
                                    {isAuthenticated &&
                                        <div className="flex flex-row justify-center items-center">
                                            <a href="/" onClick={handleLogout} className="flex flex-row 
                                            hover:cursor-pointer justify-center items-center h-full bg-transparent">
                                                <TbLogout2 size={23} />
                                            </a>
                                        </div>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>


                    {
                        menuToggle &&
                        <div className="absolute overflow-y-scroll top-18 rounded-xl right-0 bg-white shadow-xl" id="navigation">
                            <div className="">
                                <Link to="/store/category-search">
                                    <img src="/src/StorePanel/assets/img/logo.png" alt="" />
                                </Link>
                            </div>
                            <ul className="navbar-nav default *:hover:scale-102 p-2">
                                {/* <li className="sub-menu">
                                    <a>موبایل</Link>
                                    <ul>
                                        <li className="sub-menu">
                                            <Link to="/store/category-search">لوازم جانبی</Link>
                                            <ul>
                                                <li>
                                                    <Link to="/store/category-search">کیف گوشی</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">کاور گوشی</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">شارژر همراه</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">گارد گوشی</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu">
                                            <Link to="/store/category-search">برند ترین ها</Link>
                                            <ul>
                                                <li>
                                                    <Link to="/store/category-search">اپل</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">سامسونگ</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">هوآوی</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">شیائومی</Link>
                                                </li>

                                            </ul>
                                        </li>
                                        <li className="sub-menu">
                                            <Link to="/store/category-search">سیستم عامل</Link>
                                            <ul>
                                                <li>
                                                    <Link to="/store/category-search">اندروید</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">آی او اس</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">ویندوز</Link>
                                                </li>

                                            </ul>
                                        </li>
                                        <li className="sub-menu">
                                            <Link to="/store/category-search">گوشی براساس قیمت</Link>
                                            <ul>
                                                <li>
                                                    <Link to="/store/category-search">گوشی تا 2 میلیون تومان</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">گوشی تا 5 میلیون تومان</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">گوشی تا 7 میلیون تومان</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">گوشی تا 15 میلیون تومان</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">گوشی بالای 15 میلیون تومان</Link>
                                                </li>

                                            </ul>
                                        </li>

                                        <li className="sub-menu">
                                            <Link to="/store/category-search">گوشی براساس حافظه داخلی</Link>
                                            <ul>
                                                <li>
                                                    <Link to="/store/category-search">گوشی تا 16 گیگابایت</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">گوشی تا 32 گیگابایت</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">گوشی تا 64 گیگابایت</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">گوشی تا 128 گیگابایت</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">گوشی تا 256 گیگابایت</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu">
                                            <Link to="/store/category-search">رزولوشن عکس</Link>
                                            <ul>
                                                <li>
                                                    <Link to="/store/category-search">تا 13 مگاپیکسل</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">تا 16 مگاپیکسل</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">تا 48 مگاپیکسل</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">تا 64 مگاپیکسل</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">تا 128 مگاپیکسل</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu">
                                            <Link to="/store/category-search"> گوشی براساس کاربری</Link>
                                            <ul>
                                                <li>
                                                    <Link to="/store/category-search">گوشی اقتصادی</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search"> گوشی میان رده</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">گوشی دانش آموزی</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">گوشی گیمینگ</Link>
                                                </li>
                                                <li>
                                                    <Link to="/store/category-search">گوشی پرچمدار</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> */}

                                <li>
                                    <Link to="/store/home"> فروشگاه</Link>
                                </li>
                                <li>
                                    <Link to="/store/category-search"> دمو محصولات</Link>
                                </li>
                                <li>
                                    <Link to="/store/list-category">دسته بندی محصولات</Link>
                                </li>
                                <li>
                                    <Link to="/store/profile">صفحه پروفایل</Link>
                                </li>
                                {
                                    !isAuthenticated &&
                                    <li>
                                        <a href={"/store/login"} >ورود | ثبت‌نام</a>
                                    </li>
                                }
                                <li>
                                    <Link to="/store/category-blog">لیست مقالات</Link>
                                </li>
                                <li>
                                    <Link to="/store/ticket">چت آنلاین</Link>
                                </li>
                                <Link to='/store/about-us'>
                                    درباره ما
                                </Link>
                                <li>
                                    {isAuthenticated &&
                                        <a href="/" onClick={handleLogout}>خروج</a>
                                    }
                                </li>
                            </ul>
                        </div>
                    }


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
                                    <Link to="/store/home">
                                        <img src="/src/StorePanel/assets/img/logo.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-5 col-sm-8 col-7">
                                <div className="search-area default">
                                    <form action="" className="search">
                                        <input disabled type="text" placeholder="جستجو" />
                                        <button disabled ><img src="/src/StorePanel/assets/img/search.png" alt="" /></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-12 flex flex-row justify-start items-center" dir="ltr">
                                {isAuthenticated &&
                                    <div className="user_head">
                                        <a href="/" onClick={handleLogout} className="flex flex-row hover:cursor-pointer justify-center items-center h-full bg-indigo-300">
                                            خروج
                                            <TbLogout2 size={24} color="#57b6bb" />
                                        </a>
                                    </div>
                                }
                                {
                                    isAuthenticated &&
                                    <span className="divider ml-2"></span>
                                }
                                <div className="user_head">
                                    <Link to={isAuthenticated ? "/store/profile" : "/store/login"} className="iconhead">
                                        <i className="fa fa-user-large font-20" aria-hidden="true"></i>
                                    </Link>
                                </div>
                                <span className="divider ml-2"></span>
                                <div ref={wrapperRef} className="">
                                    <div onClick={(e) => setToggle(!toggle)} className="dropdown-toggle iconhead cursor-pointer" >
                                        <i className="fa fa-cart-arrow-down font-20" aria-hidden="true"></i>
                                    </div>
                                    {toggle &&
                                        <div className="d-flex flex-col absolute z-100 top-10 w-[19rem] rounded-2xl bg-white/30 backdrop-blur-2xl">
                                            <PurchaseBasket toggle={toggle} setToggle={setToggle} />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="nav_header">
                        <ul className="nav__ullist">
                            <li className="list_style">
                                <i className="fa fa-bars icon-icon" aria-hidden="true"></i><Link to="/store/category-search" className="list__link">دسته بندی کالاها</Link>
                                <div className="submeno">
                                    {
                                        categories &&
                                        categories.filter((item) => item.parent_id === null).map((category, index) => {
                                            return (
                                                <ul key={index} className="main_meno-drobdown">
                                                    <li className="child_mno-drobdown">
                                                        <Link to="/store/category-search" className="run">{category.name}</Link>
                                                        <div className="mega_meno">
                                                            <ul className="list_drobdown--item">
                                                                <li className="list_drobdown--items border_left--red">
                                                                    <Link to="/store/category-search"
                                                                        className="list__drobdown--link texr_header block_block">
                                                                        همه محصولات {category.name}
                                                                    </Link>
                                                                </li>
                                                                {
                                                                    category.children &&
                                                                    category.children.map((child, index) => {
                                                                        return (
                                                                            <ul key={index}>
                                                                                <li className="list_drobdown--items border_left--red">
                                                                                    <Link to="/store/category-search" className="list__drobdown--link texr_header">{child.name}</Link>
                                                                                </li>
                                                                                {
                                                                                    child.children &&
                                                                                    child.children.map((grandChild, index) => {
                                                                                        return (
                                                                                            <ul key={index} className="z-100">
                                                                                                <li className="list_drobdown--items">
                                                                                                    <Link to="/store/category-search" className="list__drobdown--link">{grandChild.name}</Link>
                                                                                                </li>
                                                                                            </ul>
                                                                                        )
                                                                                    })
                                                                                }

                                                                            </ul>
                                                                        )
                                                                    })
                                                                }

                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                            </li>
                            <li className="list_style">
                                <i className="fa fa-film icon-icon" aria-hidden="true"></i>
                                <Link to="/store/category-search" className="list__link">
                                    دمو محصولات
                                </Link>
                            </li>
                            <li className="list_style">
                                <i className="fa fa-percent icon-icon" aria-hidden="true"></i>
                                <Link to="/store/list-category" className="list__link">
                                    دسته‌بندی محصولات
                                </Link>
                            </li>
                            <li className="list_style">
                                <i className="fa fa-user icon-icon" aria-hidden="true"></i>
                                <Link to="/store/profile" className="list__link">
                                    صفحه پروفایل
                                </Link>
                            </li>
                            <li className="list_style">
                                <i className="fa fa-newspaper icon-icon" aria-hidden="true"></i>
                                <Link to="/store/category-blog" className="list__link">لیست مقالات</Link>
                            </li>
                            <li className="list_style">
                                <i className="fa fa-phone icon-icon" aria-hidden="true"></i>
                                <Link to="/store/ticket" className="list__link">چت آنلاین
                                    <TbCircleFilled className="absolute top-0 left-0 animate-pulse" color={'#52B1B7'} size={8} />
                                </Link>
                            </li>
                            <li className="list_style">
                                <Link to="/store/about-us" className="list__link"> درباره ما</Link>
                            </li>
                            <ul className="nav_header-2">
                                <li className="list_style">
                                    <i className="fa fa-map icon-icon" aria-hidden="true"></i>
                                    <Link to="/store/address" className="list__link">
                                        انتخاب موقعیت
                                    </Link>
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