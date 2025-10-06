import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'


import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import '../assets/css/main_ui.css';
import '../assets/css/icon.css';
import '../assets/css/main.css?1';
import '../assets/css/style.css';



import 'bootstrap';
import 'owl.carousel';


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