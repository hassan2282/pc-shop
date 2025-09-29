import OrderSideBar from '../structure/OrderSideBar'

function OrdersReturn() {
  return (
    <div>

        <main className="profile-user-page default  space-top-30">
            <div className="container">
                <div className="row">
                    <div className="profile-page col-xl-9 col-lg-8 col-md-12 order-2">
                        <div className="row">
                            <div className="col-12">
                                <header className="card-header">
                                    <h3 className="card-title"><span>ثبت مرجوعی</span></h3>
                                </header>
                                <div className="content-section default">
                                    <form method="get" >
                                        <p>جهت مرجوع کالا، ابتدا کد سفارش خود را وارد کرده و در کادر بررسی محصول مورد نظر را انتخاب کنید</p>
                                      
                                            <div className="row">
                                                <div className="col-md-3 col-12"></div>
                                                    <div className="col-md-6 col-12 text--center" >
                                                        <div >
                                                            <label className="ui-input">
                                                                <input className="input_second input_all" type="text" placeholder="2569854"/>
                                                            </label>
                                                        </div>

                                                        <div >
                                                            <a  href="" data-toggle="modal" data-target="#returnModal" type="submit" className="btn big_btn btn-main-masai">بررسی محصول</a>
                                                        </div>
                                                    </div>
                                                <div className="col-md-3 col-12"></div>

                                                </div>
                                         
                                    </form>
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

export default OrdersReturn