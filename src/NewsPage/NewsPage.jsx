import React from 'react';
import classes from './News.module.css';
import mainPhoto from './mainpage.jpg';


const NewsPage = () => {
    return (
        <div className={classes.background_image}>
            <div>
                <h3 className={classes.slogan}>Dota2 News in 2019</h3>
                <a href="#car-category">
                    <img className={classes.main_picture}
                        src={mainPhoto}
                        alt="Main" />
                </a>
            </div>
            <body>
                <p>
                    <a href="https://dotesports.com/dota-2/news/mdl-chengdu-major-main-event-results-and-matchups" className={classes.slogan}>MDL Chengdu Major main event results and matchups: Day 3!</a> </p>
                <p><a href="https://dotesports.com/dota-2/news/beastcoast-tyrannizes-fighting-pandas-and-secures-top-eight-at-the-mdl-chengdu-major/" className={classes.slogan}>Beastcoast tyrannizes Fighting PandaS and secures top eight at the MDL Chengdu Major</a> 
                    </p>
            </body>
            <div id="car-category">
                <h3 className={classes.slogan}>The dota2 News in 2019</h3>
                <div className={classes.wrapping}>

                </div>
            </div>
        </div>
    )
}

export default NewsPage
