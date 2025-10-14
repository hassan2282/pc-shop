import Sidebar from './Sidebar'
import Navbar from './Navbar'

function Master() {
  return (
    // <div className="min-w-screen min-h-screen fixed bg-conic-180 from-indigo-600 via-pink-50 to-indigo-600">
    <div className="min-w-screen min-h-screen fixed bg-[url('../../src/AdminPanel/assets/img/wallpapers/win11.jpeg')] ">
        <Navbar />

        <Sidebar />
    </div>
  )
}

export default Master