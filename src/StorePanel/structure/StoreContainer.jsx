import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { useEffect } from 'react'

function StoreContainer() {
  useEffect(() => {
    // Initialize plugins after DOM is ready
    // CSS and JS are now loaded from index.html
    
    // Initialize Bootstrap tooltips
    if (typeof $ !== 'undefined' && $.fn && $.fn.tooltip) {
      $('[data-toggle="tooltip"]').tooltip();
    }
    
    // Initialize other plugins if needed
    // Plugin initialization code can be added here if required
  }, []);

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
