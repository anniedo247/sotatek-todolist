import React, { useState } from "react";
import './Search.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({onSubmit,onChange,searchInput}) => {
  

  return (
    <div className="search-bar">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={searchInput}
          placeholder=" Search..."
          className="search-bar-input"
        />
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          color="black"
          style={{
            position: "absolute",
            right: "20px",
            top: "30%",
            transform: "translateY(-50%)",
          }}
        />
      </form>
    </div>
  );
};

export default Search;
