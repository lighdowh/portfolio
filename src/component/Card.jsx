import React from 'react'
import '../CSS/Card.css'
function Card({ skillp }) {
  return (
    <div className="card1">
      <h1 className='head'>{skillp.H}</h1>
      <p className='H1'>{skillp.P}</p>
      <p className='H1'>{skillp.P1}</p>
      <img src={skillp.I1}></img>
      <img src={skillp.I2}></img>
      <img src={skillp.I3}></img>
      <img src={skillp.I4}></img>
      <img src={skillp.I5}></img>
      <img src={skillp.I6}></img>
      <img src={skillp.I7}></img>
    </div>
  )
}

export default Card
