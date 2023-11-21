import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Home from './component/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/skills' element={<Skills />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/about' element={<About />} />
    

  </Routes>
  </BrowserRouter>

  </div>
  );
}

export default App;
