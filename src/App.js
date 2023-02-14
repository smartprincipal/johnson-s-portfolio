import logo from './logo.svg';
import './App.css';
import Overlay from './Components/Overlay/Overlay';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Overlay>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Overlay>
      </BrowserRouter>
  );
}

export default App;
