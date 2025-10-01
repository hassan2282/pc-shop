import React from 'react'

function AdminHeader() {
    return (
        <>
            <div id="loading">
                <div id="loading-center">
                </div>
            </div>


            <div className="iq-top-navbar">
                <div className="iq-navbar-custom">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                            <i className="ri-menu-line wrapper-menu"></i>
                            <a href="https://templates.iqonic.design/glare/laravel/public/dashboard" className="header-logo">
                                <h4 className="logo-title text-uppercase">GLARE</h4>
                            </a>
                        </div>
                        <div className="navbar-breadcrumb">
                            <h2 className="ml-2">Welcome back, Mason</h2>
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-label="Toggle navigation">
                                <i className="ri-menu-3-line"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto navbar-list align-items-center">
                                    <li className="nav-item nav-icon search-content">
                                        <a href="#" className="search-toggle rounded" id="dropdownSearch" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <i className="ri-search-line"></i>
                                        </a>
                                        <div className="iq-search-bar iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownSearch">
                                            <form action="#" className="searchbox p-2">
                                                <div className="form-group mb-0 position-relative">
                                                    <input type="text" className="text search-input font-size-12"
                                                        placeholder="type here to search..."/>
                                                        <a href="#" className="search-link"><i className="las la-search"></i></a>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                    <li className="nav-item nav-icon nav-item-icon dropdown">
                                        <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                height="20px" width="20px">
                                                <path
                                                    d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                            </svg>
                                            <span className="bg-secondary dots "></span>
                                        </a>
                                        <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <div className="card shadow-none m-0">
                                                <div className="card-body p-0 ">
                                                    <div className="cust-title p-3">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h5 className="mb-0">Notifications</h5>
                                                            <a className="badge badge-primary badge-card" href="#">3</a>
                                                        </div>
                                                    </div>
                                                    <div className="px-3 pt-0 pb-0 sub-card">
                                                        <a href="#" className="iq-sub-card">
                                                            <div className="media align-items-center cust-card py-3 border-bottom">
                                                                <div className="">
                                                                    <img className="avatar-50 rounded-small"
                                                                        src="https://templates.iqonic.design/glare/laravel/public/images/user/6.png" alt="01"/>
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="mb-0">Emma Watson</h6>
                                                                        <small className="text-dark"><b>12 : 47 pm</b></small>
                                                                    </div>
                                                                    <small className="mb-0">Lorem ipsum dolor sit amet</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="iq-sub-card">
                                                            <div className="media align-items-center cust-card py-3 border-bottom">
                                                                <div className="">
                                                                    <img className="avatar-50 rounded-small"
                                                                        src="https://templates.iqonic.design/glare/laravel/public/images/user/7.png" alt="02" />
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="mb-0">Ashlynn Franci</h6>
                                                                        <small className="text-dark"><b>11 : 30 pm</b></small>
                                                                    </div>
                                                                    <small className="mb-0">Lorem ipsum dolor sit amet</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="iq-sub-card">
                                                            <div className="media align-items-center cust-card py-3">
                                                                <div className="">
                                                                    <img className="avatar-50 rounded-small"
                                                                        src="https://templates.iqonic.design/glare/laravel/public/images/user/08.png" alt="03" />
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="mb-0">Kianna Carder</h6>
                                                                        <small className="text-dark"><b>11 : 21 pm</b></small>
                                                                    </div>
                                                                    <small className="mb-0">Lorem ipsum dolor sit amet</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <a className="right-ic btn btn-primary btn-block position-relative p-2" href="#"
                                                        role="button">
                                                        View All
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item nav-icon dropdown caption-content">
                                        <a href="#" className="search-toggle dropdown-toggle  d-flex align-items-center"
                                            id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            <img src="https://templates.iqonic.design/glare/laravel/public/images/user/1.jpg" className="img-fluid rounded" alt="user" />
                                                <div className="caption ml-3">
                                                    <h6 className="mb-0 line-height">Mason Protesters
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20"
                                                            fill="currentColor" height="20px" width="20px">
                                                            <path fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                                    </h6>
                                                </div>
                                        </a>
                                        <div className="iq-sub-dropdown dropdown-menu mt-2" aria-labelledby="dropdownMenuButton4">
                                            <div className="card mb-0">
                                                <div className="card-body">
                                                    <div className="profile-header">
                                                        <div className="cover-container text-center">
                                                            <div className="rounded-circle profile-icon bg-primary mx-auto d-block">M
                                                            </div>
                                                            <div className="profile-detail mt-3">
                                                                <h5><a href="https://templates.iqonic.design/glare/laravel/public/app/user/user-profile-edit">Mason
                                                                    Protesters</a></h5>
                                                                <p>mason@gmail.com</p>
                                                            </div>
                                                            <form method="POST" action="https://templates.iqonic.design/glare/laravel/public/logout">
                                                                <input type="hidden" name="_token" value="kS7jAiFNbvzLkTvD8iB5RYf2ZNjUZJiOkIhCQdjk" />                                                    <a href="javascript:void(0)" className="btn btn-primary"
                                                                    onClick="event.preventDefault();
                                                    this.closest('form').submit();">
                                                                    Sign Out
                                                                </a>
                                                            </form>
                                                        </div>
                                                        <div className="profile-details mt-4 pt-4 border-top">
                                                            <div className="media align-items-center mb-3">
                                                                <div className="rounded-circle iq-card-icon-small bg-primary">
                                                                    A
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <div className="media justify-content-between">
                                                                        <h6 className="mb-0 mt-1">Anna Mull</h6>
                                                                        <p className="mb-0 font-size-12 mt-2"><i>Signed Out</i></p>
                                                                    </div>
                                                                    <p className="mb-0 font-size-12 ">annamull@gmail.com</p>
                                                                </div>
                                                            </div>
                                                            <div className="media align-items-center mb-3">
                                                                <div className="rounded-circle iq-card-icon-small bg-success">
                                                                    K
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <div className="media justify-content-between">
                                                                        <h6 className="mb-0 mt-1">King Poilin</h6>
                                                                        <p className="mb-0 font-size-12 mt-2"><i>Signed Out</i></p>
                                                                    </div>
                                                                    <p className="mb-0 font-size-12">kingpoilin@gmail.com</p>
                                                                </div>
                                                            </div>
                                                            <div className="media align-items-center">
                                                                <div className="rounded-circle iq-card-icon-small bg-danger">
                                                                    D
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <div className="media justify-content-between">
                                                                        <h6 className="mb-0 mt-1">Devid Worner</h6>
                                                                        <p className="mb-0 font-size-12 mt-2"><i>Signed Out</i></p>
                                                                    </div>
                                                                    <p className="mb-0 font-size-12">devidworner@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default AdminHeader