import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { useEffect, useState } from 'react'
import { TbLoader } from 'react-icons/tb'

function StoreContainer() {
  // 1. تعریف استیت برای مدیریت لودینگ
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

    // تابع کمکی برای لود اسکریپت
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

    // تابع جدید برای لود فایل CSS به صورت Promise
    const loadCSS = (href) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`link[href="${href}"]`)) {
          resolve();
          return;
        }
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
      });
    };

    const loadAssets = async () => {
      try {
        // 2. لود تمام فایل‌های CSS به صورت موازی و صبر کردن برای تکمیل آن‌ها
        await Promise.all(cssFiles.map(href => loadCSS(href)));

        // 3. لود اسکریپت‌ها با ترتیب صحیح
        await loadScript('/node_modules/jquery/dist/jquery.min.js');
        await loadScript('/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
        await loadScript('/node_modules/owl.carousel/dist/owl.carousel.min.js');
        await loadScript('/src/StorePanel/assets/js/plugins/bootstrap-switch.js');
        await loadScript('/src/StorePanel/assets/js/plugins/bootstrap-datepicker.js');
        await loadScript('/src/StorePanel/assets/js/plugins/jquery.sharrre.js');
        await loadScript('/src/StorePanel/assets/js/plugins/countdown.min.js');
        await loadScript('/src/StorePanel/assets/js/plugins/jquery.ez-plus.js');
        await loadScript('/src/StorePanel/assets/js/plugins/jquery.easing.1.3.min.js');
        await loadScript('/src/StorePanel/assets/js/main.js');

        // 4. تمام فایل‌ها لود شدند، لودینگ را خاموش می‌کنیم
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading assets:', error);
        setIsLoading(false); // در صورت خطا هم لودینگ را خاموش کنید تا کاربر گیر نکند
      }
    };

    loadAssets();
  }, []);

  // 5. اجرای کدهای جی‌کوئری پس از اینکه لودینگ تمام شد و DOM آماده است
  useEffect(() => {
    if (!isLoading) {
      // چون لودینگ فالس شده، یعنی محتوای صفحه (Header, Outlet, etc) رندر شده است
      if (typeof $ !== 'undefined' && $

        .fn && $.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
      }
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className='absolute w-screen h-screen flex z-100 justify-center items-center bg-transparent'>
          <TbLoader size={40} className='animate-spin text-blue-800' />
        </div>
      ) : (
        <>
          <Header />
          <ScrollToTop />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default StoreContainer;