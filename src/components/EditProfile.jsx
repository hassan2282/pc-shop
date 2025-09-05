import OrderSideBar from '../structure/OrderSideBar'
import { TbImageInPicture } from 'react-icons/tb'

function EditProfile() {
  return (
    <div>

         <main className="relative order-delivered default">
                <div className="container">
                    <div className="row">
                        <div className="relative col-xl-9 col-lg-8 col-md-12 order-2">
                            <header className="card-header">
                                    <h3 className="card-title"><span>ویرایش اطلاعات حساب کاربری</span></h3>
                                </header>
                            <div className="flex w-full justify-center items-center">
                                <form className='relative flex md:max-2xl:flex-row max-md:flex-col 
                                                 justify-center items-start gap-4 w-[98%] h-auto'>
                                    <div className='flex flex-col justify-center items-center h-auto basis-full 
                                        rounded-lg shadow shadow-gray-600 max-md:w-full
                                        *:flex *:flex-col *:w-[80%] *:m-2'>
                                        <div className=" p-6 text-lg text-center mb-4 border-b-3 border-dotted border-b-[#5dbbc0] rounded-t-lg w-full ">
                                            ایجاد حساب کاربری
                                        </div>
                                            <div className="">
                                                <span className=''>* نام  </span>
                                                    <input 
                                                    minLength={6}
                                                    maxLength={255}
                                                    // onChange={handleChange}
                                                    // value={FormData.username}
                                                    required
                                                     className="input_second input_all" name="first-name" type="text" placeholder=" نام "/>
                                            </div>
                                            <div className="">
                                                <span className=''>* نام خانوادگی  </span>
                                                    <input 
                                                    minLength={6}
                                                    maxLength={255}
                                                    // onChange={handleChange}
                                                    // value={FormData.username}
                                                    required
                                                     className="input_second input_all" name="last-name" type="text" placeholder=" نام خانوادگی "/>
                                            </div>
                                            <div className="">
                                                <span className=''>* شماره تلفن  </span>
                                                    <input 
                                                    minLength={6}
                                                    maxLength={255}
                                                    // onChange={handleChange}
                                                    // value={FormData.username}
                                                    required
                                                     className="input_second input_all" name="phone" type="number" placeholder=" شماره تلفن"/>
                                            </div>
                                            <div className="">
                                                <span className=''>* ایمیل  </span>
                                                    <input 
                                                    minLength={6}
                                                    maxLength={255}
                                                    // onChange={handleChange}
                                                    // value={FormData.username}
                                                    required
                                                     className="input_second input_all" name="phone" type="email" placeholder=" ایمیل"/>
                                            </div>
                                            <div className="col-12 mt-4 max-md:mt-0">
                                                <div className="flex flex-col justify-center items-center">
                                                    <span className='w-[85%] max-md:hidden mb-4'>
                                                        برای داشتن خریدی سریع تر لطفا اطلاعات خود را در این بخش تکمیل نمایید
                                                    </span>
                                                    <button className='p-2 w-[70%] mb-4 bg-[#46a9ae] hover:shadow-md hover:shadow-gray-400
                                                     duration-200 rounded text-white cursor-pointer' type='submit'>ارسال</button>
                                                </div>
                                        </div>
                                    </div>






                                    <div className='flex flex-col relative justify-center items-center h-auto basis-full rounded-lg shadow shadow-gray-600'>
                                        <div className="flex justify-center items-center text-center h-21 text-lg rounded-t-lg w-full">
                                             ویرایش تصویر پروفایل 
                                        </div>
                                            <div className=" relative flex flex-col justify-center border-dotted border-[#54b4b9]
                                             border-3 rounded-md items-center mb-4 w-full z-20 cover">
                                                <TbImageInPicture size={24} className='absolute max-md:w-[4rem] max-md:h-[4rem] w-[6rem] h-[6rem] z-30'/>
                                                <span className='absolute mt-28 z-30'>لطفا تصویر خود را انتخاب کنید</span>
                                                    <input 
                                                    accept='.jpg, .png, .jpeg, .webp, .svg'
                                                    required
                                                    className="text-hide w-full file:text-hide cursor-pointer z-10
                                                    h-91 max-md:h-40 bg-white text-center flex justify-center items-center"
                                                    id='avatarFile' name="first-name" type="file"/>
                                            </div>
                                            <div className="col-12 w-full">
                                                <div className="flex flex-col w-full justify-center items-center">
                                                    <span className='w-[90%]'>
                                                          حداکثر حجم تصویر 5 مگابایت است و تصویر باید یکی از فرمت های jpg, png, jpeg, webp, svg باشد
                                                    </span>
                                                    <button className='bg-[#46a9ae] p-2 w-full my-4 hover:shadow-md hover:shadow-gray-400
                                                     duration-200 rounded text-white cursor-pointer' type='submit'>آپلود تصویر</button>
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