import React from 'react';
import Button from '../Button/Button';
import styles from './SearchBar.module.css';
function SearchBar(props) {
    return (
        <form>
            <label htmlFor="input"><h2>Search for music here</h2></label>
            <input id="input" className={styles.input} type="text" onChange={props.handleInput} value={props.value} placeholder='Enter your request'/>
            <Button  handleClick={props.makeRequest}>SEARCH</Button>
        </form>
    )
}

export default SearchBar;