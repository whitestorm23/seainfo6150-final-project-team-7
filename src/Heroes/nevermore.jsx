import React from 'react';
import styles from './nevermore.module.css';
import nevermorepic from './nevermore.jpg'

const nevermore = (props) => {
    return (

        <div id="centerColContent" className={styles.body}>
            <img className={styles.coco} src={nevermorepic} />
        <h1 className={styles.h1}>Nevermore</h1>
            <div id="heroTopPortraitContainer">
            <img className={styles.img1} id="heroTopPortraitIMG" src="http://cdn.dota2.com/apps/dota2/images/heroes/nevermore_full.png?v=5531960?v=5531960" /></div>
<div class="heroSkill" className={styles.heroSkill}>
        <h3 className={styles.h3}>skills</h3>

        <div class="overviewAbilityRow" className={styles.ability}>
            <div class="abilityIconHolder"><img class="overviewAbilityImg abilityIconWithTooltip" src="http://cdn.dota2.com/apps/dota2/images/abilities/nevermore_shadowraze1_hp1.png?v=5531960" width="90" height="90"/></div>
            <div class="overviewAbilityRowDescription">
            <h2>Shadowraze</h2>
            <p>Shadow Fiend razes the ground directly in front of him, dealing damage to enemy units in the area. Adds a stacking damage amplifier on the target that causes the enemy to take bonus Shadow Raze damage per stack.</p>
            </div>
            </div>
        <div class="overviewAbilityRow"className={styles.ability}>
            <div class="abilityIconHolder"><img class="overviewAbilityImg abilityIconWithTooltip" src="http://cdn.dota2.com/apps/dota2/images/abilities/nevermore_necromastery_hp1.png?v=5531960" width="90" height="90"/></div>
            <div class="overviewAbilityRowDescription">
            <h2>Necromastery</h2>
            <p>Shadow Fiend steals the soul from units he kills, gaining bonus damage. If the killed unit is a hero, he gains an additional 11 bonus souls. On death, he releases half of them from bondage.</p>
            </div>
            </div>
        <div class="overviewAbilityRow"className={styles.ability}>
            <div class="abilityIconHolder"><img class="overviewAbilityImg abilityIconWithTooltip" src="http://cdn.dota2.com/apps/dota2/images/abilities/nevermore_dark_lord_hp1.png?v=5531960" width="90" height="90"/></div>
            <div class="overviewAbilityRowDescription">
            <h2>Presence of the Dark Lord</h2>
            <p>Shadow Fiend's presence reduces the armor of nearby enemies.</p>
            </div>
            </div>
        <div class="overviewAbilityRow"className={styles.ability}>
            <div class="abilityIconHolder"><img class="overviewAbilityImg abilityIconWithTooltip" src="http://cdn.dota2.com/apps/dota2/images/abilities/nevermore_requiem_hp1.png?v=5531960" width="90" height="90"/></div>
            <div class="overviewAbilityRowDescription">
            <h2>Requiem of Souls</h2>
            <p>Shadow Fiend gathers his captured souls to release them as lines of demonic energy. Units near Shadow Fiend when the souls are released can be damaged by several lines of energy. Any unit damaged by Requiem of Souls will be feared and have its movement speed reduced for 0.6 seconds for each line hit. Lines of energy are created for every 2 souls captured through Necromastery.</p>
            </div>
            </div>
        </div>

        <div class="overviewBio" className={styles.bio}>
            <p>It is said that Nevermore the Shadow Fiend has the soul of a poet, and in fact he has thousands of them. Over the ages he has claimed the souls of poets, priests, emperors, beggars, slaves, philosophers, criminals and (naturally) heroes; no sort of soul escapes him. What he does with them is unknown. No one has ever peered into the Abysm whence Nevermore reaches out like an eel from among astral rocks. Does he devour them one after another? Does he mount them along the halls of an eldritch temple, or pickle the souls in necromantic brine? Is he merely a puppet, pushed through the dimensional rift by a demonic puppeteer? Such is his evil, so intense his aura of darkness, that no rational mind may penetrate it. Of course, if you really want to know where the stolen souls go, there's one sure way to find out: Add your soul to his collection. Or just wait for Nevermore.</p>
            </div>
      </div>
    
    )
}

export default nevermore