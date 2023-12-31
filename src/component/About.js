import React from 'react'
import '../CSS/About.css'
import image7 from '../images/logo.jpg'

function About() {
  return (
    <div>
    
        <header>
        <img src={image7}></img>
            <h1>K Chandan Puthuraya</h1>
            <p>Web Developer</p>
        </header>
    
        <section class="about-me">
            <h2><u>About Me</u></h2>
            <p>
                Welcome to my portfolio! I'm a passionate web developer with a strong background in HTML, CSS, and JavaScript.
                I love creating responsive and user-friendly websites. When I'm not coding, you can find me exploring new technologies
                and staying up-to-date with the latest trends in web development.
            </p>
        </section>
    
    
        {/* <footer>
            <p>&copy; 2023 K_Chandan_Puthuraya. All rights reserved.</p>
        </footer> */}
    </div>
  );
}

export default About;
