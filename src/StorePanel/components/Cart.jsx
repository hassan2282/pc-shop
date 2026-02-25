import { useDispatch, useSelector } from "react-redux"
import { selectTotalPrice } from '../../Selectors'
import { Link, useNavigate } from "react-router-dom";

function Cart() {

    const cart = useSelector(state => state.cart);
    const BASE_URL = import.meta.env.VITE__BASEURL;
    const dispatch = useDispatch();
    const totalPrice = useSelector(selectTotalPrice);
    const navigator = useNavigate();

    const changeHandler = (e, index) => {

        const newCount = Number(e.target.value);
        
        dispatch({
            type: "UPDATE_CART_ITEM_COUNT",
            payload : {
                id: cart[index].id,
                count: newCount < 0 ? 0 : newCount,
            }
        })
    }


    const deleteHandler = (index) => {
        const limitedCart = cart.filter((_,i) => i !== index);
        dispatch({
            type: "deleteProduct",
            payload: limitedCart,
        });

        localStorage.setItem("cart", JSON.stringify(limitedCart));
    }



    const sendData = () => {
        

        navigator('/store/final-payment', {replace:true})
    };



    return (
        <div>
            <main className="cart-page default space-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <ul className="order-steps">
                                <li>
                                    <a className="active">
                                        <span>سبدخرید</span>
                                    </a>
                                </li>
                                <li>
                                    <Link to="/store/shopping-payment">
                                        <span>اطلاعات تکمیلی</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/store/successfull-payment">
                                        <span>پرداخت</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="cart_content col-xl-12 col-lg-12 col-md-12">
                            <header className="card-header">
                                <h3 className="card-title"><span>سبد خرید شما</span></h3>
                            </header>
                            <div className="table-responsive default">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">محصول</th>
                                            <th scope="col">سبد خرید شما</th>
                                            <th scope="col">قیمت واحد</th>
                                            <th scope="col">تعداد</th>
                                            <th scope="col">قیمت نهایی</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart &&
                                            cart.map((item, index) => {
                                                return (
                                                    <tr
                                                     key={index}
                                                      className="cart_item">
                                                        <td className="d-flex flex-row">
                                                            <img src={BASE_URL + '/storage/media/' + item.media} alt="" />
                                                            <i onClick={()=>deleteHandler(index)} className="fa fa-times cursor-pointer hover:scale-110" aria-hidden="true"></i>
                                                        </td>
                                                        <td>
                                                            <h3 className="cart_title">
                                                                <Link to={`/store/single-product/${item.id}`}>
                                                                    {item.title}
                                                                </Link>
                                                            </h3>
                                                            {/* <div className="cart_content">
                                                                <div><span>بیمه </span><span className="item_property">پارسیان</span></div>
                                                                <span className="cart_divider"></span>
                                                                <div><span>رنگ </span><span className="item_property">مشکی</span></div>
                                                            </div> */}
                                                        </td>
                                                        <td>
                                                            <div className="cart_price">
                                                                <del><span>{Math.round(item.price * 1.2).toLocaleString()}<span>تومان</span></span></del>
                                                                <ins><span>{Math.round(item.price).toLocaleString()}<span>تومان</span></span></ins>
                                                            </div>
                                                        </td>
                                                        <td><input onChange={(e) => changeHandler(e,index)} type="number" className="tedad" value={item.count} /></td>
                                                        <td className="price_alltd"> {Math.round(item.price * item.count).toLocaleString()} <span>تومان</span></td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="cart-page-content col-xl-12 col-lg-12 col-md-12">
                            <div className="row cart_details">

                                <div className="cart-page-content col-xl-8 col-lg-7 col-md-7 ">
                                    <input disabled type="text" placeholder="کد تخفیف" className="input_second input_all width-200" />
                                    <a disabled className="btn btn-main-masai"> اعمال</a>
                                    <a disabled className="btn btn-second-masai">به روز رسانی</a>
                                    <div className="text_details">
                                        <p>
                                            ارسال رایگان برای سفارش‌های بالای 10 میلیون تومان
                                        </p>
                                        <p>
                                            افزودن کالا به سبد خرید به معنی رزرو آن نیست با توجه به محدودیت موجودی سبد خود را ثبت و خرید را تکمیل کنید.
                                        </p>
                                    </div>
                                </div>
                                <div className="cart-page-aside col-xl-4 col-lg-5 col-md-5 divider_details">
                                    <table className="table table_details">
                                        <tbody>
                                            <tr>
                                                <td>قیمت کل سفارش:</td>
                                                <td>{totalPrice.toLocaleString()} <span>تومان</span></td>
                                            </tr>
                                            <tr>
                                                <td>بسته‌بندی و ارسال:</td>
                                                <td>وابسته به نوع ارسال</td>
                                            </tr>
                                            <tr className="all">
                                                <td>قیمت قابل پرداخت:</td>
                                                <td>{totalPrice.toLocaleString()} <span>تومان</span></td>
                                            </tr>
                                            <tr>
                                                <td colspan="2"><button onClick={sendData} className="btn big_btn btn-main-masai"> گام بعدی</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cart