// src/Tiptap.tsx
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import { FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, FaLink, FaUndo, FaRedo, FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: '<p>متن خود را بنویسید...</p>',
  })

  if (!editor) return null

  return (
    <div className="w-full bg-white rounded-xl p-4 shadow">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 mb-3 border-b pb-2">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'text-blue-600' : ''}><FaBold /></button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'text-blue-600' : ''}><FaItalic /></button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={editor.isActive('underline') ? 'text-blue-600' : ''}><FaUnderline /></button>

        <button onClick={() => editor.chain().focus().setTextAlign('left').run()}><FaAlignLeft /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()}><FaAlignCenter /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()}><FaAlignRight /></button>

        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'text-blue-600' : ''}><FaListUl /></button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'text-blue-600' : ''}><FaListOl /></button>

        <button
          onClick={() => {
            const url = window.prompt('آدرس لینک را وارد کنید:')
            if (url) editor.chain().focus().setLink({ href: url }).run()
          }}
        ><FaLink /></button>

        <button onClick={() => editor.chain().focus().undo().run()}><FaUndo /></button>
        <button onClick={() => editor.chain().focus().redo().run()}><FaRedo /></button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} className="min-h-[200px] border p-3 rounded-md focus:outline-none" />
    </div>
  )
}

export default Tiptap
