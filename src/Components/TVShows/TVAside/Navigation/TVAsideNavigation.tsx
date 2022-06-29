import React from "react";

import { NavLink } from "react-router-dom";

export default function TVAsideNavigation() {
  return (
    <div className="tvAsideNavigation">
    <p>Navigate:</p>
    <ul>
        <li><NavLink to="/tvshows" className={({isActive}) => (isActive ? "active" : "")}>Show All TV Shows</NavLink></li>
        <li><NavLink to="/new-reviews" className={({isActive}) => (isActive ? "active" : "")}>New Reviews</NavLink></li>
        <li><NavLink to="/author-picks" className={({isActive}) => (isActive ? "active" : "")}>Author Picks</NavLink></li>
        <li><NavLink to="/cinema-favorites" className={({isActive}) => (isActive ? "active" : "")}>Cinema Favorites</NavLink></li>
        <li><NavLink to="/top100list" className={({isActive}) => (isActive ? "active" : "")}>Top 100 List</NavLink></li>
        <li><NavLink to="/discover" className={({isActive}) => (isActive ? "active" : "")}>Discover</NavLink></li>
    </ul>
    </div>
  );
}
