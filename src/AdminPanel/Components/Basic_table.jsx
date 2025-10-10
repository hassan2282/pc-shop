import React from 'react'

function Basic_table() {
  return (
     <div className="content-wrapper transition-all duration-150 ltr:ml-[248px] rtl:mr-[248px]" id="content_wrapper">
          <div className="page-content">
            <div className="transition-all duration-150 container-fluid" id="page_layout">
              <div id="content_layout">




                <div className="mb-5">
                  <ul className="m-0 p-0 list-none">
                    <li className="inline-block relative top-[3px] text-base text-primary-500 font-Inter ">
                      <a href="index.html">
                        <Icon icon="heroicons-outline:home"/>
                        <Icon icon="heroicons-outline:chevron-right" className="relative text-slate-500 text-sm rtl:rotate-180"/>
                      </a>
                    </li>
                    <li className="inline-block relative text-sm text-primary-500 font-Inter ">جدول
                      <Icon icon="heroicons-outline:chevron-right" className="relative top-[3px] text-slate-500 rtl:rotate-180"/>
                    </li>
                    <li className="inline-block relative text-sm text-slate-500 font-Inter dark:text-white">
                      Basic-Table</li>
                  </ul>
                </div>


                <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
                  <div className="card">
                    <header className=" card-header noborder">
                      <h4 className="card-title">Basic Table
                      </h4>
                    </header>
                    <div className="card-body px-6 pb-6">
                      <div className="overflow-x-auto -mx-6">
                        <div className="inline-block min-w-full align-middle">
                          <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                              <thead className=" border-t border-slate-100 dark:border-slate-800">
                                <tr>

                                  <th scope="col" className=" table-th ">سن</th>

                                  <th scope="col" className=" table-th ">نام کوچک</th>

                                  <th scope="col" className=" table-th ">ایمیل</th>

                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">

                                <tr>
                                  <td className="table-td">82</td>
                                  <td className="table-td">Dorelle</td>
                                  <td className="table-td ">dharling0@rediff.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td">89</td>
                                  <td className="table-td">Bendicty</td>
                                  <td className="table-td ">bllewellin1@example.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td">28</td>
                                  <td className="table-td">Remy</td>
                                  <td className="table-td ">rcarbry2@prlog.org</td>
                                </tr>

                                <tr>
                                  <td className="table-td">20</td>
                                  <td className="table-td">Bernardo</td>
                                  <td className="table-td ">bhacun3@xinhuanet.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td">2</td>
                                  <td className="table-td">Emelia</td>
                                  <td className="table-td ">egarstang4@miitbeian.gov.cn</td>
                                </tr>

                                <tr>
                                  <td className="table-td">98</td>
                                  <td className="table-td">Dian</td>
                                  <td className="table-td ">ddopson5@examiner.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td">17</td>
                                  <td className="table-td">Coretta</td>
                                  <td className="table-td ">cponter6@loc.gov</td>
                                </tr>

                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <header className=" card-header noborder">
                      <h4 className="card-title">Table Head
                      </h4>
                    </header>
                    <div className="card-body px-6 pb-6">
                      <div className="overflow-x-auto -mx-6">
                        <div className="inline-block min-w-full align-middle">
                          <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                              <thead className="bg-slate-200 dark:bg-slate-700">
                                <tr>

                                  <th scope="col" className=" table-th ">سن</th>

                                  <th scope="col" className=" table-th ">نام کوچک</th>

                                  <th scope="col" className=" table-th ">ایمیل</th>

                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">

                                <tr>
                                  <td className="table-td">82</td>
                                  <td className="table-td">Dorelle</td>
                                  <td className="table-td ">dharling0@rediff.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td">89</td>
                                  <td className="table-td">Bendicty</td>
                                  <td className="table-td ">bllewellin1@example.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td">28</td>
                                  <td className="table-td">Remy</td>
                                  <td className="table-td ">rcarbry2@prlog.org</td>
                                </tr>

                                <tr>
                                  <td className="table-td">20</td>
                                  <td className="table-td">Bernardo</td>
                                  <td className="table-td ">bhacun3@xinhuanet.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td">2</td>
                                  <td className="table-td">Emelia</td>
                                  <td className="table-td ">egarstang4@miitbeian.gov.cn</td>
                                </tr>

                                <tr>
                                  <td className="table-td">98</td>
                                  <td className="table-td">Dian</td>
                                  <td className="table-td ">ddopson5@examiner.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td">17</td>
                                  <td className="table-td">Coretta</td>
                                  <td className="table-td ">cponter6@loc.gov</td>
                                </tr>

                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <header className=" card-header noborder">
                      <h4 className="card-title">Bordered Table
                      </h4>
                    </header>
                    <div className="card-body px-6 pb-6">
                      <div className="overflow-x-auto ">
                        <div className="inline-block min-w-full align-middle">
                          <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                              <thead className="">
                                <tr>

                                  <th scope="col" className=" table-th border border-slate-100 dark:bg-slate-800 dark:border-slate-700 ">سن</th>

                                  <th scope="col" className=" table-th border border-slate-100 dark:bg-slate-800 dark:border-slate-700 ">نام کوچک</th>

                                  <th scope="col" className=" table-th border border-slate-100 dark:bg-slate-800 dark:border-slate-700 ">ایمیل</th>

                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">

                                <tr>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">82</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">Dorelle</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700 ">dharling0@rediff.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">89</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">Bendicty</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700 ">bllewellin1@example.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">28</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">Remy</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700 ">rcarbry2@prlog.org</td>
                                </tr>

                                <tr>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">20</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">Bernardo</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700 ">bhacun3@xinhuanet.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">2</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">Emelia</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700 ">egarstang4@miitbeian.gov.cn</td>
                                </tr>

                                <tr>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">98</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">Dian</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700 ">ddopson5@examiner.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">17</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700">Coretta</td>
                                  <td className="table-td border border-slate-100 dark:bg-slate-800 dark:border-slate-700 ">cponter6@loc.gov</td>
                                </tr>

                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <header className=" card-header noborder">
                      <h4 className="card-title">Borderless Table
                      </h4>
                    </header>
                    <div className="card-body px-6 pb-6">
                      <div className="overflow-x-auto ">
                        <div className="inline-block min-w-full align-middle">
                          <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                              <thead className="">
                                <tr>

                                  <th scope="col" className=" table-th ">سن</th>

                                  <th scope="col" className=" table-th ">نام کوچک</th>

                                  <th scope="col" className=" table-th ">ایمیل</th>

                                </tr>
                              </thead>
                              <tbody className="bg-white dark:bg-slate-800 ">

                                <tr>
                                  <td className="table-td ">82</td>
                                  <td className="table-td ">Dorelle</td>
                                  <td className="table-td  ">dharling0@rediff.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td ">89</td>
                                  <td className="table-td ">Bendicty</td>
                                  <td className="table-td  ">bllewellin1@example.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td ">28</td>
                                  <td className="table-td ">Remy</td>
                                  <td className="table-td  ">rcarbry2@prlog.org</td>
                                </tr>

                                <tr>
                                  <td className="table-td ">20</td>
                                  <td className="table-td ">Bernardo</td>
                                  <td className="table-td  ">bhacun3@xinhuanet.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td ">2</td>
                                  <td className="table-td ">Emelia</td>
                                  <td className="table-td  ">egarstang4@miitbeian.gov.cn</td>
                                </tr>

                                <tr>
                                  <td className="table-td ">98</td>
                                  <td className="table-td ">Dian</td>
                                  <td className="table-td  ">ddopson5@examiner.com</td>
                                </tr>

                                <tr>
                                  <td className="table-td ">17</td>
                                  <td className="table-td ">Coretta</td>
                                  <td className="table-td  ">cponter6@loc.gov</td>
                                </tr>

                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <header className=" card-header noborder">
                      <h4 className="card-title">Striped Rows
                      </h4>
                    </header>
                    <div className="card-body px-6 pb-6">
                      <div className="overflow-x-auto -mx-6">
                        <div className="inline-block min-w-full align-middle">
                          <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                              <thead className="bg-slate-200 dark:bg-slate-700">
                                <tr>

                                  <th scope="col" className=" table-th ">سن</th>

                                  <th scope="col" className=" table-th ">نام کوچک</th>

                                  <th scope="col" className=" table-th ">ایمیل</th>

                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">

                                <tr className="even:bg-slate-50 dark:even:bg-slate-700">
                                  <td className="table-td">82</td>
                                  <td className="table-td">Dorelle</td>
                                  <td className="table-td ">dharling0@rediff.com</td>
                                </tr>

                                <tr className="even:bg-slate-50 dark:even:bg-slate-700">
                                  <td className="table-td">89</td>
                                  <td className="table-td">Bendicty</td>
                                  <td className="table-td ">bllewellin1@example.com</td>
                                </tr>

                                <tr className="even:bg-slate-50 dark:even:bg-slate-700">
                                  <td className="table-td">28</td>
                                  <td className="table-td">Remy</td>
                                  <td className="table-td ">rcarbry2@prlog.org</td>
                                </tr>

                                <tr className="even:bg-slate-50 dark:even:bg-slate-700">
                                  <td className="table-td">20</td>
                                  <td className="table-td">Bernardo</td>
                                  <td className="table-td ">bhacun3@xinhuanet.com</td>
                                </tr>

                                <tr className="even:bg-slate-50 dark:even:bg-slate-700">
                                  <td className="table-td">2</td>
                                  <td className="table-td">Emelia</td>
                                  <td className="table-td ">egarstang4@miitbeian.gov.cn</td>
                                </tr>

                                <tr className="even:bg-slate-50 dark:even:bg-slate-700">
                                  <td className="table-td">98</td>
                                  <td className="table-td">Dian</td>
                                  <td className="table-td ">ddopson5@examiner.com</td>
                                </tr>

                                <tr className="even:bg-slate-50 dark:even:bg-slate-700">
                                  <td className="table-td">17</td>
                                  <td className="table-td">Coretta</td>
                                  <td className="table-td ">cponter6@loc.gov</td>
                                </tr>

                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <header className=" card-header noborder">
                      <h4 className="card-title">Hover Table
                      </h4>
                    </header>
                    <div className="card-body px-6 pb-6">
                      <div className="overflow-x-auto -mx-6">
                        <div className="inline-block min-w-full align-middle">
                          <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                              <thead className="bg-slate-200 dark:bg-slate-700">
                                <tr>

                                  <th scope="col" className=" table-th ">سن</th>

                                  <th scope="col" className=" table-th ">نام کوچک</th>

                                  <th scope="col" className=" table-th ">ایمیل</th>

                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">

                                <tr className="hover:bg-slate-200 dark:hover:bg-slate-700">
                                  <td className="table-td">82</td>
                                  <td className="table-td">Dorelle</td>
                                  <td className="table-td ">dharling0@rediff.com</td>
                                </tr>

                                <tr className="hover:bg-slate-200 dark:hover:bg-slate-700">
                                  <td className="table-td">89</td>
                                  <td className="table-td">Bendicty</td>
                                  <td className="table-td ">bllewellin1@example.com</td>
                                </tr>

                                <tr className="hover:bg-slate-200 dark:hover:bg-slate-700">
                                  <td className="table-td">28</td>
                                  <td className="table-td">Remy</td>
                                  <td className="table-td ">rcarbry2@prlog.org</td>
                                </tr>

                                <tr className="hover:bg-slate-200 dark:hover:bg-slate-700">
                                  <td className="table-td">20</td>
                                  <td className="table-td">Bernardo</td>
                                  <td className="table-td ">bhacun3@xinhuanet.com</td>
                                </tr>

                                <tr className="hover:bg-slate-200 dark:hover:bg-slate-700">
                                  <td className="table-td">2</td>
                                  <td className="table-td">Emelia</td>
                                  <td className="table-td ">egarstang4@miitbeian.gov.cn</td>
                                </tr>

                                <tr className="hover:bg-slate-200 dark:hover:bg-slate-700">
                                  <td className="table-td">98</td>
                                  <td className="table-td">Dian</td>
                                  <td className="table-td ">ddopson5@examiner.com</td>
                                </tr>

                                <tr className="hover:bg-slate-200 dark:hover:bg-slate-700">
                                  <td className="table-td">17</td>
                                  <td className="table-td">Coretta</td>
                                  <td className="table-td ">cponter6@loc.gov</td>
                                </tr>

                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
  )
}

export default Basic_table