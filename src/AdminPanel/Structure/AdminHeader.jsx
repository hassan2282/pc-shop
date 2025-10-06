import React from "react";

function AdminHeader() {
  return (
    <div>
      <div className="z-[9]" id="app_header">
        <div className="app-header z-[999] ltr:ml-[248px] rtl:mr-[248px] bg-white dark:bg-slate-800 shadow-sm dark:shadow-slate-700">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center md:space-x-4 space-x-2 xl:space-x-0 rtl:space-x-reverse vertical-box">
              <a
                href="index.html"
                className="mobile-logo xl:hidden inline-block"
              >
                <img
                  src="assets/images/logo/logo-c.svg"
                  className="black_logo"
                  alt="logo"
                />
                <img
                  src="assets/images/logo/logo-c-white.svg"
                  className="white_logo"
                  alt="logo"
                />
              </a>
              <button className="smallDeviceMenuController hidden md:inline-block xl:hidden">
                <iconify-icon
                  className="leading-none bg-transparent relative text-xl top-[2px] text-slate-900 dark:text-white"
                  icon="heroicons-outline:menu-alt-3"
                />
              </button>
              <button
                className="flex items-center xl:text-sm text-lg xl:text-slate-400 text-slate-800 dark:text-slate-300 px-1
        rtl:space-x-reverse search-modal"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <iconify-icon icon="heroicons-outline:search" />
                <span className="xl:inline-block hidden ltr:ml-3 rtl:mr-3">
                  جستجو...
                </span>
              </button>
            </div>

            <div className="items-center space-x-4 rtl:space-x-reverse horizental-box">
              <a href="index.html">
                <span className="xl:inline-block hidden">
                  <img
                    src="assets/images/logo/logo.svg"
                    className="black_logo "
                    alt="logo"
                  />
                  <img
                    src="assets/images/logo/logo-white.svg"
                    className="white_logo"
                    alt="logo"
                  />
                </span>
                <span className="xl:hidden inline-block">
                  <img
                    src="assets/images/logo/logo-c.svg"
                    className="black_logo "
                    alt="logo"
                  />
                  <img
                    src="assets/images/logo/logo-c-white.svg"
                    className="white_logo "
                    alt="logo"
                  />
                </span>
              </a>
              <button className="smallDeviceMenuController  open-sdiebar-controller xl:hidden inline-block">
                <iconify-icon
                  className="leading-none bg-transparent relative text-xl top-[2px] text-slate-900 dark:text-white"
                  icon="heroicons-outline:menu-alt-3"
                />
              </button>
            </div>

            <div className="main-menu">
              <ul>
                <li
                  className="
             menu-item-has-children 
              "
                >
                  <a href="javascript:void()">
                    <div className="flex flex-1 items-center space-x-[6px] rtl:space-x-reverse">
                      <span className="icon-box">
                        <iconify-icon icon="heroicons-outline:home" />
                      </span>
                      <div className="text-box">داشبورد</div>
                    </div>
                    <div className="flex-none text-sm ltr:ml-3 rtl:mr-3 leading-[1] relative top-1">
                      <iconify-icon icon="heroicons-outline:chevron-down" />
                    </div>
                  </a>

                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons:presentation-chart-line"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">
                            داشبورد تجزیه و تحلیل
                          </span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="ecommerce-dashboard.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons:shopping-cart"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">
                            داشبورد تجارت الکترونیک
                          </span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="project-dashboard.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons:briefcase"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">داشبورد پروژه</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="crm-dashboard.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="ri:customer-service-2-fill"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">داشبورد CRM</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="banking-dashboard.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons:wrench-screwdriver"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">داشبورد بانکی</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className="
             menu-item-has-children 
              "
                >
                  <a href="javascript:void()">
                    <div className="flex flex-1 items-center space-x-[6px] rtl:space-x-reverse">
                      <span className="icon-box">
                        <iconify-icon icon="heroicons-outline:chip" />
                      </span>
                      <div className="text-box">برنامه</div>
                    </div>
                    <div className="flex-none text-sm ltr:ml-3 rtl:mr-3 leading-[1] relative top-1">
                      <iconify-icon icon="heroicons-outline:chevron-down" />
                    </div>
                  </a>

                  <ul className="sub-menu">
                    <li>
                      <a href="chat.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons-outline:chat"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">چت</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="email.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons-outline:mail"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">ایمیل</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="https://html.ashkankiani.ir/dashcode/calender">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons-outline:calendar"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">تقویم</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="https://html.ashkankiani.ir/dashcode/kanban">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons-outline:view-boards"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">کانبان</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="https://html.ashkankiani.ir/dashcode/todo">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons-outline:clipboard-check"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">تودو</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="https://html.ashkankiani.ir/dashcode/projects">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons-outline:document"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">پروژه ها</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className="
              menu-item-has-children has-megamenu
            "
                >
                  <a href="javascript:void()">
                    <div className="flex flex-1 items-center space-x-[6px] rtl:space-x-reverse">
                      <span className="icon-box">
                        <iconify-icon icon="heroicons-outline:view-boards" />
                      </span>
                      <div className="text-box">صفحات</div>
                    </div>
                    <div className="flex-none text-sm ltr:ml-3 rtl:mr-3 leading-[1] relative top-1">
                      <iconify-icon icon="heroicons-outline:chevron-down" />
                    </div>
                  </a>

                  <div className="rt-mega-menu">
                    <div className="flex flex-wrap space-x-8 justify-between rtl:space-x-reverse">
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white mb-2 flex space-x-1 items-center">
                          <span> احراز هویت</span>
                        </div>

                        <a href="signin-one.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              ورود به سیستم یک
                            </span>
                          </div>
                        </a>

                        <a href="signin-two.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              ورود به سیستم دو
                            </span>
                          </div>
                        </a>

                        <a href="signin-three.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              ورود به سیستم سه
                            </span>
                          </div>
                        </a>

                        <a href="signup-one.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              ثبت نام یک
                            </span>
                          </div>
                        </a>

                        <a href="signup-two.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              ثبت نام دو
                            </span>
                          </div>
                        </a>

                        <a href="signup-three.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              ثبت نام سه
                            </span>
                          </div>
                        </a>

                        <a href="forget-password-one.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              فراموشی رمز عبور یک
                            </span>
                          </div>
                        </a>

                        <a href="forget-password-two.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              فراموشی رمز عبور دو
                            </span>
                          </div>
                        </a>

                        <a href="forget-password-three.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              فراموشی رمز عبور سه
                            </span>
                          </div>
                        </a>

                        <a href="lock-screen-one.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              قفل صفحه یک
                            </span>
                          </div>
                        </a>

                        <a href="lock-screen-two.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              قفل صفحه دو
                            </span>
                          </div>
                        </a>

                        <a href="lock-screen-three.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              قفل صفحه سه
                            </span>
                          </div>
                        </a>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white mb-2 flex space-x-1 items-center">
                          <span> Components</span>
                        </div>

                        <a href="typography.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              تایپوگرافی
                            </span>
                          </div>
                        </a>

                        <a href="colors.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              رنگ ها
                            </span>
                          </div>
                        </a>

                        <a href="alert.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              هشدار
                            </span>
                          </div>
                        </a>

                        <a href="https://html.ashkankiani.ir/dashcode/button.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              دکمه
                            </span>
                          </div>
                        </a>

                        <a href="card.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              کارت
                            </span>
                          </div>
                        </a>

                        <a href="carousel.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              کروسل
                            </span>
                          </div>
                        </a>

                        <a href="dropdown.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              کشویی
                            </span>
                          </div>
                        </a>

                        <a href="image.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              تصویر
                            </span>
                          </div>
                        </a>

                        <a href="modal.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              مودال
                            </span>
                          </div>
                        </a>

                        <a href="https://html.ashkankiani.ir/dashcode/progress-bar.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              نوار پیشرفت
                            </span>
                          </div>
                        </a>

                        <a href="placeholder.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              پلیس هولدر
                            </span>
                          </div>
                        </a>

                        <a href="tab-accordion.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              تب و آکاردونی
                            </span>
                          </div>
                        </a>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white mb-2 flex space-x-1 items-center">
                          <span> فرم ها</span>
                        </div>

                        <a href="input.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              Input
                            </span>
                          </div>
                        </a>

                        <a href="input-group.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              Input group
                            </span>
                          </div>
                        </a>

                        <a href="input-layout.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              Input layout
                            </span>
                          </div>
                        </a>

                        <a href="form-validation.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              اعتبار سنجی فرم
                            </span>
                          </div>
                        </a>

                        <a href="https://html.ashkankiani.ir/dashcode/form-wizard.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              ویزارد
                            </span>
                          </div>
                        </a>

                        <a href="input-mask.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              Input mask
                            </span>
                          </div>
                        </a>

                        <a href="https://html.ashkankiani.ir/dashcode/file-input">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              File input
                            </span>
                          </div>
                        </a>

                        <a href="form-repeater.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              تکرار کننده فرم
                            </span>
                          </div>
                        </a>

                        <a href="textarea.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              Textarea
                            </span>
                          </div>
                        </a>

                        <a href="checkbox.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              Checkbox
                            </span>
                          </div>
                        </a>

                        <a href="https://html.ashkankiani.ir/dashcode/radio-button.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              Radio button
                            </span>
                          </div>
                        </a>

                        <a href="switch.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              Switch
                            </span>
                          </div>
                        </a>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white mb-2 flex space-x-1 items-center">
                          <span> کاربردی</span>
                        </div>

                        <a href="invoice.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              فاکتور
                            </span>
                          </div>
                        </a>

                        <a href="pricing.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              قیمت گذاری
                            </span>
                          </div>
                        </a>

                        <a href="https://html.ashkankiani.ir/dashcode/faq.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              سوالات متداول
                            </span>
                          </div>
                        </a>

                        <a href="blank-page.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              صفحه خالی
                            </span>
                          </div>
                        </a>

                        <a href="blog.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              بلاگ
                            </span>
                          </div>
                        </a>

                        <a href="404.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              صفحه 404
                            </span>
                          </div>
                        </a>

                        <a href="comming-soon.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              به زودی
                            </span>
                          </div>
                        </a>

                        <a href="under-maintanance.html">
                          <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                            <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                            <span className="capitalize text-slate-600 dark:text-slate-300">
                              صفحه تعمیر و نگهداری
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  className="
             menu-item-has-children 
              "
                >
                  <a href="javascript:void()">
                    <div className="flex flex-1 items-center space-x-[6px] rtl:space-x-reverse">
                      <span className="icon-box">
                        <iconify-icon icon="heroicons-outline:view-grid-add" />
                      </span>
                      <div className="text-box">ابزارک ها</div>
                    </div>
                    <div className="flex-none text-sm ltr:ml-3 rtl:mr-3 leading-[1] relative top-1">
                      <iconify-icon icon="heroicons-outline:chevron-down" />
                    </div>
                  </a>

                  <ul className="sub-menu">
                    <li>
                      <a href="basic-widgets.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons-outline:document-text"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">پایه</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="statistics-widgets.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons-outline:document-text"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">آماری</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className="
             menu-item-has-children 
              "
                >
                  <a href="javascript:void()">
                    <div className="flex flex-1 items-center space-x-[6px] rtl:space-x-reverse">
                      <span className="icon-box">
                        <iconify-icon icon="heroicons-outline:template" />
                      </span>
                      <div className="text-box">اضافی</div>
                    </div>
                    <div className="flex-none text-sm ltr:ml-3 rtl:mr-3 leading-[1] relative top-1">
                      <iconify-icon icon="heroicons-outline:chevron-down" />
                    </div>
                  </a>

                  <ul className="sub-menu">
                    <li>
                      <a href="basic-table.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons-outline:table"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">جدول پایه</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="advance-table.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons-outline:table"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">جدول پیشرفته</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="apex-chart.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons-outline:chart-bar"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">چت Apex</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="chartjs.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons-outline:chart-bar"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">Chart js</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="map.html">
                        <div className="flex space-x-2 items-start rtl:space-x-reverse">
                          <iconify-icon
                            icon="heroicons-outline:map"
                            className="leading-[1] text-base"
                          />
                          <span className="leading-[1]">نقشه</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="nav-tools flex items-center lg:space-x-5 space-x-3 rtl:space-x-reverse leading-0">
              <div className="relative">
                <button
                  className="text-slate-800 dark:text-white focus:ring-0 focus:outline-none font-medium rounded-lg text-sm text-center
            inline-flex items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <iconify-icon
                    icon="circle-flags:uk"
                    className="mr-0 md:mr-2 rtl:ml-2 text-xl"
                  />
                  <span className="text-sm md:block hidden font-medium text-slate-600 dark:text-slate-300">
                    En
                  </span>
                </button>

                <div
                  className="dropdown-menu z-10 hidden bg-white divide-y divide-slate-100 shadow w-44 dark:bg-slate-800 border dark:border-slate-900 !top-[25px] rounded-md
            overflow-hidden"
                >
                  <ul className="py-1 text-sm text-slate-800 dark:text-slate-200">
                    <li>
                      <a
                        href="index.html#"
                        className="flex items-center px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white"
                      >
                        <iconify-icon
                          icon="circle-flags:uk"
                          className="ltr:mr-2 rtl:ml-2 text-xl"
                        />
                        <span className="font-medium">ENG</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="index.html#"
                        className="flex items-center px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white"
                      >
                        <iconify-icon
                          icon="emojione:flag-for-germany"
                          className="ltr:mr-2 rtl:ml-2 text-xl"
                        />
                        <span className="font-medium">GER</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <button
                  id="themeMood"
                  className="h-[28px] w-[28px] lg:h-[32px] lg:w-[32px] lg:bg-gray-500-f7 bg-slate-50 dark:bg-slate-900 lg:dark:bg-slate-900 dark:text-white text-slate-900 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center"
                >
                  <iconify-icon
                    className="text-slate-800 dark:text-white text-xl dark:block hidden"
                    id="moonIcon"
                    icon="line-md:sunny-outline-to-moon-alt-loop-transition"
                  />
                  <iconify-icon
                    className="text-slate-800 dark:text-white text-xl dark:hidden block"
                    id="sunIcon"
                    icon="line-md:moon-filled-to-sunny-filled-loop-transition"
                  />
                </button>
              </div>

              <div>
                <button
                  id="grayScale"
                  className="lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900 dark:text-white text-slate-900 cursor-pointer
            rounded-full text-[20px] flex flex-col items-center justify-center"
                >
                  <iconify-icon
                    className="text-slate-800 dark:text-white text-xl"
                    icon="mdi:paint-outline"
                  />
                </button>
              </div>

              <div className="relative md:block hidden">
                <button
                  className="lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900 dark:text-white text-slate-900 cursor-pointer
      rounded-full text-[20px] flex flex-col items-center justify-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <iconify-icon
                    className="text-slate-800 dark:text-white text-xl"
                    icon="heroicons-outline:mail"
                  />
                  <span
                    className="absolute -right-1 lg:top-0 -top-[6px] h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center
        justify-center rounded-full text-white z-[45]"
                  >
                    10
                  </span>
                </button>

                <div
                  className="dropdown-menu z-10 hidden bg-white divide-y divide-slate-100 dark:divide-slate-700 shadow w-[335px]
      dark:bg-slate-800 border dark:border-slate-700 !top-[23px] rounded-md overflow-hidden lrt:origin-top-right rtl:origin-top-left"
                >
                  <div className="flex items-center justify-between py-4 px-4">
                    <h3 className="text-sm font-Inter font-medium text-slate-700 dark:text-white">
                      پیام ها
                    </h3>
                    <a
                      className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white"
                      href="index.html#"
                    >
                      مشاهده همه
                    </a>
                  </div>
                  <div
                    className="divide-y divide-slate-100 dark:divide-slate-700"
                    role="none"
                  >
                    <div className="text-slate-600 dark:text-slate-300 block w-full px-4 py-2 text-sm">
                      <div className="flex ltr:text-left rtl:text-right space-x-3 rtl:space-x-reverse relative">
                        <div className="flex-none">
                          <div className="h-8 w-8 bg-white dark:bg-slate-700 rounded-full relative">
                            <span
                              className="bg-secondary-500 w-[10px] h-[10px] rounded-full border border-white dark:border-slate-700 inline-block absolute
                right-0 top-0"
                            ></span>
                            <img
                              src="https://html.ashkankiani.ir/assets/images/all-img/user.png"
                              alt="user"
                              className="block w-full h-full object-cover rounded-full border hover:border-white border-transparent"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <a
                            href="index.html#"
                            className="text-slate-800 dark:text-slate-300 text-sm font-medium mb-1 before:w-full before:h-full before:absolute
                before:top-0 before:left-0"
                          >
                            وید وارن
                          </a>
                          <div className="text-xs hover:text-[#68768A] text-slate-600 dark:text-slate-300 mb-1">
                            سلام! حال شما چطور است؟.....
                          </div>
                          <div className="text-slate-400 dark:text-slate-400 text-xs">
                            3 دقیقه پیش
                          </div>
                        </div>
                        <div className="flex-0">
                          <span className="h-4 w-4 bg-danger-500 border border-white rounded-full text-[10px] flex items-center justify-center text-white">
                            1
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 block w-full px-4 py-2 text-sm  cursor-pointer">
                      <div className="flex ltr:text-left rtl:text-right space-x-3 rtl:space-x-reverse relative">
                        <div className="flex-none">
                          <div className="h-8 w-8 bg-white dark:bg-slate-700 rounded-full relative">
                            <span
                              className="bg-green-500 w-[10px] h-[10px] rounded-full border border-white dark:border-slate-700 inline-block absolute
                right-0 top-0"
                            ></span>
                            <img
                              src="https://html.ashkankiani.ir/assets/images/all-img/user2.png"
                              alt="user"
                              className="block w-full h-full object-cover rounded-full border hover:border-white border-transparent"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <a
                            href="index.html#"
                            className="text-slate-800 dark:text-slate-300 text-sm font-medium mb-1 before:w-full before:h-full before:absolute
                before:top-0 before:left-0"
                          >
                            مهدی عبدی
                          </a>
                          <div className="text-xs hover:text-[#68768A] text-slate-600 dark:text-slate-300 mb-1">
                            سلام! حال شما چطور است؟.....
                          </div>
                          <div className="text-slate-400 dark:text-slate-400 text-xs">
                            3 دقیقه پیش
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 block w-full px-4 py-2 text-sm  cursor-pointer">
                      <div className="flex ltr:text-left rtl:text-right space-x-3 rtl:space-x-reverse relative">
                        <div className="flex-none">
                          <div className="h-8 w-8 bg-white dark:bg-slate-700 rounded-full relative">
                            <span
                              className="bg-green-500 w-[10px] h-[10px] rounded-full border border-white dark:border-slate-700 inline-block absolute
                right-0 top-0"
                            ></span>
                            <img
                              src="https://html.ashkankiani.ir/assets/images/all-img/user3.png"
                              alt="user"
                              className="block w-full h-full object-cover rounded-full border hover:border-white border-transparent"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <a
                            href="index.html#"
                            className="text-slate-800 dark:text-slate-300 text-sm font-medium mb-1 before:w-full before:h-full before:absolute
                before:top-0 before:left-0"
                          >
                            سارا مولایی
                          </a>
                          <div className="text-xs hover:text-[#68768A] text-slate-600 dark:text-slate-300 mb-1">
                            سلام! حال شما چطور است؟.....
                          </div>
                          <div className="text-slate-400 dark:text-slate-400 text-xs">
                            3 دقیقه پیش
                          </div>
                        </div>
                        <div className="flex-0">
                          <span className="h-4 w-4 bg-danger-500 border border-white rounded-full text-[10px] flex items-center justify-center text-white">
                            8
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative md:block hidden">
                <button
                  className="lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900 dark:text-white text-slate-900 cursor-pointer
      rounded-full text-[20px] flex flex-col items-center justify-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <iconify-icon
                    className="animate-tada text-slate-800 dark:text-white text-xl"
                    icon="heroicons-outline:bell"
                  />
                  <span
                    className="absolute -right-1 lg:top-0 -top-[6px] h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center
        justify-center rounded-full text-white z-[99]"
                  >
                    4
                  </span>
                </button>

                <div
                  className="dropdown-menu z-10 hidden bg-white shadow w-[335px]
      dark:bg-slate-800 border dark:border-slate-700 !top-[23px] rounded-md overflow-hidden lrt:origin-top-right rtl:origin-top-left"
                >
                  <div className="flex items-center justify-between py-4 px-4">
                    <h3 className="text-sm font-Inter font-medium text-slate-700 dark:text-white">
                      نوتیفیکیشن ها
                    </h3>
                    <a
                      className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white"
                      href="index.html#"
                    >
                      مشاهده همه
                    </a>
                  </div>
                  <div className="" role="none">
                    <div className="bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70 text-slate-800 block w-full px-4 py-2 text-sm relative">
                      <div className="flex ltr:text-left rtl:text-right">
                        <div className="flex-none ltr:mr-3 rtl:ml-3">
                          <div className="h-8 w-8 bg-white rounded-full">
                            <img
                              src="https://html.ashkankiani.ir/assets/images/all-img/user.png"
                              alt="user"
                              className="border-white block w-full h-full object-cover rounded-full border"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <a
                            href="index.html#"
                            className="text-slate-600 dark:text-slate-300 text-sm font-medium mb-1 before:w-full before:h-full before:absolute
                before:top-0 before:left-0"
                          >
                            سفارش شما ثبت شد
                          </a>
                          <div className="text-slate-500 dark:text-slate-200 text-xs leading-4">
                            او کوچکترین تسلیم نمی شود، انگار جایی چیزی هست.
                          </div>
                          <div className="text-slate-400 dark:text-slate-400 text-xs mt-1">
                            3 دقیقه پیش
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 block w-full px-4 py-2 text-sm">
                      <div className="flex ltr:text-left rtl:text-right relative">
                        <div className="flex-none ltr:mr-3 rtl:ml-3">
                          <div className="h-8 w-8 bg-white rounded-full">
                            <img
                              src="https://html.ashkankiani.ir/assets/images/all-img/user2.png"
                              alt="user"
                              className="border-transparent block w-full h-full object-cover rounded-full border"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <a
                            href="index.html#"
                            className="text-slate-600 dark:text-slate-300 text-sm font-medium mb-1 before:w-full before:h-full before:absolute
                before:top-0 before:left-0"
                          >
                            تبریک دارلین 🎉
                          </a>
                          <div className="text-slate-600 dark:text-slate-300 text-xs leading-4">
                            برنده نشان پرفروش ماهانه
                          </div>
                          3 دقیقه پیش
                        </div>
                      </div>
                      <div className="flex-0">
                        <span className="h-[10px] w-[10px] bg-danger-500 border border-white dark:border-slate-400 rounded-full inline-block"></span>
                      </div>
                    </div>
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 block w-full px-4 py-2 text-sm">
                    <div className="flex ltr:text-left rtl:text-right relative">
                      <div className="flex-none ltr:mr-3 rtl:ml-3">
                        <div className="h-8 w-8 bg-white rounded-full">
                          <img
                            src="https://html.ashkankiani.ir/assets/images/all-img/user3.png"
                            alt="user"
                            className="border-transparent block w-full h-full object-cover rounded-full border"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <a
                          href="index.html#"
                          className="text-slate-600 dark:text-slate-300 text-sm font-medium mb-1 before:w-full before:h-full before:absolute
              before:top-0 before:left-0"
                        >
                          سفارش اصلاح شده 👋
                        </a>
                        <div className="text-slate-600 dark:text-slate-300 text-xs leading-4">
                          برنده نشان پرفروش ماهانه
                        </div>
                        <div className="text-slate-400 dark:text-slate-400 text-xs mt-1">
                          3 دقیقه پیش
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 block w-full px-4 py-2 text-sm">
                    <div className="flex ltr:text-left rtl:text-right relative">
                      <div className="flex-none ltr:mr-3 rtl:ml-3">
                        <div className="h-8 w-8 bg-white rounded-full">
                          <img
                            src="https://html.ashkankiani.ir/assets/images/all-img/user4.png"
                            alt="user"
                            className="border-transparent block w-full h-full object-cover rounded-full border"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <a
                          href="index.html#"
                          className="text-slate-600 dark:text-slate-300 text-sm font-medium mb-1 before:w-full before:h-full before:absolute
              before:top-0 before:left-0"
                        >
                          سعید محمدی
                        </a>
                        <div className="text-slate-600 dark:text-slate-300 text-xs leading-4">
                          شما را به گروه پروژه تاپ راز اضافه کرد...
                        </div>
                        <div className="text-slate-400 dark:text-slate-400 text-xs mt-1">
                          3 دقیقه پیش
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:block hidden w-full">
                <button
                  className="text-slate-800 dark:text-white focus:ring-0 focus:outline-none font-medium rounded-lg text-sm text-center
      inline-flex items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="lg:h-8 lg:w-8 h-7 w-7 rounded-full flex-1 ltr:mr-[10px] rtl:ml-[10px]">
                    <img
                      src="assets/images/all-img/user.png"
                      alt="user"
                      className="block w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="flex-none text-slate-600 dark:text-white text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap">
                    اشکان کیانی
                  </span>
                  <svg
                    className="w-[16px] h-[16px] dark:text-white hidden lg:inline-block text-base inline-block ml-[10px] rtl:mr-[10px]"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div
                  className="dropdown-menu z-10 hidden bg-white divide-y divide-slate-100 shadow w-44 dark:bg-slate-800 border dark:border-slate-700 !top-[23px] rounded-md
      overflow-hidden"
                >
                  <ul className="py-1 text-sm text-slate-800 dark:text-slate-200">
                    <li>
                      <a
                        href="index.html"
                        className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                      >
                        <iconify-icon
                          icon="heroicons-outline:user"
                          className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                        />
                        <span className="font-Inter">داشبورد</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="chat.html"
                        className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                      >
                        <iconify-icon
                          icon="heroicons-outline:chat"
                          className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                        />
                        <span className="font-Inter">چت</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="email.html"
                        className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                      >
                        <iconify-icon
                          icon="heroicons-outline:mail"
                          className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                        />
                        <span className="font-Inter">ایمیل</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="todo.html"
                        className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                      >
                        <iconify-icon
                          icon="heroicons-outline:clipboard-check"
                          className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                        />
                        <span className="font-Inter">تودو</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="settings.html"
                        className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                      >
                        <iconify-icon
                          icon="heroicons-outline:cog"
                          className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                        />
                        <span className="font-Inter">تنظیمات</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="pricing.html"
                        className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                      >
                        <iconify-icon
                          icon="heroicons-outline:credit-card"
                          className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                        />
                        <span className="font-Inter">قیمت</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="signin-one.html"
                        className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                      >
                        <iconify-icon
                          icon="heroicons-outline:login"
                          className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                        />
                        <span className="font-Inter">خروج</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <button className="smallDeviceMenuController md:hidden block leading-0">
                <iconify-icon
                  className="cursor-pointer text-slate-900 dark:text-white text-2xl"
                  icon="heroicons-outline:menu-alt-3"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
