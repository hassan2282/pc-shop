import React from 'react'

function AdminSidebar() {
    return (
        <div class="sidebar-wrapper group">
            <div id="bodyOverlay" class="w-screen h-screen fixed top-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm z-10 hidden"></div>
            <div class="logo-segment">
                <a class="flex items-center" href="index.html">
                    <div>
                        <img src="assets/images/logo/logo-c.svg" class="black_logo" alt="logo" />
                        <img src="assets/images/logo/logo-c-white.svg" class="white_logo" alt="logo" />
                        <span class="ltr:ml-3 rtl:mr-3 text-xl font-Inter font-bold text-slate-900 dark:text-white">DashCode</span>
                        {/* <!-- Sidebar Type Button --> */}
                        <div id="sidebar_type" class="cursor-pointer text-slate-900 dark:text-white text-lg">
                            <span class="sidebarDotIcon extend-icon cursor-pointer text-slate-900 dark:text-white text-2xl">
                                <div class="h-4 w-4 border-[1.5px] border-slate-900 dark:border-slate-700 rounded-full transition-all duration-150 ring-2 ring-inset ring-offset-4 ring-black-900 dark:ring-slate-400 bg-slate-900 dark:bg-slate-400 dark:ring-offset-slate-700"></div>
                            </span>
                            <span class="sidebarDotIcon collapsed-icon cursor-pointer text-slate-900 dark:text-white text-2xl">
                                <div class="h-4 w-4 border-[1.5px] border-slate-900 dark:border-slate-700 rounded-full transition-all duration-150"></div>
                            </span>
                        </div>
                        <button class="sidebarCloseIcon text-2xl">
                            <iconify-icon class="text-slate-900 dark:text-slate-200" icon="clarity:window-close-line"></iconify-icon>
                        </button>
                    </div>
                    <div id="nav_shadow" class="nav_shadow h-[60px] absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none
                                    opacity-0"></div>
                    <div class="sidebar-menus bg-white dark:bg-slate-800 py-2 px-4 h-[calc(100%-80px)] overflow-y-auto z-50" id="sidebar_menus">
                        <ul class="sidebar-menu">
                            <li class="sidebar-menu-title">منو</li>
                            <li class="">
                                <a href="index.html#" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:home"></iconify-icon>
                                        <span>داشبورد</span>
                                    </span>
                                    <iconify-icon class="icon-arrow" icon="heroicons-outline:chevron-right"></iconify-icon>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li>
                                        <a href="index.html">داشبورد تجزیه و تحلیل</a>
                                    </li>
                                    <li>
                                        <a href="ecommerce-dashboard.html">داشبورد تجارت الکترونیک</a>
                                    </li>
                                    <li>
                                        <a href="project-dashboard.html">داشبورد پروژه</a>
                                    </li>
                                    <li>
                                        <a href="crm-dashboard.html">داشبورد CRM</a>
                                    </li>
                                    <li>
                                        <a href="banking-dashboard.html">داشبورد بانکی</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- Apps Area --> */}
                            <li class="sidebar-menu-title"> برنامه ها</li>
                            <li>
                                <a href="chat.html" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class="nav-icon" icon="heroicons-outline:chat"></iconify-icon>
                                        <span>چت</span>
                                    </span>
                                </a>
                            </li>
                            <li class="">
                                <a href="email.html" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:mail"></iconify-icon>
                                        <span>ایمیل</span>
                                    </span>
                                </a>
                            </li>
                            <li class="">
                                <a href="kanban.html" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:view-boards"></iconify-icon>
                                        <span>کانبان</span>
                                    </span>
                                </a>
                            </li>
                            <li class="">
                                <a href="calander.html" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:calendar"></iconify-icon>
                                        <span>تقویم</span>
                                    </span>
                                </a>
                            </li>
                            <li class="">
                                <a href="todo.html" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:clipboard-check"></iconify-icon>
                                        <span>تودو</span>
                                    </span>
                                </a>
                            </li>
                            <li class="">
                                <a href="javascript:void(0)" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:document"></iconify-icon>
                                        <span>پروژه ها</span>
                                    </span>
                                    <iconify-icon class="icon-arrow" icon="heroicons-outline:chevron-right"></iconify-icon>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li>
                                        <a href="project.html">پروژه ها</a>
                                    </li>
                                    <li>
                                        <a href="project-details.html">جزئیات پروژه</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- Pages Area --> */}
                            <li class="sidebar-menu-title">صفحات</li>
                            {/* <!-- Authentication --> */}
                            <li class="">
                                <a href="javascript:void(0)" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:lock-closed"></iconify-icon>
                                        <span>احراز هویت</span>
                                    </span>
                                    <iconify-icon class="icon-arrow" icon="heroicons-outline:chevron-right"></iconify-icon>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li>
                                        <a href="signin-one.html">ورود به سیستم یک</a>
                                    </li>
                                    <li>
                                        <a href="signin-two.html">ورود به سیستم دو</a>
                                    </li>
                                    <li>
                                        <a href="signin-three.html"> ورود به سیستم سه</a>
                                    </li>
                                    <li>
                                        <a href="signup-one.html">ثبت نام یک</a>
                                    </li>
                                    <li>
                                        <a href="signup-two.html">ثبت نام دو</a>
                                    </li>
                                    <li>
                                        <a href="signup-three.html">ثبت نام سه</a>
                                    </li>
                                    <li>
                                        <a href="forget-password-one.html">فراموش کردن رمز یک</a>
                                    </li>
                                    <li>
                                        <a href="forget-password-two.html">فراموش کردن رمز دو</a>
                                    </li>
                                    <li>
                                        <a href="forget-password-three.html">فراموش کردن رمز سه</a>
                                    </li>
                                    <li>
                                        <a href="lock-screen-one.html">قفل صفحه یک</a>
                                    </li>
                                    <li>
                                        <a href="lock-screen-two.html">قفل صفحه دو</a>
                                    </li>
                                    <li>
                                        <a href="lock-screen-three.html">قفل صفحه سه</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- Utility --> */}
                            <li class="">
                                <a href="javascript:void(0)" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:view-boards"></iconify-icon>
                                        <span> کاربردی</span>
                                    </span>
                                    <iconify-icon class="icon-arrow" icon="heroicons-outline:chevron-right"></iconify-icon>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li>
                                        <a href="invoice.html">فاکتور</a>
                                    </li>
                                    <li>
                                        <a href="pricing.html">قیمت</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">وبلاگ</a>
                                    </li>
                                    <li>
                                        <a href="blank-page.html">صفحه خالی</a>
                                    </li>
                                    <li>
                                        <a href="settings.html">تنظیمات</a>
                                    </li>
                                    <li>
                                        <a href="profile.html">پروفایل</a>
                                    </li>
                                    <li>
                                        <a href="404.html">404 صفحه</a>
                                    </li>
                                    <li>
                                        <a href="comming-soon.html">به زودی</a>
                                    </li>
                                    <li>
                                        <a href="under-maintanance.html">در حال تعمیر و نگهداری</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- Elements Area --> */}
                            <li class="sidebar-menu-title"> عناصر</li>
                            {/* <!-- Widgets --> */}
                            <li class="">
                                <a href="javascript:void(0)" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:view-grid-add"></iconify-icon>
                                        <span>ابزارک ها</span>
                                    </span>
                                    <iconify-icon class="icon-arrow" icon="heroicons-outline:chevron-right"></iconify-icon>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li>
                                        <a href="basic-widgets.html"> اساسی</a>
                                    </li>
                                    <li>
                                        <a href="statistics-widgets.html">آمار</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- Components --> */}
                            <li>
                                <a href="javascript:void(0)" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:collection"></iconify-icon>
                                        <span>کامپوننت ها</span>
                                    </span>
                                    <iconify-icon class="icon-arrow" icon="heroicons-outline:chevron-right"></iconify-icon>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li>
                                        <a href="typography.html">تایپوگرافی</a>
                                    </li>
                                    <li>
                                        <a href="colors.html">رنگ ها</a>
                                    </li>
                                    <li>
                                        <a href="alert.html">هشدار</a>
                                    </li>
                                    <li>
                                        <a href="buttons.html">دکمه</a>
                                    </li>
                                    <li>
                                        <a href="card.html">کارت</a>
                                    </li>
                                    <li>
                                        <a href="carousel.html">چرخ و فلک</a>
                                    </li>
                                    <li>
                                        <a href="dropdown.html">کشوئی</a>
                                    </li>
                                    <li>
                                        <a href="image.html">تصویر</a>
                                    </li>
                                    <li>
                                        <a href="modal.html">مدال</a>
                                    </li>
                                    <li>
                                        <a href="progressbar.html">نوار پیشرفت</a>
                                    </li>
                                    <li>
                                        <a href="placeholder.html">پلیس هولدر</a>
                                    </li>
                                    <li>
                                        <a href="tab-accordion.html"> زبانه و آکاردئون</a>
                                    </li>
                                    <li>
                                        <a href="badges.html">نشان ها</a>
                                    </li>
                                    <li>
                                        <a href="pagination.html"> صفحه بندی</a>
                                    </li>
                                    <li>
                                        <a href="video.html">ویدئو</a>
                                    </li>
                                    <li>
                                        <a href="tooltip-popover.html">تولتیپ و پاپاور</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- Forms --> */}
                            <li class="">
                                <a href="javascript:void(0)" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:clipboard-list"></iconify-icon>
                                        <span>فرم ها</span>
                                    </span>
                                    <iconify-icon class="icon-arrow" icon="heroicons-outline:chevron-right"></iconify-icon>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li>
                                        <a href="input.html">Input</a>
                                    </li>
                                    <li>
                                        <a href="input-group.html">Input group</a>
                                    </li>
                                    <li>
                                        <a href="input-layout.html">Input layout</a>
                                    </li>
                                    <li>
                                        <a href="form-validation.html"> اعتبار سنجی فرم</a>
                                    </li>
                                    <li>
                                        <a href="wizard.html">Wizard</a>
                                    </li>
                                    <li>
                                        <a href="input-mask.html">Input mask</a>
                                    </li>
                                    <li>
                                        <a href="file-input.html">File input</a>
                                    </li>
                                    <li>
                                        <a href="form-repeater.html">تکرارکننده فرم</a>
                                    </li>
                                    <li>
                                        <a href="textarea.html">Textarea</a>
                                    </li>
                                    <li>
                                        <a href="checkbox.html">Checkbox</a>
                                    </li>
                                    <li>
                                        <a href="radio.html">Radio button</a>
                                    </li>
                                    <li>
                                        <a href="switch.html">Switch</a>
                                    </li>
                                    <li>
                                        <a href="select.html">Select</a>
                                    </li>
                                    <li>
                                        <a href="date-picker.html">انتخابگر زمان تاریخ</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- Tables --> */}
                            <li class="">
                                <a href="javascript:void(0)" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:table"></iconify-icon>
                                        <span>جدول</span>
                                    </span>
                                    <iconify-icon class="icon-arrow" icon="heroicons-outline:chevron-right"></iconify-icon>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li>
                                        <a href="basic-table.html">جدول پایه</a>
                                    </li>
                                    <li>
                                        <a href="advance-table.html">جدول پیشرفته</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- Charts --> */}
                            <li class="">
                                <a href="javascript:void(0)" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:chart-bar"></iconify-icon>
                                        <span>نمودار</span>
                                    </span>
                                    <iconify-icon class="icon-arrow" icon="heroicons-outline:chevron-right"></iconify-icon>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li>
                                        <a href="apex-chart.html">چت Apex</a>
                                    </li>
                                    <li>
                                        <a href="chartjs.html">Chart js</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- Map --> */}
                            <li class="">
                                <a href="map.html" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:map"></iconify-icon>
                                        <span>نقشه</span>
                                    </span>
                                </a>
                            </li>
                            {/* <!-- Icons --> */}
                            <li class="">
                                <a href="icons.html" class="navItem">
                                    <span class="flex items-center">
                                        <iconify-icon class=" nav-icon" icon="heroicons-outline:emoji-happy"></iconify-icon>
                                        <span> نمادها</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        {/* <!-- Upgrade Your Business Plan Card Start --> */}
                        <div class="bg-slate-900 mb-10 mt-24 p-4 relative text-center rounded-2xl text-white" id="sidebar_bottom_wizard">
                            <img src="assets/images/svg/rabit.svg" alt="" class="mx-auto relative -mt-[73px]" />
                            <div class="max-w-[160px] mx-auto mt-6">
                                <div class="widget-title font-Inter mb-1">دسترسی نامحدود</div>
                                <div class="text-xs font-light font-Inter">
                                    سیستم خود را به طرح تجاری ارتقا دهید
                                </div>
                            </div>
                            <div class="mt-6">
                                <button class="bg-white hover:bg-opacity-80 text-slate-900 text-sm font-Inter rounded-md w-full block py-2 font-medium">ارتقا دهید</button>
                            </div>
                        </div>
                        {/* <!-- Upgrade Your Business Plan Card Start --> */}
                    </div>
                </a>
            </div>
        </div>
    )
};
export default AdminSidebar