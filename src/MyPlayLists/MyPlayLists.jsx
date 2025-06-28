import React from "react";
import Button from "../Button/Button";
import styles from "./MyPlayLists.module.css";
import image from "../images/playlist.jpeg";

function MyPlayLists({ data, changePlaylistTitle, rename, play, downloadMyPlaylists }) {

  return (
    <div>
      <h2>My playlists at Spotify</h2>
      <div className={styles.download}>
        <Button handleClick={downloadMyPlaylists}>DOWNLOAD</Button>
      </div>
      <ul>
        {data? data.map((playlist, index) => (
          <li key={index}>
            <form className={styles.container}>
              <img className={styles.image} src={image} height="110px" width="110px" alt="playlist cover" />
              <input className={styles.name} onChange={changePlaylistTitle} placeholder={playlist.name}/>
              <div className={styles.tracks}>{playlist.tracks.total} tracks</div>
              <div className={styles.rename}>
                <Button identifier={playlist.id} handleClick={rename}>
                  RENAME
                </Button>
              </div>
              <div className={styles.play}>
                <Button identifier={playlist.id} handleClick={play}>
                  PLAY
                </Button>
              </div>
            </form>
          </li>
        )):"Click on the 'DOWNLOAD' button to see your playlists"}
      </ul>
    </div>
  );
}

export default MyPlayLists;
