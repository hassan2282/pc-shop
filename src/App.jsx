import './index.css'
import { FaBeer } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Index from './components'


function App() {
  return (
    <BrowserRouter >
    
        {/* <FaBeer /> */}
       
      <Routes>
        <Route path='/' element={<Index />}/>
        {/* <Route path='/partner/edit/:id' element={<Edit />}/> */}
        
      </Routes>
      <ToastContainer />
    </BrowserRouter >
  )
}

export default App
