import React from "react";

// router components
import LandingView from "../../Views/Landing/LandingView";

import { NavLink } from "react-router-dom";

import "./Header.css";
import { ReactComponent as SiteLogo } from '../../assets/Logo-1.svg';

export default function Header() {
  return <div className="navWrapper">
    <nav className="mainHeader">
        <NavLink to="/"><SiteLogo className="headerLogo"/></NavLink>
            <ul>
                <li><NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink></li>
                <li><NavLink to="/tvshows" className={({isActive}) => (isActive ? "active" : "")}>TV Shows</NavLink></li>
                <li><NavLink to="/discover" className={({isActive}) => (isActive ? "active" : "")}>Discover</NavLink></li>
                <li><NavLink to="/about" className={({isActive}) => (isActive ? "active" : "")}>About Us</NavLink></li>
                <li><NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>Contact</NavLink></li>
            </ul>
    </nav>
  </div>;
}
