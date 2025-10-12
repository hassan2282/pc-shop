
function AdminSidebar() {
    return (
        <div id="scrollbar">
          <div class="container-fluid">
            <div id="two-column-menu"></div>
            <ul class="navbar-nav" id="navbar-nav">
              <li class="menu-title"><span data-key="t-menu">منو</span></li>
              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarDashboards"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarDashboards"
                >
                  <i class="ri-dashboard-2-line"></i>
                  <span data-key="t-dashboards">داشبوردها</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarDashboards">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        href="dashboard-analytics.html"
                        class="nav-link"
                        data-key="t-analytics"
                        >تجزیه و تحلیل</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="dashboard-crm.html"
                        class="nav-link"
                        data-key="t-crm"
                        >CRM</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html"
                        class="nav-link"
                        data-key="t-ecommerce"
                        >تجارت الکترونیک</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="dashboard-crypto.html"
                        class="nav-link"
                        data-key="t-crypto"
                        >رمزنگاری</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="dashboard-projects.html"
                        class="nav-link"
                        data-key="t-projects"
                        >پروژه ها</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="dashboard-nft.html"
                        class="nav-link"
                        data-key="t-nft"
                        >NFT</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="dashboard-job.html"
                        class="nav-link"
                        data-key="t-job"
                        >شغل</a
                      >
                    </li>
                    <li class="nav-item">
                      <a href="dashboard-blog.html" class="nav-link"
                        ><span data-key="t-blog">وبلاگ</span>
                        <span class="badge bg-success" data-key="t-new"
                          >جدید</span
                        ></a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarApps"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarApps"
                >
                  <i class="ri-apps-2-line"></i>
                  <span data-key="t-apps">برنامه ها</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarApps">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarCalendar"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarCalendar"
                        data-key="t-calender"
                        >تقویم</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarCalendar">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="apps-calendar.html"
                              class="nav-link"
                              data-key="t-main-calender"
                              >تقویم اصلی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-calendar-month-grid.html"
                              class="nav-link"
                              data-key="t-month-grid"
                              >ماه شبکه</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="apps-chat.html"
                        class="nav-link"
                        data-key="t-chat"
                        >چت کنید</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarEmail"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarEmail"
                        data-key="t-email"
                        >ایمیل</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarEmail">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="apps-mailbox.html"
                              class="nav-link"
                              data-key="t-mailbox"
                              >صندوق پستی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="index.html#sidebaremailTemplates"
                              class="nav-link"
                              data-bs-toggle="collapse"
                              role="button"
                              aria-expanded="false"
                              aria-controls="sidebaremailTemplates"
                              data-key="t-email-templates"
                              >قالب های ایمیل</a
                            >
                            <div
                              class="collapse menu-dropdown"
                              id="sidebaremailTemplates"
                            >
                              <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                  <a
                                    href="apps-email-basic.html"
                                    class="nav-link"
                                    data-key="t-basic-action"
                                    >اقدام اساسی</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a
                                    href="apps-email-ecommerce.html"
                                    class="nav-link"
                                    data-key="t-ecommerce-action"
                                    >اقدام تجارت الکترونیک</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarEcommerce"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarEcommerce"
                        data-key="t-ecommerce"
                        >تجارت الکترونیک</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarEcommerce">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="apps-ecommerce-products.html"
                              class="nav-link"
                              data-key="t-products"
                              >محصولات</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-ecommerce-product-details.html"
                              class="nav-link"
                              data-key="t-product-Details"
                              >جزئیات محصول</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-ecommerce-add-product.html"
                              class="nav-link"
                              data-key="t-create-product"
                              >ایجاد محصول</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-ecommerce-orders.html"
                              class="nav-link"
                              data-key="t-orders"
                              >سفارشات</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-ecommerce-order-details.html"
                              class="nav-link"
                              data-key="t-order-details"
                              >جزئیات سفارش</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-ecommerce-customers.html"
                              class="nav-link"
                              data-key="t-customers"
                              >مشتریان</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-ecommerce-cart.html"
                              class="nav-link"
                              data-key="t-shopping-cart"
                              >سبد خرید</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-ecommerce-checkout.html"
                              class="nav-link"
                              data-key="t-checkout"
                              >تسویه حساب</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-ecommerce-sellers.html"
                              class="nav-link"
                              data-key="t-sellers"
                              >فروشندگان</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-ecommerce-seller-details.html"
                              class="nav-link"
                              data-key="t-sellers-details"
                              >مشخصات فروشنده</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarProjects"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarProjects"
                        data-key="t-projects"
                        >پروژه ها</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarProjects">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="apps-projects-list.html"
                              class="nav-link"
                              data-key="t-list"
                              >فهرست کنید</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-projects-overview.html"
                              class="nav-link"
                              data-key="t-overview"
                              >نمای کلی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-projects-create.html"
                              class="nav-link"
                              data-key="t-create-project"
                              >ایجاد پروژه</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarTasks"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarTasks"
                        data-key="t-tasks"
                        >وظایف</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarTasks">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="apps-tasks-kanban.html"
                              class="nav-link"
                              data-key="t-kanbanboard"
                              >هیئت کانبان</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-tasks-list-view.html"
                              class="nav-link"
                              data-key="t-list-view"
                              >نمایش لیست</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-tasks-details.html"
                              class="nav-link"
                              data-key="t-task-details"
                              >جزئیات کار</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarCRM"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarCRM"
                        data-key="t-crm"
                        >CRM</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarCRM">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="apps-crm-contacts.html"
                              class="nav-link"
                              data-key="t-contacts"
                              >مخاطبین</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-crm-companies.html"
                              class="nav-link"
                              data-key="t-companies"
                              >شرکت ها</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-crm-deals.html"
                              class="nav-link"
                              data-key="t-deals"
                              >معاملات</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-crm-leads.html"
                              class="nav-link"
                              data-key="t-leads"
                              >منجر می شود</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarCrypto"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarCrypto"
                        data-key="t-crypto"
                        >رمزنگاری</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarCrypto">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="apps-crypto-transactions.html"
                              class="nav-link"
                              data-key="t-transactions"
                              >معاملات</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-crypto-buy-sell.html"
                              class="nav-link"
                              data-key="t-buy-sell"
                              >خرید و فروش</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-crypto-orders.html"
                              class="nav-link"
                              data-key="t-orders"
                              >سفارشات</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-crypto-wallet.html"
                              class="nav-link"
                              data-key="t-my-wallet"
                              >کیف پول من</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-crypto-ico.html"
                              class="nav-link"
                              data-key="t-ico-list"
                              >ICO فهرست کنید</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-crypto-kyc.html"
                              class="nav-link"
                              data-key="t-kyc-application"
                              >برنامه KYC</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarInvoices"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarInvoices"
                        data-key="t-invoices"
                        >فاکتورها</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarInvoices">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="apps-invoices-list.html"
                              class="nav-link"
                              data-key="t-list-view"
                              >نمایش لیست</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-invoices-details.html"
                              class="nav-link"
                              data-key="t-details"
                              >جزئیات</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-invoices-create.html"
                              class="nav-link"
                              data-key="t-create-invoice"
                              >ایجاد فاکتور</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarTickets"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarTickets"
                        data-key="t-supprt-tickets"
                        >بلیط های پشتیبانی</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarTickets">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="apps-tickets-list.html"
                              class="nav-link"
                              data-key="t-list-view"
                              >نمایش لیست</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-tickets-details.html"
                              class="nav-link"
                              data-key="t-ticket-details"
                              >جزئیات بلیط</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarnft"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarnft"
                        data-key="t-nft-marketplace"
                        >بازار NFT</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarnft">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="apps-nft-marketplace.html"
                              class="nav-link"
                              data-key="t-marketplace"
                              >بازار</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-nft-explore.html"
                              class="nav-link"
                              data-key="t-explore-now"
                              >اکنون کاوش کنید</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-nft-auction.html"
                              class="nav-link"
                              data-key="t-live-auction"
                              >حراج زنده</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-nft-item-details.html"
                              class="nav-link"
                              data-key="t-item-details"
                              >جزئیات مورد</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-nft-collections.html"
                              class="nav-link"
                              data-key="t-collections"
                              >مجموعه ها</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-nft-creators.html"
                              class="nav-link"
                              data-key="t-creators"
                              >سازندگان</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-nft-ranking.html"
                              class="nav-link"
                              data-key="t-ranking"
                              >رتبه بندی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-nft-wallet.html"
                              class="nav-link"
                              data-key="t-wallet-connect"
                              >Wallet Connect</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-nft-create.html"
                              class="nav-link"
                              data-key="t-create-nft"
                              >NFT ایجاد کنید</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a href="apps-file-manager.html" class="nav-link">
                        <span data-key="t-file-manager">مدیر فایل</span></a
                      >
                    </li>
                    <li class="nav-item">
                      <a href="apps-todo.html" class="nav-link">
                        <span data-key="t-to-do">برای انجام</span></a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarjobs"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarjobs"
                        data-key="t-jobs"
                        >مشاغل</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarjobs">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="apps-job-statistics.html"
                              class="nav-link"
                              data-key="t-statistics"
                              >آمار</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="index.html#sidebarJoblists"
                              class="nav-link"
                              data-bs-toggle="collapse"
                              role="button"
                              aria-expanded="false"
                              aria-controls="sidebarJoblists"
                              data-key="t-job-lists"
                              >لیست های شغلی</a
                            >
                            <div
                              class="collapse menu-dropdown"
                              id="sidebarJoblists"
                            >
                              <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                  <a
                                    href="apps-job-lists.html"
                                    class="nav-link"
                                    data-key="t-list"
                                    >فهرست کنید</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a
                                    href="apps-job-grid-lists.html"
                                    class="nav-link"
                                    data-key="t-grid"
                                    >شبکه</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a
                                    href="apps-job-details.html"
                                    class="nav-link"
                                    data-key="t-overview"
                                    >نمای کلی</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li class="nav-item">
                            <a
                              href="index.html#sidebarCandidatelists"
                              class="nav-link"
                              data-bs-toggle="collapse"
                              role="button"
                              aria-expanded="false"
                              aria-controls="sidebarCandidatelists"
                              data-key="t-candidate-lists"
                              >لیست های نامزدها</a
                            >
                            <div
                              class="collapse menu-dropdown"
                              id="sidebarCandidatelists"
                            >
                              <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                  <a
                                    href="apps-job-candidate-lists.html"
                                    class="nav-link"
                                    data-key="t-list-view"
                                    >نمایش لیست</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a
                                    href="apps-job-candidate-grid.html"
                                    class="nav-link"
                                    data-key="t-grid-view"
                                    >نمای شبکه</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-job-application.html"
                              class="nav-link"
                              data-key="t-application"
                              >برنامه</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-job-new.html"
                              class="nav-link"
                              data-key="t-new-job"
                              >شغل جدید</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-job-companies-lists.html"
                              class="nav-link"
                              data-key="t-companies-list"
                              >فهرست شرکت ها</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="apps-job-categories.html"
                              class="nav-link"
                              data-key="t-job-categories"
                              >دسته بندی های شغلی</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="apps-api-key.html"
                        class="nav-link"
                        data-key="t-api-key"
                        >کلید API</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarLayouts"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarLayouts"
                >
                  <i class="ri-layout-3-line"></i>
                  <span data-key="t-layouts">طرح بندی ها</span>
                  <span class="badge badge-pill bg-danger" data-key="t-hot"
                    >داغ</span
                  >
                </a>
                <div class="collapse menu-dropdown" id="sidebarLayouts">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        href="layouts-horizontal.html"
                        target="_blank"
                        class="nav-link"
                        data-key="t-horizontal"
                        >افقی</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="layouts-detached.html"
                        target="_blank"
                        class="nav-link"
                        data-key="t-detached"
                        >جدا شده</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="layouts-two-column.html"
                        target="_blank"
                        class="nav-link"
                        data-key="t-two-column"
                        >دو ستونی</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="layouts-vertical-hovered.html"
                        target="_blank"
                        class="nav-link"
                        data-key="t-hovered"
                        >شناور شد</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li class="menu-title">
                <i class="ri-more-fill"></i>
                <span data-key="t-pages">صفحات</span>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarAuth"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarAuth"
                >
                  <i class="ri-account-circle-line"></i>
                  <span data-key="t-authentication">احراز هویت</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarAuth">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarSignIn"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarSignIn"
                        data-key="t-signin"
                        >وارد شوید</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarSignIn">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="auth-signin-basic.html"
                              class="nav-link"
                              data-key="t-basic"
                              >اساسی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="auth-signin-cover.html"
                              class="nav-link"
                              data-key="t-cover"
                              >پوشش</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarSignUp"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarSignUp"
                        data-key="t-signup"
                        >ثبت نام کنید</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarSignUp">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="auth-signup-basic.html"
                              class="nav-link"
                              data-key="t-basic"
                              >اساسی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="auth-signup-cover.html"
                              class="nav-link"
                              data-key="t-cover"
                              >پوشش</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a
                        href="index.html#sidebarResetPass"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarResetPass"
                        data-key="t-password-reset"
                        >بازنشانی رمز عبور</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarResetPass">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="auth-pass-reset-basic.html"
                              class="nav-link"
                              data-key="t-basic"
                              >اساسی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="auth-pass-reset-cover.html"
                              class="nav-link"
                              data-key="t-cover"
                              >پوشش</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a
                        href="index.html#sidebarchangePass"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarchangePass"
                        data-key="t-password-create"
                        >ایجاد رمز عبور</a
                      >
                      <div
                        class="collapse menu-dropdown"
                        id="sidebarchangePass"
                      >
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="auth-pass-change-basic.html"
                              class="nav-link"
                              data-key="t-basic"
                              >اساسی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="auth-pass-change-cover.html"
                              class="nav-link"
                              data-key="t-cover"
                              >پوشش</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a
                        href="index.html#sidebarLockScreen"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarLockScreen"
                        data-key="t-lock-screen"
                        >صفحه قفل</a
                      >
                      <div
                        class="collapse menu-dropdown"
                        id="sidebarLockScreen"
                      >
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="auth-lockscreen-basic.html"
                              class="nav-link"
                              data-key="t-basic"
                              >اساسی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="auth-lockscreen-cover.html"
                              class="nav-link"
                              data-key="t-cover"
                              >پوشش</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a
                        href="index.html#sidebarLogout"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarLogout"
                        data-key="t-logout"
                        >خروج از سیستم</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarLogout">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="auth-logout-basic.html"
                              class="nav-link"
                              data-key="t-basic"
                              >اساسی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="auth-logout-cover.html"
                              class="nav-link"
                              data-key="t-cover"
                              >پوشش</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarSuccessMsg"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarSuccessMsg"
                        data-key="t-success-message"
                        >پیام موفقیت</a
                      >
                      <div
                        class="collapse menu-dropdown"
                        id="sidebarSuccessMsg"
                      >
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="auth-success-msg-basic.html"
                              class="nav-link"
                              data-key="t-basic"
                              >اساسی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="auth-success-msg-cover.html"
                              class="nav-link"
                              data-key="t-cover"
                              >پوشش</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarTwoStep"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarTwoStep"
                        data-key="t-two-step-verification"
                        >تایید دو مرحله ای</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarTwoStep">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="auth-twostep-basic.html"
                              class="nav-link"
                              data-key="t-basic"
                              >اساسی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="auth-twostep-cover.html"
                              class="nav-link"
                              data-key="t-cover"
                              >پوشش</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarErrors"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarErrors"
                        data-key="t-errors"
                        >خطاها</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarErrors">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="auth-404-basic.html"
                              class="nav-link"
                              data-key="t-404-basic"
                              >404 اساسی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="auth-404-cover.html"
                              class="nav-link"
                              data-key="t-404-cover"
                              >404 پوشش</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="auth-404-alt.html"
                              class="nav-link"
                              data-key="t-404-alt"
                              >404 Alt</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="auth-500.html"
                              class="nav-link"
                              data-key="t-500"
                              >500</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="auth-offline.html"
                              class="nav-link"
                              data-key="t-offline-page"
                              >صفحه آفلاین</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarPages"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarPages"
                >
                  <i class="ri-pages-line"></i>
                  <span data-key="t-pages">صفحات</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarPages">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        href="pages-starter.html"
                        class="nav-link"
                        data-key="t-starter"
                        >استارتر</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarProfile"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarProfile"
                        data-key="t-profile"
                        >نمایه</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarProfile">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="pages-profile.html"
                              class="nav-link"
                              data-key="t-simple-page"
                              >صفحه ساده</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="pages-profile-settings.html"
                              class="nav-link"
                              data-key="t-settings"
                              >تنظیمات</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="pages-team.html"
                        class="nav-link"
                        data-key="t-team"
                        >تیم</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="pages-timeline.html"
                        class="nav-link"
                        data-key="t-timeline"
                        >جدول زمانی</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="pages-faqs.html"
                        class="nav-link"
                        data-key="t-faqs"
                        >سوالات متداول</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="pages-pricing.html"
                        class="nav-link"
                        data-key="t-pricing"
                        >قیمت گذاری</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="pages-gallery.html"
                        class="nav-link"
                        data-key="t-gallery"
                        >گالری</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="pages-maintenance.html"
                        class="nav-link"
                        data-key="t-maintenance"
                        >تعمیر و نگهداری</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="pages-coming-soon.html"
                        class="nav-link"
                        data-key="t-coming-soon"
                        >به زودی</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="pages-sitemap.html"
                        class="nav-link"
                        data-key="t-sitemap"
                        >نقشه سایت</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="pages-search-results.html"
                        class="nav-link"
                        data-key="t-search-results"
                        >نتایج جستجو</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="pages-privacy-policy.html"
                        class="nav-link"
                        data-key="t-privacy-policy"
                        >سیاست حفظ حریم خصوصی</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="pages-term-conditions.html"
                        class="nav-link"
                        data-key="t-term-conditions"
                        >مدت و شرایط</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarBlogs"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarBlogs"
                      >
                        <span data-key="t-blogs">وبلاگ ها</span>
                        <span
                          class="badge badge-pill bg-success"
                          data-key="t-new"
                          >جدید</span
                        >
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarBlogs">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="pages-blog-list.html"
                              class="nav-link"
                              data-key="t-list-view"
                              >نمایش لیست</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="pages-blog-grid.html"
                              class="nav-link"
                              data-key="t-grid-view"
                              >نمای شبکه</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="pages-blog-overview.html"
                              class="nav-link"
                              data-key="t-overview"
                              >نمای کلی</a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarLanding"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarLanding"
                >
                  <i class="ri-rocket-line"></i>
                  <span data-key="t-landing">فرود آمدن</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarLanding">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        href="landing.html"
                        class="nav-link"
                        data-key="t-one-page"
                        >یک صفحه</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="nft-landing.html"
                        class="nav-link"
                        data-key="t-nft-landing"
                        >فرود NFT</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="job-landing.html"
                        class="nav-link"
                        data-key="t-job"
                        >شغل</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li class="menu-title">
                <i class="ri-more-fill"></i>
                <span data-key="t-components">اجزاء</span>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarUI"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarUI"
                >
                  <i class="ri-pencil-ruler-2-line"></i>
                  <span data-key="t-base-ui">رابط کاربری پایه</span>
                </a>
                <div
                  class="collapse menu-dropdown mega-dropdown-menu"
                  id="sidebarUI"
                >
                  <div class="row">
                    <div class="col-lg-4">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <a
                            href="ui-alerts.html"
                            class="nav-link"
                            data-key="t-alerts"
                            >هشدارها</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-badges.html"
                            class="nav-link"
                            data-key="t-badges"
                            >نشان ها</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-buttons.html"
                            class="nav-link"
                            data-key="t-buttons"
                            >دکمه ها</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-colors.html"
                            class="nav-link"
                            data-key="t-colors"
                            >رنگ ها</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-cards.html"
                            class="nav-link"
                            data-key="t-cards"
                            >کارت ها</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-carousel.html"
                            class="nav-link"
                            data-key="t-carousel"
                            >چرخ فلک</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-dropdowns.html"
                            class="nav-link"
                            data-key="t-dropdowns"
                            >کشویی</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-grid.html"
                            class="nav-link"
                            data-key="t-grid"
                            >شبکه</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-4">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <a
                            href="ui-images.html"
                            class="nav-link"
                            data-key="t-images"
                            >تصاویر</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-tabs.html"
                            class="nav-link"
                            data-key="t-tabs"
                            >زبانه ها</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-accordions.html"
                            class="nav-link"
                            data-key="t-accordion-collapse"
                            >آکاردئون و فروپاشی</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-modals.html"
                            class="nav-link"
                            data-key="t-modals"
                            >مدال ها</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-offcanvas.html"
                            class="nav-link"
                            data-key="t-offcanvas"
                            >آف بوم</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-placeholders.html"
                            class="nav-link"
                            data-key="t-placeholders"
                            >متغیرهای</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-progress.html"
                            class="nav-link"
                            data-key="t-progress"
                            >پیشرفت</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-notifications.html"
                            class="nav-link"
                            data-key="t-notifications"
                            >اطلاعیه ها</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-4">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <a
                            href="ui-media.html"
                            class="nav-link"
                            data-key="t-media-object"
                            >رسانه ها شی</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-embed-video.html"
                            class="nav-link"
                            data-key="t-embed-video"
                            >جاسازی کنید ویدئو</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-typography.html"
                            class="nav-link"
                            data-key="t-typography"
                            >تایپوگرافی</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-lists.html"
                            class="nav-link"
                            data-key="t-lists"
                            >لیست ها</a
                          >
                        </li>
                        <li class="nav-item">
                          <a href="ui-links.html" class="nav-link"
                            ><span data-key="t-links">پیوندها</span>
                            <span
                              class="badge badge-pill bg-success"
                              data-key="t-new"
                              >جدید</span
                            ></a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-general.html"
                            class="nav-link"
                            data-key="t-general"
                            >ژنرال</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-ribbons.html"
                            class="nav-link"
                            data-key="t-ribbons"
                            >روبان</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            href="ui-utilities.html"
                            class="nav-link"
                            data-key="t-utilities"
                            >آب و برق</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarAdvanceUI"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarAdvanceUI"
                >
                  <i class="ri-stack-line"></i>
                  <span data-key="t-advance-ui">رابط کاربری پیشرفته</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarAdvanceUI">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        href="advance-ui-sweetalerts.html"
                        class="nav-link"
                        data-key="t-sweet-alerts"
                        >شیرین هشدارها</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="advance-ui-nestable.html"
                        class="nav-link"
                        data-key="t-nestable-list"
                        >تودرتو فهرست کنید</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="advance-ui-scrollbar.html"
                        class="nav-link"
                        data-key="t-scrollbar"
                        >نوار پیمایش</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="advance-ui-animation.html"
                        class="nav-link"
                        data-key="t-animation"
                        >انیمیشن</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="advance-ui-tour.html"
                        class="nav-link"
                        data-key="t-tour"
                        >تور</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="advance-ui-swiper.html"
                        class="nav-link"
                        data-key="t-swiper-slider"
                        >سوایپر لغزنده</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="advance-ui-ratings.html"
                        class="nav-link"
                        data-key="t-ratings"
                        >رتبه بندی ها</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="advance-ui-highlight.html"
                        class="nav-link"
                        data-key="t-highlight"
                        >برجسته کردن</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="advance-ui-scrollspy.html"
                        class="nav-link"
                        data-key="t-scrollSpy"
                        >ScrollSpy</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link menu-link" href="widgets.html">
                  <i class="ri-honour-line"></i>
                  <span data-key="t-widgets">ابزارک ها</span>
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarForms"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarForms"
                >
                  <i class="ri-file-list-3-line"></i>
                  <span data-key="t-forms">فرم ها</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarForms">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        href="forms-elements.html"
                        class="nav-link"
                        data-key="t-basic-elements"
                        >اساسی عناصر</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="forms-select.html"
                        class="nav-link"
                        data-key="t-form-select"
                        >انتخاب فرم</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="forms-persian-datepicker.html"
                        class="nav-link"
                        data-key="t-form-persian-datepicker"
                        >تقویم فارسی</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="forms-checkboxs-radios.html"
                        class="nav-link"
                        data-key="t-checkboxs-radios"
                        >چک باکس ها و رادیوها</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="forms-pickers.html"
                        class="nav-link"
                        data-key="t-pickers"
                        >انتخاب کنندگان</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="forms-masks.html"
                        class="nav-link"
                        data-key="t-input-masks"
                        >ماسک های ورودی</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="forms-advanced.html"
                        class="nav-link"
                        data-key="t-advanced"
                        >پیشرفته</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="forms-range-sliders.html"
                        class="nav-link"
                        data-key="t-range-slider"
                        >محدوده لغزنده</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="forms-validation.html"
                        class="nav-link"
                        data-key="t-validation"
                        >اعتبار سنجی</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="forms-wizard.html"
                        class="nav-link"
                        data-key="t-wizard"
                        >جادوگر</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="forms-editors.html"
                        class="nav-link"
                        data-key="t-editors"
                        >ویراستاران</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="forms-file-uploads.html"
                        class="nav-link"
                        data-key="t-file-uploads"
                        >فایل آپلودها</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="forms-layouts.html"
                        class="nav-link"
                        data-key="t-form-layouts"
                        >طرح بندی فرم ها</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="forms-select2.html"
                        class="nav-link"
                        data-key="t-select2"
                        >انتخاب کنید2</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarTables"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarTables"
                >
                  <i class="ri-layout-grid-line"></i>
                  <span data-key="t-tables">جداول</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarTables">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        href="tables-basic.html"
                        class="nav-link"
                        data-key="t-basic-tables"
                        >جداول پایه</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="tables-gridjs.html"
                        class="nav-link"
                        data-key="t-grid-js"
                        >Grid Js</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="tables-listjs.html"
                        class="nav-link"
                        data-key="t-list-js"
                        >لیست Js</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="tables-datatables.html"
                        class="nav-link"
                        data-key="t-datatables"
                        >جدول های داده</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarCharts"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarCharts"
                >
                  <i class="ri-pie-chart-line"></i>
                  <span data-key="t-charts">نمودارها</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarCharts">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarApexcharts"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarApexcharts"
                        data-key="t-apexcharts"
                        >Apexcharts</a
                      >
                      <div
                        class="collapse menu-dropdown"
                        id="sidebarApexcharts"
                      >
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="charts-apex-line.html"
                              class="nav-link"
                              data-key="t-line"
                              >خط</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-area.html"
                              class="nav-link"
                              data-key="t-area"
                              >منطقه</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-column.html"
                              class="nav-link"
                              data-key="t-column"
                              >ستون</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-bar.html"
                              class="nav-link"
                              data-key="t-bar"
                              >نوار</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-mixed.html"
                              class="nav-link"
                              data-key="t-mixed"
                              >مختلط</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-timeline.html"
                              class="nav-link"
                              data-key="t-timeline"
                              >جدول زمانی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-range-area.html"
                              class="nav-link"
                              data-key="t-range-area"
                              >محدوده محدوده</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-funnel.html"
                              class="nav-link"
                              data-key="t-funnel"
                              >قیف</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-candlestick.html"
                              class="nav-link"
                              data-key="t-candlstick"
                              >شمعدان</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-boxplot.html"
                              class="nav-link"
                              data-key="t-boxplot"
                              >طرح جعبه</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-bubble.html"
                              class="nav-link"
                              data-key="t-bubble"
                              >حباب</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-scatter.html"
                              class="nav-link"
                              data-key="t-scatter"
                              >پراکنده کردن</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-heatmap.html"
                              class="nav-link"
                              data-key="t-heatmap"
                              >نقشه حرارتی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-treemap.html"
                              class="nav-link"
                              data-key="t-treemap"
                              >نقشه درختی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-pie.html"
                              class="nav-link"
                              data-key="t-pie"
                              >پای</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-radialbar.html"
                              class="nav-link"
                              data-key="t-radialbar"
                              >رادیالبار</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-radar.html"
                              class="nav-link"
                              data-key="t-radar"
                              >رادار</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="charts-apex-polar.html"
                              class="nav-link"
                              data-key="t-polar-area"
                              >منطقه قطبی</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="charts-apex-slope.html" class="nav-link"
                              ><span data-key="t-slope">شیب</span>
                              <span
                                class="badge badge-pill bg-success"
                                data-key="t-new"
                                >جدید</span
                              ></a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a
                        href="charts-chartjs.html"
                        class="nav-link"
                        data-key="t-chartjs"
                        >Chartjs</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="charts-echarts.html"
                        class="nav-link"
                        data-key="t-echarts"
                        >Echarts</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarIcons"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarIcons"
                >
                  <i class="ri-compasses-2-line"></i>
                  <span data-key="t-icons">نمادها</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarIcons">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a href="icons-remix.html" class="nav-link"
                        ><span data-key="t-remix">ریمیکس</span>
                        <span class="badge badge-pill bg-info">vch.z</span></a
                      >
                    </li>
                    <li class="nav-item">
                      <a href="icons-boxicons.html" class="nav-link"
                        ><span data-key="t-boxicons">جعبه ها</span>
                        <span class="badge badge-pill bg-info"
                          >دسته.1.4</span
                        ></a
                      >
                    </li>
                    <li class="nav-item">
                      <a href="icons-materialdesign.html" class="nav-link"
                        ><span data-key="t-material-design">طراحی متریال</span>
                        <span class="badge badge-pill bg-info"
                          >نسخه 7.2.96</span
                        ></a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="icons-lineawesome.html"
                        class="nav-link"
                        data-key="t-line-awesome"
                        >خط عالی</a
                      >
                    </li>
                    <li class="nav-item">
                      <a href="icons-feather.html" class="nav-link"
                        ><span data-key="t-feather">پر</span>
                        <span class="badge badge-pill bg-info"
                          >ماده 29.2</span
                        ></a
                      >
                    </li>
                    <li class="nav-item">
                      <a href="icons-crypto.html" class="nav-link">
                        <span data-key="t-crypto-svg">Crypto SVG</span></a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarMaps"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarMaps"
                >
                  <i class="ri-map-pin-line"></i>
                  <span data-key="t-maps">نقشه ها</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarMaps">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        href="maps-google.html"
                        class="nav-link"
                        data-key="t-google"
                        >گوگل</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="maps-vector.html"
                        class="nav-link"
                        data-key="t-vector"
                        >بردار</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="maps-leaflet.html"
                        class="nav-link"
                        data-key="t-leaflet"
                        >جزوه</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link menu-link"
                  href="index.html#sidebarMultilevel"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarMultilevel"
                >
                  <i class="ri-share-line"></i>
                  <span data-key="t-multi-level">چند سطحی</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarMultilevel">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        href="index.html#"
                        class="nav-link"
                        data-key="t-level-1.1"
                        >سطح 1.1</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="index.html#sidebarAccount"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarAccount"
                        data-key="t-level-1.2"
                        >سطح 1.2</a
                      >
                      <div class="collapse menu-dropdown" id="sidebarAccount">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <a
                              href="index.html#"
                              class="nav-link"
                              data-key="t-level-2.1"
                              >سطح 2.1</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              href="index.html#sidebarCrm"
                              class="nav-link"
                              data-bs-toggle="collapse"
                              role="button"
                              aria-expanded="false"
                              aria-controls="sidebarCrm"
                              data-key="t-level-2.2"
                              >سطح 2.2</a
                            >
                            <div class="collapse menu-dropdown" id="sidebarCrm">
                              <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                  <a
                                    href="index.html#"
                                    class="nav-link"
                                    data-key="t-level-3.1"
                                    >سطح 3.1</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a
                                    href="index.html#"
                                    class="nav-link"
                                    data-key="t-level-3.2"
                                    >سطح 3.2</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="sidebar-background"></div>
    )
};
export default AdminSidebar