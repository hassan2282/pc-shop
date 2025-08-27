import React from 'react'
import OrderSideBar from '../structure/OrderSideBar'

function EditProfile() {
  return (
    <div>

         <main className="order-delivered default space-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-12 order-2">
                            <header className="card-header">
                                    <h3 className="card-title"><span>ویرایش اطلاعات حساب کاربری</span></h3>
                                </header>
                            <div className="row">
                                <form className='flex flex-row justify-center items-start gap-4 w-[98%]'>
                                    
                                    <div className='flex flex-col justify-center items-center h-auto basis-full rounded-lg shadow shadow-gray-600'>
                                        <div className="form-account-title p-6 text-white text-center rounded-t-lg w-full bg-[#5dbbc0]">
                                            ایجاد حساب کاربری
                                        </div>
                                            <div className="flex flex-col space-y-2 form-account-row w-[80%]">
                                                <span className=''>* نام  </span>
                                                    <input 
                                                    minLength={6}
                                                    maxLength={255}
                                                    // onChange={handleChange}
                                                    // value={FormData.username}
                                                    required
                                                     className="input_second input_all" name="first-name" type="text" placeholder=" نام "/>
                                            </div>
                                            <div className="flex flex-col space-y-2 form-account-row w-[80%]">
                                                <span className=''>* نام خانوادگی  </span>
                                                    <input 
                                                    minLength={6}
                                                    maxLength={255}
                                                    // onChange={handleChange}
                                                    // value={FormData.username}
                                                    required
                                                     className="input_second input_all" name="last-name" type="text" placeholder=" نام خانوادگی "/>
                                            </div>
                                            <div className="flex flex-col space-y-2 form-account-row w-[80%]">
                                                <span className=''>* شماره تلفن  </span>
                                                    <input 
                                                    minLength={6}
                                                    maxLength={255}
                                                    // onChange={handleChange}
                                                    // value={FormData.username}
                                                    required
                                                     className="input_second input_all" name="phone" type="number" placeholder=" شماره تلفن"/>
                                            </div>
                                            <div className="flex flex-col space-y-2 form-account-row w-[80%]">
                                                <span className=''>* ایمیل  </span>
                                                    <input 
                                                    minLength={6}
                                                    maxLength={255}
                                                    // onChange={handleChange}
                                                    // value={FormData.username}
                                                    required
                                                     className="input_second input_all" name="phone" type="number" placeholder=" ایمیل"/>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-account-agree flex flex-col justify-center items-center">
                                                    <label className="checkbox-form checkbox-primary">
                                                        <input type="checkbox" id="agree"/>
                                                        <span className="checkbox-check"></span>
                                                    </label>
                                                    <label for="agree">
                                                        تمامی <a href="#">شرایط و قوانین</a> استفاده از سرویس‌های سایت مَسای را به دقت مطالعه کرده و با آنها موافقت کامل دارم 
                                                    </label>
                                                    <button className='w-[50%] bg-[#46a9ae] hover:shadow-md hover:shadow-gray-400 duration-200 rounded text-white cursor-pointer' type='submit'>ارسال</button>
                                                </div>
                                        </div>
                                    </div>
                                    
                                    <div className='flex flex-col justify-center items-center h-auto basis-full rounded-lg shadow shadow-gray-600'>
                                        <div className="text-center form-account-title p-6 text-white rounded-t-lg w-full bg-[#5dbbc0]">
                                             ویرایش تصویر پروفایل 
                                        </div>
                                            <div className="flex flex-col form-account-row w-full">
                                                    <input 
                                                    accept='.jpg, .png, .jpeg, .webp, .svg'
                                                    required
                                                    className="w-full file:text-white bg-red-500 md:max-2xl:min-h-92 text-center flex justify-center items-center" id='avatarFile' name="first-name" type="file"/>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-account-agree flex flex-col">
                                                    <label className="checkbox-form checkbox-primary">
                                                        <input type="checkbox" id="agree"/>
                                                        <span className="checkbox-check"></span>
                                                    </label>
                                                    <label for="agree">
                                                        تمامی <a href="#">شرایط و قوانین</a> استفاده از سرویس‌های سایت مَسای را به دقت مطالعه کرده و با آنها موافقت کامل دارم 
                                                    </label>
                                                    <button className='w-[50%] bg-[#46a9ae] shadow rounded text-white' type='submit'>ارسال</button>
                                                </div>
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
  )
}

export default EditProfile