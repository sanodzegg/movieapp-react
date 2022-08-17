import React, { useState } from "react";

import { ReactComponent as SearchIcon } from '../../../assets/icons/search-thick.svg';

import "./TVAside.css";
import TVAsideNavigation from "./Navigation/TVAsideNavigation";
import TVAsideSpotlight from "./Spotlight/TVAsideSpotlight";
import { search } from "../../../getData";
import { useNavigate } from "react-router-dom";

export default function TVAside() {

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (value:string) => {
    if(value !== "") {
      setSearchTerm(value);
    } else {
      setSearchTerm("");
    }
  }

  const handleKeyUp = async (key: string) => {
    if (key === "Enter" && searchTerm !== "") {
      await search(searchTerm);
      navigate(`/search?q=${searchTerm}`);
    }
  }

  return (
    <aside className="tvAsideWrapper">
        <div className="tvAsideInput">
            <input type="text" placeholder="Search movies..." onChange={(e) => handleInput(e.target.value)} onKeyUp={(e) => handleKeyUp(e.key)} />
            <div className="searchIconWrapper">
                <SearchIcon />
            </div>
        </div>
        <TVAsideNavigation />
        <TVAsideSpotlight />
    </aside>
  );
}
