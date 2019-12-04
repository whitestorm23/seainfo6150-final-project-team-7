import React from 'react';
import classes from './News.module.css';
import mainPhoto from './mainpage.jpg';
import styles from './Home.module.css';
import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.png';
import photo4 from './photo4.jpg';
import photo5 from './photo5.png';
import photo6 from './photo6.jpg';
import photo7 from './photo7.png';
import photo8 from './photo8.jpg';
import photo9 from './photo9.jpg';
import photo10 from './photo10.png';
import photo11 from './photo11.jpg';
import photo12 from './photo12.png';
import photo13 from './photo13.png';
import photo14 from './photo14.png';
import photo15 from './photo15.jpg';
import photo16 from './photo16.png';


const NewsPage = () => {
    return (
        <div className={classes.background_image}>
            <div>
               
                <a href="#car-category">
                    <img className={classes.main_picture}
                        src={mainPhoto}
                        alt="Main" />
                </a>
                <h3 className={classes.slogan}>The Dota2 News in 2019</h3>
            </div>
            <body className={classes.flexContainer}>                 
                        <div class="right-title">
                    <h3 className={classes.slogan2}>News</h3>
                            
                        </div>
                        <ul className={classes.textArea}>
                    <li><a href="/voidSpirit" className={classes.main_picture}><img src={photo1} width="300" height="200" /></a><span class="news-time">11-13</span><a href="/voidSpirit">Dota 2's latest update fixes Snapfire bug, nerfs Void Spirit</a><a href="#">.</a></li>
                    <li><a href="#" className={classes.main_picture}><img src={photo2} width="300" height="200" /></a><span class="news-time">11-13</span><a href="#">More than 40% of pro Dota 2 matches have ended before or at 30 minutes post in 7.23 update</a> | <a href="#"></a></li>
                    <li><a href="#" className={classes.main_picture}><img src={photo3} width="300" height="200" /></a><span class="news-time">11-13</span><a href="#">Dota 2's 7.23b patch makes neutral items spawn later, nerfs support Lifestealer</a><a href="#">No more Infesting and brain-dead game play.</a></li>
                    <li><a href="#" className={classes.main_picture}><img src={photo4} width="300" height="200" /></a><span class="news-time">11-13</span><a href="#">Everything you need to know about Dota 2's neutral items</a></li>
                    <li><a href="#" className={classes.main_picture}><img src={photo5} width="300" height="200" /></a><span class="news-time">11-13</span><a href="#">Dota 2's 7.23a patch removes Tome of Aghanim, buffs newest heroes</a></li>
                    <li><a href="#" className={classes.main_picture}><img src={photo6} width="300" height="200" /></a><span class="news-time">11-12</span><a href="#">Lone Druid, Razor, Anti-Mage, and Crystal Maiden are the biggest winners of the Outlanders update</a></li>
                    <li><a href="#" className={classes.main_picture}><img src={photo7} width="300" height="200" /></a><span class="news-time">11-12</span><a href="#">The best and worst changes of The Outlanders Dota 2 update</a></li>
                    <li><a href="#" className={classes.main_picture}><img src={photo8} width="300" height="200" /></a><span class="news-time">11-12</span><a href="#">What do all the Courier changes in the Dota 2 Outlanders Update mean?</a></li>
                    <li><a href="#" className={classes.main_picture}><img src={photo9} width="300" height="200" /></a><span class="news-time">11-12</span><a href="#">Dota 2's Outlanders 7.23 update patch notes are out </a></li>
                    <li><a href="#" className={classes.main_picture}><img src={photo10} width="300" height="200" /></a><span class="news-time">11-12</span><a href="#">What time does Dota 2 Patch 7.23 and the Outlanders Update release?</a></li>
                        </ul>

                <div class="dropdown" className={classes.dropdown}>
                    <button class="dropbtn" className={classes.dropbtn}>Select A Year</button>
                    <div class="dropdown-content" className={classes.dropdown_content}>
                    
                        <a href="#" className={classes.dropdown_content_a}>2017</a>
                        <a href="#" className={classes.dropdown_content_a}>2018</a>
                        <a href="#" className={classes.dropdown_content_a}>2019</a>
                        <a href="#" className={classes.dropdown_content_a}>2020</a>

                    </div>
                </div>
                    <div class="right-block">
                        <div class="right-title">
                        <h3 className={classes.slogan2}>images</h3>
                            <span class="clear"></span>
                        </div>
                    
                        <a href="#" className={classes.main_picture}><img src={photo11} width="800" height="600" /></a>
                    <a href="#" className={classes.main_picture}><img src={photo12} width="800" height="600" /></a>
                    <a href="#" className={classes.main_picture}><img src={photo13} width="800" height="600"/></a>
                    <a href="#" className={classes.main_picture}><img src={photo14} width="800" height="600" /></a>
                    <a href="#" className={classes.main_picture}><img src={photo15} width="800" height="600" /></a>
                    <a href="#" className={classes.main_picture}><img src={photo16} width="800" height="600" /></a>
                        
                </div>
                <div class="right-title">
                    <h3 className={classes.slogan2}>videos</h3>
                    <span class="clear"></span>
                </div>
                   
                <div className={styles.video}>
                    <iframe width="871" height="490" src="https://www.youtube.com/embed/FFg-p1HjTFs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="871" height="490" src="https://www.youtube.com/embed/5tALwVmncWI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    <h1 className={styles.font}>Dota daily WTF</h1>
                    <br />
                    
                </div>
                    <span class="clear"></span>

               
            </body>
            
        </div>
    )
}

export default NewsPage
