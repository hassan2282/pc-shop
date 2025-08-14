import OrderSideBar from "../structure/OrderSideBar"

function OrderAddress() {
  return (
    <div>
        <main className="order-delivered  default space-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-12 order-2">
                            <div className="row">
                                <div className="col-lg-12">
                                    <header className="card-header">
                                        <h3 className="card-title"><span>آدرس‌ها</span></h3>
                                        <div className="text-left">
                                            <a className="btn btn-main-masai" data-toggle="modal" data-target="#addressModal">آدرس جدید</a>
                                        </div>
                                    </header>
                                    <div className="content-section default">
                                        <div className="row">
                                             
                                            <div className="col-md-12 col-sm-12 order_delivered_sec">
                                                
                                                    <div className="row">


                                                        <div className="col-10 col-lg-10 col-md-10">

                                                            <h4 className="profile-recent-fav-name">
                                                                <i className="fa fa-map-pin" aria-hidden="true"></i> خیابان امام، بعد میدان حشمت، نرسید به چهارراه میکائیل
                                                            </h4>
                                                            <ul className="order-addres">
                                                                <li>
                                                                    <i className="fa fa-map  colormain" aria-hidden="true"></i> ایران، رشت
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-envelope colormain" aria-hidden="true"></i> 4321234569
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-phone colormain" aria-hidden="true"></i> 01234567891
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-user-large colormain" aria-hidden="true"></i> حسین رضایی

                                                                </li>

                                                            </ul>

                                                        </div>
                                                        <div className="col-4 col-lg-2 col-md-2">
                                                            <img src="src/assets/img/map_2.png" />
                                                        </div>
                                                    </div>
                                                 
                                            </div>
                                            <div className="col-md-12 col-sm-12 order_delivered_sec">

                                                <div className="row">


                                                    <div className="col-10 col-lg-10 col-md-10">

                                                        <h4 className="profile-recent-fav-name">
                                                            <i className="fa fa-map-pin" aria-hidden="true"></i> خیابان امام، بعد میدان حشمت، نرسید به چهارراه میکائیل
                                                        </h4>
                                                        <ul className="order-addres">
                                                            <li>
                                                                <i className="fa fa-map  colormain" aria-hidden="true"></i> ایران، رشت
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-envelope colormain" aria-hidden="true"></i> 4321234569
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-phone colormain" aria-hidden="true"></i> 01234567891
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-user-large colormain" aria-hidden="true"></i> حسین رضایی

                                                            </li>

                                                        </ul>

                                                    </div>
                                                    <div className="col-4 col-lg-2 col-md-2">
                                                        <img src="src/assets/img/map_2.png" />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-12 col-sm-12 order_delivered_sec">

                                                <div className="row">


                                                    <div className="col-10 col-lg-10 col-md-10">

                                                        <h4 className="profile-recent-fav-name">
                                                            <i className="fa fa-map-pin" aria-hidden="true"></i> خیابان امام، بعد میدان حشمت، نرسید به چهارراه میکائیل
                                                        </h4>
                                                        <ul className="order-addres">
                                                            <li>
                                                                <i className="fa fa-map  colormain" aria-hidden="true"></i> ایران، رشت
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-envelope colormain" aria-hidden="true"></i> 4321234569
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-phone colormain" aria-hidden="true"></i> 01234567891
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-user-large colormain" aria-hidden="true"></i> حسین رضایی

                                                            </li>

                                                        </ul>

                                                    </div>
                                                    <div className="col-4 col-lg-2 col-md-2">
                                                        <img src="src/assets/img/map_2.png" />
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

export default OrderAddress