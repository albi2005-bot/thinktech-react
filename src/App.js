import { Route, Routes, Outlet, Link } from "react-router-dom";
import React from "react";
import logo from "./download.png";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Events from "./routes/events/events.component";
import Footer from "./routes/footer/footer.component";
import Model from 'react-modal';
import { useState} from 'react';
import { IoMdClose } from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa";
import {useRef} from "react";

import "./navigation.style.scss";




const scrollToPartners = (e) => {
  e.preventDefault(); // Prevent the default link action
  const aboutSection = document.getElementById("partners");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Navigation = () => {
  const [visible,setvisible]=useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const closeMobileNav = () => {
    setIsMobileOpen(false);
  };
  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  
  return (
    <div className="navigation-wrapper">
      <div className={`navigation ${isMobileOpen ? "is-open-nav" : ""}`} >
        <Link className="logo-container" to="/" onClick={closeMobileNav}>
          <img src={logo} alt="Logo" />
        </Link>
        <div className={`nav-links-container ${isMobileOpen ? "is-open" : ""}`}>
          <Link className="nav-link" to="/about" onClick={closeMobileNav}>
            About
          </Link>
          <Link className="nav-link" to="/" onClick={() => {
              
              closeMobileNav();
            }}>
            Partners
          </Link>
          <Link className="nav-link" to="/events">
            Events
          </Link>
          <Link className="nav-link" to="/">
            <button onClick={()=>setvisible(true)} className="stayupdatedbutton">Stay Updated</button>
            <Model isOpen={visible} onRequestClose={()=>setvisible(false)} id="model1">
            <div className="popup">
            <div className="popup__header">
              <div className="popup__headerh2">
                <h2>Subscribe</h2> <br />
                <p className="popup__headerp">to our newsletter and stay updated with new periodical events!</p>
              </div>
              <div className="popup__headerclosebtn">
              <button onClick={()=>setvisible(false)} type="button" className="popup__headerclose" data-bs-dismiss="modal" aria-label="Close" ><IoMdClose /></button>
              </div>
            </div>
            <div className="form__email1">
              <div>    
                        <input type="email" id="email" placeholder="example@hotmail.com" className="inputemail" ></input></div>
                        <div className="subscribebutton">
                    <button onClick={()=>setvisible(true)}  className="subscribebutton1">
                    <FaRegPaperPlane className="paperplane" />
                    </button>
                    </div>    
                        </div>
                        </div>
                        
            </Model>
          </Link>
          
                       
        </div>
        <button class="btn-mobile-nav" onClick={toggleMenu}>
          <svg
            class={`icon-mobile-nav ${isMobileOpen ? "hidden" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#add8e6"
            viewBox="0 0 256 256"
            name="menu-outline"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
          <svg
            class={`icon-mobile-nav ${isMobileOpen ? "" : "hidden"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#add8e6"
            viewBox="0 0 256 256"
            name="close-outline"
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
        </button>

        

      </div>
     
                  
      <Outlet />
    </div>
  );
};


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>  
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />}/>
        <Route index  element={<Footer />} ></Route>
      </Route>
      
      
    </Routes>
  );
};

export default App;


