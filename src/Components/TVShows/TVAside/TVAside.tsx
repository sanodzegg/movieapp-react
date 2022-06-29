import React from "react";

import { ReactComponent as SearchIcon } from '../../../assets/icons/search-thick.svg';

import { NavLink } from "react-router-dom";

import "./TVAside.css";
import TVAsideNavigation from "./Navigation/TVAsideNavigation";
import TVAsideSpotlight from "./Spotlight/TVAsideSpotlight";

export default function TVAside() {
  return (
    <aside className="tvAsideWrapper">
        <div className="tvAsideInput">
            <input type="text" placeholder="Search movies..."/>
            <div className="searchIconWrapper">
                <SearchIcon />
            </div>
        </div>
        <TVAsideNavigation />
        <TVAsideSpotlight />
    </aside>
  );
}
