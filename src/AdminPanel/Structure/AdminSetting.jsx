import React from 'react'

function AdminSetting() {
    return (
        <>


            <button className="fixed ltr:md:right-[-29px] ltr:right-0 rtl:left-0 rtl:md:left-[-29px] top-1/2 z-[888] translate-y-1/2 bg-slate-800 text-slate-50 dark:bg-slate-700 dark:text-slate-300 cursor-pointer transform rotate-90 flex items-center text-sm font-medium px-2 py-2 shadow-deep ltr:rounded-b rtl:rounded-t" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">
                <iconify-icon className="text-slate-50 text-lg animate-spin" icon="material-symbols:settings-outline-rounded"></iconify-icon>
                <span className="hidden md:inline-block ltr:ml-2 rtl:mr-2">تنظیمات</span>
            </button>


            <div className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white dark:bg-slate-800 invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 ltr:right-0 rtl:left-0 border-none w-96" tabindex="-1" id="offcanvas" aria-labelledby="offcanvas">
                <div className="offcanvas-header flex items-center justify-between p-4 pt-3 border-b border-b-slate-300">
                    <div>
                        <h3 className="block text-xl font-Inter text-slate-900 font-medium dark:text-[#eee]">سفارشی کننده تم</h3>
                        <p className="block text-sm font-Inter font-light text-[#68768A] dark:text-[#eee]">سفارشی کردن و پیش نمایش در زمان واقعی</p>
                    </div>
                    <button type="button" className="box-content text-2xl w-4 h-4 p-2 pt-0 -my-5 -mr-2 text-black dark:text-white border-none rounded-none opacity-100 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas"><iconify-icon icon="line-md:close"></iconify-icon></button>
                </div>
                <div className="offcanvas-body flex-grow overflow-y-auto">
                    <div className="settings-modal">
                        <div className="p-6">

                            <h3 className="mt-4"> تم</h3>
                            <form className="input-area flex items-center space-x-8 rtl:space-x-reverse" id="themeChanger">
                                <div className="input-group flex items-center">
                                    <input type="radio" id="light" name="theme" value="light" className="themeCustomization-checkInput" />
                                    <label for="light" className="themeCustomization-checkInput-label">لایت</label>
                                </div>
                                <div className="input-group flex items-center">
                                    <input type="radio" id="dark" name="theme" value="dark" className="themeCustomization-checkInput" />
                                    <label for="dark" className="themeCustomization-checkInput-label">تاریک</label>
                                </div>
                                <div className="input-group flex items-center">
                                    <input type="radio" id="semiDark" name="theme" value="semiDark" className="themeCustomization-checkInput" />
                                    <label for="semiDark" className="themeCustomization-checkInput-label">نیمه تاریک</label>
                                </div>
                            </form>
                        </div>
                        <div className="divider"></div>
                        <div className="p-6">

                            <div className="flex items-center justify-between mt-5">
                                <h3 className="!mb-0">راست چین شود</h3>
                                <label id="rtl_ltr" className="relative inline-flex h-6 w-[46px] items-center rounded-full transition-all duration-150 cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <span className="w-11 h-6 bg-gray-200 peer-focus:outline-none ring-0 rounded-full peer dark:bg-gray-900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black-600"></span>
                                </label>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="p-6">
                            <h3>عرض محتوا</h3>
                            <div className="input-area flex items-center space-x-8 rtl:space-x-reverse">
                                <div className="input-group flex items-center">
                                    <input type="radio" id="fullWidth" name="content-width" value="fullWidth"
                                        className="themeCustomization-checkInput" />
                                    <label for="fullWidth" className="themeCustomization-checkInput-label ">عرض کامل</label>
                                </div>
                                <div className="input-group flex items-center">
                                    <input type="radio" id="boxed" name="content-width" value="boxed" className="themeCustomization-checkInput" />
                                    <label for="boxed" className="themeCustomization-checkInput-label ">جعبه ای</label>
                                </div>
                            </div>
                            <h3 className="mt-4"> چیدمان منو</h3>
                            <div className="input-area flex items-center space-x-8 rtl:space-x-reverse">
                                <div className="input-group flex items-center">
                                    <input type="radio" id="vertical_menu" name="menu_layout" value="vertical"
                                        className="themeCustomization-checkInput" />
                                    <label for="vertical_menu" className="themeCustomization-checkInput-label ">عمودی</label>
                                </div>
                                <div className="input-group flex items-center">
                                    <input type="radio" id="horizontal_menu" name="menu_layout" value="horizontal"
                                        className="themeCustomization-checkInput" />
                                    <label for="horizontal_menu" className="themeCustomization-checkInput-label ">افقی</label>
                                </div>
                            </div>
                            <div id="menuCollapse" className="flex items-center justify-between mt-5">
                                <h3 className="!mb-0">منو جمع شد</h3>
                                <label className="relative inline-flex h-6 w-[46px] items-center rounded-full transition-all duration-150 cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <span className="w-11 h-6 bg-gray-200 peer-focus:outline-none ring-0 rounded-full peer dark:bg-gray-900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black-500"></span>
                                </label>
                            </div>
                            <div id="menuHidden" className="!flex items-center justify-between mt-5">
                                <h3 className="!mb-0">منو پنهان</h3>
                                <label id="menuHide" className="relative inline-flex h-6 w-[46px] items-center rounded-full transition-all duration-150 cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <span className="w-11 h-6 bg-gray-200 peer-focus:outline-none ring-0 rounded-full peer dark:bg-gray-900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black-500"></span>
                                </label>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="p-6">
                            <h3>نوع نوار</h3>
                            <div className="input-area flex flex-wrap items-center space-x-4 rtl:space-x-reverse">
                                <div className="input-group flex items-center">
                                    <input type="radio" id="nav_floating" name="navbarType" value="floating"
                                        className="themeCustomization-checkInput" />
                                    <label for="nav_floating" className="themeCustomization-checkInput-label "> شناور</label>
                                </div>
                                <div className="input-group flex items-center">
                                    <input type="radio" id="nav_sticky" name="navbarType" value="sticky"
                                        className="themeCustomization-checkInput" />
                                    <label for="nav_sticky" className="themeCustomization-checkInput-label ">چسبنده</label>
                                </div>
                                <div className="input-group flex items-center">
                                    <input type="radio" id="nav_static" name="navbarType" value="static"
                                        className="themeCustomization-checkInput" />
                                    <label for="nav_static" className="themeCustomization-checkInput-label ">ایستا</label>
                                </div>
                                <div className="input-group flex items-center">
                                    <input type="radio" id="nav_hidden" name="navbarType" value="hidden"
                                        className="themeCustomization-checkInput" />
                                    <label for="nav_hidden" className="themeCustomization-checkInput-label ">پنهان</label>
                                </div>
                            </div>
                            <h3 className="mt-4">نوع فوتر</h3>
                            <div className="input-area flex items-center space-x-4 rtl:space-x-reverse">
                                <div className="input-group flex items-center">
                                    <input type="radio" id="footer_sticky" name="footerType" value="sticky" className="themeCustomization-checkInput" />
                                    <label for="footer_sticky" className="themeCustomization-checkInput-label ">چسبنده</label>
                                </div>
                                <div className="input-group flex items-center">
                                    <input type="radio" id="footer_static" name="footerType" value="static" className="themeCustomization-checkInput" />
                                    <label for="footer_static" className="themeCustomization-checkInput-label ">ایستا</label>
                                </div>
                                <div className="input-group flex items-center">
                                    <input type="radio" id="footer_hidden" name="footerType" value="hidden" className="themeCustomization-checkInput" />
                                    <label for="footer_hidden" className="themeCustomization-checkInput-label ">پنهان</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminSetting