import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Home from './component/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Work from './component/Work';
import Footer from './component/Footer';

function App() {
  return (
    <div>
  <BrowserRouter>
  <Navbar />
 
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/work' element={<Work />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/about' element={<About />} />
    {/* <Route path='/work' element={<Work />} /> */}
    

  </Routes>
  <Footer />
  </BrowserRouter>

  </div>
  );
}

export default App;
