import React from 'react'

function StatusFilter({ statusChangeFilter }) {
  return (
    <select onChange={(e) => statusChangeFilter(e)} 
    className='border-white/90 border-1 bg-white/80
     cursor-pointer rounded-xl p-2 focus:outline-0 focus:ring-2 focus:ring-blue-600'>
      <option value={''}>وضعیت</option>
      <option value={1}>فعال</option>
      <option value={0}>غیر فعال</option>
    </select>
  )
}

export default StatusFilter