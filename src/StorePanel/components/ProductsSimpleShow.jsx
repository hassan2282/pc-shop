import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE__BASEURL;

function ProductsSimpleShow({products}) {
  return (
    <div className="col-3 hidden-xs hidden-md">
      <div className="widget-bid-s widget card border_all">


        <div id="bid-s" className="owl-carousel owl-theme">
          {

            products.map((sliderProduct, index) => {
              return (
                  <div key={index} className="item">
                    <Link to={`/store/single-product/${sliderProduct.id}`}>
                      <img src={BASE_URL + "/storage/media/" + sliderProduct?.media[0]?.name} className="w-100" alt="" />
                      <img src="/src/StorePanel/assets/img/img_icon.png" className="type_icon" />
                    </Link>
                    <h3 className="product-title">
                      <Link to={`/store/single-product/${sliderProduct.id}`}>
                        {sliderProduct.title}
                      </Link>
                    </h3>
                    <div className="price bg-[#E2F3F4] p-2 rounded-xl">
                      <del><span className="amount">{Math.floor(sliderProduct.price * 1.2)}<span>تومان</span></span> </del>

                      <span className="amount">{sliderProduct.price}<span>تومان</span> <span className="discount_badge">3%</span></span>
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