import React from 'react'
import { FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight, FaImage, FaItalic, FaLink, FaListUl, FaStrikethrough, FaTable, FaUnderline, FaUnlink } from 'react-icons/fa'
import { MdFormatColorText, MdFormatSize, MdOutlineFormatColorFill } from 'react-icons/md'

function Text_Editor() {
  return (
    <div className='flex flex-col w-full bg-white/40 rounded-xl justify-center items-center mt-20'>
        {/* Header Section */}
        <div className='flex flex-row justify-start items-center w-full p-2 border-b border-b-zinc-400/60'>
            <ul className='flex flex-row space-x-2 justify-center items-center pr-5 
            *:p-1 *:rounded-xl *:backdrop-blur-sm *:w-10 *:h-10 *:flex *:justify-center *:items-center 
            *:shadow-sm *:shadow-zinc-500/60 *:cursor-pointer *:hover:scale-120 *:duration-200 *:text-zinc-600
            *:hover:shadow-lg *:hover:bg-blue-600/70 *:hover:text-white/80'>
                <li className='text-xl'>B</li>
                <li><FaUnderline /></li>
                <li><FaItalic /></li>
                <li><FaStrikethrough  /></li>
                <li><FaAlignLeft  /></li>
                <li><FaAlignCenter  /></li>
                <li><FaAlignRight  /></li>
                <li><FaAlignJustify  /></li>
                <li><MdFormatColorText size={21} /></li>
                <li><MdOutlineFormatColorFill size={21} /></li>
                <li><FaLink  /></li>
                <li><FaUnlink  /></li>
                <li><MdFormatSize size={21} /></li>
                <li><FaImage size={20} /></li>
                <li><FaListUl /></li>
                <li><FaTable /></li>
            </ul>
        </div>



        {/* Content Section */}
        <textarea className='w-full min-h-[30rem] bg-white/60 p-10 outline-none rounded-b-xl' name="" id="">
        
        </textarea>
    </div>
  )
}

export default Text_Editor