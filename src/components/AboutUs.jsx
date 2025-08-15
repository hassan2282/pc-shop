function AboutUs() {
  return (
    <div>
      <main className="single-product default">
        <div className="container">
          <div className="row">
            <main className="cart default">
              <div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20">
                <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
                  {/* <!--  --> */}
                  <div className="lg:w-[90%] w-full h-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
                    {/* <!--  --> */}
                    <div className="lg:w-[60%] p-4 w-full h-full
                    flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
                      <p className="md:text-md text-2xl text-center font-bold my-5 text-[#6edadc]">
                        به فروشگاه دیتی شاپ خوش آمدید
                      </p>
                      <p className="sm:text-lg text-sm mt-2 text-justify sm:px-2">
                        <p className="">
                          دیتی شاپ از سال 1404 در جهت فروش محصولات با بهترین
                          قیمت ها شروع به فعالیت نموده و تا کنون بیش از 500 کالا
                          با قیمت هایی حداقل 40 درصد کمتر از بازار را برای عموم
                          مردم تامین کرده است
                        </p>
                        <div className="">
                          <p className="text-[23.5px]">شماره های تماس : 09170249855 *** 09232961534</p>
                          <div className="flex flex-row space-x-13">
                            <p>
                              آدرس ایمیل ما : <b className="text-[#6edadc]">DTSHOP@INFO.COM</b>
                            </p>
                            <p>کد پستی: 7571774845</p>
                          </div>
                          <p>
                            آدرس : استان کهگیلویه و بویراحمد - دهدشت - کوی
                            آزادگان 1 - پلاک 370
                          </p>
                          <p className="w-full text-2xl">
                            با مدیریت : با مدیریت سید حسن تقوی و سیامک بشکار
                          </p>
                        </div>
                      </p>
                    </div>
                    <div className="relative h-full rounded-xl overflow-clip">
                     
                      <img
                        className="relative right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem]
                                     w-[12rem] h-[12rem] rounded-2xl "
                        src="https://thumbs.dreamstime.com/b/contact-us-background-address-call-center-customer-service-icons-vector-illustration-42988340.jpg"
                        alt="About us"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
