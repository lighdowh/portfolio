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
      <div className="skills">
        <div className="skill-card web">
            <h2>Responsive Web Design</h2>
            <img src={image1} alt="HTML5" class="htm"></img>
            <p>HTML 5</p>
            <img src={image2} alt="CSS3" class="cs"></img>
            <p>CSS 3</p>
            <img src={image3} alt="JavaScript" class="js"></img>
            <p>JavaScript</p>
        </div>

        <div class="skill-card pyt">
            <h2>Python</h2>
            <img src={image5} alt="Python" class="py"></img>
        </div>

        <div class="skill-card cp">
            <h2>C Programming</h2>
            <img src={image6} alt="C Programming" class="cpr"></img>
        </div>

        <div class="skill-card git">
            <h2>Version Control (Git)</h2>
            <img src={image4} alt="Git" class="gt"></img>
        </div>
    </div>

        {/* <footer>
            <p>&copy; 2023 K_Chandan_Puthuraya. All rights reserved.</p>
        </footer> */}

    </div>
  );
}

export default Skills;
