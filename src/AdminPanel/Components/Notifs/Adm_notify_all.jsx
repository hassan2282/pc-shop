import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { IoMdCloseCircle } from 'react-icons/io'
import { useEffect, useState } from 'react'
import apiClient from '../../../apiClient'
import { TbArticle, TbBasket, TbBellBolt, TbTicket } from 'react-icons/tb'
import Paginate from '../Paginate'

function Adm_notify_all() {
    const [allNotifs, setAllNotifs] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNotifs = async (page) => {
            try {
                const res = await apiClient.get(`/admin/notifications/all?page=${page}`);
                const { data, status } = res;
                if (status >= 200 && status < 300) {
                    setCount(Math.ceil(data.total));
                    setAllNotifs(data.data);
                }
            } catch (err) {
                console.log(err.response.data.message);
            }
        }
        fetchNotifs(page);

    }, [page]);



    const clickHandler = async (id, url) => {
        try {
            const res = await apiClient.post(`/admin/notification/read/${id}`);
            const { data, status } = res;
            if (status >= 200 && status < 300) {
                navigate(url, { replace: true });
            }
        } catch (err) {
            console.log(err.response.data.message);
        }
    }



    const formatDate = (date) => {
        return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }).format(new Date(date));
    };



    return (
        <motion.div
            initial={{
                y: 20,
                scale: 0.9,
                opacity: 0
            }}
            animate={{
                y: 0,
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 0.8,
                }
            }}
            className='flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border
                border-white/20 min-md:mr-10 mt-4 min-h-96 max-md:w-full min-md:w-[92%]'>
            <div className='flex flex-row w-full justify-between items-center min-md:p-6 
                 h-20 rounded-t-2xl'>
                <Link to="/admin/index" className='text-gray-600 hover:scale-120 mr-3 transition-all duration-200'>
                    <IoMdCloseCircle size={27} className='text-red-500' />
                </Link>
                <div className='flex flex-row gap-2 text-xl'>
                    مدیریت اعلانات
                    <TbBellBolt size={25} className="text-blue-600" />
                </div>
            </div>

            <div className='flex flex-col w-full *:cursor-pointer min-h-105 justify-center items-center'>
                {
                    allNotifs &&
                    allNotifs.map((item, index) => (
                        <div key={index} className="flex flex-col w-[95%] p-1">

                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 * index, duration: 0.4, ease: "easeOut" }}
                                key={item.id} className="flex w-full">
                                <div onClick={() => clickHandler(item.id, item.data.url)} className={`flex w-full   
                                    backdrop-blur-md rounded-2xl shadow-lg border bg-white/60
                                    border-white/30 p-3 gap-3 transition-all duration-200 hover:shadow-xl hover:bg-white/80`}>
                                    {/* Windows 11 style icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 bg-white/90 rounded-xl flex items-center justify-center">
                                            {item.type === "App\\Notifications\\CreateArticleNotification" && (
                                                <TbArticle size={22} className="text-blue-600" />
                                            )}
                                            {item.type === "App\\Notifications\\CreateProductNotification" && (
                                                <TbBasket size={22} className="text-rose-600" />
                                            )}
                                            {item.type === "App\\Notifications\\TicketNotification" && (
                                                <TbTicket size={22} className="text-yellow-600" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Content container */}
                                    <div className="flex flex-col flex-1 gap-1.5">
                                        {/* Title row */}
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-semibold text-gray-800 text-sm leading-tight">
                                                {item.data.title}
                                            </h4>
                                        </div>

                                        {/* Body message */}
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {item.data.body}
                                        </p>

                                        {/* Additional text field */}
                                        {item.data.text && (
                                            <p className="text-blue-600 bg-white/70 shadow-sm rounded-xl p-2 text-xs leading-relaxed">
                                                {item.data.text}
                                            </p>
                                        )}

                                        {/* Timestamp - Windows 11 style position */}
                                        <div className="flex justify-end mt-1">
                                            <span className="text-xs text-gray-400 font-medium">
                                                {formatDate(item.created_at)}
                                            </span>
                                        </div>
                                    </div>
                                    {
                                        !item.read_at && (
                                            <div className='absolute right-4 top-4 bg-red-600 rounded-full shadow-md shadow-black/30
                                            p-1 text-[.7rem] flex items-center justify-center text-white'>
                                            </div>
                                        )
                                    }
                                </div>
                            </motion.div>

                        </div>
                    ))
                }
            </div>

            <Paginate setPage={setPage} count={count} />
        </motion.div>
    )
}

export default Adm_notify_all