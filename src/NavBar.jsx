import React, { useState,useEffect,useRef } from "react";
import "./navbar.scss";

function NavBar() {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = () => setClick(!click);
  const lastScrollY=useRef(80)
  

  useEffect(() => {
    if(typeof window !==undefined){
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  const handleScroll=()=>{
    if(window.scrollY > 80){
      if(window.scrollY > lastScrollY.current){
        setShow(false)
      }else{
        setShow(true)
      }
      lastScrollY.current=window.scrollY
    }else{
      setShow(true)
    }
  }
  return (
      <nav className={`navbar ${!show && 'hide-nav'}`}>
        <div className="nav-container">
          <a exact to="/" className="nav-logo">
            Logo
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-links"
                onClick={handleClick}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </a>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <button>show</button>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;