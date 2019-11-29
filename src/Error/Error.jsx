import React from 'react';
import styles from './Error.module.css';
import img from "./404.png";

const Error = () => {
    return (
        <div className={styles.background}>
            <img width="100%" src={img}></img>
        </div>
    )
}

export default Error
