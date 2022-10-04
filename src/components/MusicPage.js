import React, { useState } from "react";
import Search from "./Search";
function MusicPage() {
  const [search, setSearch] = useState("");
  return (
    <div className="musicpage">
      <h2>music</h2>
      <Search search={search} setSearch={setSearch} />
    </div>
  );
}

export default MusicPage;
