import '../../StoreCss.css'
import '../../StoreJs.js'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './footer'
import ScrollToTop from './ScrollToTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';

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