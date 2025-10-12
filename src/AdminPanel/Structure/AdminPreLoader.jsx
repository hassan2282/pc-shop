
function AdminPreLoader() {

  return (
    // <!-- start preloader-menu -->
            <div id="preloader-menu">
              <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Preloader</h6>
              <p className="text-muted">یک پیش بارگذاری را انتخاب کنید.</p>

              <div className="row">
                <div className="col-4">
                  <div className="form-check sidebar-setting card-radio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-preloader"
                      id="preloader-view-custom"
                      value="enable"
                    />
                    <label
                      className="form-check-label p-0 avatar-md w-100"
                      for="preloader-view-custom"
                    >
                      <span className="d-flex gap-1 h-100">
                        <span className="flex-shrink-0">
                          <span
                            className="bg-light d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"
                            ></span>
                            <span
                              className="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            ></span>
                            <span
                              className="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            ></span>
                            <span
                              className="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            ></span>
                          </span>
                        </span>
                        <span className="flex-grow-1">
                          <span className="d-flex h-100 flex-column">
                            <span className="bg-light d-block p-1"></span>
                            <span className="bg-light d-block p-1 mt-auto"></span>
                          </span>
                        </span>
                      </span>
                      {/* <!-- <div id="preloader"> --> */}
                      <div
                        id="status"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <div
                          className="spinner-border text-primary avatar-xxs m-auto"
                          role="status"
                        >
                          <span className="visually-hidden"
                            >در حال بارگذاری...</span
                          >
                        </div>
                      </div>
                      {/* <!-- </div> --> */}
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">فعال کردن</h5>
                </div>
                <div className="col-4">
                  <div className="form-check sidebar-setting card-radio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-preloader"
                      id="preloader-view-none"
                      value="disable"
                    />
                    <label
                      className="form-check-label p-0 avatar-md w-100"
                      for="preloader-view-none"
                    >
                      <span className="d-flex gap-1 h-100">
                        <span className="flex-shrink-0">
                          <span
                            className="bg-light d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"
                            ></span>
                            <span
                              className="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            ></span>
                            <span
                              className="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            ></span>
                            <span
                              className="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            ></span>
                          </span>
                        </span>
                        <span className="flex-grow-1">
                          <span className="d-flex h-100 flex-column">
                            <span className="bg-light d-block p-1"></span>
                            <span className="bg-light d-block p-1 mt-auto"></span>
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">غیر فعال کردن</h5>
                </div>
              </div>
            </div>
  );
}

export default AdminPreLoader;
