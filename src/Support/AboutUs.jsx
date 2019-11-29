import React from 'react';
import styles from './AboutUs.module.css';
import bg from './images/void_bc.png';
import fg from './images/void.png';

const About = () => {
    return (
        <div className={styles.body}>
            <div>
                <img className={styles.background} width="100%" src={bg}></img>
                <img className={styles.word} width="100%" src={fg}></img>
            </div>
        </div>
    )
}

export default About
