import React from 'react';
import styles from './Button.module.css';

function Button({identifier, handleClick, children}) {

    return <button className={styles.button} value={identifier} onClick={handleClick}>{children}</button>;
}

export default Button;