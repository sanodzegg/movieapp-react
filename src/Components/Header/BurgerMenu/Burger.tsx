import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Burger.css";

export default function Burger() {

    const [showBurger, setShowBurger] = useState(false);

    const burgerButton = useRef<HTMLDivElement>(null);

    const handleShowBurger = () => {
        if(!showBurger) {
            setShowBurger(true);
            burgerButton.current!.style.backgroundColor = "#8D9EAC";
        } else {
            setShowBurger(false);
            burgerButton.current!.style.backgroundColor = "#081B27";
        }
    }

  return (
    <>
        <div className="burgerMenu" onClick={handleShowBurger} ref={burgerButton}></div>
        {showBurger && 
        <ul className="burgerList">
            <li><NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink></li>
            <li><NavLink to="/tvshows" className={({isActive}) => (isActive ? "active" : "")}>TV Shows</NavLink></li>
            <li><NavLink to="/discover" className={({isActive}) => (isActive ? "active" : "")}>Discover</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => (isActive ? "active" : "")}>About Us</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>Contact</NavLink></li>
        </ul>}
    </>
  );
}
