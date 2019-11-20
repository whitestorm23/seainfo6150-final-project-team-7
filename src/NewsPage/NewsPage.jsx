import React from 'react';
import classes from './Home.module.css';
import mainPhoto from './mainpage.jpg';
import Footer from '../public/Footer';
let Data = require('./../data/categories.json');


const NewsPage = () => (
    <div className={classes.background_image}>
        <div>
            <h3 className={classes.slogan}>Dota2 News in 2019</h3>
            <a href="#car-category">
                <img className={classes.main_picture}
                    src={mainPhoto}
                    alt="Main" />
            </a>
        </div>
        <div id="car-category">
            <h3 className={classes.slogan}>The dota2 News in 2019</h3>
            <div className={classes.wrapping}>

            </div>
        </div>
        <Footer />
    </div>
);

export default NewsPage;
