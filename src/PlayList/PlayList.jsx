import React from 'react';
import TrackList from '../TrackList/TrackList';
import styles from './PlayList.module.css';
function PlayList(props) {
    const bgColor = {backgroundColor: "#104210"}; 
    return (
        <div>
            <form>
                <label htmlFor="title"><h2>My current playlist</h2></label>
                <input id="title" className={styles.input} type="text" onChange={props.changeHandler} value={props.plInput} placeholder="Enter playlist title"/>
                <button className={styles.button} style={{marginBottom: "1.5rem"}} type="submit" onClick={props.clickSaveSpotify}>SAVE TO SPOTIFY</button>
            </form>
            <TrackList list={props.data} bgColor={bgColor} button="REMOVE FROM PLAYLIST" handleClick={props.removeFromPlayList} playHandle={props.play}/>
        </div>
    );
}
export default PlayList;