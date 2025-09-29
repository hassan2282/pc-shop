import { Link, useNavigate } from "react-router-dom"
import OrderSideBar from "../structure/OrderSideBar"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import apiClient from "../../apiClient";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

function OrderAddress() {

    const user = useSelector((state) => state.user);
    const [address, setAddress] = useState();

    const deleteAddress = async() => {
        try{
            const res = await apiClient.delete(`delete-address/${address?.id}`)
            if(res.status >= 200 && res.status < 300) toast.success('آدرس با موفقیت حذف گردید')
                setAddress('');
        }catch (err){
            toast.error('متاسفانه در فرایند حذف مشکلی بوجود آمده است');
        }
    }

    useEffect(() => {
        const fetchAddress = async () => {
            try{
                const res = await apiClient.get(`user-address/${user.id}`);
                setAddress(res.data);
            }catch(err){
                toast.error('لطفا اطلاعات آدرس خود را ثبت نمایید', { toastId: 'address-error' });
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
                                            <Link to={'/address'}  className="btn btn-main-masai" data-toggle="modal" data-target="#addressModal">ثبت آدرس</Link>
                                        </div>
                                    </header>
                                    <div className="content-section default">
                                        <div className="row overflow-clip">
                                             
                                            <div className="relative col-md-12 col-sm-12 order_delivered_sec group
                                                             duration-300 hover:shadow-lg cursor-pointer hover:shadow-zinc-200">
                                                    <div className="absolute flex max-[]:flex-row max-sm:flex-col justify-center items-center top-0
                                                            scale-0 right-0 z-20 hover:backdrop-blur-sm shadow-md group-hover:scale-100 
                                                            shadow-zinc-300 w-full h-full duration-300 space-x-5">
                                                        {/* <Link to='/address' className="p-4 flex justify-center items-center duration-150 hover:scale-130">
                                                        <AiFillEdit size={'2rem'} color="#5dbbc0" className="max-sm:text-sm"/>ویرایش</Link> */}
                                                        <div onClick={deleteAddress} className="flex p-4 justify-center items-center duration-150 hover:scale-130">
                                                        <AiFillDelete size={'2rem'} color="#5dbbc0"/>حذف</div>
                                                    </div>
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
                                                                    <i className="fa fa-map  colormain" aria-hidden="true"></i> {address?.province?.name ? address?.province?.name : ' ثبت نشده '}
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-map  colormain" aria-hidden="true"></i> {address?.city?.name ? address?.city?.name : ' ثبت نشده'}
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
                                                            <img src="src/StorePanel/assets/img/map_2.png" />
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