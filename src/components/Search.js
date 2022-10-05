import React from "react";
function Search({ search, setSearch }) {
  return (
    <div className="search">
      <br/>
      <input
        type="text"
        placeholder="search your music"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <br/>
    </div>
  );
}

export default Search;
