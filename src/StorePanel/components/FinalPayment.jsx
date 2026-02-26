import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import apiClient from "../../apiClient";
import {selectTotalPrice} from "../../Selectors";

function FinalPayment() {
    const user = useSelector((state) => state.user);
    const storedAddress = useSelector((state) => state.address);
    const cart = useSelector((state) => state.cart);
    const totalPrice = useSelector(selectTotalPrice);
    const [address, setAddress] = useState({
        province_id: "",
        province_name: "",
        city_id: "",
        city_name: "",
        postal_code: "",
        address: "",
    });
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
    });


    // Keep inputs editable (do not bind input values directly to Redux state)
    useEffect(() => {
        setFormData({
            first_name: user?.first_name || "",
            last_name: user?.last_name || "",
            phone: user?.phone || "",
            email: user?.email || "",
        });
    }, [user?.first_name, user?.last_name, user?.phone, user?.email]);

    // Seed address from Redux/localStorage
    useEffect(() => {
        if (storedAddress && typeof storedAddress === "object" && !Array.isArray(storedAddress)) {
            setAddress((prev) => ({
                ...prev,
                ...storedAddress,
            }));
        }
    }, [storedAddress]);

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

    // Fetch cities whenever province changes (including initial address load)
    useEffect(() => {
        const provinceId = address?.province_id;
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
    }, [address?.province_id]);



    const provinceHandler = (e) => {
        const provinceId = e.target.value;

        // ذخیره نام استان برای localStorage/Redux (قبلا فقط id ست می‌شد)
        const selectedProvinceName =
            provinces?.find((p) => String(p.id) === String(provinceId))?.name ||
            e.target?.selectedOptions?.[0]?.text || "";

        // با تغییر استان، شهر و نام شهر را هم ریست می‌کنیم
        setAddress((prev) => ({
            ...prev,
            province_id: provinceId,
            province_name: selectedProvinceName,
            city_id: "",
            city_name: "",
        }));

        // cities are fetched by the useEffect listening on address.province_id
    };


    const cityHandler = (e) => {
        const cityId = e.target.value;
        const selectedCityName =
            cities?.find((c) => String(c.id) === String(cityId))?.name ||
            e.target?.selectedOptions?.[0]?.text ||
            "";

        setAddress((prev) => ({
            ...prev,
            city_id: cityId,
            city_name: selectedCityName,
        }));
    };


    const changeHandler = (e) => {
        const { name, value } = e.target;

        // Address fields are stored in `address` state
        if (["postal_code", "address"].includes(name)) {
            setAddress((prev) => ({
                ...prev,
                [name]: value,
            }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    return (
        <div>

            <main className="wrapper default">

                <main className="cart-page default ">
                    <div className="container">
                        <div className="row">
                            <div className="Final_payment_content col-12 mx-auto">
                                <header className="card-header">
                                    <h3 className="card-title"><span>افزودن و تایید اطلاعات</span></h3>
                                </header>
                                <div className="account-box Final_payment_page">

                                    <div className="account-box-content">
                                        <form className="form-account" onSubmit={(e) => e.preventDefault()}>
                                            <div className="row">
                                                <div className="col-md-8 col-sm-12">
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
                                                                    value={address?.province_id || ""}
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
                                                                    value={address?.city_id || ""}
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
                                                                    type="text"
                                                                    value={address?.postal_code || ""}
                                                                    onChange={changeHandler}
                                                                    required
                                                                    placeholder="کد پستی"
                                                                />
                                                            </label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-account-title"><span>*</span> شماره تماس</div>
                                                            <div className="form-account-row">
                                                                <input className="input_second input_all"
                                                                    value={formData.phone}
                                                                    onChange={changeHandler}
                                                                    name="phone"
                                                                    type="text"
                                                                    placeholder=" شماره تماس شما" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-account-title"> پست الکترونیک</div>
                                                            <div className="form-account-row">
                                                                <input className="input_second input_all" type="text"
                                                                    value={formData.email}
                                                                    name="email"
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
                                                                    value={address?.address || ""}
                                                                    className="input_second input_all input_textarea text-right" rows="5"
                                                                    placeholder=" آدرس خود را وارد نمایید"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 d-flex justify-start">
                                                            <div className="form-account-agree">
                                                                <button type="" className="btn big_btn btn-main-masai" >ثبت و تایید اطلاعات</button>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-12">
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
                                                                            <tr key={index}>
                                                                                <td className="text-gray-500">{item.title}</td>
                                                                                <td className="text-gray-500">{Math.round(item.count * item.price).toLocaleString()} <span>تومان</span></td>
                                                                            </tr>
                                                                        );
                                                                    })
                                                                }

                                                                <tr className="all">
                                                                    <td>مجموع	</td>
                                                                    <td>{totalPrice.toLocaleString()} <span>تومان</span></td>
                                                                </tr>

                                                                <tr>
                                                                    <td colSpan="2" className="Final_payment_det">

                                                                        <div className="col-12 ">
                                                                            <p>
                                                                                <i className="fa fa-circle"></i> بعد از پرداخت مستقیم به شماره حساب شرکت، از قسمت چت آنلاین سایت کد سفارش را برای ما ارسال کرده تا پس از تایید محصول برای شما ارسال گردد.
                                                                                <br />
                                                                                <i className="fa fa-circle"></i> برای حفظ محیط زیست از نسخه الکترونیکی فاکتور در پروفایل خود به جای چاپ کاغذی می توانید استفاده کنید.
                                                                            </p>
                                                                        </div>

                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan="2"><Link to="/store/shopping-payment" className="btn big_btn btn-main-masai">انتخاب شیوه پرداخت </Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>


                                                    </div>
                                                </div>
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
