import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import AdminPreLoader from './AdminPreLoader';
import AdminSetting from './AdminSetting';

function AdminContainer() {

  return (

    <>
    
        <div id="layout-wrapper">

          <AdminHeader />

          <div class="app-menu navbar-menu">
            <AdminNavbar />
            <AdminSidebar />
          </div>

          <div class="vertical-overlay"></div>

          <div class="main-content">
            <div class="page-content">
              <div class="container-fluid">


                <Outlet />


              </div>
            </div>

                <AdminFooter />

          </div> 
        </div>

        <AdminBackToTop />

        <AdminPreLoader />

        <AdminSetting />
    </>

  );
}

export default AdminContainer;
