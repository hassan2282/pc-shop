import { Outlet } from 'react-router-dom';
import AdminSideBar from './AdminSidebar';
import AdminSetting from './AdminSetting';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminSearchModal from './AdminSearchModal';

// import $ from 'jquery';
// window.$ = window.jQuery = $;
import Cleave from 'cleave.js';
window.Cleave = Cleave;

import '../../../public/assets/css/rt-plugins.css';
import '../../../public/assets/css/app.css';
import { useEffect } from 'react';

function AdminContainer() {
  useEffect(() => {
    window.$ = window.jQuery = $;
      import("../../../public/assets/js/jquery-3.6.0.min.js").then(() => {
      import("../../../public/assets/js/rt-plugins.js");  
      import("../../../public/assets/js/settings.js");  
      import("../../../public/assets/js/app.js");
  });
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
