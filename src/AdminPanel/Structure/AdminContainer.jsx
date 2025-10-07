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

import '../assets/css/rt-plugins.css'
import '../assets/css/app.css'

import '../assets/js/settings.js'
import { useEffect } from 'react';

function AdminContainer() {

useEffect(() => {
  window.$ = window.jQuery = $;
  import('../assets/js/rt-plugins.js').then(() => {
    import('../assets/js/app.js');
  });
}, []);

  return (
    <div className='font-inter dashcode-app' id='body_class'>
        <main className="app-wrapper">

            <AdminSideBar />

            <AdminSetting />


            <div className="flex flex-col justify-between min-h-screen">
                <AdminHeader />
                <AdminSearchModal />

                <Outlet />


            </div>

            <AdminFooter />

        </main>
    </div>
  )
}

export default AdminContainer