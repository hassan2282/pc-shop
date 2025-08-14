import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Index from './components/Index';
import Profile from './components/profile';
import Register from './components/Register';
import Cart from './components/Cart';
import CategoryBlog from './components/CategoryBlog';
import CategorySearch from './components/CategorySearch';
import SingleProduct from './components/SingleProduct';
import SingleBlog from './components/SingleBlog';
import SuccessfulPayment from './components/SuccessfulPayment';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/category-blog' element={<CategoryBlog />}/>
        <Route path='/category-search' element={<CategorySearch />}/>
        <Route path='/single-product' element={<SingleProduct />}/>
        <Route path='/single-blog' element={<SingleBlog />}/>
        <Route path='/successfull-payment' element={<SuccessfulPayment />}/>
      </Routes>
      <ToastContainer />

    </BrowserRouter >
  )
}

export default App
