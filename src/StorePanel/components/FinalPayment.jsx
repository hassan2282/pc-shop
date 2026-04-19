import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiClient from "../../apiClient";
import { selectTotalPrice } from "../../Selectors";
import { TbLoader } from "react-icons/tb";
import { motion } from 'motion/react'

function FinalPayment() {
    const user = useSelector((state) => state.user);
    const cart = useSelector((state) => state.cart);
    const storedAddress = useSelector((state) => state.address);
    const totalPrice = useSelector(selectTotalPrice);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navidate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [shipping, setShipping] = useState('post');

    const [formData, setFormData] = useState({
        id: '',
        first_name: "",
        last_name: "",
        province_id: "",
        province_name: "",
        city_id: "",
        city_name: "",
        postal_code: "",
        address: "",
    });


    useEffect(() => {
        setFormData({
            id: user?.id,
            first_name: user?.first_name || "",
            last_name: user?.last_name || "",
            province_id: storedAddress?.province_id || "",
            province_name: storedAddress?.province_name || "",
            city_id: storedAddress?.city_id || "",
            city_name: storedAddress?.city_name || "",
            postal_code: storedAddress?.postal_code || "",
            address: storedAddress?.address || "",
        });
    }, [user?.first_name, user?.last_name, user?.phone, user?.email, storedAddress]);


    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const res = await apiClient.get("provinces");
                setProvinces(res.data || []);
            } catch (err) {
                toast.error("متاسفانه دریافت استان ها از سرور با مشکل مواجه شده است");
            }
        };

        fetchProvinces();
    }, []);



    useEffect(() => {
        const provinceId = formData?.province_id;
        if (!provinceId) {
            setCities([]);
            return;
        }

        const fetchCities = async () => {
            try {
                const res = await apiClient.get(`cities/${provinceId}`);
                setCities(res.data || []);
            } catch (err) {
                toast.error("متاسفانه دریافت شهر ها از سرور با مشکل مواجه شده است");
            }
        };

        fetchCities();
    }, [formData?.province_id]);



    const provinceHandler = (e) => {
        const provinceId = e.target.value;

        // ذخیره نام استان برای localStorage/Redux (قبلا فقط id ست می‌شد)
        const selectedProvinceName =
            provinces?.find((p) => String(p.id) === String(provinceId))?.name ||
            e.target?.selectedOptions?.[0]?.text || "";

        // با تغییر استان، شهر و نام شهر را هم ریست می‌کنیم
        setFormData((prev) => ({
            ...prev,
            province_id: provinceId,
            city_id: "",
            province_name: selectedProvinceName,
        }));

        // cities are fetched by the useEffect listening on address.province_id
    };


    const cityHandler = (e) => {
        const cityId = e.target.value;
        const selectedCityName =
            cities?.find((c) => String(c.id) === String(cityId))?.name ||
            e.target?.selectedOptions?.[0]?.text ||
            "";

        setFormData((prev) => ({
            ...prev,
            city_id: cityId,
            city_name: selectedCityName,
        }));
    };


    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const savedAddress = {
            id: formData.id,
            province_id: formData.province_id,
            province_name: formData.province_name ?? storedAddress.province_name,
            city_id: formData.city_id,
            postal_code: formData.postal_code,
            address: formData.address,
            city_name: formData.city_name ?? storedAddress.city_name,
        };
        try {
            const res = await apiClient.post('/order/user-info', formData);
            if (res.status >= 200 && res.status < 300) {
                dispatch({
                    type: "ADD_ADDRESS",
                    payload: savedAddress,
                });
                localStorage.setItem('address', JSON.stringify(savedAddress));
                toast.success('اطلاعات سفارش با موفقیت ثبت شد');
            }
        } catch (err) {
            toast.error(err.response?.data?.message)
            setLoading(false);
        } finally {
            submitOrderInfo();
            setLoading(false);
            setToggle(true);
        }
    }


    const shippingHandler = (e) => {
        const { value } = e.target;
        setShipping(value);
    }

    const submitOrderInfo = async () => {
        const user_id = user && user.id;
        const res = await apiClient.post('/orders', { user_id, cart, "shipping_method": shipping });
        navidate('/store/shopping-payment', {replace:true})

    }

    return (
        <div>

            <main className="wrapper default">

                <main className="cart-page default">
                    <div className="container">
                        <div className="">
                            <div className="Final_payment_content col-12 mx-auto">
                                <header className="card-header">
                                    <h3 className="card-title"><span>افزودن و تایید اطلاعات</span></h3>
                                </header>
                                <div className="account-box Final_payment_page">

                                    <div className="account-box-content">
                                        <form className="form-account">
                                            <div className="row flex justify-center items-start">
                                                <motion.div
                                                    initial={{ opacity: 0, x: -60 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                                                    className="flex flex-row col-md-8 col-sm-12">

                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-account-title"><span>*</span> نام</div>
                                                            <div className="form-account-row">
                                                                <input className="input_second input_all"
                                                                    type="text"
                                                                    name="first_name"
                                                                    onChange={changeHandler}
                                                                    value={formData.first_name}
                                                                    placeholder=" نام شما" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-account-title"><span>*</span> نام خانوادگی</div>
                                                            <div className="form-account-row">
                                                                <input className="input_second input_all"
                                                                    type="text"
                                                                    name="last_name"
                                                                    onChange={changeHandler}
                                                                    value={formData.last_name}
                                                                    placeholder=" نام خانوادگی شما" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 col-sm-12">
                                                            <label className="col-md-4 col-sm-12">
                                                                <div className="form-account-title"><span>*</span> استان </div>
                                                                <select
                                                                    className={`${errors?.errors?.province_id ? 'border-red-500 bg-red-300 border animate-pulse' : 'border-[#c0e5e7] bg-[#eaf6f7] border'}  p-2 w-full rounded-full`}
                                                                    name="province_id"
                                                                    type="number"
                                                                    value={formData?.province_id || ""}
                                                                    onChange={(e) => {
                                                                        provinceHandler(e);
                                                                    }}
                                                                    required
                                                                    placeholder="استان"
                                                                >
                                                                    <option value="">انتخاب استان</option>
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
                                                            <label className="col-md-4 col-sm-12">
                                                                <div className="form-account-title"><span>*</span> شهر </div>

                                                                <select
                                                                    className={`${errors?.errors?.city_id ? 'border-red-500 bg-red-300 border animate-pulse' : 'border-[#c0e5e7] bg-[#eaf6f7] border'}  p-2 w-full rounded-full`}
                                                                    name="city_id"
                                                                    type="number"
                                                                    value={formData?.city_id || ""}
                                                                    onChange={cityHandler}
                                                                    required
                                                                    placeholder="شهر ها"
                                                                >
                                                                    <option value="">انتخاب شهر</option>
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
                                                            <label className="col-md-4 col-sm-12">
                                                                <div className="form-account-title"><span>*</span> کد پستی </div>

                                                                <input
                                                                    className={`${errors?.errors?.postal_code ? 'border-red-500 bg-red-300 border animate-pulse' : 'border-[#c0e5e7] bg-[#eaf6f7] border'}  p-2 w-full rounded-full`}
                                                                    name="postal_code"
                                                                    type="number"
                                                                    value={formData?.postal_code || ""}
                                                                    onChange={changeHandler}
                                                                    required
                                                                    placeholder="کد پستی"
                                                                />
                                                            </label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-account-title"><span>*</span> شماره تماس</div>
                                                            <div className="form-account-row">
                                                                <input className="input_second input_all cursor-not-allowed text-muted"
                                                                    value={user?.phone ? user?.phone : 'ثبت نشده'}
                                                                    disabled
                                                                    name="phone"
                                                                    type="text"
                                                                    placeholder=" شماره تماس شما" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-account-title"> پست الکترونیک</div>
                                                            <div className="form-account-row">
                                                                <input className="input_second input_all cursor-not-allowed text-muted" type="text"
                                                                    value={user?.email ? user?.email : 'ثبت نشده'}
                                                                    disabled
                                                                    onChange={changeHandler}
                                                                    placeholder=" ایمیل شما" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-account-title">آدرس پستی</div>
                                                            <div className="form-account-row">
                                                                <textarea
                                                                    onChange={changeHandler}
                                                                    name="address"
                                                                    value={formData?.address || ""}
                                                                    className="input_second input_all input_textarea text-right" rows="5"
                                                                    placeholder=" آدرس خود را وارد نمایید"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row w-full justify-center items-start">
                                                            <div className="grid grid-cols-3 justify-start w-full p-3 
                                                            *:border *:border-stone-200 *:rounded-xl *:p-2 space-x-2 *:cursor-pointer
                                                            *:group *:hover:shadow-xl *:hover:-translate-y-2 *:duration-300">
                                                                <label className="plan complete-plan" htmlFor="post">
                                                                    <input
                                                                        required
                                                                        onChange={shippingHandler}
                                                                        defaultChecked
                                                                        type="radio"
                                                                        value="post"
                                                                        name="shipping_way"
                                                                        id="post" />
                                                                    <div className="flex flex-col justify-center items-center">
                                                                        <img loading="lazy" src="/src/StorePanel/assets/img/ico/png-10.png" alt="" />
                                                                        <div className="plan-details p-2 text-center">
                                                                            <span className="text-xl max-sm:text-sm">شرکت پست ایران</span>
                                                                        </div>
                                                                    </div>
                                                                </label>

                                                                <label className="plan complete-plan" htmlFor="tipax">
                                                                    <input
                                                                        required
                                                                        onChange={shippingHandler}
                                                                        type="radio"
                                                                        value="tipax"
                                                                        id="tipax"
                                                                        name="shipping_way" />
                                                                    <div className="flex flex-col justify-center items-center">
                                                                        <img loading="lazy" src="/src/StorePanel/assets/img/ico/png-9.png" alt="" />
                                                                        <div className="plan-details p-2 text-center">
                                                                            <span className="text-xl max-sm:text-sm">تیپاکس </span>
                                                                        </div>
                                                                    </div>
                                                                </label>

                                                                <label className="plan complete-plan" htmlFor="store">
                                                                    <input
                                                                        required
                                                                        onChange={shippingHandler}
                                                                        type="radio"
                                                                        value="store"
                                                                        id="store"
                                                                        name="shipping_way" />
                                                                    <div className="flex flex-col justify-center items-center">
                                                                        <img loading="lazy" src="/src/StorePanel/assets/img/ico/png-11.png" alt="" />
                                                                        <div className="plan-details p-2 text-center">
                                                                            <span className="text-xl max-sm:text-sm">تحویل حضوری </span>
                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>



                                                        </div>

                                                        {/* <div className="col-12 d-flex w-full justify-center items-center mt-2">
                                                            <div className="form-account-agree">
                                                                {
                                                                    !toggle &&
                                                                    <button onClick={submitHandler} className="btn big_btn btn-main-masai justify-center d-flex hover:scale-103 active:scale-97" >
                                                                        {loading ? <TbLoader size={20} className="animate-spin" /> : 'ثبت و تایید اطلاعات'}
                                                                    </button>
                                                                }
                                                            </div>
                                                        </div> */}
                                                    </div>



                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0, x: 60 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                                                    className="col-md-4 col-sm-12">
                                                    <div className="row">

                                                        <table className="table table_details table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>محصول</th>
                                                                    <th>قیمت کل</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    cart &&
                                                                    cart.map((item, index) => {
                                                                        return (
                                                                            <tr key={index} className="hover:bg-[#EAF6F7] duration-200">
                                                                                <td className="text-gray-500">{item.title}</td>
                                                                                <td className="text-gray-500">{Math.round(item.count * item.price).toLocaleString()} <span>تومان</span></td>
                                                                            </tr>
                                                                        );
                                                                    })
                                                                }

                                                                {/* <tr className="text-danger">
                                                                    <td>هزینه بسته بندی</td>
                                                                    <td>0</td>
                                                                </tr> */}
                                                                <tr className="text-danger">
                                                                    <td>روش ارسال</td>
                                                                    <td>{shipping === "post" ? 'شرکت پست ایران' : shipping === 'tipax' ? 'تیپاکس' : 'تحویل حضوری'}</td>
                                                                </tr>
                                                                <tr className="text-danger">
                                                                    <td>هزینه ارسال</td>
                                                                    <td>{shipping === "post" ? '100.000' : shipping === "tipax" ? '100.000' : 'رایگان'}</td>
                                                                </tr>
                                                                <tr className="all">
                                                                    <td>مجموع	</td>
                                                                    <td>{totalPrice.toLocaleString()} <span>تومان</span></td>
                                                                </tr>

                                                                <tr>
                                                                    <td colSpan="2" className="Final_payment_det">

                                                                        <div className="col-12 mt-2">
                                                                            <p>
                                                                                <i className="fa fa-circle"></i> بعد از پرداخت مستقیم به شماره حساب شرکت، از قسمت چت آنلاین سایت کد سفارش را برای ما ارسال کرده تا پس از تایید محصول برای شما ارسال گردد.
                                                                                <br />
                                                                                <i className="fa fa-circle"></i> برای حفظ محیط زیست از نسخه الکترونیکی فاکتور در پروفایل خود به جای چاپ کاغذی می توانید استفاده کنید.
                                                                            </p>
                                                                        </div>

                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td colSpan="2">
                                                                        <button onClick={submitHandler} className="btn big_btn btn-main-masai p-3 justify-center d-flex hover:scale-103 active:scale-97" >
                                                                            {loading ? <TbLoader size={20} className="animate-spin" /> : 'ثبت و تایید اطلاعات'}
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>


                                                    </div>
                                                </motion.div>

                                            </div>



                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

            </main>

        </div>
    )
}

export default FinalPayment
