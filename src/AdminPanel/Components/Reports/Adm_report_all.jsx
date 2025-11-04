import { TbArrowDown, TbArrowUp } from 'react-icons/tb'

function Adm_report_all() {
    return (
        <div className='flex flex-col justify-center items-center p-2 w-full'>

            <div className='grid min-lg:grid-cols-4 max-lg:flex max-lg:flex-wrap max-lg:justify-center max-lg:w-full p-5 gap-4 *:cursor-pointer rounded-xl bg-white/20 backdrop-blur-md'>

                <div
                    className="w-64 bg-white/40 group hover:-translate-y-3 duration-500 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] rounded-xl rounded-tl-none 
                    p-9 space-y-3 relative overflow-hidden">
                    <div className="w-24 h-24 bg-cyan-500 z-0 group-hover:scale-1000 duration-1000 rounded-full absolute -left-5 -top-7">
                        <p className="absolute bottom-6 left-7 text-white text-2xl group-hover:invisible"></p>
                    </div>
                    <div className="flex fill-cyan-500 group-hover:fill-white w-12 z-30">
                        <svg
                            viewBox="0 0 24 24"
                            className='z-20'
                            data-name="Layer 1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"
                            ></path>
                        </svg>
                    </div>
                    <h1 className="relative font-bold text-xl z-10 group-hover:text-zinc-700">سفارشات</h1>
                    <div className="flex flex-col gap-2 z-20 text-sm text-zinc-500 leading-6">
                        <p className="text-sm text-zinc-500 z-20 leading-6 group-hover:text-white">
                            گزارش درصد رشد محاسبه شده مقایسه تعداد هفته جاری نسبت به میانگین کل هست
                        </p>
                        <span className='text-2xl text-zinc-700 z-20'>98.5 هزار</span>
                        <div className='flex flex-row justify-start z-20 items-center gap-1'>
                            <span className='text-green-700 z-20'>24.5%</span>
                            <TbArrowUp color='green' />
                            <span className='group-hover:text-white'>هفته جاری</span>
                        </div>
                    </div>
                </div>
                <div
                    className="w-64 bg-white/40 group hover:-translate-y-3 duration-500 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] rounded-xl rounded-tl-none p-9 space-y-3 relative overflow-hidden">
                    <div className="w-24 h-24 bg-purple-500 z-0 group-hover:scale-1000 duration-1000 rounded-full absolute -left-5 -top-7">
                        <p className="absolute bottom-6 left-7 text-white text-2xl group-hover:invisible"></p>
                    </div>
                    <div className="flex fill-purple-500 group-hover:fill-white w-12 z-30">
                        <svg
                            viewBox="0 0 24 24"
                            className='z-20'
                            data-name="Layer 1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"
                            ></path>
                        </svg>
                    </div>
                    <h1 className="relative font-bold text-xl z-10 group-hover:text-zinc-700">محصولات</h1>
                    <div className="flex flex-col gap-2 z-20 text-sm text-zinc-500 leading-6">
                        <p className="text-sm text-zinc-500 z-20 leading-6 group-hover:text-white">
                            گزارش درصد رشد محاسبه شده مقایسه تعداد هفته جاری نسبت به میانگین کل هست
                        </p>
                        <span className='text-2xl text-zinc-700 z-20'>12.7 هزار</span>
                        <div className='flex flex-row justify-start z-20 items-center gap-1'>
                            <span className='text-green-700 z-20'>10%</span>
                            <TbArrowUp color='green' />
                            <span className='group-hover:text-white'>هفته جاری</span>
                        </div>
                    </div>
                </div>
                <div
                    className="w-64 bg-white/40 group hover:-translate-y-3 duration-500 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] rounded-xl rounded-tl-none p-9 space-y-3 relative overflow-hidden">
                    <div className="w-24 h-24 bg-pink-500 z-0 group-hover:scale-1000 duration-1000 rounded-full absolute -left-5 -top-7">
                        <p className="absolute bottom-6 left-7 text-white text-2xl group-hover:invisible"></p>
                    </div>
                    <div className="flex fill-pink-500 group-hover:fill-white w-12 z-30">
                        <svg
                            viewBox="0 0 24 24"
                            className='z-20'
                            data-name="Layer 1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"
                            ></path>
                        </svg>
                    </div>
                    <h1 className="relative font-bold text-xl z-10 group-hover:text-zinc-700">کاربران</h1>
                    <div className="flex flex-col gap-2 z-20 text-sm text-zinc-500 leading-6">
                        <p className="text-sm text-zinc-500 z-20 leading-6 group-hover:text-white">
                            گزارش درصد رشد محاسبه شده مقایسه تعداد هفته جاری نسبت به میانگین کل هست
                        </p>
                        <span className='text-2xl text-zinc-700 z-20'>5 هزار</span>
                        <div className='flex flex-row justify-start z-20 items-center gap-1'>
                            <span className='text-black z-20'>2%</span>
                            <TbArrowDown color='black' />
                            <span className='group-hover:text-white'>هفته جاری</span>
                        </div>
                    </div>
                </div>
                <div
                    className="w-64 bg-white/40 group hover:-translate-y-3 duration-500 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] rounded-xl rounded-tl-none p-9 space-y-3 relative overflow-hidden">
                    <div className="w-24 h-24 bg-lime-500 z-0 group-hover:scale-1000 duration-1000 rounded-full absolute -left-5 -top-7">
                        <p className="absolute bottom-6 left-7 text-white text-2xl group-hover:invisible"></p>
                    </div>
                    <div className="flex fill-lime-500 group-hover:fill-white w-12 z-30">
                        <svg
                            viewBox="0 0 24 24"
                            className='z-20'
                            data-name="Layer 1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"
                            ></path>
                        </svg>
                    </div>
                    <h1 className="relative font-bold text-xl z-10 group-hover:text-zinc-700">فروش</h1>
                    <div className="flex flex-col gap-2 z-20 text-sm text-zinc-500 leading-6">
                        <p className="text-sm text-zinc-500 z-20 leading-6 group-hover:text-white">
                            گزارش درصد رشد محاسبه شده مقایسه تعداد هفته جاری نسبت به میانگین کل هست
                        </p>
                        <span className='text-2xl text-zinc-700 z-20'>17 هزار</span>
                        <div className='flex flex-row justify-start z-20 items-center gap-1'>
                            <span className='text-green-700 z-20'>60.2%</span>
                            <TbArrowUp color='green' />
                            <span className='group-hover:text-white'>هفته جاری</span>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Adm_report_all