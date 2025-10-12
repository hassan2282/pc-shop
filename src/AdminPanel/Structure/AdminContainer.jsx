import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import AdminBackToTop from './AdminBackToTop';
import AdminPreLoader from './AdminPreLoader';
import AdminSetting from './AdminSetting';

function AdminContainer() {

  return (

    <>
    
        <div id="layout-wrapper">

          <AdminHeader />

          <div className="app-menu navbar-menu">
            <AdminNavbar />
            <AdminSidebar />
            <div className="sidebar-background"></div>
          </div>

          <div className="vertical-overlay"></div>

          <div className="main-content">
            <div className="page-content">
              
                <Outlet />

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
