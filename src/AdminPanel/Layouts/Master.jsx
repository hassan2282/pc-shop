import Sidebar from './Sidebar'
import Navbar from './Navbar'

function Master() {
  return (
    <div className="min-w-screen min-h-screen fixed bg-conic-180 from-indigo-600 via-pink-50 to-indigo-600">
        <Navbar />
          
        <Sidebar />
    </div>
  )
}

export default Master