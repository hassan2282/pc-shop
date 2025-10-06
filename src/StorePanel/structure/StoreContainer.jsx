import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { useEffect } from 'react'
import $ from 'jquery' // jquery به‌صورت ماژول

// Css نصب‌شده با npm
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

// Css اختصاصی
import '../assets/css/main_ui.css'
import '../assets/css/icon.css'
import '../assets/css/main.css?1'
import '../assets/css/style.css'

function StoreContainer() {
  useEffect(() => {
    // 1) jQuery را global کن — این باید قبل از اجرای پلاگین‌ها انجام شود
    window.$ = window.jQuery = $;
    // console.log('window.jQuery set:', !!window.jQuery);

    // 2) پلاگین‌ها را به ترتیب دینامیک وارد کن (await برای ترتیب)
    const loadPlugins = async () => {
      try {
        // اول Bootstrap JS (bundle شامل Popper هست)
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');

        // سپس owl.carousel (و سایر پلاگین‌هایی که به jQuery نیاز دارند)
        await import('owl.carousel');


        // حالا فایل‌های محلی که به jQuery وابسته‌اند — ترتیب مهم است
        await import('../assets/js/plugins/bootstrap-switch.js');
        await import('../assets/js/plugins/bootstrap-datepicker.js');
        await import('../assets/js/plugins/jquery.sharrre.js');
        // await import('../assets/js/now-ui-kit.js');
        await import('../assets/js/plugins/countdown.min.js');
        await import('../assets/js/plugins/jquery.ez-plus.js');
        await import('../assets/js/plugins/jquery.easing.1.3.min.js');
        await import('../assets/js/main.js');

        // 3) حالا init پلاگین‌ها (tooltip, owl ...)
        if (typeof $.fn.tooltip === 'function') {
          $('[data-toggle="tooltip"]').tooltip();
        } else {
          console.warn('bootstrap tooltip not available (yet).');
        }

      } catch (err) {
        console.error('Error loading plugins:', err);
      }
    };

    loadPlugins();

    // cleanup (در صورت نیاز)
    return () => {
      // اگر می‌خواهی carouselها رو destroy کنی میتونی اینجا انجام بدی
    };
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
