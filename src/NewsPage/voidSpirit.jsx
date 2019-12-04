import React from 'react';
import styles from './voidSpirit.module.css';
import vs from './photo15.jpg'

const VoidSpirit = () => {
    return (

        <div id="centerColContent" className={styles.body}>
            <img className={styles.coco} src={vs} />
            <h1 >Dota 2's latest update fixes Snapfire bug, nerfs Void Spirit</h1>
            <body>
                <p className={styles.bio}>Valve has released another Dota 2 update, this time specifically for the two new heroes introduced in the Outlanders update. Void Spirit has been nerfed slightly, while Snapfire simply had a bugfix.</p>
                <p className={styles.bio}>Before the 7.23a patch, both new characters were two of the bottom three win rate heroes in the game. After the patch and their respective buffs, both heroes’ win rates have increased by over 10 percent. While Snapfire’s previous 35-percent win rate means the hero is still barely in the green, Void Spirit has cleared the hurdle, almost hitting a 60-percent win rate before this slight nerf.</p>
                <ul className={styles.bio}>
                    <li>Dissimilate damage reduced from 140/220/300/380 to 120/200/280/360.</li>
                    <li>Resonant Pulse cooldown increased from 14 to 16.</li>
                    <li>Resonant Pulse mana cost increased from 90/100/110/120 to 100/110/120/130.</li>
                    <li>Level 15 Talent reduced from +150 Resonant Pulse Damage to +100 Resonant Pulse Damage.</li>
                 

                </ul>
                <p className={styles.bio}>Void Spirit received some minor damage nerfs to two of his skills. The cooldown and mana cost for Resonant Pulse, his main laning defensive ability, have also been increased so that the hero will suffer from a slightly poorer early game. But in the end, the hero is still in a strong place and will likely continue to be picked up for the foreseeable future.</p>
            </body>

           
        </div>

    )
}

export default VoidSpirit