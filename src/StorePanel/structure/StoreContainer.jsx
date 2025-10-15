import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { useEffect } from 'react'

function StoreContainer() {
  useEffect(() => {
    // Add StorePanel CSS files to the head
    const cssFiles = [
      '/node_modules/bootstrap/dist/css/bootstrap.min.css',
      '/node_modules/@fortawesome/fontawesome-free/css/all.min.css',
      '/node_modules/owl.carousel/dist/assets/owl.carousel.css',
      '/node_modules/owl.carousel/dist/assets/owl.theme.default.css',
      '/src/StorePanel/assets/css/main_ui.css',
      '/src/StorePanel/assets/css/icon.css',
      '/src/StorePanel/assets/css/main.css?1',
      '/src/StorePanel/assets/css/style.css'
    ];
    
    cssFiles.forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    });
    
    // Load StorePanel JS files in correct order
    const loadScripts = async () => {
      // Load jQuery first
      await loadScript('/node_modules/jquery/dist/jquery.min.js');
      
      // Load Bootstrap after jQuery
      await loadScript('/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
      
      // Load Owl Carousel after jQuery
      await loadScript('/node_modules/owl.carousel/dist/owl.carousel.min.js');
      
      // Load other plugins
      await loadScript('/src/StorePanel/assets/js/plugins/bootstrap-switch.js');
      await loadScript('/src/StorePanel/assets/js/plugins/bootstrap-datepicker.js');
      await loadScript('/src/StorePanel/assets/js/plugins/jquery.sharrre.js');
      await loadScript('/src/StorePanel/assets/js/plugins/countdown.min.js');
      await loadScript('/src/StorePanel/assets/js/plugins/jquery.ez-plus.js');
      await loadScript('/src/StorePanel/assets/js/plugins/jquery.easing.1.3.min.js');
      
      // Load main.js last
      await loadScript('/src/StorePanel/assets/js/main.js');
      
      // Initialize plugins after all scripts are loaded
      if (typeof $ !== 'undefined' && $.fn && $.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
      }
    };
    
    loadScripts();
  }, []);
  
  // Helper function to load scripts
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default StoreContainer;
