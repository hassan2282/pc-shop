import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { FaCalendarDay, FaPhoneSquare, FaUser } from 'react-icons/fa'
import { MdMarkEmailRead } from 'react-icons/md'
import { TbBrandTelegram, TbLoader, TbTriangleFilled, TbX } from 'react-icons/tb'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import apiClient from '../../../apiClient'
import Confirmation from '../Confirmation'

function Adm_tickets_show() {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchRes = async () => {
      setIsLoading(true);
      try {
        const response = await apiClient.get(`/admin/conversations/${id}`);
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
    let user = JSON.parse(localStorage.getItem("user"));
    try {
      const res = await apiClient.post('/admin/tickets', {
        'text': ticketText.current.value,
        'conversation_id': id,
        'admin_id': user.id,
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

  return (
    <div className="min-lg:h-[80%] min-lg:w-[80%] w-full mt-5 min-xl:mr-30 flex items-center justify-center min-sm:p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full max-w-7xl flex flex-row justify-center items-center"
      >
        {/* فرم اصلی */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-4 min-sm:w-[80%] w-full z-40" >


          {/* start profile section */}
          <div className='flex min-sm:col-span-1 flex-col w-full justify-self-center justify-center pb-3 min-md:sticky md:top-1
                          min-lg:top-17 rounded-4xl max-sm:hidden shadow-[0_2px_1px_#3333] items-center backdrop-blur-lg bg-white/60'>

            <div className='relative flex flex-col w-full h-full justify-center items-center max-w-[20rem]'>
              <h2 className='absolute text-sm bg-black/50 text-white p-2 overflow-clip rounded-xl backdrop-blur-xl
               z-30 translate-y-27'>{conversation ? conversation.user.first_name + ' ' + conversation.user.last_name : 'وارد نشده'}</h2>
              <img src='../../../src/StorePanel/assets/img/profile_2.jpg'
                className='rounded-3xl rounded-tl-none w-full max-h-[18rem] absolute top-0' />
            </div>
            <div className='relative my-12 w-full' dir='rtl'>
              <ul className='flex flex-col *:flex *:flex-row *:gap-2 *:justify-between *:items-center *:w-full
                      *:rounded-xl *:p-2 text-zinc-700 text-[0.8rem]' dir='rtl'>
                <li><MdMarkEmailRead size={20} className='text-blue-600' />{conversation ? conversation.user.email : 'وارد نشده'}</li>
                <li><FaUser size={20} className='text-blue-600' />{conversation ? conversation.user.username : 'وارد نشده'}</li>
                <li><FaPhoneSquare size={20} className='text-blue-600' />{conversation ? conversation.user.phone : 'وارد نشده'}</li>
                <li><FaCalendarDay size={20} className='text-blue-600' />{conversation ?
                  new Date(conversation.user.created_at).toLocaleDateString('fa-IR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  }) :
                  'وارد نشده'}</li>
                <li><FaCalendarDay size={20} className='text-blue-600' />{new Date().toLocaleDateString('fa-IR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</li>
              </ul>
            </div>
            <div className='absolute bottom-0 justify-items-center text-zinc-200 w-full *:flex
                            *:flex-row *:items-center *:justify-center
                            *:w-full *:px-3 cursor-pointer group *:shadow-sm '>

              <Link to="/admin/user/show/2" className='w-full bg-blue-700 rounded-br-2xl 
                          hover:bg-blue-600 duration-200 h-[53px]'>اطلاعات کاربر</Link>
            </div>
          </div>

          {/* end profile section */}


          <div className='grid min-sm:col-span-3 col-span-4 grid-rows-9 min-h-120'>

            <div ref={container} className='relative border border-white/40 overflow-y-scroll overflow-x-clip
             max-h-110 *:text-sm *:text-gray-700 row-span-8
             w-full bg-white/30 backdrop-blur-xl rounded-tl-sm h-full'>

              {
                isLoading &&
                <span className='w-full h-full z-20 absolute flex justify-center items-center'>
                  <TbLoader size={32} className='animate-spin absolute place-self-center place-items-center' />
                </span>
              }

              {
                limitedTickets &&
                limitedTickets?.map((ticket, index) => {
                  if (ticket.admin_id === null) {
                    return (
                      <div key={index} className='relative rounded-2xl text-right w-[85%] rounded-tr-none m-3 p-2 backdrop-blur-lg bg-blue-400 z-40'>
                        <TbTriangleFilled size={20} className='absolute rotate-59 top-0 text-blue-400 right-0 translate-x-2 -translate-y-[4.4px] ' />
                        <p className='text-white'>{ticket.text}</p>
                        <span className='text-zinc-200 text-[9px] text-left' >{new Date(ticket.created_at).toLocaleDateString('fa-IR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit',
                        })}</span>
                        <TbX onClick={() => deleteHandler(ticket.id)} size={20} className=' absolute rounded-full left-1 bottom-[6px] bg-rose-600 p-1 text-white cursor-pointer hover:scale-110 duration-300' />
                      </div>
                    )
                  } else {
                    return (
                      <div key={index} className='relative text-left  rounded-2xl rounded-tl-none m-3 p-2 backdrop-blur-lg bg-sky-900 z-40'>
                        <TbTriangleFilled size={20} className='absolute rotate-59 top-0 text-sky-900 left-0 -translate-x-2 -translate-y-[4.4px] ' />
                        <p className='text-white mb-2'>{ticket.text}</p>
                        <div className='flex flex-row text-left justify-end space-x-2 items-center text-[10px] text-gray-200'>
                          <span className='' >
                            [ {new Date(ticket.created_at).toLocaleDateString('fa-IR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                              hour: 'numeric',
                              minute: '2-digit',
                            })}]
                          </span>
                          <span className='text-rose-400'>{'ادمین شماره ' + ticket.admin_id}</span>
                        </div>
                        <TbX onClick={() => deleteHandler(ticket.id)} size={20} className='absolute bottom-[6px] right-1 rounded-full bg-rose-600 p-1 text-white cursor-pointer hover:scale-110 duration-300' />
                      </div>
                    )
                  }
                })
              }

            </div>

            <form onSubmit={sendTicket} className='row-span-1 grid grid-cols-5 w-full h-full z-20'>
              <input ref={ticketText} type='text' name='text' required className='col-span-4 backdrop-blur-sm
               bg-white/80 p-2 focus:outline-none
               focus:border-transparent focus:ring-1 focus:ring-white' placeholder='متن پیام ...' />
              <button type='submit' className='rounded-bl-xl hover:bg-blue-700/80 text-white cursor-pointer
               duration-200 col-span-1 bg-blue-700 flex flex-row justify-center items-center hover:*:scale-120 *:duration-200'>
                <TbBrandTelegram size="24" /></button>
            </form>

          </div>

        </motion.div>
      </motion.div>
      {
        Toggle &&
        <Confirmation setConfirm={confirmDelete} />
      }
    </div>
  )
}

export default Adm_tickets_show