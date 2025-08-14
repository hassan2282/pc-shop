import './index.css'
// import { FaBeer } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './components';
import Index from './components';
import Profile from './components/profile';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter >
    
        {/* <FaBeer /> */}
       
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>
        {/* <Route path='/partner/edit/:id' element={<Edit />}/> */}
        
      </Routes>
      <ToastContainer />
    </BrowserRouter >
  )
}

export default App
