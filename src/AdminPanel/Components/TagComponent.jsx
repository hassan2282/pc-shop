import React, { useEffect, useRef, useState } from 'react'
import apiClient from '../../apiClient';
import { toast } from 'react-toastify';
import {motion} from 'motion/react'

function TagComponent({ tags, onChange }) {

    const tagHolderRef = useRef(null);
    const tagInputRef = useRef(null);
    const [fetchTags, setFetchTags] = useState([]);
    const [filteredTags, setFilteredTags] = useState();

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const res = await apiClient.get('/admin/tags');
                if (res.status >= 200 && res.status < 300) {
                    setFetchTags(res.data);
                }
            } catch (err) {
                toast.error('خطا در فرایند واکشی داده ');
            }

        }

        fetchTags();
    }, []);

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


    const changeHandler = () => {
        const search = tagInputRef.current.value.toLowerCase().trim();
        setFilteredTags(
            search === '' ? [] : fetchTags.filter((item) =>
                item.name.toLowerCase().includes(search) && !tags.includes(item.name)
            )
        );
    }

    const TagSelector = (item) => {
        const newTag = item.name;
        onChange([...tags, newTag]);
        setFilteredTags((prev) => prev.filter((target) => target.name !== item.name))
        tagInputRef.current.value = "";
        setFilteredTags()
    }

    return (
        <div className='w-full rounded-xl shadow-sm shadow-zinc-500'>
            <div className='flex min-sm:flex-row flex-col justify-start items-center max-sm:space-y-4 space-x-2 p-4
             border-b border-zinc-300 bg-white/50 rounded-t-xl'>
                <button onClick={TagHandler} className='flex text-center justify-center items-center min-sm:w-[15%]
                 w-full h-[3rem] p-2 rounded-xl bg-blue-600 shadow-sm shadow-zinc-600 
                hover:shadow-md cursor-pointer duration-200 hover:scale-97 active:scale-90 text-white '>افزودن</button>
                <div className='space-y-1 relative'>
                    <input type='search' onChange={changeHandler} ref={tagInputRef} placeholder='عنوان تگ ...'
                        className='flex w-full min-sm:w-[25rem] focus:ring-2
                    focus:ring-zinc-200 outline-none px-2 ring-blue-500 h-[3.2rem] rounded-xl bg-white/90
                    text-zinc-700 shadow-xs hover:shadow-md duration-300 shadow-zinc-400' />

                    {
                        filteredTags &&
                        <div className='bg-white rounded-xl w-full absolute z-20 *:p-2 max-h-42 overflow-y-scroll'>
                            {
                                filteredTags &&
                                filteredTags.map((item, index) => {
                                    return (
                                        <option onClick={() => TagSelector(item)} className='rounded-xl text-zinc-600 hover:bg-blue-500 cursor-pointer w-full' value={item.id} key={index}>{item.name}</option>
                                    )
                                })
                            }

                        </div>
                    }

                </div>

            </div>
            <div ref={tagHolderRef} className='flex flex-wrap w-full rounded-b-xl min-h-[10rem] p-5 *:cursor-pointer bg-white/70
                        *:p-2 *:px-3 *:rounded-xl *:h-[2.6rem] gap-3 *:bg-blue-600 *:duration-200 *:text-white '>
                {
                    tags &&
                    tags.map((item, index) => {
                        return (
                            <motion.option
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                key={index} onClick={() => removeTag(index)} className='relative peer after:content-["حذف"] 
                                after:flex after:justify-center after:items-center after:absolute
                                after:inset-0 after:z-10 after:bg-red-600 after:rounded-xl active:scale-95 after:duration-200
                                after:scale-x-0 hover:after:scale-x-100'>
                                {item}
                            </motion.option>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TagComponent
