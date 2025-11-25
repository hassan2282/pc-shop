import '../assets/fonts/vazir.ttf'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Master() {
  return (
    <div className="w-screen h-screen overflow-y-scroll scrollbar-hidden bg-gradient-to-r from-green-300/40 via-blue-500/40 to-purple-600/40" dir='rtl'>
      <img src='../../../src/AdminPanel/assets/img/wallpapers/win12.jpeg' className='z-0 w-screen min-h-screen fixed object-cover' />
        <Navbar />
          <Outlet />
        <Sidebar />
    </div>
  )
}

export default Master