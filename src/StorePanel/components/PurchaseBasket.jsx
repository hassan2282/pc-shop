import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectTotalPrice } from '../../Selectors'
import { motion } from 'motion/react'

function PurchaseBasket({ toggle, setToggle }) {
    const BASE_URL = import.meta.env.VITE__BASEURL;
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totalPrice = useSelector(selectTotalPrice);

    const deleteHandler = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        dispatch({ type: "deleteProduct", payload: updatedCart });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    return (
        <div className="shadow-sm rounded-xl shadow-black">
            <ul style={{ "maxHeight": '16rem' }} className="rounded-xl overflow-y-scroll overflow-clip">
                {
                    cart.length > 0 ?
                        cart.map((item, index) => {
                            return (
                                <motion.li
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 100, opacity: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.2, ease: "easeInOut" }}
                                    key={index} className="flex justify-center items-center relative border-b border-[#3A9599] "
                                    dir='rtl'>
                                    <div className="d-flex flex-row bg-transparent">
                                        <i onClick={() => deleteHandler(index)} className="absolute top-3 right-2
                                            fa fa-times text-red-500 cursor-pointer hover:text-red-800 rounded-full hover:scale-110"></i>
                                        <a onClick={() => setToggle(!toggle)} href={`/store/single-product/${item.id}`}
                                            className="d-flex flex-row bg-transparent justify-center items-center p-1">
                                            <div className="w-14 mr-2 rounded-xl overflow-clip ">
                                                <img className='' src={item.media !== undefined ? BASE_URL + '/storage/media/' + item?.media?.name :
                                                    `../src/StorePanel/assets/img/product_img/p_${Math.floor(Math.random(0, 1) * 23)}.jpg`} />
                                            </div>
                                            <div className="m_cart-item-details mr-4 ">
                                                <div className="m_cart-item-title">
                                                    {item.title?.slice(0, 15) + ' ...'}
                                                </div>
                                                <div className="">
                                                    <div className="space-x-4 text-muted text-[12px]">
                                                        <span>تعداد : {item.count}</span>
                                                        <span>قیمت: {item.price.toLocaleString()}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </motion.li>
                            )
                        })
                        :
                        <span className='text-danger'>محصولی به سبد خرید اضافه نشده</span>
                }

            </ul>
            <div className="m_cart-header bg-[#3A9599]">
                <div className="p-[0.7rem] text-white">
                    <span>مجموع سبد : </span>
                    <span>{cart.length > 0 ? totalPrice.toLocaleString('en-US') : 0}</span>
                    <span> تومان</span>
                </div>
            </div>
            <div className="btn_cart p-2 flex flex-row justify-between">
                <Link to="/store/final-payment" onClick={() => setToggle(!toggle)} className="btn btn_pardakht btn-main-masai">پرداخت</Link>
                <Link to="/store/cart" onClick={() => setToggle(!toggle)} className="btn btn_sabad">مشاهده سبد</Link>
            </div>
        </div>
    )
}

export default PurchaseBasket