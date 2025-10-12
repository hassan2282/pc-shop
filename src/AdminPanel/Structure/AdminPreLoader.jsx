
function AdminPreLoader() {

  return (
    // <!-- start preloader-menu -->
            <div id="preloader-menu">
              <h6 class="mt-4 mb-0 fw-semibold text-uppercase">Preloader</h6>
              <p class="text-muted">یک پیش بارگذاری را انتخاب کنید.</p>

              <div class="row">
                <div class="col-4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-preloader"
                      id="preloader-view-custom"
                      value="enable"
                    />
                    <label
                      class="form-check-label p-0 avatar-md w-100"
                      for="preloader-view-custom"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span
                            class="bg-light d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"
                            ></span>
                            <span
                              class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            ></span>
                            <span
                              class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            ></span>
                            <span
                              class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            ></span>
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1"></span>
                            <span class="bg-light d-block p-1 mt-auto"></span>
                          </span>
                        </span>
                      </span>
                      {/* <!-- <div id="preloader"> --> */}
                      <div
                        id="status"
                        class="d-flex align-items-center justify-content-center"
                      >
                        <div
                          class="spinner-border text-primary avatar-xxs m-auto"
                          role="status"
                        >
                          <span class="visually-hidden"
                            >در حال بارگذاری...</span
                          >
                        </div>
                      </div>
                      {/* <!-- </div> --> */}
                    </label>
                  </div>
                  <h5 class="fs-13 text-center mt-2">فعال کردن</h5>
                </div>
                <div class="col-4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-preloader"
                      id="preloader-view-none"
                      value="disable"
                    />
                    <label
                      class="form-check-label p-0 avatar-md w-100"
                      for="preloader-view-none"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span
                            class="bg-light d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"
                            ></span>
                            <span
                              class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            ></span>
                            <span
                              class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            ></span>
                            <span
                              class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            ></span>
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1"></span>
                            <span class="bg-light d-block p-1 mt-auto"></span>
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                  <h5 class="fs-13 text-center mt-2">غیر فعال کردن</h5>
                </div>
              </div>
            </div>
            {/* <!-- end preloader-menu --> */}
  );
}

export default AdminPreLoader;
