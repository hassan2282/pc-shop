import { Link } from 'react-router-dom'
import { motion } from "motion/react"

function NotFound() {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center
                        overflow-clip z-100 bg-gradient-to-b from-[#6EDADC] to-[#4AABB0] space-y-10'>
            <h1 className='flex justify-center items-center text-[#65CED1] rounded-3xl max-sm:text-[5rem] text-[14rem] w-full bg-[#111827]'>
                <motion.div
                    className='animate-pulse'
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1
                    }}
                    transition={{
                        duration: 2,
                    }}
                >
                    404
                </motion.div>
            </h1>
            <Link to="/" className='absolute bottom-10 rounded-xl bg-[#111827] text-[#65CED1] shadow-md border-t-2 border-t-white/40 p-3
             hover:scale-102 hover:-translate-y-1 duration-300 hover:shadow-lg hover:shadow-emerald-800 active:scale-98'>بازگشت به فروشگاه</Link>
        </div>
    )
}

export default NotFound