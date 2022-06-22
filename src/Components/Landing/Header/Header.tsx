import React from "react";

// router components
import LandingView from "../../../Views/LandingView";

import { NavLink } from "react-router-dom";

import "./Header.css";
import { ReactComponent as SiteLogo } from '../../../assets/Logo-1.svg';

export default function Header() {
  return <div className="navWrapper">
    <nav className="mainHeader">
        <SiteLogo className="headerLogo"/>
            <ul>
                <li><NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink></li>
                <li><NavLink to="/reviews" className={({isActive}) => (isActive ? "active" : "")}>Reviews</NavLink></li>
                <li><NavLink to="/discover" className={({isActive}) => (isActive ? "active" : "")}>Discover</NavLink></li>
                <li><NavLink to="/about" className={({isActive}) => (isActive ? "active" : "")}>About Us</NavLink></li>
                <li><NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>Contact</NavLink></li>
            </ul>
    </nav>
  </div>;
}
