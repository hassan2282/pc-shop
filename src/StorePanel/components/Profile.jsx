import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import OrderSideBar from "../structure/OrderSideBar";

function Profile() {

    const user = useSelector(state => state.user);

    return (

        <>
            <main className="profile-user-page default space-top-30 ">
                <div className="container">
                    <div className="row">
                        <div className="profile-page col-xl-9 col-lg-8 col-md-12 order-2">
                            <div className="row">
                                <div className="col-lg-12">
                                    <header className="card-header">
                                        <h3 className="card-title w-full"><span>اطلاعات حساب کاربری</span></h3>
                                    </header>
                                    <div className="w-full rounded-md bg-[#60BDC2]/5">

                                        <div className="min-sm:grid min-sm:grid-cols-2 max-sm:flex max-sm:flex-col gap-2 w-full bg-[#57B6BB]/10 rounded-md p-3 shadow-sm shadow-black
                                            *:bg-[#57B6BB]/20 *:p-3 *:rounded-md *:w-full *:m-0.5 *:overflow-clip">
                                            <div className="shadow-sm shadow-black">
                                                <p>
                                                    <span className="text-[hsl(0,0%,5%)] text-[1rem]">نام  :</span>
                                                    <span className="text-[hsl(0,0%,30%)]">{user ? user.first_name : ' '}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="shadow-sm shadow-black">
                                                <p>
                                                    <span className="text-[hsl(0,0%,5%)] text-[1rem]"> نام خانوادگی :</span>
                                                    <span className="text-[hsl(0,0%,30%)]">
                                                        {user ? user.last_name : ' '}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="shadow-sm shadow-black">
                                                <p>
                                                    <span className="text-[hsl(0,0%,5%)] text-[1rem]">پست الکترونیک :</span>
                                                    <span className="text-[hsl(0,0%,30%)]">{user ? user.email : ' '}</span>
                                                </p>
                                            </div>
                                            <div className="shadow-sm shadow-black">
                                                <p>
                                                    <span className="text-[hsl(0,0%,5%)] text-[1rem]">شماره تلفن همراه:</span>
                                                    <span className="text-[hsl(0,0%,30%)]">{user ? user.phone : ' '}</span>
                                                </p>
                                            </div>
                                            <div className="shadow-sm shadow-black">
                                                <p>
                                                    <span className="text-[hsl(0,0%,5%)] text-[1rem]">کد پستی :</span>
                                                    <span className="text-[hsl(0,0%,30%)]">(نامشخص)</span>
                                                </p>
                                            </div>
                                            <div className="shadow-sm shadow-black">
                                                <p>
                                                    <span className="text-[hsl(0,0%,5%)] text-[1rem]">روش بازگرداندن پول من :</span>
                                                    <span className="text-[hsl(0,0%,30%)]">ﺷﻤﺎره ﺷﺒﺎ</span>
                                                </p>
                                            </div>
                                            <div className="shadow-sm shadow-black">
                                                <p>
                                                    <span className="text-[hsl(0,0%,5%)] text-[1rem]">شغل :</span>
                                                    <span className="text-[hsl(0,0%,30%)]">توسعه نرم افزار و برنامه نویسی</span>
                                                </p>
                                            </div>
                                            <div className="shadow-sm shadow-black">
                                                <p>
                                                    <span className="text-[hsl(0,0%,5%)] text-[1rem]">تاریخ تولد :</span>
                                                    <span className="text-[hsl(0,0%,30%)]">۱۳۷۰/۶/۱۴</span>
                                                </p>
                                            </div>
                                            <div className="shadow-sm shadow-black col-span-2">
                                                <p>
                                                    <span className="text-[hsl(0,0%,5%)] text-[1rem]">کد ملی :</span>
                                                    <span className="text-[hsl(0,0%,30%)]">297865432</span>
                                                </p>
                                            </div>
                                            <div className="col-span-2 bg-transparent">
                                                <Link to="/store/edit-profile" className="w-full btn btn-main-masai">
                                                    ویرایش
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                <div className="w-full mt-4">
                                    <div className="w-full bg-[#57B6BB]/20 rounded-md p-2">
                                        <div className="w-full bg-[#57B6BB]/3 shadow-xs shadow-black rounded-md">
                                            <header className="card-header w-full">
                                                <h3 className="card-title w-full"><span>آدرس</span></h3>
                                            </header>
                                        </div>
                                        <div className="grid min-sm:grid-cols-2 max-sm:grid-cols-1 gap-2 justify-center items-center">
                                            <div className="w-full text-center p-2">
                                                <p>لطفا آدرس محل سکونت یا محل کار خود را با دقت وارد نمایید</p>
                                            </div>
                                            <div className="text-center w-full flex justify-center items-center">
                                                <Link to='/store/order-address' className="btn btn-main-masai big_btn">
                                                    ثبت آدرس جدید
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <OrderSideBar />
                    </div>
                </div>
            </main>

        </>

    )
}

export default Profile;