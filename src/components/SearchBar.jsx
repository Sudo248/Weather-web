import React, { useState } from "react";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import "./SearchBar.css";

const SearchBar = function SearchBar(props) {
  const [input, setInput] = useState("");
  return (
    <div className="input-wrapper">
      <input
        type="search"
        className="form-control"
        placeholder="Search your Address, City or Zip Code"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchOutlined
        onClick={() => {
          console.log(input);
        }}
      />
      
    </div>
  );
};

export default SearchBar;
