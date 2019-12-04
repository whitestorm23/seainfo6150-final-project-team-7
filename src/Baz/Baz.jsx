import React from 'react'
import classes from './News.module.css';
import mainPhoto from './Tournament.jpg';
import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo4 from './photo4.jpg';
import photo5 from './photo5.jpg';
import photo6 from './photo6.jpg';
import photo7 from './photo7.jpg';
import photo8 from './photo8.jpg';
import photo9 from './photo9.jpg';
import photo10 from './photo10.jpg';


const Baz = () => {
    return (
        <div>
            <div>
               
            <a href="#">
                <img className={classes.main_picture}
                    src={mainPhoto}
                    alt="Main" />
            </a>
            <h3 className={classes.slogan}>The Dota2 Tournament in 2019</h3>
                <body className={classes.flexContainer}>
                    <div class="right-title">
                        <h3 className={classes.slogan2}>Tournaments</h3>

                    </div>
                    <ul className={classes.textArea}>
                        <li><a href="#" className={classes.main_picture}><img src={photo1} width="300" height="200" /></a><span class="floatright">[2019-11-13]</span><a href="./nigma" title="Nigma fails to make DreamLeague Season 13 in its debut DPC qualifier">Kuro and crew fell just short.</a></li>
                        <li><a href="#" className={classes.main_picture}><img src={photo2} width="300" height="200" /></a><span class="floatright">[2019-11-13]</span><a href="#" title="Cignal Ultra's internet issues cause anti-climatic Dota 2 Leipzig Major SEA qualifiers">Fnatic, Reality Rift, and TNC Predator booked their tickets to Leipzig.</a></li>
                        <li><a href="#" className={classes.main_picture}><img src={photo3} width="300" height="200" /></a><span class="floatright">[2019-11-11]</span><a href="#" title="All teams qualified for the DreamLeague Season 13 Dota 2 Major">Who will make it into the second Major of the season?</a></li>
                        <li><a href="#" className={classes.main_picture}><img src={photo4} width="300" height="200" /></a><span class="floatright">[2019-11-11]</span><a href="#" title="Nigma and Team Secret reach the closed qualifiers for DreamLeague Season 13">Two dominant Dota 2 teams are back in the fray.</a></li>
                        <li><a href="#" className={classes.main_picture}><img src={photo5} width="300" height="200" /></a><span class="floatright">[2019-11-10]</span><a href="#" title="PSG.LGD fail to make it out of open qualifiers for Dota 2 DreamLeague Season 13">One of the best teams in the world suffered a stunning loss.</a></li>
                        <li><a href="#" className={classes.main_picture}><img src={photo6} width="300" height="200" /></a><span class="floatright">[2019-11-10]</span><a href="#" title="OG will compete in the second DPC Major qualifiers with a new roster">OG is taking this extended break seriously.</a></li>
                        <li><a href="#" className={classes.main_picture}><img src={photo7} width="300" height="200" /></a><span class="floatright">[2019-11-09]</span><a href="#" title="Kuroky, ex-Liquid Dota 2 team form Nigma">You might want to check what happens at level 30.</a></li>
                        <li><a href="#" className={classes.main_picture}><img src={photo8} width="300" height="200" /></a><span class="floatright">[2019-11-08]</span><a href="#" title="Chaos Esports Club adds DM to its Dota 2 roster for the next DPC qualifier">A past enemy is now an ally.</a></li>
                        <li><a href="#" className={classes.main_picture}><img src={photo9} width="300" height="200" /></a><span class="floatright">[2019-11-08]</span><a href="#" title="MidOne and ninjaboogie are teaming up for the next DPC Major qualifiers">Weird SEA hours are back on.</a></li>
                        <li><a href="#" className={classes.main_picture}><img src={photo10} width="300" height="200" /></a><span class="floatright">[2019-11-07]</span><a href="#" title="TNC Predator prey on Vici Gaming and win MDL Chengdu Major">TNC rose from the ashes of defeat against VG and will now be shrouded in glory.</a></li>
                    </ul>
                    

                </body>

            </div>
         
           
              
            
        </div>
    )
}

export default Baz
