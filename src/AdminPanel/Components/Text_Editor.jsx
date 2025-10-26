
import { useRef } from 'react'
import {
  FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight, FaImage, FaItalic,
  FaLink, FaListOl, FaListUl, FaStrikethrough, FaTable, FaUnderline, FaUnlink
} from 'react-icons/fa'
import { MdFormatColorText, MdFormatSize, MdOutlineFormatColorFill } from 'react-icons/md'


function Text_Editor() {

  const editorRef = useRef(null)
  const fileInputRef = useRef(null)

  const handleCommand = (command, value = null) => {
    document.execCommand(command, false, value)
    editorRef.current.focus()
  }

  const handleAddLink = () => {
    const url = prompt('آدرس لینک را وارد کنید (مثلاً https://example.com):')
    if (url) document.execCommand('createLink', false, url)
    editorRef.current.focus()
  }

  // حذف لینک
  const handleUnlink = () => {
    document.execCommand('unlink', false, null)
    editorRef.current.focus()
  }



  // باز کردن انتخابگر فایل
  const handleAddImage = () => {
    restoreSelection()
    fileInputRef.current.click()
  }
  // زمانی که فایل انتخاب شد
  const handleImageSelect = (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const imgData = e.target.result

      // درج تصویر در مکان نشانگر
      document.execCommand('insertImage', false, imgData)
      editorRef.current.focus()
    }
    reader.readAsDataURL(file)
  }


  return (
    <div className='flex flex-col w-full rounded-xl justify-center items-center mt-10'>
      {/* Header Section */}
      <div className='flex flex-row justify-center items-center w-full p-3 bg-white/60 rounded-t-xl border-b border-b-zinc-400/60'>
        <ul className='flex flex-wrap gap-2 justify-center items-center 
            *:p-1 *:rounded-xl *:backdrop-blur-sm *:min-w-10 *:h-10 *:flex *:justify-center *:items-center 
            *:shadow-sm *:shadow-zinc-500/60 *:cursor-pointer *:hover:scale-120 *:duration-200 *:text-zinc-600
            *:hover:shadow-lg *:hover:bg-blue-600/70 *:hover:text-white/80'>
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
            <MdFormatSize size={22} className='z-0'/>
            <select
              onChange={(e) => handleCommand('fontSize', e.target.value)}
              className='w-full border z-20 border-zinc-300 outline-none text-zinc-700 rounded-lg text-sm p-1 cursor-pointer'
              defaultValue=""
            >
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
        suppressContentEditableWarning={true}
        className='w-full min-h-[30rem] bg-white/40 p-10 outline-none rounded-b-xl' name="" id="">
        اینجا بنویس ...
      </div>
    </div>
  )
}

export default Text_Editor