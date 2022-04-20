import React from 'react'
import "./intro2.scss"
import Animated from "../Animated"

function intro2() {
  return (
    <div className='intro2' id='intro2'>
      <Animated/>
      <div className='introshape'></div>
      <div className="left">
        <h2>Adventure in creative age</h2>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className="right">
        <img src="assets/man.png" alt="" />
      </div>
    </div>
  )
}

export default intro2