import React from 'react'
import { TbSearch } from 'react-icons/tb'

function SearchFilter({searchRef, submitHandler}) {
    return (
        <form onSubmit={(e) => submitHandler(e)} className='relative flex justify-center items-center'>
            <button type='submit' className='bg-blue-600 text-white text-sm rounded-r-xl
             h-12 p-3 cursor-pointer hover:bg-blue-700'><TbSearch size={20} className=' text-white/90 z-20' /></button>
            <input
                ref={searchRef}
                type='search'
                name='search'
                className='w-[12rem] inset-shadow-sm shadow-xs h-12 rounded-l-xl
               p-3 bg-white/90 backdrop-blur-sm border border-gray-200 
               focus:outline-none
               transition-all duration-200'
                placeholder='جستجو...'
            />
        </form>
    )
}

export default SearchFilter