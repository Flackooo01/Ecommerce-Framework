
// import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ShopCategory from './Pages/ShopCategory';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
// import Logout from './Pages/LoginSignup';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {

  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Keyboard' element={<ShopCategory banner="Keyboard" category="Keyboard"/>}/>
        <Route path='/Headset' element={<ShopCategory banner="Headset" category="Headset"/>}/>
        <Route path='/Mouse' element={<ShopCategory banner="Mouse" category="Mouse"/>}/>
        <Route path='/PsController' element={<ShopCategory banner="PS Controller" category="PsController"/>}/>
        <Route path='/Microphone' element={<ShopCategory banner="Microphone" category="Microphone"/>}/>

        <Route path='/product' element={<Product/>} >
          <Route path=':ProductId' element={<Product/>}/>
        </Route>

        <Route path='/Profile' element={<Profile/>}/>

        <Route path='/Cart' element={<Cart/>}/>

        {/* <Route path='/LoginSetup' element={<LoginSignup/>}/> */}
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
