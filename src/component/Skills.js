import React from 'react'
import image1 from '../images/download.png'
import image2 from '../images/download (1).png'
import image3 from '../images/download (2).png'
import image4 from '../images/download (3).png'
import image5 from '../images/download (4).png'
import image6 from '../images/download (5).png'
import '../CSS/Skills.css'
function Skills() {
  return (
    <div className='ski'>
      <section className="skills">
            <h2><u>Skills</u></h2>
            <ul>
                <div className="web"><li><h2><u>Responsive Web Design</u></h2></li>
                <img src={image1} className='htm'></img>   
                <p>HTML 5</p>
                <img src={image2}className='cs'></img>
                <p>CSS 3</p>  
                <img src={image3} className='js'></img>
                <p>JavaScript</p>
                </div>
                <div className="pyt"><li><h2><u>Python</u></h2>  <img src={image5} className='py'></img></li></div>
                <div className='cp'><li><h2><u>C programming</u></h2> <img src={image6} className='cpr'></img></li></div>
                <div className='git'><li><h2><u>Version Control (Git)</u></h2><img src={image4} className='gt'></img></li></div>
            </ul>
        </section>

        <footer>
            <p>&copy; 2023 K_Chandan_Puthuraya. All rights reserved.</p>
        </footer>

    </div>
  );
}

export default Skills;
