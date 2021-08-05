import React from "react";
import './Search.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({onChange,searchInput}) => {
  

  return (
    <div className="search-bar">
      <form >
        <input
          type='text'
          onChange={onChange}
          value={searchInput}
          placeholder=" Search..."
          className="search-bar-input"
        />
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          color="black"
          className="search-icon"
        />
      </form>
    </div>
  );
};

export default Search;
