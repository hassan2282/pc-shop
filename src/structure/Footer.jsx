import React from 'react'

function Footer() {
  return (
    <footer className="main-footer default">
                <div className="back-to-top ">
                    <a href="#">
                        <span className="icon"><i className="fa fa-chevron-up"></i></span> <span>
                            بازگشت بالا
                        </span>
                    </a>
                </div>
                <div className=" servicesbg">
                    <div className="footer-services container  space-10">
                        <div className="row">
                            <div className="service-item col-2 contact-box text-center">
                                <img src='src/assets/img/ico/png-4.png' className="width-40" />
                                <span className="title-1 light-black">ضمانت اصل بودن</span>
                            </div>
                            <div className="service-item col-2 contact-box text-center">
                                <img src="src/assets/img/ico/png-1.png" className="width-40" />
                                <span className="title-1 light-black">پرداخت در محل</span>
                            </div>
                            <div className="service-item col-2 contact-box text-center">
                                <img src="src/assets/img/ico/png-2.png" className="width-40" />
                                <span className="title-1 light-black">ارسال سریع</span>
                            </div>
                            <div className="service-item col-2 contact-box text-center">
                                <img src="src/assets/img/ico/png-5.png" className="width-40" />
                                <span className="title-1 light-black">فرصت 7 روزه استرداد</span>
                            </div>
                            <div className="service-item col-2 contact-box text-center">
                                <img src="src/assets/img/ico/png-3.png" className="width-40" />
                                <span className="title-1 light-black">پشتیبانی تلفنی</span>
                            </div>
                            <div className="service-item col-2 contact-box text-center">
                                <img src="src/assets/img/ico/png-7.png" className="width-40" />
                                <span className="title-1 light-black">هدیه نقدی</span>
                            </div>
                           
                        </div>

                    </div>
                </div>
                <div className="container-fluid space-30 bg-map">

                    <div className="footer-widgets container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="widget-menu widget card">
                                    <div className="card-header">
                                        <h3 className="card-title">درباره ما</h3>
                                    </div>
                                    <p className="about_footer">
                                        قالب مَسای یک پکیج کامل ایرانی با هدف بی نهایت قالب HTML و WordPress و به روز رسانی همیشگی است، که تمام ویژگی های لازم طراحی سایت را در نظر میگیرد
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="widget-menu widget card">
                                    <div className="card-header">
                                        <h3 className="card-title">خدمات مشتریان</h3>
                                    </div>
                                    <ul className="footer-menu">
                                        <li>
                                            <a href="#">ارسال فوری</a>
                                        </li>
                                        <li>
                                            <a href="#">پشتیبانی سریع</a>
                                        </li>
                                        <li>
                                            <a href="#">بازگشت وجه</a>
                                        </li>
                                        <li>
                                            <a href="#">بسته بندی کالا</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="widget-menu widget card">
                                    <div className="card-header">
                                        <h3 className="card-title">با مَسای شاپ</h3>
                                    </div>
                                    <ul className="footer-menu">

                                        <li>
                                            <a href="#">تامین کالا همکار</a>
                                        </li>
                                        <li>
                                            <a href="#">تخفیف سازمانی</a>
                                        </li>
                                        <li>
                                            <a href="#">تماس با ما</a>
                                        </li>
                                        <li>
                                            <a href="#">درباره ما</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="widget-menu widget card">
                                    <div className="card-header">
                                        <h3 className="card-title">مجوزات</h3>
                                    </div>
                                    <div className="License_img flex flex-row justify-between">
                                        <a href="#" target="_blank"><img src="src/assets/img/License_2.png" alt=""/></a>
                                        <a href="#" target="_blank"><img src="src/assets/img/License_1.png" alt=""/></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="copyright">
                    <div className="container">
                        <p>
                            این قالب به وسیله گروه برنامه نویسی گرزک پشتیبانی میشود.
                        </p>
                    </div>
                </div>
    </footer>
  )
}

export default Footer