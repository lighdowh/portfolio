import React from 'react'
import '../CSS/Home.css'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'

function Home() {
  return (
    <div>


  {/* <header>
            <img src={image7}></img>
            <h1>K Chandan Puthuraya</h1>
            <p>Web Developer</p>
        </header> */}
    <About />
    <Skills />
    <Contact />
    

    <footer>
    <p>&copy; 2023 K_Chandan_Puthuraya. All rights reserved.</p>
    </footer>




    </div>
  );
}

export default Home
