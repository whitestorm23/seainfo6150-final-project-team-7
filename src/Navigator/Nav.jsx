import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from './Nav.module.css';
import icon from './dota2.png';

const Navigator = () => {
    return (
        <div className={styles.background}>
            <img src={icon}></img>
            <ul className={styles.ul}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/foo">News</Link>
                </li>
                <li>
                    <Link to="/bar/hats/sombrero">Heroes</Link>
                </li>
                <li>
                    <Link to="/baz">Tournaments</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigator