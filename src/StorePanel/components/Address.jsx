import { useEffect, useState } from "react";
import OrderSideBar from "../structure/OrderSideBar";
import apiClient from "../../apiClient";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { AiOutlineLoading } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import {motion} from "motion/react";

function Address() {
  const [provinces, setProvinces] = useState();
  const [cities, setCities] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [userAddress, setUserAddress] = useState({
    province_id: "",
    city_id: "",
    postal_code: "",
    address: "",
    user_id: user?.id,
  });

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const res = await apiClient.get("provinces");
        setProvinces(res.data);
      } catch (err) {
        toast.error("متاسفانه دریافت استان ها از سرور با مشکل مواجه شده است");
      }
    };

    fetchProvinces();
  }, []);

  const provinceHandler = async (e) => {
    const provinceId = e.target.value;

    try {
      const fetchCities = await apiClient.get(`cities/${provinceId}`);
      setCities(fetchCities.data);
    } catch (err) {
      toast.error("متاسفانه دریافت شهر ها از سرور با مشکل مواجه شده است");
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserAddress((prev) => ({ ...prev, [name]: value }));
  };
  

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    try {
      const res = await apiClient.post("address", userAddress );
      if (res.status >= 200 && res.status < 300) {
        navigate('/store/order-address', {replace: true})
        toast.success("فرایند ثبت آدرس با موفقیت انجام شد");
      }
    } catch (err) {
      setErrors(err.response.data);
      toast.error(err.response.data.message)
      toast.error("شما فقط یک آدرس می توانید ثبت کنید");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <main className="profile-user-page default space-top-30">
        <div className="container">
          <div className="row">
            <div className="profile-page col-xl-9 col-lg-8 col-md-12 order-2">
              <div className="row">
                <div className="col-12">
                  <header className="card-header">
                    <h3 className="card-title space-x-4 flex flex-row w-full">
                      <span>ثبت آدرس</span>
                      <div className="p-2 rounded-md text-sm bg-[#5bbabf] cursor-pointer hover:scale-95 duration-150">
                        <Link to='/store/order-address' className="text-white">مشاهده آدرس</Link>
                      </div>
                    </h3>
                  </header>
                  <div className="flex content-section default w-full justify-start min-sm:pr-6 items-center">
                    <form onSubmit={SubmitHandler}>
                      <p className="flex w-full">
                        لطفا آدرس محل (سکونت / کار) خود را با دقت وارد نمایید (توجه : شما فقط مجاز به ثبت یک آدرس هستید)
                      </p>

                      <div className="row flex justify-center items-center">
                        <div className="max-sm:flex max-sm:flex-col min-sm:grid min-sm:grid-rows-3 min-sm:grid-cols-3
                                        justify-center items-center gap-3 max-sm:w-full my-3 overflow-clip">
                          <motion.div 
                            initial={{
                                y: -30,
                                filter: "blur(10px)",
                            }}
                            animate={{
                              y: 0,
                              filter: "blur(0)",
                              transition: {
                                delay: 0.3,
                                duration: 1,
                              }
                            }}

                            className="flex w-full">
                            <label className="flex w-full">
                              <select
                                className={`${errors?.errors?.province_id ? 'border-red-500 bg-red-300 border animate-pulse' : 'border-[#c0e5e7] bg-[#eaf6f7] border'}  p-2 w-full rounded-full`}
                                name="province_id"
                                type="number"
                                onChange={(e) => {
                                  provinceHandler(e);
                                  changeHandler(e);
                                }}
                                required
                                placeholder="استان"
                              >
                                {provinces &&
                                  provinces.map((item) => {
                                    return (
                                      <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                              </select>
                            </label>
                          </motion.div>
                          <motion.div 
                            initial={{
                                y: -30,
                                filter: "blur(10px)",
                            }}
                            animate={{
                              y: 0,
                              filter: "blur(0)",
                              transition: {
                                delay: 0.4,
                                duration: 1,
                              }
                            }}
                           className="flex w-full">
                            <label className="flex w-full">
                              <select
                                className={`${errors?.errors?.city_id ? 'border-red-500 bg-red-300 border animate-pulse' : 'border-[#c0e5e7] bg-[#eaf6f7] border'}  p-2 w-full rounded-full`}
                                name="city_id"
                                type="number"
                                onChange={changeHandler}
                                required
                                placeholder="شهر ها"
                              >
                                {cities &&
                                  cities.map((item) => {
                                    return (
                                      <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                              </select>
                            </label>
                          </motion.div>

                          <motion.div 
                            initial={{
                                y: -30,
                                filter: "blur(10px)",
                            }}
                            animate={{
                              y: 0,
                              filter: "blur(0)",
                              transition: {
                                delay: 0.4,
                                duration: 1,
                              }
                            }} className="flex w-full">
                            <label className="flex w-full">
                              <input
                                className={`${errors?.errors?.postal_code ? 'border-red-500 bg-red-300 border animate-pulse' : 'border-[#c0e5e7] bg-[#eaf6f7] border'}  p-2 w-full rounded-full`}
                                name="postal_code"
                                type="number"
                                onChange={changeHandler}
                                required
                                placeholder="کد پستی"
                              />
                            </label>
                          </motion.div>
                          <motion.div 
                            initial={{
                                y: -30,
                                filter: "blur(10px)",
                            }}
                            animate={{
                              y: 0,
                              filter: "blur(0)",
                              transition: {
                                delay: 0.5,
                                duration: 1,
                              }
                            }} className="max-sm:w-full max-sm:flex min-sm:row-span-2 h-full min-sm:col-span-3">
                            <label className='flex w-full h-full'>
                              <textarea
                                onChange={changeHandler}
                                className={`${errors?.errors?.address ? 'border-red-500 bg-red-300 border animate-pulse' 
                                  : 'border-[#c0e5e7] bg-[#eaf6f7] border'}  p-2 w-full rounded-3xl h-full`}
                                name="address"
                                placeholder="آدرس دقیق : "
                              />
                            </label>
                          </motion.div>
                          <motion.div 
                            initial={{
                                y: -30,
                                filter: "blur(10px)",
                            }}
                            animate={{
                              y: 0,
                              filter: "blur(0)",
                              transition: {
                                delay: 0.6,
                                duration: 1,
                              }
                            }} className="flex justify-center items-center w-full">
                            <button
                              type="submit"
                              className="btn big_btn btn-main-masai col-12"
                            >
                              {isLoading ? (
                                <AiOutlineLoading
                                  className="animate-spin"
                                  size={20}
                                />
                              ) : (
                                "ثبت"
                              )}
                            </button>
                          </motion.div>

                        </div>
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
  );
}

export default Address;
