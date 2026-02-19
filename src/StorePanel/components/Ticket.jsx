import OrderSideBar from '../structure/OrderSideBar'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { TbBrandTelegram, TbTriangleFilled, TbX } from 'react-icons/tb'
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
    const [limitedTickets, setLimitedTickets] = useState();
    const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
    const [isUserScrolling, setIsUserScrolling] = useState(false);
    const scrollTimeoutRef = useRef(null);

    // Converted from Tailwind utilities to Bootstrap.
    // Some Tailwind visual effects (e.g. backdrop blur / custom bubble corners)
    // are kept as inline styles.
    const styles = {
        card: {
            borderRadius: 18,
            overflow: 'hidden',
            backgroundColor: '#e9fafc9a',
            boxShadow: '0 10px 30px rgba(17, 24, 39, 0.15)',
        },
        header: {
            backgroundColor: '#a0d4d646',
            color: '#4b5563',
            borderBottom: '1px solid rgba(93, 138, 139, 0.25)',
            backdropFilter: 'blur(10px)',
            padding: '10px',
        },
        chatShell: {
            // Similar tone to StorePanel EditProfile backgrounds
            background: 'linear-gradient(180deg, rgba(233,250,252,0.65) 0%, rgba(255,255,255,0.35) 100%)',
        },
        chatBody: {
            // backgroundColor: 'rgba(233,250,252,0.40)',
            // backdropFilter: 'blur(16px)',
            height: 520,
        },
        bubbleUser: {
            maxWidth: 520,
            backgroundColor: 'rgba(84, 180, 185)',
            border: '1px solid rgba(84, 180, 185, 0.35)',
            // backdropFilter: 'blur(14px)',
            boxShadow: '0 10px 24px rgba(2, 132, 199, 0.15)',
            borderRadius: '10px',
        },
        bubbleAdmin: {
            maxWidth: 520,
            backgroundColor: 'rgba(255, 255, 255, 0.70)',
            border: '1px solid rgba(84, 180, 185, 0.25)',
            // backdropFilter: 'blur(14px)',
            boxShadow: '0 10px 24px rgba(17, 24, 39, 0.08)',
            borderRadius: '10px',
        },
        triangleRight: {
            transform: 'rotate(59deg) translate(8px, -4.4px)',
        },
        triangleLeft: {
            transform: 'rotate(59deg) translate(-8px, -4.4px)',
        },
        scrollDownBtn: {
            position: 'absolute',
            right: 14,
            bottom: 14,
            zIndex: 30,
        },
    };

    const tickets = limitedTickets ?? [];

    useEffect(() => {
        const fetchRes = async () => {
            setIsLoading(true);
            try {
                const response = await apiClient.get(`/admin/conversations/${user?.id}`);
                if (response.status >= 200 && response.status < 300) {
                    setLimitedTickets(response.data.tickets);
                    setConversation(response.data);
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

        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        // Set timeout to reset user scrolling flag
        scrollTimeoutRef.current = setTimeout(() => {
            setIsUserScrolling(false);
        }, 1000);
    };

    // Effect for auto-scrolling when messages change
    useEffect(() => {
        if (limitedTickets && limitedTickets.length > 0) {
            scrollToBottom();
        }
    }, [limitedTickets]);

    // Effect for setting up scroll listener
    useEffect(() => {
        if (container.current) {
            container.current.addEventListener('scroll', handleScroll);
            return () => {
                if (container.current) {
                    container.current.removeEventListener('scroll', handleScroll);
                }
                if (scrollTimeoutRef.current) {
                    clearTimeout(scrollTimeoutRef.current);
                }
            };
        }
    }, []);

    const sendTicket = async (e) => {
        e.preventDefault();
        const localUser = JSON.parse(localStorage.getItem('user'));

        // Previously this referenced an undefined `id`.
        // Use the loaded conversation id.
        const conversationId = conversation?.id;
        if (!conversationId) {
            toast.error('شناسه مکالمه یافت نشد');
            return;
        }
        try {
            const res = await apiClient.post('/admin/tickets', {
                'text': ticketText.current.value,
                'conversation_id': conversationId,
                'admin_id': localUser?.id,
            });
            if (res.status >= 200 && res.status < 300) {
                toast.success('ارسال تیکت با موفقیت انجام شد');
                ticketText.current.value = '';
                setLimitedTickets((prev) => [...prev, res.data]);
                // Ensure auto-scroll after sending message
                setShouldAutoScroll(true);
                setTimeout(scrollToBottom, 100); // Small delay to ensure DOM is updated
            }
        } catch (err) {
            toast.error('خطا در فرایند ارسال تیکت');
        }

    }

    const confirmDelete = async (confirm) => {
        if (confirm && selectedTicketId) {
            setToggle(false);
            try {
                const res = await apiClient.delete(`/admin/tickets/${selectedTicketId}`);
                if (res.status >= 200 && res.status < 300) {
                    toast.success('حذف تیکت با موفقیت انجام شد');
                    setLimitedTickets((prev) => prev.filter((item) => item.id !== selectedTicketId));
                }
            } catch (err) {
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
                                <div className="col-lg-12">
                                    <header className="card-header">
                                        <h3 className="card-title"><span>پیغام‌ها‌</span></h3>

                                    </header>
                                    <div className="content-section default">
                                        <div className="row">
                                            <div className="d-flex align-items-center justify-content-center p-4 w-100">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="w-100 d-flex flex-row justify-content-center align-items-center"
                                                    style={{ maxWidth: '80rem' }}
                                                >
                                                    {/* فرم اصلی */}
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.5, delay: 0.2 }}
                                                        className="w-100" >

                                                        <div className="card border-0 w-100" style={styles.card}>
                                                            <div className="card-header d-flex align-items-center justify-content-between" style={styles.header}>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <div
                                                                        className="rounded-circle d-flex align-items-center justify-content-center"
                                                                        style={{ width: 40, height: 40, background: '#e9fafc9a', color: '#5d8a8b', fontWeight: 700, border: '1px solid rgba(84, 180, 185, 0.35)' }}
                                                                    >
                                                                        {user?.name?.[0] ?? 'U'}
                                                                    </div>
                                                                    <div className="lh-sm">
                                                                        <div className="fw-semibold" style={{ color: '#4b5563' }}>پشتیبانی</div>
                                                                        <small style={{ color: '#6b7280' }}>
                                                                            {conversation?.id ? `شماره مکالمه: ${conversation.id}` : 'در حال بارگذاری...'}
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <span className="badge" style={{ backgroundColor: 'rgba(84, 180, 185, 0.25)', color: '#4b5563', border: '1px solid rgba(84, 180, 185, 0.35)' }}>Active</span>
                                                                </div>
                                                            </div>

                                                            <div className="card-body p-0" style={styles.chatShell}>
                                                                <div
                                                                    ref={container}
                                                                    className="position-relative overflow-auto w-100"
                                                                    style={styles.chatBody}
                                                                >

                                                                    {
                                                                        isLoading &&
                                                                        <span className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ zIndex: 20 }}>
                                                                            <div className="spinner-border text-light" role="status" aria-label="loading" />
                                                                        </span>
                                                                    }

                                                                    {!isLoading && tickets.length === 0 && (
                                                                        <div className="h-100 d-flex flex-column justify-content-center align-items-center text-center p-4">
                                                                            <div className="fw-semibold mb-2" style={{ color: '#4b5563' }}>هنوز پیامی وجود ندارد</div>
                                                                            <div style={{ fontSize: 13, color: '#6b7280' }}>
                                                                                پیام خود را ارسال کنید تا گفتگو شروع شود.
                                                                            </div>
                                                                        </div>
                                                                    )}

                                                                    {
                                                                        tickets.map((ticket, index) => {
                                                                            if (ticket.admin_id === null) {
                                                                                return (
                                                                                    <div key={index} className="d-flex flex-column align-items-end">
                                                                                        <div className="position-relative m-3 p-3 rounded-4 text-end text-white" style={styles.bubbleUser}>

                                                                                            <p className="mb-1 text-white" style={{ whiteSpace: 'pre-wrap' }}>{ticket.text}</p>
                                                                                            <small className="d-block text-white text-start" style={{ fontSize: 10 }}>
                                                                                                {new Date(ticket.created_at).toLocaleDateString('fa-IR', {
                                                                                                    day: 'numeric',
                                                                                                    month: 'long',
                                                                                                    year: 'numeric',
                                                                                                    hour: 'numeric',
                                                                                                    minute: '2-digit',
                                                                                                })}
                                                                                            </small>
                                                                                            <button
                                                                                                type="button"
                                                                                                onClick={() => deleteHandler(ticket.id)}
                                                                                                className="btn btn-sm rounded-circle position-absolute"
                                                                                                style={{ left: 8, bottom: 8, width: 28, height: 28, padding: 0, lineHeight: 0, backgroundColor: 'rgba(220,53,69,0.15)', border: '1px solid rgba(220,53,69,0.35)', color: '#fff' }}
                                                                                                aria-label="delete"
                                                                                            >
                                                                                                <TbX size={18} />
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            } else {
                                                                                return (
                                                                                    <div key={index} className="d-flex flex-column align-items-start">
                                                                                        <div className="position-relative m-3 p-3 rounded-4 text-start" style={styles.bubbleAdmin}>
                                                                                            <TbTriangleFilled
                                                                                                size={20}
                                                                                                className="position-absolute top-0 start-0"
                                                                                                style={{ ...styles.triangleLeft, color: styles.bubbleAdmin.backgroundColor }}
                                                                                            />
                                                                                            <p className="mb-2" style={{ whiteSpace: 'pre-wrap', color: '#334155' }}>{ticket.text}</p>
                                                                                            <div className="d-flex flex-row justify-content-end align-items-center gap-2" style={{ fontSize: 10 }}>
                                                                                                <span>
                                                                                                    [ {new Date(ticket.created_at).toLocaleDateString('fa-IR', {
                                                                                                        day: 'numeric',
                                                                                                        month: 'long',
                                                                                                        year: 'numeric',
                                                                                                        hour: 'numeric',
                                                                                                        minute: '2-digit',
                                                                                                    })}]
                                                                                                </span>
                                                                                                <span style={{ color: '#5d8a8b' }}>{'ادمین شماره ' + ticket.admin_id}</span>
                                                                                            </div>
                                                                                            <button
                                                                                                type="button"
                                                                                                onClick={() => deleteHandler(ticket.id)}
                                                                                                className="btn btn-sm rounded-circle position-absolute"
                                                                                                style={{ right: 8, bottom: 8, width: 28, height: 28, padding: 0, lineHeight: 0, backgroundColor: 'rgba(220,53,69,0.10)', border: '1px solid rgba(220,53,69,0.25)', color: '#dc3545' }}
                                                                                                aria-label="delete"
                                                                                            >
                                                                                                X
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        })
                                                                    }

                                                                    {!shouldAutoScroll && tickets.length > 0 && (
                                                                        <button
                                                                            type="button"
                                                                            className="btn shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                                                                            style={styles.scrollDownBtn}
                                                                            onClick={scrollToBottomForced}
                                                                            aria-label="scroll to bottom"
                                                                        >
                                                                            <TbTriangleFilled size={18} style={{ transform: 'rotate(180deg)', color: '#5d8a8b' }} />
                                                                        </button>
                                                                    )}

                                                                </div>
                                                            </div>

                                                            <div className="card-footer" style={{ backgroundColor: '#a0d4d646', borderTop: '1px solid rgba(93, 138, 139, 0.20)' }}>
                                                                <form onSubmit={sendTicket} className="w-100">
                                                                    <div className="input-group">
                                                                        <input
                                                                            ref={ticketText}
                                                                            type="text"
                                                                            name="text"
                                                                            required
                                                                            className="form-control"
                                                                            placeholder="متن پیام ..."
                                                                            style={{ borderRadius: 14, borderColor: 'rgba(84, 180, 185, 0.35)' }}
                                                                        />
                                                                        <button
                                                                            type="submit"
                                                                            className="btn btn-main-masai d-flex align-items-center text-center justify-content-center"
                                                                            style={{ minWidth: 56, borderRadius: 14 }}
                                                                            aria-label="send"
                                                                        >
                                                                            X
                                                                        </button>
                                                                    </div>
                                                                </form>
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
