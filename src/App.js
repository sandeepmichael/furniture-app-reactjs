
import './App.css';
import Header from './components/Header';
import { Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Register from './components/Register';
import PrivateRoute from './components/privateRoute';
import ForgotPassword from './components/ForgotPassword'


function App() {
  return (
    <div className="App">
      <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />}/>
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route exact path='/contact' element={<Contact />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
      </Routes>
      <ToastContainer />
      </>
    </div>
  );
}

export default App;
