import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react"
import { FcLock } from "react-icons/fc";
import apiClient, { tokenManager } from "../../apiClient";

function PhoneConfirm() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const inputs = useRef([]);
  const clientPhone = useSelector((state) => state.clientPhone);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(119);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // فقط رقم آخر را بگیر
    setOtp(newOtp);
    // فوکوس به فیلد بعدی
    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };


  const submitHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const res = await apiClient.post('/auth/check-verify', [otp, clientPhone], {
        withCredentials: true,
      });
      const { data, status } = res;
      if (data === false) {
        toast.error('کد وارد شده صحیح نیست')
      } else {
        const token = res.data.authorisation.original.access_token;
        const refreshToken = res.data.authorisation.original.refresh_token || null;
        const expiresIn = res.data.authorisation.expires_in || 604800; // Default to 1 week if not provided

        // Use tokenManager to store tokens with expiry time
        tokenManager.storeTokens(token, refreshToken, expiresIn);
        localStorage.setItem('user', JSON.stringify(res.data.user));

        dispatch({
          type: "login",
          payload: {
            token: token,
            user: res.data.user
          }
        })
        toast.success('خوش آمدید');
        navigate('/store/home', { replace: true });

      }

    } catch (err) {
      toast.error(err.response.data.message)
      toast.error('خطا در فرایند اعتبار سنجی');
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (timeLeft <= 0) {
      const deleteExpiredCode = async () => {
        try {
          const res = await apiClient.post('/auth/rm-code', { 'phone': clientPhone });
          const { data, status } = res;
          console.log(data);
          if (status >= 200 && status < 300) {
            toast.error('کد تایید منقضی شد');
          }
        } catch (err) {
          console.log(err.response.data.message)
        }
      }

      deleteExpiredCode();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);

  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="h-screen w-screen bg-[url('/src/StorePanel/assets/img/abstract-bg2.jpg')] fixed bg-cover z-10">
      <div className="w-full h-full flex flex-row z-20" dir="rtl">
        <div className="h-full w-full z-20 flex justify-center items-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5 },
            }}
            className="flex flex-row xl:w-[60%] lg:w-[80%] md:w-[50%] sm:w-[70%] max-sm:w-[90%] h-auto justify-center 
              items-center backdrop-blur-lg shadow-black/20
            bg-[#eaf6f748] rounded-3xl shadow-xl border-white/60 border-t border-l">
            {/* <header className="card-header">
                <h3 className="card-title text-white">
                  <span>ورود به حساب کاربری</span>
                </h3>
              </header> */}
            <div className="w-100 h-100 p-6 min-lg:basis-1/2 flex">
              <form className="flex flex-col justify-center items-center w-[95%] h-full p-3">
                <div className="flex flex-col space-y-5 w-full h-full justify-center items-center ">
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 1, delay: 0.4 },
                    }}
                    className="w-full">
                    <div className="text-zinc-800">
                      <span>*</span> کد تایید
                    </div>
                    <div className="grid grid-cols-4 justify-around gap-2" dir="ltr">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          ref={el => (inputs.current[index] = el)}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={e => handleChange(index, e.target.value)}
                          onKeyDown={e => handleKeyDown(index, e)}
                          className="p-3 rounded-2xl bg-black/50 text-white text-center text-xl font-bold border border-black/30
                           focus:outline-none focus:border-blue-500"
                        />
                      ))}
                    </div>
                  </motion.div>


                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 1, delay: 0.6 },
                    }}
                    className="flex flex-row w-full text-black/40 text-xl justify-center items-center gap-2" dir="ltr">

                    <strong className="text-xl">{minutes}:{seconds < 10 ? '0' : ''}{seconds}</strong>
                    <p className="text-sm">زمان باقی‌مانده </p>

                  </motion.div>


                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 1, delay: 0.7 },
                    }}
                    className="flex w-full justify-center items-center ">
                    <button
                      style={{ borderRadius: '4rem' }}
                      onClick={(e) => submitHandler(e)}
                      disabled={timeLeft <= 0}
                      className={`${timeLeft <= 0 && 'hidden'} d-flex w-full justify-center items-center rounded-xl shadow-sm shadow-gray-500
                         p-2 cursor-pointer hover:scale-102 active:scale-95 duration-300 hover:bg-white/60
                          border-t-white/80 border-t-1 bg-[#00C8D1]/20`}
                    >
                      {isLoading ? (
                        <AiOutlineLoading
                          className="animate-spin"
                          size={20}
                        />
                      ) : (
                        "تایید"
                      )}
                    </button>
                  </motion.div>


                  <div className="grid grid-cols-1 w-full">
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 1, delay: 0.6 },
                      }}
                      className="flex w-full justify-center items-center">
                      <Link className="d-flex w-full justify-center items-center rounded-full shadow-sm shadow-gray-500
                         p-2 cursor-pointer hover:scale-102 active:scale-95 duration-300
                         border-t-white/60 border-t-1 text-center" to="/store/login">
                        ورود با ایمیل
                      </Link>
                    </motion.div>
                  </div>

                </div>
              </form>
            </div>
            <FcLock size={'21rem'} className="max-lg:hidden min-lg:basis-1/2 flex hue-rotate-140 rounded-l-2xl object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PhoneConfirm;
