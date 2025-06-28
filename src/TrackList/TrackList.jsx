import React from 'react';
import Track from '../Track/Track';
import Button from '../Button/Button';
import styles from './TrackList.module.css';

function TrackList({list, bgColor, button, handleClick, playHandle}) {
    return (
        <ul>
            {
                list.map((track, index) => <li className={styles.container} style={bgColor} key={index}><img className={styles.image} src={track.album.images[0].url} alt="album  cover"/><div className={styles.track}><Track object={track} color={bgColor}/></div><div className={styles.add_btn}><Button identifier={track.id} handleClick={handleClick}>{button}</Button></div><div className={styles.play_btn}><Button identifier={track.id} handleClick={playHandle}>PLAY</Button></div></li>)
            }
        </ul>
    );
}

export default TrackList;