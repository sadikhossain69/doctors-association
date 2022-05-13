import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <>
      <div className=' max-w-7xl mx-auto'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/appointment' element={<Appointment/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
