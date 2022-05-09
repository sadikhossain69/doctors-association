import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
