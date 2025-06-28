import React from 'react';
import styles from './Track.module.css';

function Track({object, color}) {
    const artists = object.artists.map(item => <li key={item.id}>{item.name}</li>);
    const duration_ms = object.duration_ms;
    const minutes = Math.floor(duration_ms / 60000);
    const seconds = Math.round((duration_ms % 60000) / 1000);

    return (
        <article className={styles.trackbox} style={color}>
            <div className={styles.name}>{object.name}</div>
            <div className={styles.artist}><span>performed by:</span><ul>{artists}</ul></div>
            <div className={styles.album}><span>album:</span> {object.album.name} <span> released: </span>{object.album.release_date}</div>
            <div className={styles.duration}><span>duration:</span> {minutes + ":" + (seconds < 10 ? "0" + seconds : seconds)}</div>
        </article>
    );
}

export default Track;