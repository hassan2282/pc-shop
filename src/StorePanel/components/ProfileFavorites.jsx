import OrderSideBar from "../structure/OrderSideBar"

function ProfileFavorites() {
  return (
    <div>

        <main className="order-delivered default space-top-30">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-12 order-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <header className="card-header">
                                    <h3 className="card-title"><span>محصولات مورد علاقه</span></h3>
                                </header>
                                <div className="content-section default">
                                    <div className="row">

                                        <div className="col-md-6 col-sm-12 order_delivered_sec">
                                            <div className="profile-recent-fav-row">
                                                <div className="col-12 text--center">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_1.jpg" className="max_w200"/>
                                                </div>
                                                <div className="col-12">
                                                    <h4 className="profile-recent-fav-name_sec">
                                                        هندزفری بلوتوث انکر
                                                    </h4>

                                                    <h4 className="profile-recent-Club">
                                                        <i className="fa fa-gift" aria-hidden="true"></i> هدیه نقدی <b>75،000 تومان</b>
                                                    </h4>
                                                </div>
                                                <div className="col-6 text-left">
                                                    <a className="btn btn-main-masai"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> افزودن به سبد</a>
                                                </div>
                                                <div className="col-6 text-right">
                                                    <a className="btn btn-second-masai"><i className="fa fa-trash" aria-hidden="true"></i> حذف از لیست</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12 order_delivered_sec">
                                            <div className="profile-recent-fav-row">
                                                <div className="col-12 text--center">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_6.jpg" className="max_w200"/>
                                                </div>
                                                <div className="col-12">
                                                    <h4 className="profile-recent-fav-name">
                                                        ساعت هوشمند
                                                    </h4>

                                                    <h4 className="profile-recent-today">
                                                        <i className="fa fa-truck" aria-hidden="true"></i> ارسال  <b>امروز</b>
                                                    </h4>
                                                </div>
                                                <div className="col-6 text-left">
                                                    <a className="btn btn-main-masai"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> افزودن به سبد</a>
                                                </div>
                                                <div className="col-6 text-right">
                                                    <a className="btn btn-second-masai"><i className="fa fa-trash" aria-hidden="true"></i> حذف از لیست</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12 order_delivered_sec">
                                            <div className="profile-recent-fav-row">
                                                <div className="col-12 text--center">
                                                    <img src="/src/StorePanel/assets/img/product_img/p_8.jpg" className="max_w200"/>
                                                </div>
                                                <div className="col-12">
                                                    <h4 className="profile-recent-fav-name">
                                                       گوشی اپل 14 پرو مکس
                                                    </h4>

                                                    <h4 className="profile-recent-limit">
                                                        <i className="fa fa-ban" aria-hidden="true"></i> تنها 5 عدد در انبار باقی مانده
                                                    </h4>
                                                </div>
                                                <div className="col-6 text-left">
                                                    <a className="btn btn-main-masai"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> افزودن به سبد</a>
                                                </div>
                                                <div className="col-6 text-right">
                                                    <a className="btn btn-second-masai"><i className="fa fa-trash" aria-hidden="true"></i> حذف از لیست</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <OrderSideBar />
                </div>
            </div>
        </main>

    </div>
  )
}

export default ProfileFavorites