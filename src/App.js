import '../src/CSS/App.css';
import '../src/CSS/Navbar.css';
import Navbar from './Pages/Navbar';
import Login from './Pages/Login';
import Signup from './Pages/SignUP';
import Sell from './Pages/Sell'
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/sell' element={<Sell/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}
export default App;
