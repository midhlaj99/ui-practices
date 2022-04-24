import { useState } from "react";
import "./app.scss"

function App() {
  const [slideNumber,setSlideNumber]=useState(0)

  const moveSlide=(dir)=>{
    if(dir==='l'){
      setSlideNumber(slideNumber !==0 ? slideNumber-1 : 2)
    }
    if(dir==='r'){
      setSlideNumber(slideNumber !==2 ? slideNumber+1 : 0)
    }
  }

  return (
    <div className="container">
        <div className="arrow" style={{left:'0'}} onClick={()=>moveSlide('l')}>left</div>
        <div className="wrapper" style={{transform:`translateX(${-100*slideNumber}vw)`}}>
          <div className="slider" style={{background:'red'}}>one</div>
          <div className="slider" style={{background:'yellow'}}>two</div>
          <div className="slider" style={{background:'green'}}>three</div>
        </div>
        <div className="arrow" style={{right:'0'}} onClick={()=>moveSlide('r')}>right</div>
    </div>
  );
}

export default App;
