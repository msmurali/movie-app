import React, { useEffect, useState } from "react";
import "./navBarStyles.css";
import { IconContext } from "react-icons";
import { HiMenuAlt2 } from "react-icons/hi";

const NavBar = () => {
  const [scrollVal, setScrollVal] = useState(window.scrollY);

  const iconStyles = {
    color: "white",
  };

  useEffect(() => {
    
    window
    .addEventListener("scroll", scrollHandler);
    
    document
    .querySelector('.hamburger-menu')
    .addEventListener('click',menuHandler)

  }, []);

  const scrollHandler = () => {
    setScrollVal(window.scrollY);
  };

  const menuHandler = () =>{
      document.querySelector('.navList').classList.toggle('menu-open')
  }


  return (
    <nav className={`nav ${scrollVal > 100 ? "" : "transparent"}`}>
      <div className="logo">
        SHOW
        <br/>
        TIME
      </div>
      <div>
      <div className="hamburger-menu">
        <IconContext.Provider value={iconStyles}>
          <HiMenuAlt2 size={"1.8rem"} />
        </IconContext.Provider>
      </div>
      <ul className="navList">
          <li className="navLink">Sign up</li>
          <li className="navLink">Sign in</li>
      </ul>
      </div>
    </nav>
  );
};

export default NavBar;
