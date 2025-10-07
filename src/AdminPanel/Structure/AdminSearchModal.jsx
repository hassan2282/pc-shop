import React from 'react'

function AdminSearchModal() {
  return (
    <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="searchModal"
        tabIndex="-1"
        aria-labelledby="searchModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none top-1/4">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-slate-900 bg-clip-padding rounded-md outline-none text-current">
            <form>
              <div className="relative">
                <input
                  type="text"
                  className="form-control !py-3 !pr-12"
                  placeholder="جستجو"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-full border-l text-xl border-l-slate-200 dark:border-l-slate-600 dark:text-slate-300 flex items-center justify-center">
                  <iconify-icon icon="heroicons-solid:search" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default AdminSearchModal