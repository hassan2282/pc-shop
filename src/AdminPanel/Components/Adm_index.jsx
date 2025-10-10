import React from 'react'
import { Icon } from '@iconify/react'

function Adm_index() {
  return (
    <div className="content-wrapper transition-all duration-150 ltr:ml-[248px] rtl:mr-[248px]" id="content_wrapper">
      <div className="page-content">
        <div className="transition-all duration-150 container-fluid" id="page_layout">
          <div id="content_layout">

            <div>
              <div className="flex justify-between flex-wrap items-center mb-6">
                <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 mb-4 sm:mb-0 flex space-x-3 rtl:space-x-reverse">داشبورد</h4>
                <div className="flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse">
                  <button className="btn leading-0 inline-flex justify-center bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-300 !font-normal">
                    <span className="flex items-center">
                      <Icon className="text-xl ltr:mr-2 rtl:ml-2 font-light" icon="heroicons-outline:calendar" />
                      <span>هفتگی</span>
                    </span>
                  </button>
                  <button className="btn leading-0 inline-flex justify-center bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-300 !font-normal">
                    <span className="flex items-center">
                      <Icon className="text-xl ltr:mr-2 rtl:ml-2 font-light" icon="heroicons-outline:filter" />
                      <span>تاریخ را انتخاب کنید</span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-5 mb-5">
                <div className="2xl:col-span-3 lg:col-span-4 col-span-12">
                  <div
                    className="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative"
                    style={{
                      backgroundImage: "url('/src/AdminPanel/assets/images/all-img/widget-bg-1.png')"
                    }}
                  >
                    {/* محتوای div اینجاست */}
                  </div>

                  <div className="max-w-[180px]">
                    <div className="text-xl font-medium text-slate-900 mb-2">دش کد خود  را ارتقا دهید</div>
                    <p className="text-sm text-slate-800">برنامه حرفه ای برای نتایج بهتر</p>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 ltr:right-6 rtl:left-6 mt-2 h-12 w-12 bg-white rounded-full text-xs font-medium
                            flex flex-col items-center justify-center">اکنون</div>
                </div>
              </div>
              <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
                <div className="p-4 card">
                  <div className="grid md:grid-cols-3 col-span-1 gap-4">

                    {/* <!-- BEGIN: Group Chart2 --> */}


                    <div className="py-[18px] px-4 rounded-[6px] bg-[#E5F9FF] dark:bg-slate-900	 ">
                      <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <div className="flex-none">
                          <div id="wline1"></div>
                        </div>
                        <div className="flex-1">
                          <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium">کل درآمد</div>
                          <div className="text-slate-900 dark:text-white text-lg font-medium">
                            3,564
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="py-[18px] px-4 rounded-[6px] bg-[#FFEDE5] dark:bg-slate-900	 ">
                      <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <div className="flex-none">
                          <div id="wline2"></div>
                        </div>
                        <div className="flex-1">
                          <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium">محصولات فروخته شده</div>
                          <div className="text-slate-900 dark:text-white text-lg font-medium">
                            564
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="py-[18px] px-4 rounded-[6px] bg-[#EAE5FF] dark:bg-slate-900	 ">
                      <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <div className="flex-none">
                          <div id="wline3"></div>
                        </div>
                        <div className="flex-1">
                          <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium">رشد</div>
                          <div className="text-slate-900 dark:text-white text-lg font-medium">
                            +5.0%
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- END: Group Chart2 --> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5">
              <div className="lg:col-span-8 col-span-12">
                <div className="card">
                  <div className="card-body p-6">
                    <div className="legend-ring">
                      <div id="revenue-barchart"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12">
                <div className="card">
                  <header className="card-header">
                    <h4 className="card-title">نمای کلی</h4>
                    <div>
                      {/* <!-- BEGIN: Card Dropdown --> */}
                      <div className="relative">
                        <div className="dropdown relative">
                          <button className="text-xl text-center block w-full " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="text-lg inline-flex h-6 w-6 flex-col items-center justify-center border border-slate-200 dark:border-slate-700
                    rounded dark:text-slate-400">
                              <Icon icon="heroicons-outline:dots-horizontal" />
                            </span>
                          </button>
                          <ul className=" dropdown-menu min-w-[120px] absolute text-sm text-slate-700 dark:text-white hidden bg-white dark:bg-slate-700
                shadow z-[2] overflow-hidden list-none text-left rounded-lg mt-1 m-0 bg-clip-padding border-none">
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">28 روز گذشته</a>
                            </li>
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">ماه گذشته</a>
                            </li>
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">سال گذشته</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <!-- END: Card Droopdown --> */}
                    </div>
                  </header>
                  <div className="card-body p-6">
                    <div id="radial-bar"></div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 col-span-12">
                <div className="card">
                  <header className="card-header noborder">
                    <h4 className="card-title">همه شرکت</h4>
                    <div>
                      {/* <!-- BEGIN: Card Dropdown --> */}
                      <div className="relative">
                        <div className="dropdown relative">
                          <button className="text-xl text-center block w-full " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="text-lg inline-flex h-6 w-6 flex-col items-center justify-center border border-slate-200 dark:border-slate-700
                    rounded dark:text-slate-400">
                              <Icon icon="heroicons-outline:dots-horizontal" />
                            </span>
                          </button>
                          <ul className=" dropdown-menu min-w-[120px] absolute text-sm text-slate-700 dark:text-white hidden bg-white dark:bg-slate-700
                shadow z-[2] overflow-hidden list-none text-left rounded-lg mt-1 m-0 bg-clip-padding border-none">
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">28 روز گذشته</a>
                            </li>
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">ماه گذشته</a>
                            </li>
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">سال گذشته</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <!-- END: Card Droopdown --> */}
                    </div>
                  </header>
                  <div className="card-body p-6">

                    {/* <!-- BEGIN: Company Table --> */}


                    <div className="overflow-x-auto -mx-6">
                      <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                          <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                            <thead className="  bg-slate-200 dark:bg-slate-700">
                              <tr>

                                <th scope="col" className=" table-th ">
                                  شرکت
                                </th>

                                <th scope="col" className=" table-th ">
                                  دسته
                                </th>

                                <th scope="col" className=" table-th ">
                                  فروش ها
                                </th>

                                <th scope="col" className=" table-th ">
                                  بازدیدها
                                </th>

                                <th scope="col" className=" table-th ">
                                  درآمد
                                </th>

                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">

                              <tr>
                                <td className="table-td">
                                  <div className="flex items-center">
                                    <div className="flex-none">
                                      <div className="w-8 h-8 rounded-[100%] ltr:mr-3 rtl:ml-3">
                                        <img src="/src/AdminPanel/assets/images/users/user-1.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                                      </div>
                                    </div>
                                    <div className="flex-1 text-start">
                                      <h4 className="text-sm font-medium text-slate-600 whitespace-nowrap">شرکت میهن</h4>
                                      <div className="text-xs font-normal text-slate-600 dark:text-slate-400">
                                        Biffco@example.com
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="table-td">تکنولوژی</td>
                                <td className="table-td ">
                                  <div className="flex space-x-6 items-center rtl:space-x-reverse">
                                    <span>
                                      95%</span>
                                    <span className=" text-xl  text-danger-500 ">

                                      <Icon icon="heroicons-outline:trending-down" />

                                    </span>
                                  </div>
                                </td>
                                <td className="table-td ">343</td>
                                <td className="table-td ">$231.26</td>
                              </tr>

                              <tr>
                                <td className="table-td">
                                  <div className="flex items-center">
                                    <div className="flex-none">
                                      <div className="w-8 h-8 rounded-[100%] ltr:mr-3 rtl:ml-3">
                                        <img src="/src/AdminPanel/assets/images/users/user-2.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                                      </div>
                                    </div>
                                    <div className="flex-1 text-start">
                                      <h4 className="text-sm font-medium text-slate-600 whitespace-nowrap">شرکت میهن</h4>
                                      <div className="text-xs font-normal text-slate-600 dark:text-slate-400">
                                        Biffco@example.com
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="table-td">تکنولوژی</td>
                                <td className="table-td ">
                                  <div className="flex space-x-6 items-center rtl:space-x-reverse">
                                    <span>
                                      197%</span>
                                    <span className=" text-xl  text-success-500 ">

                                      <Icon icon="heroicons-outline:trending-up" />

                                    </span>
                                  </div>
                                </td>
                                <td className="table-td ">315</td>
                                <td className="table-td ">$432.81</td>
                              </tr>

                              <tr>
                                <td className="table-td">
                                  <div className="flex items-center">
                                    <div className="flex-none">
                                      <div className="w-8 h-8 rounded-[100%] ltr:mr-3 rtl:ml-3">
                                        <img src="/src/AdminPanel/assets/images/users/user-3.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                                      </div>
                                    </div>
                                    <div className="flex-1 text-start">
                                      <h4 className="text-sm font-medium text-slate-600 whitespace-nowrap">شرکت میهن</h4>
                                      <div className="text-xs font-normal text-slate-600 dark:text-slate-400">
                                        Biffco@example.com
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="table-td">تکنولوژی</td>
                                <td className="table-td ">
                                  <div className="flex space-x-6 items-center rtl:space-x-reverse">
                                    <span>
                                      137%</span>
                                    <span className=" text-xl  text-success-500 ">

                                      <Icon icon="heroicons-outline:trending-up" />

                                    </span>
                                  </div>
                                </td>
                                <td className="table-td ">329</td>
                                <td className="table-td ">$437.65</td>
                              </tr>

                              <tr>
                                <td className="table-td">
                                  <div className="flex items-center">
                                    <div className="flex-none">
                                      <div className="w-8 h-8 rounded-[100%] ltr:mr-3 rtl:ml-3">
                                        <img src="/src/AdminPanel/assets/images/users/user-4.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                                      </div>
                                    </div>
                                    <div className="flex-1 text-start">
                                      <h4 className="text-sm font-medium text-slate-600 whitespace-nowrap">شرکت میهن</h4>
                                      <div className="text-xs font-normal text-slate-600 dark:text-slate-400">
                                        Biffco@example.com
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="table-td">تکنولوژی</td>
                                <td className="table-td ">
                                  <div className="flex space-x-6 items-center rtl:space-x-reverse">
                                    <span>
                                      101%</span>
                                    <span className=" text-xl  text-success-500 ">

                                      <Icon icon="heroicons-outline:trending-up" />

                                    </span>
                                  </div>
                                </td>
                                <td className="table-td ">336</td>
                                <td className="table-td ">$387.55</td>
                              </tr>

                              <tr>
                                <td className="table-td">
                                  <div className="flex items-center">
                                    <div className="flex-none">
                                      <div className="w-8 h-8 rounded-[100%] ltr:mr-3 rtl:ml-3">
                                        <img src="/src/AdminPanel/assets/images/users/user-5.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                                      </div>
                                    </div>
                                    <div className="flex-1 text-start">
                                      <h4 className="text-sm font-medium text-slate-600 whitespace-nowrap">شرکت میهن</h4>
                                      <div className="text-xs font-normal text-slate-600 dark:text-slate-400">
                                        Biffco@example.com
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="table-td">تکنولوژی</td>
                                <td className="table-td ">
                                  <div className="flex space-x-6 items-center rtl:space-x-reverse">
                                    <span>
                                      99%</span>
                                    <span className=" text-xl  text-danger-500 ">

                                      <Icon icon="heroicons-outline:trending-down" />

                                    </span>
                                  </div>
                                </td>
                                <td className="table-td ">375</td>
                                <td className="table-td ">$489.80</td>
                              </tr>

                              <tr>
                                <td className="table-td">
                                  <div className="flex items-center">
                                    <div className="flex-none">
                                      <div className="w-8 h-8 rounded-[100%] ltr:mr-3 rtl:ml-3">
                                        <img src="/src/AdminPanel/assets/images/users/user-6.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                                      </div>
                                    </div>
                                    <div className="flex-1 text-start">
                                      <h4 className="text-sm font-medium text-slate-600 whitespace-nowrap">شرکت میهن</h4>
                                      <div className="text-xs font-normal text-slate-600 dark:text-slate-400">
                                        Biffco@example.com
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="table-td">تکنولوژی</td>
                                <td className="table-td ">
                                  <div className="flex space-x-6 items-center rtl:space-x-reverse">
                                    <span>
                                      101%</span>
                                    <span className=" text-xl  text-success-500 ">

                                      <Icon icon="heroicons-outline:trending-up" />

                                    </span>
                                  </div>
                                </td>
                                <td className="table-td ">490</td>
                                <td className="table-td ">$421.45</td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* <!-- END: Company Table --> */}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12">
                <div className="card ">
                  <div className="card-header ">
                    <h4 className="card-title">فعالیت اخیر</h4>
                    <div>
                      {/* <!-- BEGIN: Card Dropdown --> */}
                      <div className="relative">
                        <div className="dropdown relative">
                          <button className="text-xl text-center block w-full " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="text-lg inline-flex h-6 w-6 flex-col items-center justify-center border border-slate-200 dark:border-slate-700
                    rounded dark:text-slate-400">
                              <Icon icon="heroicons-outline:dots-horizontal" />
                            </span>
                          </button>
                          <ul className=" dropdown-menu min-w-[120px] absolute text-sm text-slate-700 dark:text-white hidden bg-white dark:bg-slate-700
                shadow z-[2] overflow-hidden list-none text-left rounded-lg mt-1 m-0 bg-clip-padding border-none">
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">28 روز گذشته</a>
                            </li>
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">ماه گذشته</a>
                            </li>
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">سال گذشته</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <!-- END: Card Droopdown --> */}
                    </div>
                  </div>
                  <div className="card-body p-6">

                    {/* <!-- BEGIN: Activity Card --> */}

                    <div>
                      <ul className="list-item space-y-3 h-full overflow-x-auto">



                        <li className="flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0">
                          <div>
                            <div className="w-8 h-8 rounded-[100%]">
                              <img src="/src/AdminPanel/assets/images/users/user-1.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                            </div>
                          </div>
                          <div className="text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]">
                            <div className="text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap">جلسه آماده سازی راه اندازی برنامه تلفن همراه KPI مالی.</div>
                          </div>
                          <div className="flex-1 ltr:text-right rtl:text-left">
                            <div className="text-sm font-light text-slate-400 dark:text-slate-400">
                              1 ساعت
                            </div>
                          </div>
                        </li>


                        <li className="flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0">
                          <div>
                            <div className="w-8 h-8 rounded-[100%]">
                              <img src="/src/AdminPanel/assets/images/users/user-2.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                            </div>
                          </div>
                          <div className="text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]">
                            <div className="text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap">جلسه آماده سازی راه اندازی برنامه تلفن همراه KPI مالی.</div>
                          </div>
                          <div className="flex-1 ltr:text-right rtl:text-left">
                            <div className="text-sm font-light text-slate-400 dark:text-slate-400">
                              1 ساعت
                            </div>
                          </div>
                        </li>


                        <li className="flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0">
                          <div>
                            <div className="w-8 h-8 rounded-[100%]">
                              <img src="/src/AdminPanel/assets/images/users/user-3.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                            </div>
                          </div>
                          <div className="text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]">
                            <div className="text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap">جلسه آماده سازی راه اندازی برنامه تلفن همراه KPI مالی.</div>
                          </div>
                          <div className="flex-1 ltr:text-right rtl:text-left">
                            <div className="text-sm font-light text-slate-400 dark:text-slate-400">
                              1 ساعت
                            </div>
                          </div>
                        </li>


                        <li className="flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0">
                          <div>
                            <div className="w-8 h-8 rounded-[100%]">
                              <img src="/src/AdminPanel/assets/images/users/user-4.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                            </div>
                          </div>
                          <div className="text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]">
                            <div className="text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap">جلسه آماده سازی راه اندازی برنامه تلفن همراه KPI مالی.</div>
                          </div>
                          <div className="flex-1 ltr:text-right rtl:text-left">
                            <div className="text-sm font-light text-slate-400 dark:text-slate-400">
                              1 ساعت
                            </div>
                          </div>
                        </li>


                        <li className="flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0">
                          <div>
                            <div className="w-8 h-8 rounded-[100%]">
                              <img src="/src/AdminPanel/assets/images/users/user-5.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                            </div>
                          </div>
                          <div className="text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]">
                            <div className="text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap">جلسه آماده سازی راه اندازی برنامه تلفن همراه KPI مالی.</div>
                          </div>
                          <div className="flex-1 ltr:text-right rtl:text-left">
                            <div className="text-sm font-light text-slate-400 dark:text-slate-400">
                              1 ساعت
                            </div>
                          </div>
                        </li>


                        <li className="flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0">
                          <div>
                            <div className="w-8 h-8 rounded-[100%]">
                              <img src="/src/AdminPanel/assets/images/users/user-6.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                            </div>
                          </div>
                          <div className="text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]">
                            <div className="text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap">جلسه آماده سازی راه اندازی برنامه تلفن همراه KPI مالی.</div>
                          </div>
                          <div className="flex-1 ltr:text-right rtl:text-left">
                            <div className="text-sm font-light text-slate-400 dark:text-slate-400">
                              1 ساعت
                            </div>
                          </div>
                        </li>


                        <li className="flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0">
                          <div>
                            <div className="w-8 h-8 rounded-[100%]">
                              <img src="/src/AdminPanel/assets/images/users/user-1.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                            </div>
                          </div>
                          <div className="text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]">
                            <div className="text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap">جلسه آماده سازی راه اندازی برنامه تلفن همراه KPI مالی.</div>
                          </div>
                          <div className="flex-1 ltr:text-right rtl:text-left">
                            <div className="text-sm font-light text-slate-400 dark:text-slate-400">
                              1 ساعت
                            </div>
                          </div>
                        </li>


                        <li className="flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0">
                          <div>
                            <div className="w-8 h-8 rounded-[100%]">
                              <img src="/src/AdminPanel/assets/images/users/user-2.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                            </div>
                          </div>
                          <div className="text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]">
                            <div className="text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap">جلسه آماده سازی راه اندازی برنامه تلفن همراه KPI مالی.</div>
                          </div>
                          <div className="flex-1 ltr:text-right rtl:text-left">
                            <div className="text-sm font-light text-slate-400 dark:text-slate-400">
                              1 ساعت
                            </div>
                          </div>
                        </li>


                        <li className="flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0">
                          <div>
                            <div className="w-8 h-8 rounded-[100%]">
                              <img src="/src/AdminPanel/assets/images/users/user-3.jpg" alt="" className="w-full h-full rounded-[100%] object-cover" />
                            </div>
                          </div>
                          <div className="text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]">
                            <div className="text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap">جلسه آماده سازی راه اندازی برنامه تلفن همراه KPI مالی.</div>
                          </div>
                          <div className="flex-1 ltr:text-right rtl:text-left">
                            <div className="text-sm font-light text-slate-400 dark:text-slate-400">
                              1 ساعت
                            </div>
                          </div>
                        </li>

                      </ul>
                    </div>
                    {/* <!-- END: Activity Card --> */}



                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 col-span-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title"> بیشترین فروش</h4>
                    <div>
                      {/* <!-- BEGIN: Card Dropdown --> */}
                      <div className="relative">
                        <div className="dropdown relative">
                          <button className="text-xl text-center block w-full " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="text-lg inline-flex h-6 w-6 flex-col items-center justify-center border border-slate-200 dark:border-slate-700
                    rounded dark:text-slate-400">
                              <Icon icon="heroicons-outline:dots-horizontal" />
                            </span>
                          </button>
                          <ul className=" dropdown-menu min-w-[120px] absolute text-sm text-slate-700 dark:text-white hidden bg-white dark:bg-slate-700
                shadow z-[2] overflow-hidden list-none text-left rounded-lg mt-1 m-0 bg-clip-padding border-none">
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">28 روز گذشته</a>
                            </li>
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">ماه گذشته</a>
                            </li>
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">سال گذشته</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-6">




                    <div className="md:flex items-center">
                      <div className="grow-0">
                        <h4 className="text-slate-600 dark:text-slate-200 text-sm font-normal mb-[6px]">درآمد کل</h4>

                        <div className="text-lg font-medium mb-[6px] dark:text-white text-slate-900">
                          $12,65,64787.00
                        </div>


                        <div className="text-xs font-light dark:text-slate-200">
                          <span className="text-primary-500">+08%</span> از ماه گذشته
                        </div>
                        <ul className="bg-slate-50 dark:bg-slate-900 rounded p-4 min-w-[184px] space-y-5 mt-4">



                          <li className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                            <span className="flex space-x-2 rtl:space-x-reverse items-center">
                              <span
                                className="inline-flex h-[6px] w-[6px] bg-primary-500 ring-opacity-25 rounded-full ring-4
                        bg-primary-500 ring-primary-500
                        "
                              ></span>
                              <span>Nevada</span>
                            </span>
                            <span>$125k</span>
                          </li>


                          <li className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                            <span className="flex space-x-2 rtl:space-x-reverse items-center">
                              <span
                                className="inline-flex h-[6px] w-[6px] bg-primary-500 ring-opacity-25 rounded-full ring-4
                        bg-success-500 ring-success-500
                        "
                              ></span>
                              <span>Colorado</span>
                            </span>
                            <span>$$325k</span>
                          </li>


                          <li className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                            <span className="flex space-x-2 rtl:space-x-reverse items-center">
                              <span
                                className="inline-flex h-[6px] w-[6px] bg-primary-500 ring-opacity-25 rounded-full ring-4
                        bg-info-500 ring-info-500
                        "
                              ></span>
                              <span>Iowa</span>
                            </span>
                            <span>$67</span>
                          </li>


                          <li className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                            <span className="flex space-x-2 rtl:space-x-reverse items-center">
                              <span
                                className="inline-flex h-[6px] w-[6px] bg-primary-500 ring-opacity-25 rounded-full ring-4
                        bg-warning-500 ring-warning-500
                        "
                              ></span>
                              <span>Arkansas</span>
                            </span>
                            <span>$354k</span>
                          </li>


                          <li className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                            <span className="flex space-x-2 rtl:space-x-reverse items-center">
                              <span
                                className="inline-flex h-[6px] w-[6px] bg-primary-500 ring-opacity-25 rounded-full ring-4
                        bg-success-500 ring-success-500
                        "
                              ></span>
                              <span>Wyoming</span>
                            </span>
                            <span>$195k</span>
                          </li>


                          <li className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                            <span className="flex space-x-2 rtl:space-x-reverse items-center">
                              <span
                                className="inline-flex h-[6px] w-[6px] bg-primary-500 ring-opacity-25 rounded-full ring-4
                        bg-secondary-500 ring-secondary-500
                        "
                              ></span>
                              <span>کشورهای دیگر</span>
                            </span>
                            <span>$295k</span>
                          </li>

                        </ul>
                      </div>
                      <div className=" grow">
                        <div className="h-[360px] w-full bg-white dark:bg-slate-800 ltr:pl-10 rtl:pr-10">
                          <div id="world-map" className="h-full w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">نمای کلی</h4>
                    <div>
                      <div className="relative">
                        <div className="dropdown relative">
                          <button className="text-xl text-center block w-full " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="text-lg inline-flex h-6 w-6 flex-col items-center justify-center border border-slate-200 dark:border-slate-700
                    rounded dark:text-slate-400">
                              <Icon icon="heroicons-outline:dots-horizontal" />
                            </span>
                          </button>
                          <ul className=" dropdown-menu min-w-[120px] absolute text-sm text-slate-700 dark:text-white hidden bg-white dark:bg-slate-700
                shadow z-[2] overflow-hidden list-none text-left rounded-lg mt-1 m-0 bg-clip-padding border-none">
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">28 روز گذشته</a>
                            </li>
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">ماه گذشته</a>
                            </li>
                            <li>
                              <a href="index.html#" className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                        dark:hover:text-white">سال گذشته</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-6">
                    <div id="radar-home-chart"></div>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded p-4 mt-8 flex justify-between flex-wrap">
                      <div className="space-y-1">
                        <h4 className="text-slate-600 dark:text-slate-200 text-xs font-normal">مبلغ سرمایه گذاری</h4>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          $8264.35
                        </div>
                        <div className="text-slate-500 dark:text-slate-300 text-xs font-normal">
                          +0.001.23 (0.2%)
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-slate-600 dark:text-slate-200 text-xs font-normal">مبلغ سرمایه گذاری</h4>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          $8264.35
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-slate-600 dark:text-slate-200 text-xs font-normal">مبلغ سرمایه گذاری</h4>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          $8264.35
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
    )
}

export default Adm_index