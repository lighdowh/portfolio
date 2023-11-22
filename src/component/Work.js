import React from 'react'
import Card from './Card'
import image1 from '../images/htm.svg'
import image2 from '../images/cs3.svg'
import image3 from '../images/js.svg'
import image4 from '../images/java.svg'
import image5 from '../images/cp.svg'
import image6 from '../images/pyth.svg'
import image7 from '../images/git.svg'

function Work() {
    const skillp=[
        {
            id:1,
            H:"Skills",
            P:"HTML , CSS , JavaScript , JAVA , C , PYTHON , VERSION CONTROL(GIT) ",
            I1:image1,
            I2:image2,
            I3:image3,
            I4:image4,
            I5:image5,
            I6:image6,
            I7:image7,
            
        },
        {
          id:2,
          H:"Certifications",
          P:"1.) Completed various courses on coursera like C programming, Scratch , HTML CSS and JavaScript",
          P1:"2.)Completed a bootcamp session in Lets Upgrade of JavaScript "
          
        },
      
    ]

  return (
    <div>
      {
        skillp.map((item)=> (
            <Card skillp={item} />
        ))
      }
    </div>
  )
}

 

export default Work
