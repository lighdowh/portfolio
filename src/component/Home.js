import React from 'react'
import '../CSS/Home.css'
import '../CSS/About.css'
import '../CSS/Skills.css'
import image1 from '../images/download.png'
import image2 from '../images/download (1).png'
import image3 from '../images/download (2).png'
import image4 from '../images/download (3).png'
import image5 from '../images/download (4).png'
import image6 from '../images/download (5).png'
import '../CSS/Contact.css'
import image7 from '../images/logo.jpg'

function Home() {
  return (
    <div>
<body>

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

        {/* <section className='fea'>
            <h2>Featured Content</h2>
            <p>Check out the amazing features of this home page!</p>
        </section> */}


        <section className="skills">
            <h2><u>Skills</u></h2>
            <ul>
                <div className="web"><li><h2><u>Responsive Web Design</u></h2></li>
                <img src={image1} className='htm'></img>  HTML5
                <img src={image2}className='cs'></img>  CSS 3
                <img src={image3} className='js'></img>  JavaScript
                </div>
                <div className="pyt"><li><h2><u>Python</u></h2>  <img src={image5} className='py'></img></li></div>
                <div className='cp'><li><h2><u>C programming</u></h2> <img src={image6} className='cpr'></img></li></div>
                <div className='git'><li><h2><u>Version Control (Git)</u></h2><img src={image4} className='gt'></img></li></div>
            </ul>
        </section>




        <section class="contact_me">
            <h2><u>Contact</u></h2>
            <p>Email: kchandanputhuraya@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/K_Chandan_Puthuraya </p>
        </section>
    

    <footer>
    <p>&copy; 2023 K_Chandan_Puthuraya. All rights reserved.</p>
    </footer>

</body>


    </div>
  );
}

export default Home
