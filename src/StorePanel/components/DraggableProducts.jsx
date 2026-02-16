import React from 'react'
const BASE_URL = import.meta.env.VITE__BASEURL;

function DraggableProducts({ products }) {
    return (
        <div className="product-carousel owl-carousel owl-theme">

            {
                products.map((product, index) => {
                    return (
                        <div key={index} className="">
                            <a href="single-product" className='flex flex-col h-[20rem]'>
                                <img src={BASE_URL + "/storage/media/" + product?.media[0]?.name} className="img-fluid h-[40%]" alt="" />
                            </a>
                            <h2 className="product_title flex w-full justify-center">
                                <a href="single-product"> {product.title}  </a>
                            </h2>
                            <div className="price p-3 justify-center items-center flex">
                                <del><span>{Math.floor(product.price * 1.2)}<span>تومان</span></span></del>
                                <span className="discount_badge">20%</span>
                                <ins><span>{product.price}<span>تومان</span></span></ins>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default DraggableProducts