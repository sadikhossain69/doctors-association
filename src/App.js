import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Navbar from './Pages/Shared/Navbar/Navbar';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <>
      <div className=' max-w-7xl mx-auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/appointment' element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          } />
          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<MyAppointments />} />
            <Route path='review' element={<MyReview />} />
            <Route path='users' element={<Users />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
