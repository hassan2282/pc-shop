import React from 'react'
import AdminSideBar from './AdminSidebar';
import AdminSetting from './AdminSetting';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminSearchModal from './AdminSearchModal';

import '../assets/css/rt-plugins.css'
import '../assets/css/app.css'

import '../assets/js/settings.js';

import 'jquery';
import '../assets/js/rt-plugins.js'
import '../assets/js/app.js'
import { Outlet } from 'react-router-dom';

function AdminContainer() {
  return (
    <div className='font-inter dashcode-app' id='body_class'>
        <main class="app-wrapper">

            <AdminSideBar />

            <AdminSetting />


            <div class="flex flex-col justify-between min-h-screen">
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