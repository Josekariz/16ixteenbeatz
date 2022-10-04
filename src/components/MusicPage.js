import React, { useState } from "react";
import MusicList from "./MusicList";
import Search from "./Search";
function MusicPage() {
  const [search, setSearch] = useState("");
  return (
    <div className="musicpage">
      <h2>music</h2>
      <Search search={search} setSearch={setSearch} />
      <div className="spit">
        <MusicList search={search} />
      </div>
    </div>
  );
}

export default MusicPage;
