import Footer from "../structure/footer"
import Header from "../structure/Header"

function SingleProduct() {
  return (
    <div>
        <Header />
        <main className="single-product default">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav>
                            <ul className="breadcrumb">
                                <li>
                                     <i className="fa fa-home" aria-hidden="true"></i>
                                </li>
                                
                                <li>
                                    <a href="category-search.html"><span>موبایل</span></a>
                                </li>
                                <li>
                                    <a href="category-search.html"><span>برند ترین ها</span></a>
                                </li>
                                <li>
                                    <a href="category-search.html"><span>اپل</span></a>
                                </li>
                                <li>
                                    <span>  اپل مدل Iphone 13 Pro Max  </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <article className="product">
                            <div className="row product_main_details">
                                <div className="col-lg-5 col-md-6 col-sm-12">
                                    <div className="product-gallery default">
                                        <img className="main_img_gallery" src="src/assets/img/product_img/single/main.jpg" />
                                        <section className="testimonial py-3" id="testimonial">
                                            <div className="container">
                                                <div className="row gallery">
                                                    <div className="col-4 col-md-3 pd"><a href="assets/img/product_img/single/1.jpg" rel="prettyPhoto[gallery1]"><img src="src/assets/img/product_img/single/1.jpg" className="img-thumb" alt="نمایشگر همیشه روشن" /></a></div>
                                                    <div className="col-4 col-md-3 pd"><a href="assets/img/product_img/single/2.jpg" rel="prettyPhoto[gallery1]"><img src="src/assets/img/product_img/single/2.jpg" className="img-thumb" alt="سخت تر از همه" /></a></div>
                                                    <div className="col-4 col-md-3 pd"><a href="assets/img/product_img/single/3.jpg" rel="prettyPhoto[gallery1]"><img src="src/assets/img/product_img/single/3.jpg" className="img-thumb" alt="یک دوربین در یک کلاس به تنهایی" /></a></div>
                                                    <div className="col-4 col-md-3 pd"><a href="assets/img/product_img/single/4.jpg" rel="prettyPhoto[gallery1]"><img src="src/assets/img/product_img/single/4.jpg" className="img-thumb" alt="حریم خصوصی" /></a></div>

                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <ul className="gallery-options">
                                        <li>
                                            <button className="add-favorites favorites2 favorites_heart"><i className="fa fa-heart"></i></button>
                                        </li>
                                        <li>
                                            <button className="favorites2" data-toggle="modal" data-target="#myModal"><i className="fa fa-share-alt"></i></button>
                                        </li>
                                    </ul>
                                    {/* <!-- Modal Core --> */}
                                    <div className="modal-share modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                    <h4 className="modal-title" id="myModalLabel">به اشتراک گذاشتن</h4>
                                                </div>
                                              
                                                <div className="modal-footer">
                                                    <form className="default">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                 <p>
                                                                     برای کپی آدرس در کادر زیر دابل کلیک کنید
                                                                 </p>
                                                                <p className="right-side-header shareurlvalue" title="کپی بعد دوبار کلیک" id="text" onclick="copyElementText(this.id)">http://www.mysite.com/single-product.html</p>

                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Modal Core --> */}
                                </div>
                                <div className="col-lg-7 col-md-6 col-sm-12 " >
                                   

                                        <h2 className="product-title ">
                                            <a href="#">    اپل مدل Iphone 13 Pro Max    </a>
                                        </h2>
                                        <hr className="hr-text" data-content="دو سیم‌ کارت ظرفیت 1 ترابایت و 6 گیگابایت رم "/>
                                        <div className="row">
                                            <div className="col-6">
                                                <ul className="list-group space-15">
                                                    <li className="list-group-item">رنگ: مشکی</li>
                                                    <li className="list-group-item">بلوتوث:دارد</li>
                                                    <li className="list-group-item"> رزولوشن عکس : 12 مگاپیکسل</li>
                                                    <li className="list-group-item"> اندازه  : 6.1</li>
                                                </ul>
                                            </div>
                                            <div className="col-6">
                                                <ul className="list-group space-15">
                                                    <li className="list-group-item">قابلیت : ضد آب</li>
                                                    <li className="list-group-item"> نوع گوشی : دو گوشی</li>
                                                    <li className="list-group-item"> سیستم عامل : iOS 15</li>
                                                    <li className="list-group-item"> فناوری  : Super Retina XDR OLED</li>
                                    
                                                </ul>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 product_main_pr">

                                                <div className="time_pr">


                                                    <div className="row">
                                                        <div className="col-12 upda">
                                                            <b>
                                                                <i className="fa fa-calendar" aria-hidden="true"></i>

                                                               زمان ارسال محصول :
                                                            </b>
                                                            از انبار مَسای کالا طی 2 روز کاری
                                                        </div>

                                                        <div className="col-12 col-lg-6 col-md-6">

                                                            <p>زمان باقی مانده </p>
                                                            <div className="countdown-timer" countdown="" data-date="06 12 2023 20:20:22">
                                                                <ul className="text_countdown">
                                                                    <li data-days="" className="number_countdown">35</li>
                                                                    <li>روز</li>
                                                                </ul>
                                                                <ul className="text_countdown">
                                                                    <li data-hours="" className="number_countdown">8</li>
                                                                    <li>ساعت</li>
                                                                </ul>
                                                                <ul className="text_countdown">
                                                                    <li data-minutes="" className="number_countdown">1</li>
                                                                    <li>دقیقه</li>
                                                                </ul>
                                                                <ul className="text_countdown">
                                                                    <li data-seconds="" className="number_countdown">35</li>
                                                                    <li>ثانیه</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6 col-md-6 border_left">
                                                            <div className="price space-15">
                                                                <del><span>1,599,000<span>تومان</span></span></del>
                                                                <ins><span>1,180,000<span>تومان</span></span></ins>
                                                            </div>
                                                            <div className="col-12 timer-title text--center">

                                                                <a href="#" className="btn btn-main-masai big_btn">افزودن به سبد</a>
                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>


                                            </div>
                                            <div className="col-12">
                                                <p className="txt_note">
                                                    <i className="fa fa-info" aria-hidden="true"></i>
                                                    برای کالاهای گروه موبایل، امکان برگشت کالا به دلیل انصراف از خرید تنها در صورتی مورد قبول است که کالا بدون هیچگونه استفاده و با تمامی قطعات، متعلقات و بسته‌بندی‌های اولیه خود بازگردانده شود. لازم به ذکر است که برای هر کالای موبایل، ضمانت رجیستری صادر می‌شود. در صورت بروز اشکال در ضمانت رجیستری، پس از انقضای مدت ۳۰ روزه، کالا می‌تواند بازگردانده شود.
                                                </p>
                                            </div>
                                            
                                        </div>
                                   
                                       
                                </div>
                                
                            </div>
                        </article>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 default no-padding bg_single_product">
                            <div className="product-tabs default">
                                <div className="box-tabs default">
                                    <ul className="nav" role="tablist">
                                        <li className="box-tabs-tab">
                                            <a className="active " data-toggle="tab" href="#desc" role="tab" aria-expanded="true">
                                                 توضیحات تکمیلی
                                            </a>
                                        </li>
                                        <li className="box-tabs-tab">
                                            <a data-toggle="tab" href="#params" role="tab" aria-expanded="false">
                                                 مشخصات محصول
                                            </a>
                                        </li>
                                        <li className="box-tabs-tab">
                                            <a data-toggle="tab" href="#comments" role="tab" aria-expanded="false">
                                                 دیدگاه خریداران
                                            </a>
                                        </li>
                                        <li className="box-tabs-tab">
                                            <a data-toggle="tab" href="#comments_questions" role="tab" aria-expanded="false">
                                                پرسش و نظر
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="card-body default">
                                        {/* <!-- Tab panes --> */}
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="desc" role="tabpanel" aria-expanded="true">
                                                
                                                    <header className="card-header">
                                                        <h3 className="card-title"><span>بررسی تخصصی گوشی iPhone 13 Pro Max </span></h3>
                                                    </header>
                                                    <div className="parent-expert default">
                                                        <div className="content-expert">
                                                            <p>
                                                                مدل iPhone 13 Pro Max، آخرین نسخه از سری گوشی‌های iPhone ساخت شرکت اپل است که در تاریخ 14 سپتامبر 2021 معرفی شده است. این گوشی با صفحه‌نمایش سوپر رتینا XDR از نوع OLED و ابعاد 6.7 اینچ، عملکردی بی‌نظیر را در ارائه تصاویر با کیفیت بالا به کاربران خود ارائه می‌دهد. صفحه آن با درجه حفاظت IP68 در برابر آب و گرد و غبار مقاوم است.
                                                                <br />
                                                                گوشی iPhone 13 Pro Max دارای پردازنده A15 Bionic، پردازنده اختصاصی شرکت اپل است که همراه با 6 هسته و GPU 5 هسته‌ای طراحی شده است. این پردازنده با فناوری 5 نانومتر قدرتمندی و قابلیت انجام عملیات پردازشی سریع در برنامه‌های گوناگون را فراهم می‌کند.
                                                                <br />
                                                                دوربین‌های iPhone 13 Pro Max شامل سه لنز 12 مگاپیکسلی هستند که شامل لنز اصلی، لنز تله‌فوتو و لنز زاویه یک‌صدم گنجایش هستند که مجموعه ای از قابلیت‌های عکاسی شامل فوکوس خودکار بصری، حالت زوم، اپتیکال زوم، پورتره، ثبت عکس با رنگ‌های بیشتر و تصاویر با کیفیت بالا را فراهم می‌کند.
                                                                <br />
                                                                این گوشی دارای سیستم عامل iOS 15 است که با مجموعه دستورالعمل‌ها و روش‌های جدید برای ارتقاء تجربیات کاربری و تضمین امنیت اطلاعات کاربر فراهم می‌شود. همچنین، دارای جعبه باتری پورت هسته هیدروژن است که زمان شارژ موثر گوشی را افزایش می‌دهد.                                                            
                                                            </p>
                                                        </div>
                                                    </div>
                                                     
                                                
                                            </div>
                                            <div className="tab-pane params" id="params" role="tabpanel" aria-expanded="false">
                                                <header className="card-header">
                                                    <h3 className="card-title"><span>بررسی تخصصی گوشی iPhone 13 Pro Max </span></h3>
                                                </header>
                                               
                                                    <div className="col-12">
                                                        <ul className="list-group ">
                                                            <li className="list-group-item">رنگ: مشکی</li>
                                                            <li className="list-group-item">بلوتوث:دارد</li>
                                                            <li className="list-group-item"> رزولوشن عکس : 12 مگاپیکسل</li>
                                                            <li className="list-group-item" > اندازه  : 6.1</li>
                                                      
                                                                <li className="list-group-item">قابلیت : ضد آب</li>
                                                                <li className="list-group-item"> نوع گوشی : دو گوشی</li>
                                                                <li className="list-group-item"> سیستم عامل : iOS 15</li>
                                                                <li className="list-group-item"> فناوری  : Super Retina XDR OLED</li>

                                                           
                                                        </ul>
                                                    
                                                        
                                                    </div>
                                                     
                                                   

                                                
                                            </div>
                                            <div className="tab-pane" id="comments" role="tabpanel" aria-expanded="false">
                                               
                                                    <header className="card-header">
                                                        <h3 className="card-title"><span>دیدگاه های دیگر کاربران</span></h3>
                                                    </header>
                                                    <div className="comments_form default">
                                                        <ol className="comment-list">
                                                            {/* <!-- #comment-## --> */}
                                                            <li>
                                                                <div className="comment-body">
                                                                    <div className="comment-author">
                                                                        <img alt="" src="src/assets/img/profile/1.png" className="avatar"/><span className="star4">4.3</span><div className="text-h5">عالی وشیک</div> 
                                                                    </div>
                                                                    
                                                                    <p>محصول بسیار خوبی است. صفحه‌نمایش با کیفیت فوق‌العاده، دوربین‌های با کیفیت و روانی کارکرد دستگاه همگی از ویژگی‌های مثبت این محصول هستند.</p>
                                                                  <ul className="commentul">
                                                                      <li>
                                                                          25 اردیبهشت 1402


                                                                      </li>
                                                                      <li>
                                                                          رضا صبوری
                                                                      </li>
                                                                  </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="comment-body">
                                                                    <div className="comment-author">
                                                                        <img alt="" src="src/assets/img/profile/2.png" className="avatar"/><span className="star3">3.2</span><div className="text-h5">جنس ضعیف</div>
                                                                    </div>

                                                                    <p>
                                                                        اینقد قیمتش زیاد هست که نمیشه سمتش رفت، خریدم ولی پشیمونم، بنظر من نخرید، نوکیا 1100 از این بهتره، خیلی کار باهاش هم دشوار هست.
                                                                    </p>
                                                                    <ul className="commentul">
                                                                        <li>
                                                                            30 اردیبهشت 1402


                                                                        </li>
                                                                        <li>
                                                                            محمود صفایی
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                 
                                            </div>
                                            <div className="tab-pane form-comment" id="comments_questions" role="tabpanel" aria-expanded="false">
                                                <header className="card-header">
                                                    <h3 className="card-title"><span>ارسال نظر و پرسش  </span></h3>
                                                </header>
                                                   
                                                    <form action="" className="comment">
                                                        <textarea className="form-control" placeholder="متن نظر و پرسش" rows="4"></textarea>
                                                        <button className="btn btn-main-masai">ارسال برای تایید</button>
                                                    </form>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </main>

    </div>
  )
}

export default SingleProduct