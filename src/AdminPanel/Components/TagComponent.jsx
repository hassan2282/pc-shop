import React, { useRef, useState } from 'react'
import { TbX } from 'react-icons/tb';

function TagComponent() {
    const [tags, setTags] = useState([]);
    const tagHolderRef = useRef(null);
    const tagInputRef = useRef(null);


    const TagHandler = (e) => {
        e.preventDefault();

        const newTag = tagInputRef.current.value;

        if (newTag.trim() !== '') {
            setTags((prev) => [...prev, newTag]);
            tagInputRef.current.value = "";
        }
    }

    return (
        <div className='w-full rounded-xl bg-white/50'>
            <div className='flex flex-row justify-start items-center space-x-2 p-4 border-b border-zinc-300 bg-white/40 rounded-t-xl'>
                <button onClick={TagHandler} className='w-[15%] h-[3rem] p-2 rounded-xl bg-blue-500 shadow-sm 
                hover:shadow-md cursor-pointer duration-200 text-white/90'>افزودن</button>
                <input ref={tagInputRef} type='text' placeholder='عنوان تگ ...' className='w-[20rem] hover:w-[25rem] focus:ring-2
                 focus:ring-blue-500 outline-none px-2 ring-blue-500 h-[3rem] rounded-xl bg-white/60
                  text-zinc-700 shadow-sm hover:shadow-md duration-300' />
            </div>
            <div ref={tagHolderRef} className='flex flex-wrap w-full rounded-b-xl min-h-[10rem] p-5 *:cursor-pointer
                        *:p-2 *:px-3 *:rounded-xl *:h-[2.6rem] gap-3 *:bg-blue-500 *:shadow-sm *:shadow-zinc-500 *:text-white/90 '>
                {
                    tags &&
                    tags.map((item, index) => {
                        return (
                            <span key={index}>
                                {item}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TagComponent