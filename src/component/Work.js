import React from 'react'
import Card from './Card'
import image1 from '../images/htm.svg'
import image2 from '../images/cs3.svg'
import image3 from '../images/js.svg'
import image4 from '../images/download (3).png'
import image5 from '../images/download (4).png'
import image6 from '../images/download (5).png'
import java from '../images/download (6).png'
import '../CSS/Work.css'

function Work() {
    const skillp=[
        {
            id:1,
            H:"Web Development Design",
            P:"HTML , CSS, JavaScript",
            I1: image1,
            I2:image2,
            I3:image3
            
        },
        {
          id:2,
          I:image2 
          
        },
      
    ]

  return (
    <div className='wor'>
      {
        skillp.map((item)=> (
            <Card skillp={item} />
        ))
      }
    </div>
  )
}

 

export default Work
