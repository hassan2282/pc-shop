import { useEffect, useState } from 'react';
import OrderSideBar from '../structure/OrderSideBar'
import apiClient from '../apiClient';

function Address() {
const [provinces, setProvinces] = useState();
const [cities, setCities] = useState();

useEffect(() => {

    const fetchProvinces = async () => {
        try {
            const res =await apiClient.get('provinces');
            setProvinces(res.data)
        }catch(err){
            console.log(err)
        }
    }
    
    fetchProvinces();
},[]);



const provinceHandler = async (e) => {
    const provinceId = e.target.value;

    try {
        const fetchCities = await apiClient.get(`cities/${provinceId}`);
        setCities(fetchCities.data);
    }catch (err) {
        console.log(err)
    }
}

  return (
    <div>

        <main className="profile-user-page default  space-top-30">
            <div className="container">
                <div className="row">
                    <div className="profile-page col-xl-9 col-lg-8 col-md-12 order-2">
                        <div className="row">
                            <div className="col-12">
                                <header className="card-header">
                                    <h3 className="card-title"><span>ثبت آدرس</span></h3>
                                </header>
                                <div className="content-section default">
                                    <form method="get" >
                                        <p>لطفا آدرس محل سکونت یا محل کار خود را با دقت وارد نمایید</p>
                                      
                                            <div className="row">
                                                <div className="col-md-3 col-12"></div>
                                                    <div className="col-md-6 col-12 text--center" >
                                                        <div >
                                                            <label className="ui-input">
                                                                <select onChange={provinceHandler} className="input_second input_all" name='postCode' type="number" placeholder="استان">
                                                                    {
                                                                        provinces &&

                                                                        provinces.map((item) => {
                                                                            return (
                                                                                <option key={item.id} value={item.id}>{item.name}</option>
                                                                            )
                                                                        })

                                                                    }
                                                                </select>
                                                            </label>
                                                        </div>
                                                        <div >
                                                            <label className="ui-input">
                                                                <select className="input_second input_all" name='postCode' type="number" placeholder="شهر ها">
                                                                    {
                                                                        cities &&
                                                                        cities.map((item) => {
                                                                            return (
                                                                                <option key={item.id} value={item.id}>{item.name}</option>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            </label>
                                                        </div>
                                                        
                                                        <div >
                                                            <label className="ui-input">
                                                                <input className="input_second input_all" name='postCode' type="number" placeholder="کد پستی"/>
                                                            </label>
                                                        </div>
                                                        <div >
                                                            <label className="ui-input">
                                                                <textarea className="input_second input_all" placeholder="آدرس دقیق : "/>
                                                            </label>
                                                        </div>

                                                        <div >
                                                            <a  href="" data-toggle="modal" data-target="#returnModal" type="submit" className="btn big_btn btn-main-masai">بررسی محصول</a>
                                                        </div>
                                                    </div>
                                                <div className="col-md-3 col-12"></div>

                                                </div>
                                         
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <OrderSideBar />
                </div>
            </div>
        </main>    

    </div>
  )
}

export default Address;