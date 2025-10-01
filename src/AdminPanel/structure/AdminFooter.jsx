import React from 'react'

function AdminFooter() {
  return (
    <>
    
    <footer className="iq-footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item"><a href="https://templates.iqonic.design/glare/laravel/public/privacy-policy">Privacy Policy</a></li>
                        <li className="list-inline-item"><a href="https://templates.iqonic.design/glare/laravel/public/terms-of-service">Terms of Use</a></li>
                    </ul>
                </div>
                <div className="col-lg-6 text-right">
                    <span className="mr-1"> 2023©  <a href="#" className=""> Glare</a>.
                    </span>
                </div>
            </div>
        </div>
    </footer>
    
    </>
  )
}

export default AdminFooter