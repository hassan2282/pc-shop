import { useEffect, useState } from 'react'
import OrderSideBar from '../structure/OrderSideBar'
import apiClient from '../../apiClient';
import { toast } from 'react-toastify';
import { TbLoader } from 'react-icons/tb';

function OrderMessage() {
    const [notifications, setNotifications] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const fetchUserNotify = async () => {
            try {
                const res = await apiClient.get('/user-notify');
                const { data, status } = res;
                if (status >= 200 && status < 300) {
                    setNotifications(data);
                }
            } catch (err) {
                toast.error('خطا در فرآیند واکشی نوتیفیکیشن ها');
            } finally {
                setIsLoading(false);
            }
        }

        fetchUserNotify();
    }, []);

    const formatDate = (date) => {
        return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }).format(new Date(date));
    };

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
                                            {
                                                isLoading && (
                                                    <TbLoader size={25} className='text-[#5CBABF] animate-spin' />
                                                )
                                            }
                                            {
                                                notifications &&
                                                notifications.map((notif, index) => {
                                                    return (
                                                        <div key={index} className="col-md-12 col-sm-12 order_delivered_sec">
                                                            <div className="row">
                                                                <div className="col-12 col-lg-12 col-md-12">

                                                                    <h4 className="profile-recent-fav-name">
                                                                        <i className="fa fa-bell " aria-hidden="true"></i>
                                                                        {notif.data.body}
                                                                    </h4>
                                                                    <span className="span-sub-bel">{formatDate(notif.created_at)}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
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