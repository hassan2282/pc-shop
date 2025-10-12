import { Icon } from '@iconify/react'
import React from 'react'

function AdminFooter() {
    return (
     
        <footer class="footer border-top">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">
                <script>
                  document.write(new Date().getFullYear());
                </script>
                © Velzon.
              </div>
              <div class="col-sm-6">
                <div class="text-sm-end d-none d-sm-block">
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