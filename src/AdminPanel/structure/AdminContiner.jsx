import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import { Outlet } from 'react-router-dom';

function AdminContiner() {
  return (
    <>
    
    <AdminHeader />

    <div className="wrapper" 
    style="background: url(https://templates.iqonic.design/glare/laravel/public/images/background.png);
         background-attachment: fixed; background-size: cover; ">

        <AdminSidebar />

        <div class="content-page">
                <div class="container-fluid">
                    <div class="row">


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