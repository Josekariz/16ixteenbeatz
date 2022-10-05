import React, { useEffect, useState } from "react";
function MusicList({ search }) {
  const [songList, setsongList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/tracks")
      .then((res) => res.json())
      .then((data) => {
        setsongList(data);
      });
  }, []);

  const listDiv = songList
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(search);
    })
    .map((song) => {
      return (
        <div key={song.id} className="audioCard">
          <h6>{song.name}</h6>
          <img height={"100px"} width={"100px"} src={song.image} alt="music" />
          <audio controls>
            <source src={song.music} type="audio/ogg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      );
    });

  return (
    <div className="musiclist">
      <h2>Your tracks</h2>
      {listDiv}
    </div>
  );
}

export default MusicList;
