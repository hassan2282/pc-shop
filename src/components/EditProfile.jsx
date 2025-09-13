import { useState } from "react";
import OrderSideBar from "../structure/OrderSideBar";
import { TbImageInPicture } from "react-icons/tb";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import { useSelector } from "react-redux";

function EditProfile() {
  const user = useSelector((state) => state.user);
  const [initialUserData, setInitialUserData] = useState({
  first_name: user?.first_name || "",
  last_name: user?.last_name || "",
  phone: user?.phone || "",
  email: user?.email || ""
});

const [InfoData, setInfoData] = useState(initialUserData);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfoData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInfoSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const updatedData = {};
    Object.keys(InfoData).forEach((key) => {
      if (InfoData[key] !== initialUserData[key]) {
        updatedData[key] = InfoData[key];
      }
    });

    try {
      const infoRes = await axios.post(
        `http://127.0.0.1:8000/api/auth/update/${user.id}`,
        updatedData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (infoRes.status >= 200 && infoRes.status < 300) {
        toast.success("اطلاعات با موفقیت ویرایش شد");
      }

         setInitialUserData(prev => ({ ...prev, ...updatedData }));

    } catch (err) {
      if (err.response?.data) {
        err.response.status >= 400 &&
          err.response.status < 500 &&
          setErrors({ formErrors: err.response.data });
        toast.error(err.response.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <main className="relative order-delivered default">
        <div className="container">
          <div className="row">
            <div className="relative col-xl-9 col-lg-8 col-md-12 order-2">
              <header className="card-header">
                <h3 className="card-title">
                  <span>ویرایش اطلاعات حساب کاربری</span>
                </h3>
              </header>
              <div
                className="relative flex md:max-2xl:flex-row max-md:flex-col 
                                                 justify-center items-start gap-4 w-[98%] h-auto"
              >
                <form
                  onSubmit={handleInfoSubmit}
                  className="flex flex-col justify-center items-center h-auto basis-full 
                                        rounded-lg shadow shadow-gray-600 max-md:w-full
                                        *:flex *:flex-col *:w-[80%] *:m-2"
                >
                  <div className=" p-6 text-lg text-center mb-4 border-b-3 border-dotted border-b-[#5dbbc0] rounded-t-lg w-full ">
                    اطلاعات حساب کاربری
                  </div>
                  {Object.keys(errors).length > 0 && (
                    <ul className="flex flex-col items-center p-2 text-white w-full text-md space-y-2 bg-red-400 rounded-md">
                      {errors?.formErrors?.errors?.first_name && (
                        <li>{errors?.formErrors?.errors?.first_name[0]}</li>
                      )}
                      {errors?.formErrors?.errors?.last_name && (
                        <li>{errors?.formErrors?.errors?.last_name[0]}</li>
                      )}
                      {errors?.formErrors?.errors?.phone && (
                        <li>{errors?.formErrors?.errors?.phone[0]}</li>
                      )}
                      {errors?.formErrors?.errors?.email && (
                        <li>{errors?.formErrors?.errors?.email[0]}</li>
                      )}
                    </ul>
                  )}

                  <div className="">
                    <span>* نام </span>
                    <input
                      // minLength={3}
                      maxLength={255}
                      onChange={handleInfoChange}
                      value={InfoData.first_name}
                      className={
                        errors.errors?.first_name
                          ? "border-red-600 border-2 animate-pulse bg-red-300 rounded-full p-2"
                          : "input_second input_all "
                      }
                      name="first_name"
                      type="text"
                      placeholder={user ? user.first_name : "نام"}
                    />
                  </div>
                  <div className="">
                    <span>* نام خانوادگی </span>
                    <input
                      minLength={3}
                      maxLength={255}
                      onChange={handleInfoChange}
                      value={InfoData.last_name}
                      className={
                        errors.errors?.last_name
                          ? "border-red-600 border-2 animate-pulse bg-red-300 rounded-full p-2"
                          : "input_second input_all "
                      }
                      name="last_name"
                      type="text"
                      placeholder={user ? user.last_name : "نام خانوادگی "}
                    />
                  </div>
                  <div dir="rtl">
                    <span>* شماره تلفن </span>
                    <input
                      minLength={6}
                      maxLength={255}
                      onChange={handleInfoChange}
                      value={InfoData.phone}
                      dir="ltr"
                      className={
                        errors.errors?.phone
                          ? "border-red-600 border-2 animate-pulse bg-red-300 rounded-full p-2"
                          : "input_second input_all "
                      }
                      name="phone"
                      type="tel"
                      placeholder={user ? user.phone : 'شماره تلفن"'}
                    />
                  </div>
                  <div className="">
                    <span>* ایمیل </span>
                    <input
                      minLength={6}
                      maxLength={255}
                      onChange={handleInfoChange}
                      value={InfoData.email}
                      className={
                        errors.errors?.email
                          ? "border-red-600 border-2 animate-pulse bg-red-300 rounded-full p-2"
                          : "input_second input_all "
                      }
                      name="email"
                      type="email"
                      placeholder={user ? user.email : "ایمیل"}
                    />
                  </div>
                  <div className="col-12 mt-4 max-md:mt-0">
                    <div className="flex flex-col justify-center items-center">
                      <span className="w-[85%] max-md:hidden mb-4">
                        برای داشتن خریدی سریع تر لطفا اطلاعات خود را در این بخش
                        تکمیل نمایید
                      </span>
                      <button
                        className="p-2 w-[70%] mb-4 bg-[#46a9ae] hover:shadow-md hover:shadow-gray-400
                                                     duration-200 rounded text-white cursor-pointer"
                        type="submit"
                      >
                        {isLoading ? (
                          <AiOutlineLoading
                            size={24}
                            className="animate-spin"
                          />
                        ) : (
                          "ارسال"
                        )}
                      </button>
                    </div>
                  </div>
                </form>

                <form className="flex flex-col relative justify-center items-center h-auto basis-full rounded-lg shadow shadow-gray-600">
                  <div className="flex justify-center items-center text-center h-21 text-lg rounded-t-lg w-full">
                    ویرایش تصویر پروفایل
                  </div>
                  <div
                    className=" relative flex flex-col justify-center border-dotted border-[#54b4b9]
                                             border-3 rounded-md items-center mb-4 w-full cover"
                  >
                      <TbImageInPicture
                        size={60}
                        className="absolute max-md:w-[4rem] max-md:h-[4rem] z-10"
                      />
                      <span className="absolute mt-28 z-10">
                        لطفا تصویر خود را انتخاب کنید
                      </span>
                      <input
                        accept=".jpg, .png, .jpeg, .webp, .svg"
                        required
                        className="text-hide w-full file:text-hide cursor-pointer z-20  
                                  h-91 max-md:h-40 text-center flex justify-center items-center"
                        id="avatarFile"
                        name="first-name"
                        type="file"
                      />
                  </div>
                  <div className="col-12 w-full">
                    <div className="flex flex-col w-full justify-center items-center">
                      <span className="w-[90%]">
                        حداکثر حجم تصویر 5 مگابایت است و تصویر باید یکی از فرمت
                        های jpg, png, jpeg, webp, svg باشد
                      </span>
                      <button
                        className="bg-[#46a9ae] p-2 w-full my-4 hover:shadow-md hover:shadow-gray-400
                                                     duration-200 rounded text-white cursor-pointer"
                        type="submit"
                      >
                        آپلود تصویر
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <OrderSideBar />
          </div>
        </div>
      </main>
    </div>
  );
}

export default EditProfile;
