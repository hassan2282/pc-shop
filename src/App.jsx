import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Index from './components/Index';
import Profile from './components/profile';
import Register from './components/Register';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter >
    
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter >
  )
}

export default App
