import React from "react";

import { NavLink } from "react-router-dom";

export default function TVAsideNavigation() {
  return (
    <div className="tvAsideNavigation">
    <p>Navigate:</p>
    <ul>
        <li><NavLink to="/tvshows" className={({isActive}) => (isActive ? "active" : "")}>Show All TV Shows</NavLink></li>
        <li><NavLink to="/featured" className={({isActive}) => (isActive ? "active" : "")}>Featured</NavLink></li>
        <li><NavLink to="/author-picks" className={({isActive}) => (isActive ? "active" : "")}>Author Picks</NavLink></li>
        <li><NavLink to="/discover" className={({isActive}) => (isActive ? "active" : "")}>Discover</NavLink></li>
    </ul>
    </div>
  );
}
