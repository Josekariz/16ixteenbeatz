import React from "react";
function Search({ search, setSearch }) {
  return (
    <div className="search">
      Search
      <input
        type="text"
        placeholder="search your music"
        onChange={(e) => {
          setSearch(e.target.value);
          console.log(search);
        }}
      />
      <span className="material-symbols-outlined">search</span>
    </div>
  );
}

export default Search;
