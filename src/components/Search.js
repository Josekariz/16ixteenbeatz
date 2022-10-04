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
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
