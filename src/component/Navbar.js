import React from 'react'
import '../CSS/Navbar.css'
import { useEffect,useState } from 'react'
import ham from '../images/hamburger.png'
import { Link,useLocation } from 'react-router-dom';

function Navbar() {
  const [mobile,setmobile]=useState(false);
  const[activeNav,setactiveNav]=useState(true);
  const location=useLocation();
  useEffect( () =>{
    setactiveNav(location.pathname);
  },[location]);
  const hamburger = (value) => {
    setmobile(value);
  }
  return(
    <div className="navbar" id="nav">
      <ul className='chn'>
        { activeNav=='/'?
          ""
          :
        <Link className="#home" to={'/'}  >Home</Link>
        
        }
        { activeNav=='/About'?
        ""
        :
        <Link className="#about" to={'/About'}>About</Link>
       
        }

        { activeNav=='/skills'?
        ""
        :
        <Link className="#skills" to={'/skills'} >Skills</Link>
        
        }
        
        { activeNav=='/contact'?
        ""
        :
        <Link className="#contact" to={'/contact'} >Contact</Link>
       
        }
        
        </ul>
        {
          !mobile?
        <div className="mobile">
        <img src={ham} onClick={() => hamburger(true)}  className="btn"></img>
          </div>
          :
          ""
}

{          mobile ?
        <div id="mySidebar" className="sidebar">
          <span className="closebtn" onClick={() => hamburger(false)}>x</span>
        <ul className="align"> 
      { activeNav=='/'?
      ""
      :
        <li><Link className='#home' to={'/'} onClick={() => hamburger(false) }>Home</Link></li>
      }
      { activeNav=='/about'?
      ""
      :
        <li><Link className="#about" to={'/about'}onClick={() => hamburger(false) }>About</Link></li>
    }
    { activeNav=='/skills'?
    ""
    :
        <li><Link className="#skills" to={'/skills'} onClick={() => hamburger(false)} >Skills</Link></li>
  }
  { activeNav=='/contact'?
  ""
  :
        <li><Link className="#contact" to={'/contact'}onClick={() => hamburger(false)}>Contact</Link></li>
}
        </ul>
        </div>
        :
        ""
       

}


      </div>
      
  );
}

export default Navbar
