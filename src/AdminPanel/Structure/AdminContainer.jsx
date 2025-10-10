import { Outlet } from 'react-router-dom';
import AdminSideBar from './AdminSidebar';
import AdminSetting from './AdminSetting';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminSearchModal from './AdminSearchModal';

import $ from 'jquery';
window.$ = window.jQuery = $;
import Cleave from 'cleave.js';
window.Cleave = Cleave;

import '../assets/css/rt-plugins.css';
import '../assets/css/app.css';
import { useEffect } from 'react';

function AdminContainer() {
  useEffect(() => {
    window.$ = window.jQuery = $;

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    (async () => {
      try {
        await loadScript('/assets/js/settings.js')
        .then(()=>loadScript('/assets/js/app.js'));
      } catch (err) {
        console.error('Script load error:', err);
      }
    })();
  }, []);

  return (
    <div className="font-inter dashcode-app" >
      <main className="app-wrapper">
        <AdminSideBar />
        <AdminSetting />
        <div className="flex flex-col justify-between min-h-screen">
          <div>
            <AdminHeader />
            <AdminSearchModal />
            <Outlet />
          </div>
        </div>
        <AdminFooter />
      </main>
    </div>
  );
}

export default AdminContainer;
