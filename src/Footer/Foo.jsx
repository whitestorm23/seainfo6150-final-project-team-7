import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from './Foo.module.css';
import icon1 from './valve.png';
import icon2 from './dota2.png';

const Footer = () => {
    return (
        <div className={styles.background}>
            <ul className={styles.icons}>
                <li><img src={icon2}></img></li>
                <li><img height="33px" width="115.13px"  src={icon1}></img></li>
            </ul>
            <ul className={styles.ul}>
                <li>
                    <Link to="/AboutUs">About Us</Link>
                </li>
                <li>
                    <Link to="/ContactUs">Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer