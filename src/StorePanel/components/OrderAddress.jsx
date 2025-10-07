import { Link, useNavigate } from "react-router-dom"
import OrderSideBar from "../structure/OrderSideBar"
import { useSelector } from "react-redux"
import { use, useEffect, useRef, useState } from "react";
import apiClient from "../../apiClient";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

function OrderAddress() {

    const user = useSelector((state) => state.user);
    const [address, setAddress] = useState();

    const deleteAddress = async () => {
        try {
            const res = await apiClient.delete(`delete-address/${address?.id}`)
            if (res.status >= 200 && res.status < 300) toast.success('آدرس با موفقیت حذف گردید')
            setAddress('');
        } catch (err) {
            toast.error('متاسفانه در فرایند حذف مشکلی بوجود آمده است');
        }
    }

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const res = await apiClient.get(`user-address/${user.id}`);
                setAddress(res.data);
            } catch (err) {
                toast.error('لطفا اطلاعات آدرس خود را ثبت نمایید', { toastId: 'address-error' });
            }
        }
        fetchAddress();
    }, []);
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
                                            <button onClick={deleteAddress} className="btn btn-main btn-danger" data-toggle="modal" data-target="#addressModal">حذف آدرس</button>
                                            <Link to={'/store/address'} className="btn btn-main-masai" data-toggle="modal" data-target="#addressModal">ثبت آدرس</Link>
                                        </div>
                                    </header>
                                    <div className=" ">
                                        <div className="row overflow-clip">

                                            <div className="relative col-md-12 col-sm-12 
                                                             cursor-pointer">
                                                <div className="row">


                                                    <div className="grid min-sm:grid-cols-4 max-sm:grid-cols-1 w-full gap-3">

                                                        <ul className=" w-full grid grid-cols-subgrid min-sm:col-span-3 gap-3
                                                        *:flex *:flex-row *:min-h-20 *:max-h-96 *:justify-around *:items-center *:rounded-xl *:p-2 
                                                        *:bg-[#F1F9FA]">
                                                            <li className="hover:shadow-lg hover:shadow-black duration-200">
                                                                <i className="fa fa-user-large colormain text-2xl" aria-hidden="true"></i>{user.first_name}
                                                            </li>
                                                            <li className="hover:shadow-lg hover:shadow-black duration-200">
                                                                <i className="fa fa-user-large colormain text-2xl" aria-hidden="true"></i> {user.last_name}
                                                            </li>
                                                            <li className="hover:shadow-lg hover:shadow-black duration-200">
                                                                <i className="fa fa-phone colormain text-2xl" aria-hidden="true"></i> {user.phone}
                                                            </li>
                                                            <li className="hover:shadow-lg hover:shadow-black duration-200">
                                                                <i className="fa fa-map  colormain text-2xl" aria-hidden="true"></i> {address?.province?.name ? address?.province?.name : ' ثبت نشده '}
                                                            </li>
                                                            <li className="hover:shadow-lg hover:shadow-black duration-200">
                                                                <i className="fa fa-map  colormain text-2xl" aria-hidden="true"></i> {address?.city?.name ? address?.city?.name : ' ثبت نشده'}
                                                            </li>
                                                            <li className="hover:shadow-lg hover:shadow-black duration-200">
                                                                <i className="fa fa-envelope colormain text-2xl" aria-hidden="true"></i> {address?.postal_code ? address?.postal_code : ' ثبت نشده'}
                                                            </li>

                                                            <h4 className="profile-recent-fav-name min-sm:col-span-3 flex overflow-y-scroll
                                                             items-start p-3 hover:shadow-lg hover:shadow-black duration-200">
                                                                {address?.address ? address?.address : 'ثبت نشده'}
                                                            </h4>
                                                        </ul>
                                                        <div className="flex flex-col relative w-full group
                                                          rounded-xl">

                                                            <div
                                                                onClick={deleteAddress}
                                                                className="absolute h-full justify-center items-center text-center text-white bg-[#5AB8BD]
                                                                     w-full rounded-xl z-30 duration-300">
                                                                <AiFillDelete className=" text-[3rem] p-3 rounded-xl 
                                                                     w-full h-full max-sm:text-[1rem] min-sm:text-[3rem] group-hover:bg-[#ffe8e8] group-hover:text-[#c40202] duration-300" />
                                                            </div>
                                                        </div>


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