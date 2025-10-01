import '../../AdminCss.css';
import '../../AdminJs.js';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import { Outlet } from 'react-router-dom';

function AdminContiner() {
  return (
    <>
    
    <AdminHeader />

    <div className="wrapper" 
          >

        <AdminSidebar />

        <div className="content-page">
                <div className="container-fluid">
                    <div className="row">


                        <Outlet />


                    </div>
                </div>
            </div>

        <AdminFooter />    

            
    </div>
    
    </>
  )
}

export default AdminContiner;