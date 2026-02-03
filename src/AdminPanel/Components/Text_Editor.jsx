
import { useEffect, useRef, useState } from 'react'
import {
  FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight, FaImage, FaItalic,
  FaLink, FaStrikethrough, FaUnderline, FaUnlink
} from 'react-icons/fa'
import { MdFormatColorText, MdFormatSize, MdOutlineFormatColorFill } from 'react-icons/md'
import apiClient from '../../apiClient'

function Text_Editor({ value, onChange, title, onImageUpload }) {

  const editorRef = useRef(null)
  const fileInputRef = useRef(null)


  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || ''
    }
  }, [value])


  const emitChange = () => {
    const html = editorRef.current.innerHTML
    onChange(html)
  }


  const handleCommand = (command, value = null) => {
    document.execCommand(command, false, value)
    editorRef.current.focus()
  }

  const handleAddLink = () => {
    const url = prompt('آدرس لینک را وارد کنید (مثلاً https://example.com):')
    if (url) document.execCommand('createLink', false, url)
    emitChange()
    editorRef.current.focus()
  }

  // حذف لینک
  const handleUnlink = () => {
    document.execCommand('unlink', false, null)
    emitChange()
    editorRef.current.focus()
  }


  // باز کردن انتخابگر فایل
  const handleAddImage = () => {
    // فقط در صورتی پنجره انتخاب فایل باز می‌شود که کاربر بخواهد
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }
  // زمانی که فایل انتخاب شد
  const handleImageSelect = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    try {
      // آپلود تصویر
      const formData = new FormData()
      formData.append('media', file)

      const res = await apiClient.post('/admin/articles/editor', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })


      if (res.status >= 200 && res.status < 300 && res.data && res.data.name) {
        const imageUrl = res.data.url;  // URL تصویر
        const imageId = res.data.id;    // ID 

        setTimeout(() => {
          // درج تصویر با آدرس واقعی سرور
          document.execCommand('insertImage', false, imageUrl)
          const image = editorRef.current.querySelector(`img[src="${imageUrl}"]`);
          if (image) {
            image.setAttribute('data-image-id', imageId);
          }

          // ریست کردن ورودی فایل برای انتخاب مجدد
          fileInputRef.current.value = null;
        }, 100);


        // ارسال آدرس تصویر به کامپوننت والد
        if (onImageUpload) {
          onImageUpload(res.data.name, file.name)
        }
      } else {
        // اگر آپلود با مشکل مواجه شد، از داده محلی استفاده کن
        const reader = new FileReader()
        reader.onload = (e) => {
          const imgData = e.target.result
          document.execCommand('insertImage', false, imgData)
          emitChange()
          editorRef.current.focus()
        }
        reader.readAsDataURL(file)
      }
    } catch (error) {
      // در صورت خطا، از داده محلی استفاده کن
      const reader = new FileReader()
      reader.onload = (e) => {
        const imgData = e.target.result
        document.execCommand('insertImage', false, imgData)
        emitChange()
        editorRef.current.focus()
      }
      reader.readAsDataURL(file)
    }

    emitChange()
    editorRef.current.focus()



  }
  
  const handleDeleteImage = async (imageId) => {
    try {
      // درخواست حذف تصویر از دیتابیس
      const res = await apiClient.delete(`/admin/articles/delete-image/${imageId}`);
    } catch (error) {
      console.error("خطا در حذف تصویر:", error);
    }
  };

  useEffect(() => {
    const observer = new MutationObserver((mutationsList, observer) => {
      mutationsList.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.removedNodes.forEach((node) => {
            if (node.tagName === 'IMG' && node.hasAttribute('data-image-id')) {
              const imageId = node.getAttribute('data-image-id');
              handleDeleteImage(imageId); // حذف تصویر از دیتابیس
            }
          });
        }
      });
    });

    observer.observe(editorRef.current, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className='flex flex-col w-full rounded-xl justify-center items-center shadow-md shadow-zinc-400'>
      {/* Header Section */}
      <div className='flex flex-row justify-center items-center w-full p-3 bg-white/40 rounded-t-xl border-b border-b-zinc-400/60'>
        <ul className='flex flex-wrap gap-2 justify-center items-center 
            *:p-1 *:rounded-xl *:backdrop-blur-sm *:min-w-10 *:h-10 *:flex *:justify-center *:items-center 
            *:shadow-xs *:shadow-zinc-500 *:cursor-pointer *:hover:scale-120 *:duration-200 *:text-zinc-600
            *:hover:shadow-md *:hover:bg-blue-600/70 *:hover:text-white/80'>
          <li className='text-xl'
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleCommand('bold')}
          >B
          </li>
          <li
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleCommand('underline')}
          ><FaUnderline /></li>
          <li
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleCommand('italic')}
          ><FaItalic /></li>
          <li
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleCommand('strikeThrough')}
          ><FaStrikethrough /></li>
          <li
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleCommand('justifyRight')}
          ><FaAlignLeft /></li>
          <li
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleCommand('justifyCenter')}
          ><FaAlignCenter /></li>
          <li
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleCommand('justifyLeft')}
          ><FaAlignRight /></li>
          <li
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleCommand('justifyFull')}
          ><FaAlignJustify /></li>
          <li
            className='grid grid-cols-2 gap-2'>
            <input
              onMouseDown={(e) => e.preventDefault()}
              onChange={(e) => handleCommand('foreColor', e.target.value)}
              type='color' className='rounded-full cursor-pointer' />
            <MdFormatColorText size={21} />
          </li>
          <li className='grid grid-cols-2 gap-2'>
            <input
              onMouseDown={(e) => e.preventDefault()}
              onChange={(e) => handleCommand('hiliteColor', e.target.value)}
              type='color' className='rounded-full cursor-pointer' />
            <MdOutlineFormatColorFill size={21} />
          </li>
          {/* لینک */}
          <li
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleAddLink}>
            <FaLink />
          </li>
          {/* حذف لینک */}
          <li
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleUnlink}>
            <FaUnlink />
          </li>
          {/* افزودن تصویر */}
          <li
            className='w-5 flex justify-center items-center cursor-pointer'
            onMouseDown={(e) => e.preventDefault()} onClick={handleAddImage}>
            {/* input مخفی انتخاب تصویر */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageSelect}
              className="h-full w-full opacity-0 cursor-pointer z-20"
            />
            <FaImage size={23} className='absolute cursor-pointer' />
          </li>
          {/* اندازه متن */}
          <li className='relative flex-row items-center z-0 space-x-1'>
            <MdFormatSize size={22} className='z-0' />
            <select
              onChange={(e) => handleCommand('fontSize', e.target.value)}
              className='w-full border z-20 border-zinc-300 outline-none text-zinc-700 rounded-lg text-sm p-1 cursor-pointer'
              defaultValue="" >
              <option value="" disabled>اندازه</option>
              <option value="1">کوچک</option>
              <option value="3">متوسط</option>
              <option value="5">بزرگ</option>
              <option value="7">خیلی بزرگ</option>
            </select>
          </li>
        </ul>
      </div>

      {/* Content Section */}
      <div
        ref={editorRef}
        contentEditable
        onInput={emitChange}
        suppressContentEditableWarning={true}
        className='w-full min-h-[30rem] bg-white/50 p-10 outline-none rounded-b-xl' name="" id="">
        متن رو اینجا بنویس ...
      </div>
    </div>
  )
}

export default Text_Editor