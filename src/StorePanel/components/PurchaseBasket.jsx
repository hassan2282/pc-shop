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
        <>
            <ul style={{"maxHeight": '22rem'}} className="rounded-xl overflow-y-scroll p-2 overflow-clip">
                {
                    cart.length > 0 ?
                    cart.map((item, index) => {
                        return (
                            <motion.li
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.2, ease: "easeInOut" }}
                                key={index} className="flex justify-center items-center rounded-xl relative
                                                     bg-[#F1F9FA] border-b border-white h-20" dir='rtl'>
                                <a href={`/store/single-product/${item.id}`} onClick={() => setToggle(!toggle)} className="d-flex flex-row">
                                    <i onClick={() => deleteHandler(index)} className="absolute top-3 right-2
                                     fa fa-times text-red-500 hover:text-red-800 rounded-full hover:scale-110" aria-hidden="true"></i>
                                    <div className="d-flex flex-row justify-center items-center p-1">
                                        <div className="w-[20%]">
                                            <img src={`${BASE_URL}/storage/media/${item.media}`} />
                                        </div>
                                        <div className="m_cart-item-details mr-4">
                                            <div className="m_cart-item-title">
                                                {item.title?.slice(0, 15) + ' ...'}
                                            </div>
                                            <div className="">
                                                <div className="space-x-4 text-muted text-[12px]">
                                                    <span>تعداد : {item.count}</span>
                                                    <span>قیمت: {item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </motion.li>
                        )
                    })
                    :
                    <span className='text-danger'>محصولی به سبد خرید اضافه نشده</span>
                }

            </ul>
            <div className="m_cart-header">
                <div className="p-4">
                    <span>مجموع سبد:</span>
                    <span>{cart.length > 0 ? totalPrice.toLocaleString('en-US') : 0}</span>
                    <span> تومان</span>
                </div>
            </div>
            <div className="btn_cart">
                <Link to="/store/cart" onClick={() => setToggle(!toggle)} className="btn btn_sabad">مشاهده سبد</Link>
                <Link to="/store/final-payment" onClick={() => setToggle(!toggle)} className="btn btn_pardakht btn-main-masai">پرداخت</Link>
            </div>
        </>
    )
}

export default PurchaseBasket