import React from 'react'
import { Icon } from '@iconify/react'

function Adm_index() {
  return (
      // <!-- ============================================================== -->
      // <!-- Start right Content here -->
      // <!-- ============================================================== -->
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            {/* <!-- start page title --> */}
            <div class="row">
              <div class="col-12">
                <div
                  class="page-title-box d-sm-flex align-items-center justify-content-between bg-transparent"
                >
                  <h4 class="mb-sm-0">تجارت الکترونیک</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript:%20void(0);">داشبورد</a>
                      </li>
                      <li class="breadcrumb-item active">تجارت الکترونیک</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div class="row">
              <div class="col">
                <div class="h-100">
                  <div class="row mb-3 pb-1">
                    <div class="col-12">
                      <div
                        class="d-flex align-items-lg-center flex-lg-row flex-column"
                      >
                        <div class="flex-grow-1">
                          <h4 class="fs-16 mb-1">صبح بخیر، آنا!</h4>
                          <p class="text-muted mb-0">
                            این چیزی است که امروز در فروشگاه شما اتفاق می افتد.
                          </p>
                        </div>
                        <div class="mt-3 mt-lg-0">
                          <form action="javascript:void(0);">
                            <div class="row g-3 mb-0 align-items-center">
                              <div class="col-sm-auto">
                                <div class="input-group">
                                  <input
                                    type="text"
                                    class="form-control dash-filter-picker"
                                    data-provider="flatpickr"
                                    data-range-date="true"
                                    data-date-format="d M, Y"
                                    data-deafult-date="01 Jan 2022 to 31 Jan 2022"
                                  />
                                  <div
                                    class="input-group-text bg-primary border-primary text-white"
                                  >
                                    <i class="ri-calendar-2-line"></i>
                                  </div>
                                </div>
                              </div>
                              {/* <!--end col--> */}
                              <div class="col-auto">
                                <button
                                  type="button"
                                  class="btn btn-soft-primary"
                                >
                                  <i
                                    class="ri-add-circle-line align-middle me-1"
                                  ></i
                                  >افزودن محصول
                                </button>
                              </div>
                              {/* <!--end col--> */}
                              <div class="col-auto">
                                <button
                                  type="button"
                                  class="btn btn-soft-primary btn-icon waves-effect waves-light layout-rightside-btn"
                                >
                                  <i class="ri-pulse-line"></i>
                                </button>
                              </div>
                              {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                          </form>
                        </div>
                      </div>
                      {/* <!-- end card header --> */}
                    </div>
                    {/* <!--end col--> */}
                  </div>
                  {/* <!--end row--> */}

                  <div class="row">
                    <div class="col-xl-3 col-md-6">
                      {/* <!-- card --> */}
                      <div class="card card-animate">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 overflow-hidden">
                              <p
                                class="text-uppercase fw-medium text-muted text-truncate mb-0"
                              >
                                کل درآمد
                              </p>
                            </div>
                            <div class="flex-shrink-0">
                              <h5 class="text-success fs-14 mb-0">
                                <i
                                  class="ri-arrow-right-up-line fs-13 align-middle"
                                ></i
                                >+16.24٪
                              </h5>
                            </div>
                          </div>
                          <div
                            class="d-flex align-items-end justify-content-between mt-4"
                          >
                            <div>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                $<span
                                  class="counter-value"
                                  data-target="559.25"
                                  >0</span
                                >k
                              </h4>
                              <a
                                href="index.html"
                                class="text-decoration-underline"
                                >مشاهده درآمد خالص</a
                              >
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                              <span
                                class="avatar-title bg-primary-subtle rounded fs-3"
                              >
                                <i class="bx bx-dollar-circle text-primary"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card body --> */}
                      </div>
                      {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col --> */}

                    <div class="col-xl-3 col-md-6">
                      {/* <!-- card --> */}
                      <div class="card card-animate">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 overflow-hidden">
                              <p
                                class="text-uppercase fw-medium text-muted text-truncate mb-0"
                              >
                                سفارشات
                              </p>
                            </div>
                            <div class="flex-shrink-0">
                              <h5 class="text-danger fs-14 mb-0">
                                <i
                                  class="ri-arrow-right-down-line fs-13 align-middle"
                                ></i
                                >-3.57٪
                              </h5>
                            </div>
                          </div>
                          <div
                            class="d-flex align-items-end justify-content-between mt-4"
                          >
                            <div>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                <span class="counter-value" data-target="36894"
                                  >0</span
                                >
                              </h4>
                              <a
                                href="index.html"
                                class="text-decoration-underline"
                                >مشاهده تمامی سفارشات</a
                              >
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                              <span
                                class="avatar-title bg-primary-subtle rounded fs-3"
                              >
                                <i class="bx bx-shopping-bag text-primary"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card body --> */}
                      </div>
                      {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col --> */}

                    <div class="col-xl-3 col-md-6">
                      {/* <!-- card --> */}
                      <div class="card card-animate">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 overflow-hidden">
                              <p
                                class="text-uppercase fw-medium text-muted text-truncate mb-0"
                              >
                                مشتریان
                              </p>
                            </div>
                            <div class="flex-shrink-0">
                              <h5 class="text-success fs-14 mb-0">
                                <i
                                  class="ri-arrow-right-up-line fs-13 align-middle"
                                ></i
                                >+29.08٪
                              </h5>
                            </div>
                          </div>
                          <div
                            class="d-flex align-items-end justify-content-between mt-4"
                          >
                            <div>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                <span class="counter-value" data-target="183.35"
                                  >0</span
                                >م
                              </h4>
                              <a
                                href="index.html"
                                class="text-decoration-underline"
                                >جزئیات را ببینید</a
                              >
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                              <span
                                class="avatar-title bg-primary-subtle rounded fs-3"
                              >
                                <i class="bx bx-user-circle text-primary"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card body --> */}
                      </div>
                      {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col --> */}

                    <div class="col-xl-3 col-md-6">
                      {/* <!-- card --> */}
                      <div class="card card-animate">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 overflow-hidden">
                              <p
                                class="text-uppercase fw-medium text-muted text-truncate mb-0"
                              >
                                موجودی من
                              </p>
                            </div>
                            <div class="flex-shrink-0">
                              <h5 class="text-muted fs-14 mb-0">+0.00 %</h5>
                            </div>
                          </div>
                          <div
                            class="d-flex align-items-end justify-content-between mt-4"
                          >
                            <div>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                $<span
                                  class="counter-value"
                                  data-target="165.89"
                                  >0</span
                                >k
                              </h4>
                              <a
                                href="index.html"
                                class="text-decoration-underline"
                                >برداشت پول</a
                              >
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                              <span
                                class="avatar-title bg-primary-subtle rounded fs-3"
                              >
                                <i class="bx bx-wallet text-primary"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card body --> */}
                      </div>
                      {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col --> */}
                  </div>
                  {/* <!-- end row--> */}

                  <div class="row">
                    <div class="col-xl-8">
                      <div class="card">
                        <div
                          class="card-header border-0 align-items-center d-flex"
                        >
                          <h4 class="card-title mb-0 flex-grow-1">درآمد</h4>
                          <div>
                            <button
                              type="button"
                              class="btn btn-soft-secondary btn-sm"
                            >
                              همه
                            </button>
                            <button
                              type="button"
                              class="btn btn-soft-secondary btn-sm"
                            >
                              1M
                            </button>
                            <button
                              type="button"
                              class="btn btn-soft-secondary btn-sm"
                            >
                              کامپیوتر
                            </button>
                            <button
                              type="button"
                              class="btn btn-soft-primary btn-sm"
                            >
                              1Y
                            </button>
                          </div>
                        </div>
                        {/* <!-- end card header --> */}

                        <div class="card-header p-0 border-0 bg-light-subtle">
                          <div class="row g-0 text-center">
                            <div class="col-6 col-sm-3">
                              <div
                                class="p-3 border border-dashed border-start-0"
                              >
                                <h5 class="mb-1">
                                  <span class="counter-value" data-target="7585"
                                    >0</span
                                  >
                                </h5>
                                <p class="text-muted mb-0">سفارشات</p>
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div class="col-6 col-sm-3">
                              <div
                                class="p-3 border border-dashed border-start-0"
                              >
                                <h5 class="mb-1">
                                  $<span
                                    class="counter-value"
                                    data-target="22.89"
                                    >0</span
                                  >k
                                </h5>
                                <p class="text-muted mb-0">درآمد</p>
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div class="col-6 col-sm-3">
                              <div
                                class="p-3 border border-dashed border-start-0"
                              >
                                <h5 class="mb-1">
                                  <span class="counter-value" data-target="367"
                                    >0</span
                                  >
                                </h5>
                                <p class="text-muted mb-0">بازپرداخت</p>
                              </div>
                            </div>
                            {/* <!--end col--> */}
                            <div class="col-6 col-sm-3">
                              <div
                                class="p-3 border border-dashed border-start-0 border-end-0"
                              >
                                <h5 class="mb-1 text-success">
                                  <span
                                    class="counter-value"
                                    data-target="18.92"
                                    >0</span
                                  >%
                                </h5>
                                <p class="text-muted mb-0">نسبت مکالمه</p>
                              </div>
                            </div>
                            {/* <!--end col--> */}
                          </div>
                        </div>
                        {/* <!-- end card header --> */}

                        <div class="card-body p-0 pb-2">
                          <div class="w-100">
                            <div
                              id="customer_impression_charts"
                              data-colors='["--vz-secondary", "--vz-primary", "--vz-primary-rgb, 0.50"]'
                              class="apex-charts"
                              dir="ltr"
                            ></div>
                          </div>
                        </div>
                        {/* <!-- end card body --> */}
                      </div>
                      {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col --> */}

                    <div class="col-xl-4">
                      {/* <!-- card --> */}
                      <div class="card card-height-100">
                        <div class="card-header align-items-center d-flex">
                          <h4 class="card-title mb-0 flex-grow-1">
                            فروش بر اساس مکان
                          </h4>
                          <div class="flex-shrink-0">
                            <button
                              type="button"
                              class="btn btn-soft-primary btn-sm"
                            >
                              گزارش صادرات
                            </button>
                          </div>
                        </div>
                        {/* <!-- end card header --> */}

                        {/* <!-- card body --> */}
                        <div class="card-body">
                          <div
                            id="sales-by-locations"
                            data-colors='["--vz-light", "--vz-secondary", "--vz-primary"]'
                            style="height: 269px"
                            dir="ltr"
                          ></div>

                          <div class="px-2 py-2 mt-1">
                            <p class="mb-1">
                              کانادا<span class="float-end">75%</span>
                            </p>
                            <div class="progress mt-2" style="height: 6px">
                              <div
                                class="progress-bar progress-bar-striped bg-primary"
                                role="progressbar"
                                style="width: 75%"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="75"
                              ></div>
                            </div>

                            <p class="mt-3 mb-1">
                              گرینلند<span class="float-end">47%</span>
                            </p>
                            <div class="progress mt-2" style="height: 6px">
                              <div
                                class="progress-bar progress-bar-striped bg-primary"
                                role="progressbar"
                                style="width: 47%"
                                aria-valuenow="47"
                                aria-valuemin="0"
                                aria-valuemax="47"
                              ></div>
                            </div>

                            <p class="mt-3 mb-1">
                              روسیه<span class="float-end">82%</span>
                            </p>
                            <div class="progress mt-2" style="height: 6px">
                              <div
                                class="progress-bar progress-bar-striped bg-primary"
                                role="progressbar"
                                style="width: 82%"
                                aria-valuenow="82"
                                aria-valuemin="0"
                                aria-valuemax="82"
                              ></div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card body --> */}
                      </div>
                      {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col --> */}
                  </div>

                  <div class="row">
                    <div class="col-xl-6">
                      <div class="card">
                        <div class="card-header align-items-center d-flex">
                          <h4 class="card-title mb-0 flex-grow-1">
                            پرفروش ترین محصولات
                          </h4>
                          <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown">
                              <a
                                class="text-reset dropdown-btn"
                                href="index.html#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span class="fw-semibold text-uppercase fs-12"
                                  >مرتب سازی بر اساس:</span
                                ><span class="text-muted"
                                  >امروز<i class="mdi mdi-chevron-down ms-1"></i
                                ></span>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="index.html#"
                                  >امروز</a
                                >
                                <a class="dropdown-item" href="index.html#"
                                  >دیروز</a
                                >
                                <a class="dropdown-item" href="index.html#"
                                  >7 روز گذشته</a
                                >
                                <a class="dropdown-item" href="index.html#"
                                  >30 روز گذشته</a
                                >
                                <a class="dropdown-item" href="index.html#"
                                  >این ماه</a
                                >
                                <a class="dropdown-item" href="index.html#"
                                  >ماه گذشته</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card header --> */}

                        <div class="card-body">
                          <div class="table-responsive table-card">
                            <table
                              class="table table-hover table-centered align-middle table-nowrap mb-0"
                            >
                              <tbody>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div
                                        class="avatar-sm bg-light rounded p-1 me-2"
                                      >
                                        <img
                                          src="../../assets/images/products/img-1.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
                                            class="text-reset"
                                            >تی شرت های مارک دار</a
                                          >
                                        </h5>
                                        <span class="text-muted"
                                          >24 آوریل 2021</span
                                        >
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      29.00 دلار
                                    </h5>
                                    <span class="text-muted">قیمت</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">62</h5>
                                    <span class="text-muted">سفارشات</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">510</h5>
                                    <span class="text-muted">سهام</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      1798 دلار
                                    </h5>
                                    <span class="text-muted">مقدار</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div
                                        class="avatar-sm bg-light rounded p-1 me-2"
                                      >
                                        <img
                                          src="../../assets/images/products/img-2.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
                                            class="text-reset"
                                            >صندلی بنتوود</a
                                          >
                                        </h5>
                                        <span class="text-muted"
                                          >19 مارس 2021</span
                                        >
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      85.20 دلار
                                    </h5>
                                    <span class="text-muted">قیمت</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">35</h5>
                                    <span class="text-muted">سفارشات</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      <span
                                        class="badge bg-danger-subtle text-danger"
                                        >موجود نیست</span
                                      >
                                    </h5>
                                    <span class="text-muted">سهام</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      2982 دلار
                                    </h5>
                                    <span class="text-muted">مقدار</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div
                                        class="avatar-sm bg-light rounded p-1 me-2"
                                      >
                                        <img
                                          src="../../assets/images/products/img-3.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
                                            class="text-reset"
                                            >لیوان کاغذی بوروسیل</a
                                          >
                                        </h5>
                                        <span class="text-muted"
                                          >01 مارس 2021</span
                                        >
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      14.00 دلار
                                    </h5>
                                    <span class="text-muted">قیمت</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">80</h5>
                                    <span class="text-muted">سفارشات</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">749</h5>
                                    <span class="text-muted">سهام</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      1120 دلار
                                    </h5>
                                    <span class="text-muted">مقدار</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div
                                        class="avatar-sm bg-light rounded p-1 me-2"
                                      >
                                        <img
                                          src="../../assets/images/products/img-4.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
                                            class="text-reset"
                                            >مبل یک نفره</a
                                          >
                                        </h5>
                                        <span class="text-muted"
                                          >11 فوریه 2021</span
                                        >
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      127.50 دلار
                                    </h5>
                                    <span class="text-muted">قیمت</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">56</h5>
                                    <span class="text-muted">سفارشات</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      <span
                                        class="badge bg-danger-subtle text-danger"
                                        >موجود نیست</span
                                      >
                                    </h5>
                                    <span class="text-muted">سهام</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      7140 دلار
                                    </h5>
                                    <span class="text-muted">مقدار</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div
                                        class="avatar-sm bg-light rounded p-1 me-2"
                                      >
                                        <img
                                          src="../../assets/images/products/img-5.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
                                            class="text-reset"
                                            >کلاه ایمنی فولادی</a
                                          >
                                        </h5>
                                        <span class="text-muted"
                                          >17 ژانویه 2021</span
                                        >
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      54 دلار
                                    </h5>
                                    <span class="text-muted">قیمت</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">74</h5>
                                    <span class="text-muted">سفارشات</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">805</h5>
                                    <span class="text-muted">سهام</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      3996 دلار
                                    </h5>
                                    <span class="text-muted">مقدار</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div
                            class="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start"
                          >
                            <div class="col-sm">
                              <div class="text-muted">
                                در حال نمایش
                                <span class="fw-semibold">5</span> از
                                <span class="fw-semibold"> 25 </span> نتایج
                              </div>
                            </div>
                            <div class="col-sm-auto mt-3 mt-sm-0">
                              <ul
                                class="pagination pagination-separated pagination-sm mb-0 justify-content-center"
                              >
                                <li class="page-item disabled">
                                  <a href="index.html#" class="page-link">←</a>
                                </li>
                                <li class="page-item">
                                  <a href="index.html#" class="page-link">1</a>
                                </li>
                                <li class="page-item active">
                                  <a href="index.html#" class="page-link">2</a>
                                </li>
                                <li class="page-item">
                                  <a href="index.html#" class="page-link">3</a>
                                </li>
                                <li class="page-item">
                                  <a href="index.html#" class="page-link">→</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-6">
                      <div class="card card-height-100">
                        <div class="card-header align-items-center d-flex">
                          <h4 class="card-title mb-0 flex-grow-1">
                            فروشندگان برتر
                          </h4>
                          <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown">
                              <a
                                class="text-reset dropdown-btn"
                                href="index.html#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span class="text-muted"
                                  >گزارش دهید<i
                                    class="mdi mdi-chevron-down ms-1"
                                  ></i
                                ></span>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="index.html#"
                                  >دانلود گزارش</a
                                >
                                <a class="dropdown-item" href="index.html#"
                                  >صادرات</a
                                >
                                <a class="dropdown-item" href="index.html#"
                                  >واردات</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card header --> */}

                        <div class="card-body">
                          <div class="table-responsive table-card">
                            <table
                              class="table table-centered table-hover align-middle table-nowrap mb-0"
                            >
                              <tbody>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="../../assets/images/companies/img-1.png"
                                          alt=""
                                          class="avatar-sm p-2"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1 fw-medium">
                                          <a
                                            href="apps-ecommerce-seller-details.html"
                                            class="text-reset"
                                            >کارخانه آی تست</a
                                          >
                                        </h5>
                                        <span class="text-muted"
                                          >الیور تایلر</span
                                        >
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span class="text-muted"
                                      >کیف و کیف پول</span
                                    >
                                  </td>
                                  <td>
                                    <p class="mb-0">8547</p>
                                    <span class="text-muted">سهام</span>
                                  </td>
                                  <td>
                                    <span class="text-muted">541200 دلار</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 mb-0">
                                      32%<i
                                        class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"
                                      ></i>
                                    </h5>
                                  </td>
                                </tr>
                                {/* <!-- end --> */}
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="../../assets/images/companies/img-2.png"
                                          alt=""
                                          class="avatar-sm p-2"
                                        />
                                      </div>
                                      <div class="flex-grow-1">
                                        <h5 class="fs-14 my-1 fw-medium">
                                          <a
                                            href="apps-ecommerce-seller-details.html"
                                            class="text-reset"
                                            >دیجی‌تک کهکشانی</a
                                          >
                                        </h5>
                                        <span class="text-muted"
                                          >جان رابرتز</span
                                        >
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span class="text-muted">ساعت</span>
                                  </td>
                                  <td>
                                    <p class="mb-0">895</p>
                                    <span class="text-muted">سهام</span>
                                  </td>
                                  <td>
                                    <span class="text-muted">75030 دلار</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 mb-0">
                                      79%<i
                                        class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"
                                      ></i>
                                    </h5>
                                  </td>
                                </tr>
                                {/* <!-- end --> */}
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="../../assets/images/companies/img-3.png"
                                          alt=""
                                          class="avatar-sm p-2"
                                        />
                                      </div>
                                      <div class="flex-gow-1">
                                        <h5 class="fs-14 my-1 fw-medium">
                                          <a
                                            href="apps-ecommerce-seller-details.html"
                                            class="text-reset"
                                            >فن آوری های نستا</a
                                          >
                                        </h5>
                                        <span class="text-muted"
                                          >هارلی فولر</span
                                        >
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span class="text-muted"
                                      >لوازم جانبی دوچرخه</span
                                    >
                                  </td>
                                  <td>
                                    <p class="mb-0">3470</p>
                                    <span class="text-muted">سهام</span>
                                  </td>
                                  <td>
                                    <span class="text-muted">45600 دلار</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 mb-0">
                                      90%<i
                                        class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"
                                      ></i>
                                    </h5>
                                  </td>
                                </tr>
                                {/* <!-- end --> */}
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="../../assets/images/companies/img-8.png"
                                          alt=""
                                          class="avatar-sm p-2"
                                        />
                                      </div>
                                      <div class="flex-grow-1">
                                        <h5 class="fs-14 my-1 fw-medium">
                                          <a
                                            href="apps-ecommerce-seller-details.html"
                                            class="text-reset"
                                            >مد زئوتیک</a
                                          >
                                        </h5>
                                        <span class="text-muted"
                                          >جیمز بوون</span
                                        >
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span class="text-muted">لباس</span>
                                  </td>
                                  <td>
                                    <p class="mb-0">5488</p>
                                    <span class="text-muted">سهام</span>
                                  </td>
                                  <td>
                                    <span class="text-muted">29456 دلار</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 mb-0">
                                      40%<i
                                        class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"
                                      ></i>
                                    </h5>
                                  </td>
                                </tr>
                                {/* <!-- end --> */}
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="../../assets/images/companies/img-5.png"
                                          alt=""
                                          class="avatar-sm p-2"
                                        />
                                      </div>
                                      <div class="flex-grow-1">
                                        <h5 class="fs-14 my-1 fw-medium">
                                          <a
                                            href="apps-ecommerce-seller-details.html"
                                            class="text-reset"
                                            >Meta4 Systems</a
                                          >
                                        </h5>
                                        <span class="text-muted"
                                          >زوئی دنیس</span
                                        >
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span class="text-muted">مبلمان</span>
                                  </td>
                                  <td>
                                    <p class="mb-0">4100</p>
                                    <span class="text-muted">سهام</span>
                                  </td>
                                  <td>
                                    <span class="text-muted">11260 دلار</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 mb-0">
                                      57%<i
                                        class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"
                                      ></i>
                                    </h5>
                                  </td>
                                </tr>
                                {/* <!-- end --> */}
                              </tbody>
                            </table>
                            {/* <!-- end table --> */}
                          </div>

                          <div
                            class="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start"
                          >
                            <div class="col-sm">
                              <div class="text-muted">
                                در حال نمایش
                                <span class="fw-semibold">5</span> از
                                <span class="fw-semibold"> 25 </span> نتایج
                              </div>
                            </div>
                            <div class="col-sm-auto mt-3 mt-sm-0">
                              <ul
                                class="pagination pagination-separated pagination-sm mb-0 justify-content-center"
                              >
                                <li class="page-item disabled">
                                  <a href="index.html#" class="page-link">←</a>
                                </li>
                                <li class="page-item">
                                  <a href="index.html#" class="page-link">1</a>
                                </li>
                                <li class="page-item active">
                                  <a href="index.html#" class="page-link">2</a>
                                </li>
                                <li class="page-item">
                                  <a href="index.html#" class="page-link">3</a>
                                </li>
                                <li class="page-item">
                                  <a href="index.html#" class="page-link">→</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- .card-body--> */}
                      </div>
                      {/* <!-- .card--> */}
                    </div>
                    {/* <!-- .col--> */}
                  </div>
                  {/* <!-- end row--> */}

                  <div class="row">
                    <div class="col-xl-4">
                      <div class="card card-height-100">
                        <div class="card-header align-items-center d-flex">
                          <h4 class="card-title mb-0 flex-grow-1">
                            بازدید از فروشگاه بر اساس منبع
                          </h4>
                          <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown">
                              <a
                                class="text-reset dropdown-btn"
                                href="index.html#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span class="text-muted"
                                  >گزارش دهید<i
                                    class="mdi mdi-chevron-down ms-1"
                                  ></i
                                ></span>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="index.html#"
                                  >دانلود گزارش</a
                                >
                                <a class="dropdown-item" href="index.html#"
                                  >صادرات</a
                                >
                                <a class="dropdown-item" href="index.html#"
                                  >واردات</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card header --> */}

                        <div class="card-body">
                          <div
                            id="store-visits-source"
                            data-colors='["--vz-primary", "--vz-primary-rgb, 0.85", "--vz-primary-rgb, 0.70", "--vz-primary-rgb, 0.60", "--vz-primary-rgb, 0.45"]'
                            class="apex-charts"
                            dir="ltr"
                          ></div>
                        </div>
                      </div>
                      {/* <!-- .card--> */}
                    </div>
                    {/* <!-- .col--> */}

                    <div class="col-xl-8">
                      <div class="card">
                        <div class="card-header align-items-center d-flex">
                          <h4 class="card-title mb-0 flex-grow-1">
                            سفارشات اخیر
                          </h4>
                          <div class="flex-shrink-0">
                            <button
                              type="button"
                              class="btn btn-soft-info btn-sm"
                            >
                              <i class="ri-file-list-3-line align-middle"></i
                              >ایجاد گزارش
                            </button>
                          </div>
                        </div>
                        {/* <!-- end card header --> */}

                        <div class="card-body">
                          <div class="table-responsive table-card">
                            <table
                              class="table table-borderless table-centered align-middle table-nowrap mb-0"
                            >
                              <thead class="text-muted table-light">
                                <tr>
                                  <th scope="col">شناسه سفارش</th>
                                  <th scope="col">مشتری</th>
                                  <th scope="col">محصول</th>
                                  <th scope="col">مقدار</th>
                                  <th scope="col">فروشنده</th>
                                  <th scope="col">وضعیت</th>
                                  <th scope="col">رتبه بندی</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a
                                      href="apps-ecommerce-order-details.html"
                                      class="fw-medium link-primary"
                                      >#VZ2112</a
                                    >
                                  </td>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="../../assets/images/users/avatar-1.jpg"
                                          alt=""
                                          class="avatar-xs rounded-circle"
                                        />
                                      </div>
                                      <div class="flex-grow-1">الکس اسمیت</div>
                                    </div>
                                  </td>
                                  <td>لباس</td>
                                  <td>
                                    <span class="text-success"
                                      >109.00 دلار</span
                                    >
                                  </td>
                                  <td>مد زئوتیک</td>
                                  <td>
                                    <span
                                      class="badge bg-success-subtle text-success"
                                      >پرداخت شده است</span
                                    >
                                  </td>
                                  <td>
                                    <h5 class="fs-14 fw-medium mb-0">
                                      5.0<span class="text-muted fs-11 ms-1"
                                        >(61 رای)</span
                                      >
                                    </h5>
                                  </td>
                                </tr>
                                {/* <!-- end tr --> */}
                                <tr>
                                  <td>
                                    <a
                                      href="apps-ecommerce-order-details.html"
                                      class="fw-medium link-primary"
                                      >#VZ2111</a
                                    >
                                  </td>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="../../assets/images/users/avatar-2.jpg"
                                          alt=""
                                          class="avatar-xs rounded-circle"
                                        />
                                      </div>
                                      <div class="flex-grow-1">جانش براون</div>
                                    </div>
                                  </td>
                                  <td>انباری آشپزخانه</td>
                                  <td>
                                    <span class="text-success"
                                      >149.00 دلار</span
                                    >
                                  </td>
                                  <td>طراحی میکرو</td>
                                  <td>
                                    <span
                                      class="badge bg-warning-subtle text-warning"
                                      >در انتظار</span
                                    >
                                  </td>
                                  <td>
                                    <h5 class="fs-14 fw-medium mb-0">
                                      4.5<span class="text-muted fs-11 ms-1"
                                        >(61 رای)</span
                                      >
                                    </h5>
                                  </td>
                                </tr>
                                {/* <!-- end tr --> */}
                                <tr>
                                  <td>
                                    <a
                                      href="apps-ecommerce-order-details.html"
                                      class="fw-medium link-primary"
                                      >#VZ2109</a
                                    >
                                  </td>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="../../assets/images/users/avatar-3.jpg"
                                          alt=""
                                          class="avatar-xs rounded-circle"
                                        />
                                      </div>
                                      <div class="flex-grow-1">آیان بوون</div>
                                    </div>
                                  </td>
                                  <td>لوازم جانبی دوچرخه</td>
                                  <td>
                                    <span class="text-success"
                                      >215.00 دلار</span
                                    >
                                  </td>
                                  <td>فن آوری های نستا</td>
                                  <td>
                                    <span
                                      class="badge bg-success-subtle text-success"
                                      >پرداخت شده است</span
                                    >
                                  </td>
                                  <td>
                                    <h5 class="fs-14 fw-medium mb-0">
                                      4.9<span class="text-muted fs-11 ms-1"
                                        >(89 رای)</span
                                      >
                                    </h5>
                                  </td>
                                </tr>
                                {/* <!-- end tr --> */}
                                <tr>
                                  <td>
                                    <a
                                      href="apps-ecommerce-order-details.html"
                                      class="fw-medium link-primary"
                                      >#VZ2108</a
                                    >
                                  </td>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="../../assets/images/users/avatar-4.jpg"
                                          alt=""
                                          class="avatar-xs rounded-circle"
                                        />
                                      </div>
                                      <div class="flex-grow-1">پرزی مارک</div>
                                    </div>
                                  </td>
                                  <td>مبلمان</td>
                                  <td>
                                    <span class="text-success"
                                      >199.00 دلار</span
                                    >
                                  </td>
                                  <td>Syntyce Solutions</td>
                                  <td>
                                    <span
                                      class="badge bg-danger-subtle text-danger"
                                      >پرداخت نشده</span
                                    >
                                  </td>
                                  <td>
                                    <h5 class="fs-14 fw-medium mb-0">
                                      4.3<span class="text-muted fs-11 ms-1"
                                        >(47 رای)</span
                                      >
                                    </h5>
                                  </td>
                                </tr>
                                {/* <!-- end tr --> */}
                                <tr>
                                  <td>
                                    <a
                                      href="apps-ecommerce-order-details.html"
                                      class="fw-medium link-primary"
                                      >#VZ2107</a
                                    >
                                  </td>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="../../assets/images/users/avatar-6.jpg"
                                          alt=""
                                          class="avatar-xs rounded-circle"
                                        />
                                      </div>
                                      <div class="flex-grow-1">
                                        از هدی متنفر باش
                                      </div>
                                    </div>
                                  </td>
                                  <td>کیف و کیف پول</td>
                                  <td>
                                    <span class="text-success"
                                      >330.00 دلار</span
                                    >
                                  </td>
                                  <td>کارخانه آی تست</td>
                                  <td>
                                    <span
                                      class="badge bg-success-subtle text-success"
                                      >پرداخت شده است</span
                                    >
                                  </td>
                                  <td>
                                    <h5 class="fs-14 fw-medium mb-0">
                                      4.7<span class="text-muted fs-11 ms-1"
                                        >(161 رای)</span
                                      >
                                    </h5>
                                  </td>
                                </tr>
                                {/* <!-- end tr --> */}
                              </tbody>
                              {/* <!-- end tbody --> */}
                            </table>
                            {/* <!-- end table --> */}
                          </div>
                        </div>
                      </div>
                      {/* <!-- .card--> */}
                    </div>
                    {/* <!-- .col--> */}
                  </div>
                  {/* <!-- end row--> */}
                </div>
                {/* <!-- end .h-100--> */}
              </div>
              {/* <!-- end col --> */}

              <div class="col-auto layout-rightside-col">
                <div class="overlay"></div>
                <div class="layout-rightside">
                  <div class="card h-100 rounded-0 card-border-effect-none">
                    <div class="card-body p-0">
                      <div class="p-3">
                        <h6 class="text-muted mb-0 text-uppercase fw-semibold">
                          فعالیت اخیر
                        </h6>
                      </div>
                      <div
                        data-simplebar
                        style="max-height: 410px"
                        class="p-3 pt-0"
                      >
                        <div class="acitivity-timeline acitivity-main">
                          <div class="acitivity-item d-flex">
                            <div
                              class="flex-shrink-0 avatar-xs acitivity-avatar"
                            >
                              <div
                                class="avatar-title bg-success-subtle text-success rounded-circle"
                              >
                                <i class="ri-shopping-cart-2-line"></i>
                              </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1 lh-base">خرید توسط جیمز پرایس</h6>
                              <p class="text-muted mb-1">
                                ساعت هوشمند تکامل نویز محصول
                              </p>
                              <small class="mb-0 text-muted"
                                >02:14 عصر امروز</small
                              >
                            </div>
                          </div>
                          <div class="acitivity-item py-3 d-flex">
                            <div
                              class="flex-shrink-0 avatar-xs acitivity-avatar"
                            >
                              <div
                                class="avatar-title bg-danger-subtle text-danger rounded-circle"
                              >
                                <i class="ri-stack-fill"></i>
                              </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1 lh-base">
                                جدید اضافه شد<span class="fw-semibold"
                                  >مجموعه سبک</span
                                >
                              </h6>
                              <p class="text-muted mb-1">
                                توسط Nesta Technologies
                              </p>
                              <div
                                class="d-inline-flex gap-2 border border-dashed p-2 mb-2"
                              >
                                <a
                                  href="apps-ecommerce-product-details.html"
                                  class="bg-light rounded p-1"
                                >
                                  <img
                                    src="../../assets/images/products/img-8.png"
                                    alt=""
                                    class="img-fluid d-block"
                                  />
                                </a>
                                <a
                                  href="apps-ecommerce-product-details.html"
                                  class="bg-light rounded p-1"
                                >
                                  <img
                                    src="../../assets/images/products/img-2.png"
                                    alt=""
                                    class="img-fluid d-block"
                                  />
                                </a>
                                <a
                                  href="apps-ecommerce-product-details.html"
                                  class="bg-light rounded p-1"
                                >
                                  <img
                                    src="../../assets/images/products/img-10.png"
                                    alt=""
                                    class="img-fluid d-block"
                                  />
                                </a>
                              </div>
                              <p class="mb-0 text-muted">
                                <small>9:47 عصر دیروز</small>
                              </p>
                            </div>
                          </div>
                          <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                              <img
                                src="../../assets/images/users/avatar-2.jpg"
                                alt=""
                                class="avatar-xs rounded-circle acitivity-avatar"
                              />
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1 lh-base">
                                ناتاشا کری این محصولات را پسندیده است
                              </h6>
                              <p class="text-muted mb-1">
                                به کاربران اجازه دهید محصولات موجود در فروشگاه
                                ووکامرس شما را دوست داشته باشند.
                              </p>
                              <small class="mb-0 text-muted"
                                >25 دسامبر 2021</small
                              >
                            </div>
                          </div>
                          <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                              <div class="avatar-xs acitivity-avatar">
                                <div
                                  class="avatar-title rounded-circle bg-secondary"
                                >
                                  <i class="mdi mdi-sale fs-14"></i>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1 lh-base">
                                پیشنهادات امروز توسط<a
                                  href="apps-ecommerce-seller-details.html"
                                  class="link-secondary"
                                  >دیجی‌تک کهکشانی</a
                                >
                              </h6>
                              <p class="text-muted mb-2">
                                این پیشنهاد فقط برای سفارشات 500 روپیه یا بالاتر
                                برای محصولات انتخاب شده معتبر است.
                              </p>
                              <small class="mb-0 text-muted"
                                >12 دسامبر 2021</small
                              >
                            </div>
                          </div>
                          <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                              <div class="avatar-xs acitivity-avatar">
                                <div
                                  class="avatar-title rounded-circle bg-danger-subtle text-danger"
                                >
                                  <i class="ri-bookmark-fill"></i>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1 lh-base">محصول مورد علاقه</h6>
                              <p class="text-muted mb-2">
                                استر جیمز محصول مورد علاقه خود را دارد.
                              </p>
                              <small class="mb-0 text-muted"
                                >25 نوامبر 2021</small
                              >
                            </div>
                          </div>
                          <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                              <div class="avatar-xs acitivity-avatar">
                                <div
                                  class="avatar-title rounded-circle bg-secondary"
                                >
                                  <i class="mdi mdi-sale fs-14"></i>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1 lh-base">
                                فروش فلش شروع شد<span class="text-primary"
                                  >فردا</span
                                >
                              </h6>
                              <p class="text-muted mb-0">
                                فروش فلش توسط<a
                                  href="javascript:void(0);"
                                  class="link-secondary fw-medium"
                                  >مد زئوتیک</a
                                >
                              </p>
                              <small class="mb-0 text-muted"
                                >22 اکتبر 2021</small
                              >
                            </div>
                          </div>
                          <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                              <div class="avatar-xs acitivity-avatar">
                                <div
                                  class="avatar-title rounded-circle bg-info-subtle text-info"
                                >
                                  <i class="ri-line-chart-line"></i>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1 lh-base">گزارش فروش ماهانه</h6>
                              <p class="text-muted mb-2">
                                <span class="text-danger">2 روز مونده</span
                                >اطلاعیه ارسال گزارش فروش ماهانه<a
                                  href="javascript:void(0);"
                                  class="link-warning text-decoration-underline"
                                  >گزارش ساز</a
                                >
                              </p>
                              <small class="mb-0 text-muted">15 اکتبر</small>
                            </div>
                          </div>
                          <div class="acitivity-item d-flex">
                            <div class="flex-shrink-0">
                              <img
                                src="../../assets/images/users/avatar-3.jpg"
                                alt=""
                                class="avatar-xs rounded-circle acitivity-avatar"
                              />
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h6 class="mb-1 lh-base">فرانک هوک نظر داد</h6>
                              <p class="text-muted mb-2 fst-italic">
                                "محصولی که نقد و بررسی دارد، بیشتر از یک محصول
                                به فروش می رسد."
                              </p>
                              <small class="mb-0 text-muted"
                                >26 آگوست 2021</small
                              >
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="p-3 mt-2">
                        <h6 class="text-muted mb-3 text-uppercase fw-semibold">
                          10 دسته بندی برتر
                        </h6>

                        <ol class="ps-3 text-muted">
                          <li class="py-1">
                            <a href="index.html#" class="text-muted"
                              >موبایل و لوازم جانبی<span class="float-end"
                                >(10294)</span
                              ></a
                            >
                          </li>
                          <li class="py-1">
                            <a href="index.html#" class="text-muted"
                              >دسکتاپ<span class="float-end">(6256)</span></a
                            >
                          </li>
                          <li class="py-1">
                            <a href="index.html#" class="text-muted"
                              >الکترونیک<span class="float-end"
                                >(3,479)</span
                              ></a
                            >
                          </li>
                          <li class="py-1">
                            <a href="index.html#" class="text-muted"
                              >خانه و مبلمان<span class="float-end"
                                >(2275)</span
                              ></a
                            >
                          </li>
                          <li class="py-1">
                            <a href="index.html#" class="text-muted"
                              >خواربار فروشی<span class="float-end"
                                >(1950)</span
                              ></a
                            >
                          </li>
                          <li class="py-1">
                            <a href="index.html#" class="text-muted"
                              >مد<span class="float-end">(1582)</span></a
                            >
                          </li>
                          <li class="py-1">
                            <a href="index.html#" class="text-muted"
                              >لوازم خانگی<span class="float-end"
                                >(1037)</span
                              ></a
                            >
                          </li>
                          <li class="py-1">
                            <a href="index.html#" class="text-muted"
                              >زیبایی، اسباب بازی و موارد دیگر<span
                                class="float-end"
                                >(924)</span
                              ></a
                            >
                          </li>
                          <li class="py-1">
                            <a href="index.html#" class="text-muted"
                              >غذا و نوشیدنی<span class="float-end"
                                >(701)</span
                              ></a
                            >
                          </li>
                          <li class="py-1">
                            <a href="index.html#" class="text-muted"
                              >اسباب بازی و بازی<span class="float-end"
                                >(239)</span
                              ></a
                            >
                          </li>
                        </ol>
                        <div class="mt-3 text-center">
                          <a
                            href="javascript:void(0);"
                            class="text-muted text-decoration-underline"
                            >مشاهده همه دسته ها</a
                          >
                        </div>
                      </div>
                      <div class="p-3">
                        <h6 class="text-muted mb-3 text-uppercase fw-semibold">
                          نظرات محصولات
                        </h6>
                        {/* <!-- Swiper --> */}
                        <div
                          class="swiper vertical-swiper"
                          style="height: 250px"
                        >
                          <div class="swiper-wrapper">
                            <div class="swiper-slide">
                              <div
                                class="card border border-dashed shadow-none"
                              >
                                <div class="card-body">
                                  <div class="d-flex">
                                    <div class="flex-shrink-0 avatar-sm">
                                      <div
                                        class="avatar-title bg-light rounded"
                                      >
                                        <img
                                          src="../../assets/images/companies/img-1.png"
                                          alt=""
                                          height="30"
                                        />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                      <div>
                                        <p
                                          class="text-muted mb-1 fst-italic text-truncate-two-lines"
                                        >
                                          "محصول عالی و ظاهری عالی، ویژگی های
                                          زیادی."
                                        </p>
                                        <div
                                          class="fs-11 align-middle text-warning"
                                        >
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-fill"></i>
                                        </div>
                                      </div>
                                      <div class="text-end mb-0 text-muted">
                                        - توسط<cite title="Source Title"
                                          >داروهای نیرو</cite
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div
                                class="card border border-dashed shadow-none"
                              >
                                <div class="card-body">
                                  <div class="d-flex">
                                    <div class="flex-shrink-0">
                                      <img
                                        src="../../assets/images/users/avatar-3.jpg"
                                        alt=""
                                        class="avatar-sm rounded"
                                      />
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                      <div>
                                        <p
                                          class="text-muted mb-1 fst-italic text-truncate-two-lines"
                                        >
                                          "قالب شگفت انگیز، بسیار آسان برای درک
                                          و دستکاری."
                                        </p>
                                        <div
                                          class="fs-11 align-middle text-warning"
                                        >
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-half-fill"></i>
                                        </div>
                                      </div>
                                      <div class="text-end mb-0 text-muted">
                                        - توسط<cite title="Source Title"
                                          >هنری برد</cite
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div
                                class="card border border-dashed shadow-none"
                              >
                                <div class="card-body">
                                  <div class="d-flex">
                                    <div class="flex-shrink-0 avatar-sm">
                                      <div
                                        class="avatar-title bg-light rounded"
                                      >
                                        <img
                                          src="../../assets/images/companies/img-8.png"
                                          alt=""
                                          height="30"
                                        />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                      <div>
                                        <p
                                          class="text-muted mb-1 fst-italic text-truncate-two-lines"
                                        >
                                          "محصول بسیار زیبا و خدمات بسیار مفید
                                          به مشتریان."
                                        </p>
                                        <div
                                          class="fs-11 align-middle text-warning"
                                        >
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-line"></i>
                                          <i class="ri-star-line"></i>
                                        </div>
                                      </div>
                                      <div class="text-end mb-0 text-muted">
                                        - توسط<cite title="Source Title"
                                          >مد زئوتیک</cite
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div
                                class="card border border-dashed shadow-none"
                              >
                                <div class="card-body">
                                  <div class="d-flex">
                                    <div class="flex-shrink-0">
                                      <img
                                        src="../../assets/images/users/avatar-2.jpg"
                                        alt=""
                                        class="avatar-sm rounded"
                                      />
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                      <div>
                                        <p
                                          class="text-muted mb-1 fst-italic text-truncate-two-lines"
                                        >
                                          "محصول بسیار زیبا است. من آن را دوست
                                          دارم."
                                        </p>
                                        <div
                                          class="fs-11 align-middle text-warning"
                                        >
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-fill"></i>
                                          <i class="ri-star-half-fill"></i>
                                          <i class="ri-star-line"></i>
                                        </div>
                                      </div>
                                      <div class="text-end mb-0 text-muted">
                                        - توسط<cite title="Source Title"
                                          >نانسی مارتینو</cite
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="p-3">
                        <h6 class="text-muted mb-3 text-uppercase fw-semibold">
                          نظرات مشتریان
                        </h6>
                        <div class="bg-light px-3 py-2 rounded-2 mb-2">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                              <div class="fs-16 align-middle text-warning">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-fill"></i>
                              </div>
                            </div>
                            <div class="flex-shrink-0">
                              <h6 class="mb-0">4.5 از 5</h6>
                            </div>
                          </div>
                        </div>
                        <div class="text-center">
                          <div class="text-muted">
                            مجموع<span class="fw-medium">5.50 هزار</span>بررسی
                            ها
                          </div>
                        </div>

                        <div class="mt-3">
                          <div class="row align-items-center g-2">
                            <div class="col-auto">
                              <div class="p-1">
                                <h6 class="mb-0">5 ستاره</h6>
                              </div>
                            </div>
                            <div class="col">
                              <div class="p-1">
                                <div
                                  class="progress animated-progress progress-sm"
                                >
                                  <div
                                    class="progress-bar bg-success"
                                    role="progressbar"
                                    style="width: 50.16%"
                                    aria-valuenow="50.16"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div class="col-auto">
                              <div class="p-1">
                                <h6 class="mb-0 text-muted">2758</h6>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end row --> */}

                          <div class="row align-items-center g-2">
                            <div class="col-auto">
                              <div class="p-1">
                                <h6 class="mb-0">4 ستاره</h6>
                              </div>
                            </div>
                            <div class="col">
                              <div class="p-1">
                                <div
                                  class="progress animated-progress progress-sm"
                                >
                                  <div
                                    class="progress-bar bg-success"
                                    role="progressbar"
                                    style="width: 29.32%"
                                    aria-valuenow="29.32"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div class="col-auto">
                              <div class="p-1">
                                <h6 class="mb-0 text-muted">1063</h6>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end row --> */}

                          <div class="row align-items-center g-2">
                            <div class="col-auto">
                              <div class="p-1">
                                <h6 class="mb-0">3 ستاره</h6>
                              </div>
                            </div>
                            <div class="col">
                              <div class="p-1">
                                <div
                                  class="progress animated-progress progress-sm"
                                >
                                  <div
                                    class="progress-bar bg-warning"
                                    role="progressbar"
                                    style="width: 18.12%"
                                    aria-valuenow="18.12"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div class="col-auto">
                              <div class="p-1">
                                <h6 class="mb-0 text-muted">997</h6>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end row --> */}

                          <div class="row align-items-center g-2">
                            <div class="col-auto">
                              <div class="p-1">
                                <h6 class="mb-0">2 ستاره</h6>
                              </div>
                            </div>
                            <div class="col">
                              <div class="p-1">
                                <div
                                  class="progress animated-progress progress-sm"
                                >
                                  <div
                                    class="progress-bar bg-success"
                                    role="progressbar"
                                    style="width: 4.98%"
                                    aria-valuenow="4.98"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>

                            <div class="col-auto">
                              <div class="p-1">
                                <h6 class="mb-0 text-muted">227</h6>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end row --> */}

                          <div class="row align-items-center g-2">
                            <div class="col-auto">
                              <div class="p-1">
                                <h6 class="mb-0">1 ستاره</h6>
                              </div>
                            </div>
                            <div class="col">
                              <div class="p-1">
                                <div
                                  class="progress animated-progress progress-sm"
                                >
                                  <div
                                    class="progress-bar bg-danger"
                                    role="progressbar"
                                    style="width: 7.42%"
                                    aria-valuenow="7.42"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div class="col-auto">
                              <div class="p-1">
                                <h6 class="mb-0 text-muted">408</h6>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end row --> */}
                        </div>
                      </div>

                      <div
                        class="card sidebar-alert bg-light border-0 text-center mx-4 mb-0 mt-3"
                      >
                        <div class="card-body">
                          <img src="../../assets/images/giftbox.png" alt="" />
                          <div class="mt-4">
                            <h5>از فروشنده جدید دعوت کنید</h5>
                            <p class="text-muted lh-base">
                              یک فروشنده جدید را به ما معرفی کنید و به ازای هر
                              مراجعه 100 دلار کسب کنید.
                            </p>
                            <button
                              type="button"
                              class="btn btn-primary btn-label rounded-pill"
                            >
                              <i
                                class="ri-mail-fill label-icon align-middle rounded-pill fs-16 me-2"
                              ></i
                              >اکنون دعوت کنید
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end card--> */}
                </div>
                {/* <!-- end .rightbar--> */}
              </div>
              {/* <!-- end col --> */}
            </div>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}

        <footer class="footer border-top">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">
                <script>
                  document.write(new Date().getFullYear());
                </script>
                © Velzon.
              </div>
              <div class="col-sm-6">
                <div class="text-sm-end d-none d-sm-block">
                  طراحی و توسعه توسط
                  <a href="https://mkhezerlou.ir" target="_blank">مرداد</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* <!-- end main content--> */}
    )
}

export default Adm_index