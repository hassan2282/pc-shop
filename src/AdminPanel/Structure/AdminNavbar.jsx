import React from 'react'

function AdminNavbar() {
  return (
    // <!-- LOGO & NAVBAR -->
        <div className="navbar-brand-box">
          {/* <!-- Dark Logo--> */}
          <a href="index.html" className="logo logo-dark">
            <span className="logo-sm">
              <img src="../../assets/images/logo-sm.png" alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src="../../assets/images/logo-dark.png" alt="" height="17" />
            </span>
          </a>
          {/* <!-- Light Logo--> */}
          <a href="index.html" className="logo logo-light">
            <span className="logo-sm">
              <img src="../../assets/images/logo-sm.png" alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img
                src="../../assets/images/logo-light.png"
                alt=""
                height="17"
              />
            </span>
          </a>
          <button
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>
        // <!--END LOGO & NAVBAR -->
  )
}

export default AdminNavbar