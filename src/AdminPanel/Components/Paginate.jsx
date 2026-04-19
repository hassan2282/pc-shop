import React, { useState } from 'react';
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb';
function Paginate({ setPage, count }) {
    const [currentPage, setCurrentPage] = useState(1);
    if (count <= 0) return null;
    return (
        <div dir='ltr' className='flex flex-row w-full justify-center items-center'>
            <ul className='rounded-2xl flex flex-row justify-center items-center border border-zinc-300 bg-white/30 p-2 space-x-2
            *:w-[2rem] *:h-[2rem] *:flex *:justify-center *:items-center *:shadow-xs *:text-zinc-700
            *:shadow-stone-600 *:rounded-full cursor-pointer '>
            {/* <TbArrowLeft onClick={count - 1} color='white' className='bg-black/50' /> */}
            {Array.from({ length: count }, (_, i) => i + 1).map((page) => (
                <li
                    key={page}
                    onClick={() =>{
                        setPage(page),
                        setCurrentPage(page)
                    }}
                    
                    className={`text-center ${currentPage === page ?
                        'border border-blue-600 scale-90 bg-blue-300' :
                        'bg-white/80 hover:scale-105 hover:-translate-y-1 duration-200 active:scale-95 active:translate-y-[0.05rem] hover:shadow-lg'}`}
                >
                    {page}
                </li>
            ))}
            {/* <TbArrowRight onClick={count + 1} color='white' className='bg-black/50' />     */}
        </ul>
        </div >
    );
}
export default Paginate;