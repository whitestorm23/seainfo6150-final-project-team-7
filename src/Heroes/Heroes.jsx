import React from 'react';
import styles from './Heroes.module.css';
import headpic from './dota_2_official_9.jpg';

const Heroes = (props) => {
    return (
        <div className={styles.body}>
            <img className={styles.headpic} src={headpic} />
            <h1 className={styles.h1}>Pick your hero!</h1>

            <div id="heroContainer">
        <div class="herostr">
            <div id="heroheader">
                <span id="heroheaderstr" className={styles.herostr}>Strength</span></div>
            <div class="heroIcons">
                <a id="link_kunkka" class="heroLink" href="http://www.dota2.com/hero/kunkka/">
                    <img width='295px' height='165px' id="kunkka" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/kunkka_hphover.png?v=5497724"/>
                    </a>
                <a id="link_sven" class="heroLink" href="http://www.dota2.com/hero/sven/">
                    <img width='295px' height='165px' id="sven" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/sven_hphover.png?v=5497724"/>
                    </a>
                <a id="link_tiny" class="heroLink" href="http://www.dota2.com/hero/tiny/">
                    <img width='295px' height='165px' id="tiny" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/tiny_hphover.png?v=5497724"/>
                    </a>

            </div> 
        </div>
        <div class="heroagi">
            <div id="heroheader">
                <span id="heroheaderagi" className={styles.heroagi}>Agility</span></div>
            </div>
        <div class="heroint">
            <div id="heroheader">
                <span id="heroheaderint" className={styles.heroint}>Intelligence</span></div>
            </div>
            </div>
        </div>
    
    
    
    
    
    )
}

export default Heroes
