import { Link, useNavigate } from "react-router-dom"
import OrderSideBar from "../structure/OrderSideBar"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import apiClient from "../apiClient";

function OrderAddress() {

    const user = useSelector((state) => state.user);
    const [address, setAddress] = useState();

    useEffect(() => {
        const fetchAddress = async () => {
            try{
                const res = await apiClient.get(`user-address/${user.id}`);
                setAddress(res.data);
            }catch(err){
                console.log('اطلاعات آدرس کاربر هنوز ثبت نشده است و یا مشکلی از سمت سرور رخ داده است')
            }
        }
        fetchAddress();
    },[]);

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
                                            <Link to={'/address'}  className="btn btn-main-masai" data-toggle="modal" data-target="#addressModal">آدرس جدید</Link>
                                        </div>
                                    </header>
                                    <div className="content-section default">
                                        <div className="row">
                                             
                                            <div className="col-md-12 col-sm-12 order_delivered_sec">
                                                
                                                    <div className="row">


                                                        <div className="col-10 col-lg-10 col-md-10">

                                                            <ul className="order-addres">
                                                                <li>
                                                                    <i className="fa fa-user-large colormain" aria-hidden="true"></i>{user.first_name}
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-user-large colormain" aria-hidden="true"></i> {user.last_name}
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-phone colormain" aria-hidden="true"></i> {user.phone}
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-map  colormain" aria-hidden="true"></i> {address?.province.name ? address?.province.name : ' ثبت نشده '}
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-map  colormain" aria-hidden="true"></i> {address?.city.name ? address?.city.name : ' ثبت نشده'}
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-envelope colormain" aria-hidden="true"></i> {address?.postal_code ? address?.postal_code : ' ثبت نشده'}
                                                                </li>

                                                            </ul>

                                                            <h4 className="profile-recent-fav-name">
                                                                <i className="fa fa-map-pin" aria-hidden="true"></i> {address?.address ? address?.address : 'ثبت نشده'}
                                                            </h4>

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