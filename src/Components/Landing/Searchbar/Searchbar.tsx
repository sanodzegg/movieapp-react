import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search-thick.svg";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";
import { search } from '../../../getData';

export default function Searchbar() {

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);

  const handleInput = (value:string) => {
    if(value !== "") {
      setSearchTerm(value);
      setSearching(true);
    } else {
      setSearching(false);
      setSearchTerm("");
    }
  }

  const handleKeyUp = async (key:string) => {
    if(key === "Enter" && searchTerm !== "") {
      await search(searchTerm);
      navigate(`/search?q=${searchTerm}`);
    }
  }

  return (
    <div className="searchBarWrapper">
        <p>Looking for something else? Search for movies:</p>
        <input type="text" placeholder='Try "The Lord of the Rings"' onChange={(e) => handleInput(e.target.value)} onKeyUp={(e) => handleKeyUp(e.key)} />
        <SearchIcon className={searching ? "searching" : ""} />
    </div>
  );
}
