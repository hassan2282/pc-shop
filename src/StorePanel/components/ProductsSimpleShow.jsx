import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE__BASEURL;

function ProductsSimpleShow({ products }) {


  return (
    <div className="col-3 hidden-xs hidden-md">
      <div style={{ height: '26.3rem' }} className="widget-bid-s widget card border_all">


        <div id="bid-s" className="owl-carousel owl-theme">
          {

            products.map((sliderProduct, index) => {
              return (
                <div key={index} className="flex flex-col justify-center items-between">
                  <Link to={`/store/single-product/${sliderProduct.id}`}
                    className="w-full flex justify-center items-center">
                    <img src={sliderProduct.media[0] !== undefined ? BASE_URL + '/storage/media/' + sliderProduct?.media[0]?.name :
                      `../src/StorePanel/assets/img/product_img/p_${Math.floor(Math.random(0, 1) * 23)}.jpg`}
                      className="w-75 h-[18rem] object-cover" alt="" />
                  </Link>
                  <h5 className="product-title">
                    <Link to={`/store/single-product/${sliderProduct.id}`}>
                      {sliderProduct.title}
                    </Link>
                  </h5>
                  <div className="flex flex-col price space-y-2 bg-[#E2F3F4] p-2 rounded-xl justify-center items-center">
                    <del><span className="amount text-red-600">{Math.floor(sliderProduct.price * 1.2).toLocaleString()}<span>تومان</span></span> </del>

                    <span className="amount">{sliderProduct.price.toLocaleString()}<span>تومان</span> <span className="discount_badge">3%</span></span>
                  </div>
                </div>
              )
            })
          }

        </div>
        <div id="progressBar">
          <div className="slide-progress"></div>
        </div>
      </div>

    </div>
  )
}

export default ProductsSimpleShow