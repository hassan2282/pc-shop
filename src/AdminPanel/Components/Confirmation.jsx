import { motion } from 'motion/react'

function Confirmation({setConfirm}) {
    const clickHandler = (res) => {
        res === 1 ? setConfirm(true) : setConfirm(false);
    }

    return (
        <div
            className='absolute top-0 left-0 flex z-70 justify-center items-center w-screen h-screen backdrop-blur-lg'>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 100, scale: 1 }}
                transition={{ duration: 0.2 }}
                className='grid grid-rows-2 *:flex *:justify-center p-6 *:items rounded-xl shadow-xs shadow-zinc-600
                 bg-white/70 min-lg:w-[35%] min-lg:h-[30%] max-lg:w-[60%] max-lg:h-[40%]'>
                <h2 className='row-span-1 text-xl text-center text-zinc-800'>آیا مطمئن هستید ؟</h2>
                <div className='row-span-1 min-md:grid min-md:grid-cols-2 flex flex-col min-md:gap-5 gap-2 *:h-12 *:shadow-sm
                 *:shadow-zinc-500 *:hover:shadow-lg *:cursor-pointer *:hover:scale-105 *:duration-200 *:w-full p-2 *:p-2 *:rounded-xl '>
                    <button onClick={() => clickHandler(1)} className='bg-blue-600 text-center text-zinc-100'>بله</button>
                    <button onClick={() => clickHandler(0)} className='bg-rose-600/90 text-center text-zinc-100'>خیر</button>
                </div>
            </motion.div>
        </div>
    )
}

export default Confirmation