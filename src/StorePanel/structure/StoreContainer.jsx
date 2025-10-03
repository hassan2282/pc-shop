import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './footer'
import ScrollToTop from './ScrollToTop'

//Css loaded by npm
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Css loaded by hand
import '../assets/css/main_ui.css';
import '../assets/css/icon.css';
import '../assets/css/main.css';
import '../assets/css/style.css';
import { useEffect } from 'react';


function StoreContainer() {

  useEffect(()=> {
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }

    loadScript("/src/StorePanel/assets/js/core/jquery.3.2.1.min.js");
    loadScript("/src/StorePanel/assets/js/core/popper.min.js");
    loadScript("/src/StorePanel/assets/js/core/bootstrap.min.js");
    loadScript("/src/StorePanel/assets/js/plugins/owl.carousel.min.js");
    loadScript("/src/StorePanel/assets/js/plugins/jquery.easing.1.3.min.js");
    loadScript("/src/StorePanel/assets/js/plugins/bootstrap-datepicker.js");
    loadScript("/src/StorePanel/assets/js/plugins/nouislider.min.js");
    loadScript("/src/StorePanel/assets/js/plugins/bootstrap-switch.js");
    loadScript("/src/StorePanel/assets/js/plugins/countdown.min.js");
    loadScript("/src/StorePanel/assets/js/plugins/jquery.sharrre.js");
    loadScript("/src/StorePanel/assets/js/now-ui-kit.js");
    loadScript("/src/StorePanel/assets/js/main.js");

  },[]);

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