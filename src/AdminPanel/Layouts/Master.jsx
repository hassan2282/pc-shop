import '../assets/fonts/vazir.ttf'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Master() {
  return (
    <div className="w-screen h-screen overflow-x-scroll" dir='rtl'>
      {/* <img src='../../src/AdminPanel/assets/img/wallpapers/win12.jpeg' className='h-screen w-full fixed object-cover' /> */}
        <Navbar />
          <Outlet />
        <Sidebar />
    </div>
  )
}

export default Master