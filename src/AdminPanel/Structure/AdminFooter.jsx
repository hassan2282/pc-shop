import { Icon } from '@iconify/react'
import React from 'react'

function AdminFooter() {
    return (
     
        <footer className="footer border-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <script>
                  document.write(new Date().getFullYear());
                </script>
                © Velzon.
              </div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  طراحی و توسعه توسط
                  <a href="https://mkhezerlou.ir" target="_blank">مرداد</a>
                </div>
              </div>
            </div>
          </div>
        </footer>

    )
}

export default AdminFooter