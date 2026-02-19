import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import apiClient from '../../apiClient'
import { toast } from "react-toastify";

function SingleProduct() {


    const BASE_URL = import.meta.env.VITE__BASEURL;
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await apiClient.get(`/singleProduct/${id}`);
                if (res.status >= 200 && res.status < 300) {
                    setProduct(res.data);
                }

            } catch (err) {
                console.log(err?.response?.data?.message)
                toast.error('خطا در واکشی مقاله');
            }
        }

        fetchBlog();
    }, []);


    const previewHandler = (path) => {
        setPreview(path);
    }



    return (
        <div>
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
                                        <Link to="/store/category-search"><span>موبایل</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/store/category-search"><span>برند ترین ها</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/store/category-search"><span>اپل</span></Link>
                                    </li>
                                    <li>
                                        <span>  {product && product.title}  </span>
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
                                            <img className="main_img_gallery h-120 object-contain" src={product && preview ? BASE_URL + '/storage/media/' + preview : BASE_URL + '/storage/media/' + product?.media[0]?.name} />
                                            <section className="testimonial py-3" id="testimonial">
                                                <div className="container">
                                                    <div className="row gallery">
                                                        {
                                                            product &&
                                                            product.media.map((item, index) => {
                                                                return (
                                                                    <div key={index} className="col-4 col-md-3 pd cursor-pointer hover:-translate-y-1 duration-300 *:shadow-sm hover:*:shadow-lg">
                                                                        <a>
                                                                            <img onClick={()=>{previewHandler(item?.name)}} src={BASE_URL + '/storage/media/' + item?.name} className="img-thumb h-24 " alt="تصویر محصول" />
                                                                        </a>
                                                                    </div>
                                                                )
                                                            })
                                                        }

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
                                        <div className="modal-share modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                                                                    <p className="right-side-header shareurlvalue" title="کپی بعد دوبار کلیک" id="text" onClick={(event) => copyElementText(event.target.id)}>single-product.html</p>

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
                                            <a href="#">    {product && product.title}    </a>
                                        </h2>
                                        <hr className="hr-text" data-content={product && product.description} />
                                        <div className="row">
                                            <div className="col-12">
                                                <ul className="list-group space-15 flex flex-wrap h-42 space-x-10 w-full overflow-clip">
                                                    {
                                                        product?.attribute_values &&
                                                        product?.attribute_values?.map((item, i) => {
                                                            return (
                                                                <li className="text-zinc-500" key={i}>
                                                                    <span> {item.attribute?.name} </span>
                                                                    : {item.value}
                                                                </li>
                                                            )
                                                        })
                                                    }
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
                                                                <del><span>{product && Math.floor(product.price * 1.2)}<span>تومان</span></span></del>
                                                                <ins><span>{product && product.price}<span>تومان</span></span></ins>
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
                                                        <h3 className="card-title text-[#46A9AE]"><span>{product && product.description}</span></h3>
                                                    </header>
                                                    <div className="parent-expert default">
                                                        <div className="content-expert">
                                                            <p dangerouslySetInnerHTML={{ __html: product && product.text }}>
                                                            </p>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className="tab-pane params" id="params" role="tabpanel" aria-expanded="false">
                                                    <header className="card-header">
                                                        <h3 className="card-title"><span>{product && product.description}</span></h3>
                                                    </header>

                                                    <div className="col-12">
                                                        <ul className="list-group">
                                                            {
                                                                product?.attribute_values &&
                                                                product?.attribute_values?.map((item, i) => {
                                                                    if (i < 10) {
                                                                        return (
                                                                            <li className="w-full" key={i}>
                                                                                <span className="w-full border border-white grid grid-cols-2 justify-center items-center text-center text-white/90 p-3 rounded-xl bg-[#46A9AE] ">
                                                                                    <span>{item.attribute?.name}</span>
                                                                                    <span>{item.value}</span>
                                                                                </span>
                                                                            </li>
                                                                        )
                                                                    }
                                                                })
                                                            }
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
                                                                        <img alt="" src="src/StorePanel/assets/img/profile/1.png" className="avatar" /><span className="star4">4.3</span><div className="text-h5">عالی وشیک</div>
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
                                                                        <img alt="" src="src/StorePanel/assets/img/profile/2.png" className="avatar" /><span className="star3">3.2</span><div className="text-h5">جنس ضعیف</div>
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
            </main>

        </div>
    )
}

export default SingleProduct