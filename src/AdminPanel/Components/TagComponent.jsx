import React, { useRef, useState } from 'react'

function TagComponent({tags, onChange}) {

    const tagHolderRef = useRef(null);
    const tagInputRef = useRef(null);


    const TagHandler = (e) => {
        e.preventDefault();

        const newTag = tagInputRef.current.value;

        if (newTag.trim() !== '') {
            onChange([...tags, newTag]);
            tagInputRef.current.value = "";
        }
    }

    const removeTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    onChange(newTags);
  };

    return (
        <div className='w-full rounded-xl shadow-sm shadow-zinc-500'>
            <div className='flex min-sm:flex-row flex-col justify-start items-center max-sm:space-y-4 space-x-2 p-4 border-b border-zinc-300 bg-white/50 rounded-t-xl'>
                <button onClick={TagHandler} className='flex text-center justify-center items-center min-sm:w-[15%] w-full h-[3rem] p-2 rounded-xl bg-blue-500 shadow-sm shadow-zinc-600 
                hover:shadow-md cursor-pointer duration-200 hover:scale-95 active:scale-75 text-white/90 '>افزودن</button>
                <input ref={tagInputRef} type='text' placeholder='عنوان تگ ...' className='flex w-full min-sm:w-[20rem] min-md:hover:w-[25rem] focus:ring-2
                 focus:ring-zinc-200 outline-none px-2 ring-blue-500 h-[3.2rem] rounded-xl bg-white/60
                  text-zinc-700 shadow-xs hover:shadow-md duration-300 shadow-zinc-400' />
            </div>
            <div ref={tagHolderRef} className='flex flex-wrap w-full rounded-b-xl min-h-[10rem] p-5 *:cursor-pointer bg-white/70
                        *:p-2 *:px-3 *:rounded-xl *:h-[2.6rem] gap-3 *:bg-blue-500 *:hover:scale-110 *:duration-200 *:shadow-sm *:shadow-zinc-500 *:text-white/90 '>
                {
                    tags &&
                    tags.map((item, index) => {
                        return (
                            <span key={index} onClick={() => removeTag(index)} className='relative peer after:content-["X"]  after:flex after:justify-center after:items-center after:absolute
                             after:inset-0 after:z-10 after:bg-rose-500 after:rounded-xl active:scale-95 after:duration-200 after:scale-x-0 hover:after:scale-x-100'>
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