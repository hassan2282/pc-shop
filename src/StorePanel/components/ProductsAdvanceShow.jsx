import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE__BASEURL;


function ProductsAdvanceShow({ products }) {


    return (
        <div className="col-9 hidden-xs hidden-md">
            <section id="offercarousel" className="carousel slide carousel-fade card border_all" data-ride="carousel">
                <div className="row m-0">
                    <div className="carousel-inner p-0 col-12 col-lg-12">
                        <ol className="carousel-indicators pr-0 d-flex flex-column">
                            {products?.map((_, index) => (
                                <li
                                    key={index}
                                    data-target="#offercarousel"
                                    data-slide-to={index}
                                    className={index === 0 ? 'active' : ''}
                                ></li>
                            ))}
                        </ol>

                        {products && products.map((product, index) => {
                            return (
                                <div key={index} className={`carousel-item finished ${index === 0 ? 'active' : ''}`}>
                                    <div className="row m-0">
                                        <div className="right-col col-5 d-flex imgboxofer">
                                            <Link to={`/store/single-product/${product.id}`} className="w-100 text-center">
                                                <img
                                                    src={product.media[0] !== undefined ? BASE_URL + '/storage/media/' + product?.media[0]?.name :
                                                        `../src/StorePanel/assets/img/product_img/p_${Math.floor(Math.random(0, 1) * 23)}.jpg`}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <span className="discount-percent">20 % تخفیف</span>
                                            </Link>
                                        </div>
                                        <div className="left-col col-7">
                                            <h2 className="product-title">
                                                <Link to={`/store/single-product/${product.id}`} className="w-100 text-center text-xl text-black">{product?.title}</Link>
                                            </h2>
                                            <hr className="hr-text" data-content={product?.category?.name} />
                                            <div className="row w-[90%] relative mb-5 h-10">
                                                <div className="">
                                                    <ul className="list-group text-zinc-500 flex flex-row flex-wrap space-x-10 justify-start items-center">
                                                        {
                                                            products &&
                                                            product.attribute_values.map((item, index) => {
                                                                return (

                                                                    index < 8 && <li key={index} className="list-group-item">{item?.attribute?.name?.slice(0, 10)}: {item.value.slice(0, 10)}</li>

                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="price space-15">
                                                <del><span>{Math.floor(product?.price * 1.2).toLocaleString()}<span>تومان</span></span></del>
                                                <ins><span>{product?.price.toLocaleString()}<span > تومان </span></span></ins>
                                            </div>
                                            <div className="row space-15">
                                                <div className="col-9 timer-title">
                                                    <h6 className="text-[#6EDADC]">{product?.description}</h6>
                                                    <p>یه ثانیه هم غنیمته</p>
                                                </div>
                                                {/* <div className="col-7">
                                                    <div className="countdown-timer" data-date="08 19 2023 20:20:22">
                                                        <ul className="text_countdown">
                                                            <li data-days className="number_countdown">0</li>
                                                            <li>روز</li>
                                                        </ul>
                                                        <ul className="text_countdown">
                                                            <li data-hours className="number_countdown">0</li>
                                                            <li>ساعت</li>
                                                        </ul>
                                                        <ul className="text_countdown">
                                                            <li data-minutes className="number_countdown">0</li>
                                                            <li>دقیقه</li>
                                                        </ul>
                                                        <ul className="text_countdown">
                                                            <li data-seconds className="number_countdown">0</li>
                                                            <li>ثانیه</li>
                                                        </ul>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductsAdvanceShow