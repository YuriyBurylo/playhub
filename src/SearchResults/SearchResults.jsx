import React from 'react';
import TrackList from '../TrackList/TrackList';
import styles from './SearchResults.module.css';
function SearchResults(props) {
    return (
        <div className={styles.background}>
            <h2 className={styles.heading}>Search results</h2>
            <TrackList list={props.data} button="ADD TO PLAYLIST" handleClick={props.addToPlayList} playHandle={props.play}/>
        </div>
    );
}
export default SearchResults;  