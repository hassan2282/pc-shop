import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function PurchaseBasket() {
    const BASE_URL = import.meta.env.VITE__BASEURL;
    const cart = useSelector(state => state.cart);

    const deleteHandler = (id) => {
        alert('hi')
    }

    return (
        <>
            <ul style={{height: '350px'}} className="rounded-xl overflow-y-scroll p-2">
                {
                    cart &&
                    cart.map((item, index) => {
                        return (
                            <li key={index} className="flex justify-center items-center rounded-xl relative bg-[#F1F9FA] border-b border-white h-20" dir='rtl'>
                                <Link to={`/store/single-product/${item.id}`} className="d-flex flex-row">
                                    <i onClick={()=>deleteHandler(item.id)} className="absolute top-3 right-2
                                     fa fa-times text-red-500 rounded-full hover:scale-110" aria-hidden="true"></i>
                                    <div className="d-flex flex-row justify-center items-center p-1">
                                        <div className="m_cart-item-image w-[20%]">
                                            <img src={`${BASE_URL}/storage/media/${item.media}`} />
                                        </div>
                                        <div className="m_cart-item-details">
                                            <div className="m_cart-item-title">
                                                {item.title}
                                            </div>
                                            <div className="">
                                                <div className="space-x-4 text-muted text-[12px]">
                                                    <span>تعداد : {item.count}</span>
                                                    <span>قیمت: {item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }

            </ul>
            <div className="m_cart-header">
                <div className="m_cart-total p-2">
                    <span>مجموع سبد:</span>
                    <span> ۳۵,۲۵۳,۵۰۰</span>
                    <span> تومان</span>
                </div>
            </div>
            <div className="btn_cart">
                <Link to="/store/cart" className="btn btn_sabad">مشاهده سبد</Link>
                <Link to="/store/final-payment" className="btn btn_pardakht btn-main-masai">پرداخت</Link>
            </div>
        </>
    )
}

export default PurchaseBasket