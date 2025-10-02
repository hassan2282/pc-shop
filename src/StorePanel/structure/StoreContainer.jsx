// import '../../StoreCss.css'
// import '../../StoreJs.js'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './footer'
import ScrollToTop from './ScrollToTop'

function StoreContainer() {
  return (
    <>
        <Header />
        <ScrollToTop />

            <Outlet />

        <Footer /> 
    </>
  )
}

export default StoreContainer