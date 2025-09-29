import OrderSideBar from '../structure/OrderSideBar'

function OrderMessage() {
  return (
    <div>

        <main className="order-delivered  default space-top-30">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-12 order-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <header className="card-header">
                                    <h3 className="card-title"><span>پیغام‌ها‌</span></h3>
                                   
                                </header>
                                <div className="content-section default">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 order_delivered_sec">
                                            <div className="row">
                                                <div className="col-12 col-lg-12 col-md-12">

                                                    <h4 className="profile-recent-fav-name">
                                                        <i className="fa fa-bell " aria-hidden="true"></i> سفارش شما با کد 45879625 ثبت شده و در حال پردازش است
                                                    </h4>
                                                    <span className="span-sub-bel">۲ اردیبهشت ۱۴۰۲</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 order_delivered_sec">
                                            <div className="row">
                                                <div className="col-12 col-lg-12 col-md-12">

                                                    <h4 className="profile-recent-fav-name">
                                                        <i className="fa fa-bell " aria-hidden="true"></i>      تجربه خریدت برامون مهمه
                                                    </h4>
                                                    <span className="span-sub-bel">25 اردیبهشت ۱۴۰۲</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 order_delivered_sec">
                                            <div className="row">
                                                <div className="col-12 col-lg-12 col-md-12">

                                                    <h4 className="profile-recent-fav-name">
                                                        <i className="fa fa-bell " aria-hidden="true"></i>مبلغ سفارش لغو شده به حساب شما واریز شد
                                                    </h4>
                                                    <span className="span-sub-bel">۲ اسفند 1401</span>


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

export default OrderMessage