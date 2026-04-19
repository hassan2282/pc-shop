import OrderSideBar from '../structure/OrderSideBar'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { TbBrandTelegram, TbChevronDown, TbX } from 'react-icons/tb'
import { toast } from 'react-toastify'
import apiClient from '../../apiClient'
import Confirmation from '../../AdminPanel/Components/Confirmation'
import { useSelector } from 'react-redux'

function Ticket() {

    const user = useSelector(state => state?.user);

    const ticketText = useRef();
    const container = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [Toggle, setToggle] = useState(false);
    const [selectedTicketId, setSelectedTicketId] = useState(null);
    const [conversation, setConversation] = useState(null);
    const [limitedTickets, setLimitedTickets] = useState([]);
    const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

    const tickets = limitedTickets ?? [];


    useEffect(() => {
        const fetchRes = async () => {
            setIsLoading(true);
            try {
                const response = await apiClient.get(`/userTicket/${user?.id}`);
                if (response.status >= 200 && response.status < 300) {
                    setLimitedTickets(response.data[1]);
                    setConversation(response.data[0]);
                }
            } catch (err) {
                toast.error('خطا در فرایند واکشی مکالمه');
            } finally {
                setIsLoading(false);
            }
        }

        fetchRes();
    }, []);

    // تابع اسکرول به پایین
    const scrollToBottom = () => {
        if (container.current && shouldAutoScroll) {
            container.current.scrollTop = container.current.scrollHeight;
        }
    };

    // تابع برای مدیریت اسکرول کاربر
    const handleScroll = () => {
        if (!container.current) return;

        const { scrollTop, scrollHeight, clientHeight } = container.current;
        const isAtBottom = scrollHeight - scrollTop <= clientHeight + 50; // 50px tolerance

        if (isAtBottom) {
            setShouldAutoScroll(true);
        } else {
            setShouldAutoScroll(false);
        }
    };

    // Effect for auto-scrolling when messages change
    useEffect(() => {
        if (limitedTickets && limitedTickets.length > 0) {
            scrollToBottom();
        }
    }, [limitedTickets]);
    const sendTicket = async (e) => {
        e.preventDefault();
        try {
            const res = await apiClient.post('/userTicket', {
                'text': ticketText.current.value,
                'conversation_id': conversation?.id,
                'user_id': user?.id,
            });
            if (res.status >= 200 && res.status < 300) {
                toast.success('ارسال تیکت با موفقیت انجام شد');
                ticketText.current.value = '';
                setLimitedTickets((prev) => prev ? [...prev, res.data] : [res.data]);
                setShouldAutoScroll(true);
                setTimeout(scrollToBottom, 100); // Small delay to ensure DOM is updated
            }
        } catch (err) {
            toast.error(err.response.data.message);
            toast.error('خطا در فرایند ارسال تیکت');
        }

    }

    const confirmDelete = async (confirm) => {
        if (confirm && selectedTicketId) {
            setToggle(false);
            try {
                const res = await apiClient.delete(`/userTicket/${selectedTicketId}`);
                if (res.status >= 200 && res.status < 300) {
                    toast.success('حذف تیکت با موفقیت انجام شد');
                    setLimitedTickets((prev) => prev.filter((item) => item.id !== selectedTicketId));
                }
            } catch (err) {
                toast.error('شما مجاز به حذف این پیام نیستید');
                toast.error('خطا در فرایند حذف تیکت');
            } finally {
                setToggle(false);
                setSelectedTicketId(null); // بازنشانی id تیکت انتخاب شده
            }
        } else {
            setToggle(false);
            setSelectedTicketId(null); // بازنشانی id تیکت انتخاب شده
        }
    }


    const deleteHandler = (ticket_id) => {
        setToggle(true);
        setSelectedTicketId(ticket_id)
    }

    const scrollToBottomForced = () => {
        if (!container.current) return;
        container.current.scrollTop = container.current.scrollHeight;
        setShouldAutoScroll(true);
    };


    return (
        <div>
            <main className="order-delivered default space-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-12 order-2">
                            <div className="row">
                                <div className="col-12">
                                    <div className="">
                                        <div className="">
                                            <div className="d-flex position-relative align-items-center justify-content-center
                                             w-full rounded-2xl">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="d-flex w-full position-sticky top-0 flex-row justify-content-center align-items-center"
                                                >
                                                    {/* فرم اصلی */}
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.5, delay: 0.2 }}
                                                        className="w-full" >

                                                        {/* Sticky messenger: stops naturally before footer (sticky constraint) */}
                                                        <div className="">
                                                            <div style={{ borderRadius: '20px', height: '700px' }} className="bg-[#FFFFFF]
                                                              p-2 w-full d-flex flex-column position-sticky top-0 z-3 border border-dotted border-[#5EBCC1]">

                                                                <div
                                                                    ref={container}
                                                                    onScroll={handleScroll}
                                                                    className="card-body p-0 flex-grow-1 overflow-auto position-relative rounded-2xl"
                                                                >

                                                                    {
                                                                        isLoading &&
                                                                        <span className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center
                                                                         align-items-center z-3 bg-transparent bg-opacity-25">
                                                                            <div className="spinner-border text-light" role="status" aria-label="loading" />
                                                                        </span>
                                                                    }

                                                                    {!isLoading && tickets.length === 0 && (
                                                                        <div className="h-100 d-flex flex-column justify-content-center align-items-center text-center p-4">
                                                                            <div className="fw-semibold mb-2 text-secondary">هنوز پیامی وجود ندارد</div>
                                                                            <div className="text-muted small">
                                                                                پیام خود را ارسال کنید تا گفتگو شروع شود.
                                                                            </div>
                                                                        </div>
                                                                    )}

                                                                    {
                                                                        tickets &&
                                                                        tickets?.map((ticket, index) => {
                                                                            if (!ticket.admin_id) {
                                                                                return (
                                                                                    <div key={index} className="d-flex justify-content-start m-1" dir="rtl">
                                                                                        <div className="backdrop-blur-xl bg-[#5CBABF] p-2 rounded-xl max-sm:w-full w-[60%]">
                                                                                            <div className="d-flex align-items-start justify-content-between gap-2">
                                                                                                <p className="mb-1 small text-white" style={{ whiteSpace: 'pre-wrap', fontSize: '13px' }}>
                                                                                                    {ticket.text}
                                                                                                </p>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    onClick={() => deleteHandler(ticket.id)}
                                                                                                    className="btn btn-danger btn-sm"
                                                                                                    aria-label="delete"
                                                                                                >
                                                                                                    <TbX size={18} />
                                                                                                </button>
                                                                                            </div>

                                                                                            <small className="d-flex flex-row justify-content-end align-items-center small text-zinc-600">
                                                                                                {new Date(ticket.created_at).toLocaleDateString('fa-IR', {
                                                                                                    day: 'numeric',
                                                                                                    month: 'long',
                                                                                                    year: 'numeric',
                                                                                                    hour: 'numeric',
                                                                                                    minute: '2-digit',
                                                                                                })}
                                                                                            </small>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            } else {
                                                                                return (
                                                                                    <div key={index} className="d-flex justify-content-end p-3" dir="rtl">
                                                                                        <div className="bg-dark text-white p-3 rounded-xl max-sm:w-full w-[60%]">
                                                                                            <div className="d-flex align-items-start justify-content-between gap-2">
                                                                                                <p className="mb-2 small" style={{ whiteSpace: 'pre-wrap', fontSize: '13px' }}>
                                                                                                    {ticket.text}
                                                                                                </p>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    onClick={() => deleteHandler(ticket.id)}
                                                                                                    className="btn btn-danger btn-sm"
                                                                                                    aria-label="delete"
                                                                                                >
                                                                                                    <TbX size={18} />
                                                                                                </button>
                                                                                            </div>

                                                                                            <div className="d-flex flex-row justify-content-end align-items-center gap-2 small text-white-50">
                                                                                                <span>
                                                                                                    [ {new Date(ticket.created_at).toLocaleDateString('fa-IR', {
                                                                                                        day: 'numeric',
                                                                                                        month: 'long',
                                                                                                        year: 'numeric',
                                                                                                        hour: 'numeric',
                                                                                                        minute: '2-digit',
                                                                                                    })}]
                                                                                                </span>
                                                                                                <span className="text-danger">{'ادمین شماره ' + ticket.admin_id}</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        })
                                                                    }

                                                                    {!shouldAutoScroll && tickets.length > 0 && (
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-primary shadow-sm rounded-circle d-flex align-items-center justify-content-center position-absolute start-0 bottom-0 m-3"
                                                                            onClick={scrollToBottomForced}
                                                                            aria-label="scroll to bottom"
                                                                        >
                                                                            <TbChevronDown size={18} />
                                                                        </button>
                                                                    )}

                                                                </div>

                                                                <div className="  d-flex flex-row justify-center align-items-center bg-transparent my-6 p-2">
                                                                    <form onSubmit={sendTicket} className="w-[95%]">
                                                                        <div className="d-flex" dir="rtl">
                                                                            <input
                                                                                ref={ticketText}
                                                                                type="text"
                                                                                name="text"
                                                                                required
                                                                                className="shadow-sm bg-[#ffffff] border w-100 border-[#3f3f3f] px-2 rounded-full text-black"
                                                                                placeholder="متن پیام ..."
                                                                            />
                                                                            <button
                                                                                type="submit"
                                                                                className="d-flex justify-center align-items-center hover:scale-103 active:scale-95 duration-200 w-25 text-white bg-[#48ABB0] h-12"
                                                                                style={{ borderRadius: '50px' }}
                                                                                aria-label="send"
                                                                                title="ارسال پیام"
                                                                            >
                                                                                <TbBrandTelegram size={22} />
                                                                            </button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </motion.div>
                                                </motion.div>
                                                {
                                                    Toggle &&
                                                    <Confirmation setConfirm={confirmDelete} />
                                                }
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

export default Ticket
