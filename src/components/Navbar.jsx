import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { Menulist } from "./Menuitems";

const Navbar = () => {
  const [isBarsClicked, setIsBarsClicked] = useState(true);

  const toggleIcon = () => {
    setIsBarsClicked(!isBarsClicked);
  };
  

  return (
    <nav className="NavbarItems">
      <div className="logo1">
        <h3 className="logo">TripVilla</h3>
      </div>
      <div className="menu-icons" onClick={toggleIcon}>
        {isBarsClicked ? (
          <i className="fas fa-bars"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </div>
      <div>
      <ul className={isBarsClicked ?  "nav-menu" : "nav-menu active"}>
        {Menulist.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cname} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
            
          );
        })}
        <button>Sign Up</button>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
