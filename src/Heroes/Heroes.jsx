import React from 'react';
import styles from './Heroes.module.css';
import headpic from './dota_2_official_9.jpg';


const Heroes = (props) => {
    return (
        <div className={styles.body}>
            <img className={styles.headpic} src={headpic} />
            <h1 className={styles.h1}>Pick your hero!</h1>

            <div class="dropdown" className={styles.dropdown}>
                <button class="dropbtn" className={styles.dropbtn}>Select A Hero's Name</button>
                <div class="dropdown-content" className={styles.dropdown_content}>
                <a href="/kunkka" className={styles.dropdown_content_a}>Kunkka</a>
                <a href="http://www.dota2.com/hero/sven/"className={styles.dropdown_content_a}>Sven</a>
                <a href="http://www.dota2.com/hero/tiny/"className={styles.dropdown_content_a}>Tiny</a>
                <a href="http://www.dota2.com/hero/beastmaster/"className={styles.dropdown_content_a}>Beast Master</a>
                <a href="http://www.dota2.com/hero/bristleback/"className={styles.dropdown_content_a}>Bristle Back</a>
                <a href="http://www.dota2.com/hero/earth_spirit/"className={styles.dropdown_content_a}>Earth Spirit</a>
                <a href="http://www.dota2.com/hero/ember_spirit/"className={styles.dropdown_content_a}>Ember Spirit</a>
                <a href="http://www.dota2.com/hero/monkey_king/"className={styles.dropdown_content_a}>Monkey King</a>
                <a href="/nevermore"className={styles.dropdown_content_a}>Nevermore</a>
                <a href="http://www.dota2.com/hero/faceless_void/"className={styles.dropdown_content_a}>Faceless Void</a>
                <a href="http://www.dota2.com/hero/meepo/"className={styles.dropdown_content_a}>Meepo</a>
                <a href="http://www.dota2.com/hero/void_spirit/"className={styles.dropdown_content_a}>Void Spirit</a>
                <a href="http://www.dota2.com/hero/lina/"className={styles.dropdown_content_a}>Lina</a>
                <a href="http://www.dota2.com/hero/storm_spirit/"className={styles.dropdown_content_a}>Storm Spirit</a>
                <a href="http://www.dota2.com/hero/obsidian_destroyer/"className={styles.dropdown_content_a}>Obsidian Destroyer</a>
                <a href="http://www.dota2.com/hero/invoker/"className={styles.dropdown_content_a}>Invoker</a>
                <a href="http://www.dota2.com/hero/rubick/"className={styles.dropdown_content_a}>Rubick</a>
                </div>
            </div>

            <div id="heroContainer">
        <div class="herostr" className={styles.strBox}>
            <div id="heroheader">
                <span id="heroheaderstr" className={styles.herostr}>Strength</span></div>
            <div class="heroIcons">
                <a id="link_kunkka" class="heroLink" href="/kunkka">
                    <img width='295px' height='165px' id="kunkka" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/kunkka_hphover.png?v=5497724"/>
                    </a>
                <a id="link_sven" class="heroLink" href="http://www.dota2.com/hero/sven/">
                    <img width='295px' height='165px' id="sven" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/sven_hphover.png?v=5497724"/>
                    </a>
                <a id="link_tiny" class="heroLink" href="http://www.dota2.com/hero/tiny/">
                    <img width='295px' height='165px' id="tiny" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/tiny_hphover.png?v=5497724"/>
                    </a>
                <a id="link_beastmaster" class="heroLink" href="http://www.dota2.com/hero/beastmaster/">
                    <img width='295px' height='165px' id="beastmaster" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/beastmaster_hphover.png?v=5497724"/>
                    </a>
                <a id="link_bristleback" class="heroLink" href="http://www.dota2.com/hero/bristleback/">
                    <img width='295px' height='165px' id="bristleback" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/bristleback_hphover.png?v=5497724"/>
                    </a>
                <a id="link_earth_spirit" class="heroLink" href="http://www.dota2.com/hero/earth_spirit/">
                    <img width='295px' height='165px' id="earth_spirit" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/earth_spirit_hphover.png?v=5497724"/>
                    </a>

            </div>
            </div>
            <br/>
        <div class="heroagi" className={styles.agiBox}>
            <div id="heroheader">
                <span id="heroheaderagi" className={styles.heroagi}>Agility</span></div>
            <div class="heroIcons">
                <a id="link_ember_spirit" class="heroLink" href="http://www.dota2.com/hero/ember_spirit/">
                    <img width='295px' height='165px' id="ember_spirit" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/ember_spirit_hphover.png?v=5497724"/>
                    </a>
                <a id="link_monkey_king" class="heroLink" href="http://www.dota2.com/hero/monkey_king/">
                    <img width='295px' height='165px' id="monkey_king" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/monkey_king_hphover.png?v=5497724"/>
                    </a>
                <a id="link_nevermore" class="heroLink" href="/nevermore">
                    <img width='295px' height='165px' id="nevermore" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/nevermore_hphover.png?v=5497724"/>
                    </a>
                <a id="link_slark" class="heroLink" href="http://www.dota2.com/hero/slark/">
                    <img width='295px' height='165px' id="slark" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/slark_hphover.png?v=5497724"/>
                    </a>
                <a id="link_meepo" class="heroLink" href="http://www.dota2.com/hero/meepo/">
                    <img width='295px' height='165px' id="meepo" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/meepo_hphover.png?v=5497724"/>
                    </a>
                <a id="link_faceless_void" class="heroLink" href="http://www.dota2.com/hero/faceless_void/">
                    <img width='295px' height='165px' id="faceless_void" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/faceless_void_hphover.png?v=5497724"/>
                    </a>
            </div>
            </div>
            <br/>
        <div class="heroint" className={styles.intBox}>
            <div id="heroheader">
            <span id="heroheaderint" className={styles.heroint}>Intelligence</span></div>
                <div class="heroIcons">
                <a id="link_void_spirit" class="heroLink" href="http://www.dota2.com/hero/void_spirit/">
                    <img width='295px' height='165px' id="void_spirit" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/void_spirit_hphover.png?v=5497724"/>
                    </a>
                <a id="link_lina" class="heroLink" href="http://www.dota2.com/hero/lina/">
                    <img width='295px' height='165px' id="lina" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/lina_hphover.png?v=5497724"/>
                    </a>
                <a id="link_storm_spirit" class="heroLink" href="http://www.dota2.com/hero/storm_spirit/">
                    <img width='295px' height='165px' id="storm_spirit" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/storm_spirit_hphover.png?v=5497724"/>
                    </a>
                <a id="link_obsidian_destroyer" class="heroLink" href="http://www.dota2.com/hero/obsidian_destroyer/">
                    <img width='295px' height='165px' id="obsidian_destroyer" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/obsidian_destroyer_hphover.png?v=5497724"/>
                    </a>
                <a id="link_invoker" class="heroLink" href="http://www.dota2.com/hero/invoker/">
                    <img width='295px' height='165px' id="invoker" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/invoker_hphover.png?v=5497724"/>
                    </a>
                <a id="link_rubick" class="heroLink" href="http://www.dota2.com/hero/rubick/">
                    <img width='295px' height='165px' id="rubick" class="heroIcon" src="http://cdn.dota2.com/apps/dota2/images/heroes/rubick_hphover.png?v=5497724"/>
                    </a>
            </div>
            </div>
            </div>
        </div>
    
    
    
    
    
    )
}

export default Heroes
