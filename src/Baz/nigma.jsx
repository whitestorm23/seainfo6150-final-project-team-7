import React from 'react';
import styles from './nigma.module.css';
import vs from './photo1.jpg'

const nigma = () => {
    return (

        <div id="centerColContent" className={styles.body}>
            <img className={styles.coco} src={vs} />
            <h1 >Nigma fails to make DreamLeague Season 13 in its debut DPC qualifier</h1>
            <body>
                <p className={styles.bio}>With talented rosters forming and returning to compete in the qualifiers for the DreamLeague Season 13 Major, things got a lot tighter in the European scene.</p>
                <p className={styles.bio}>Nigma, the former Team Liquid roster led by Kuro “KuroKy” Takhasomi, and Team Secret blasted through the open qualifiers to join the stacked EU roster in the closed round. And with only three spots available, Nigma ended up being the team left behind.</p>
            
                <p className={styles.bio}>After the group stage, things shaped up exactly how most viewers thought they would, with Liquid and Nigma making it out of Group A while Secret and Alliance topped Group B. But even in the opening round, Nigma looked a little shaky, dropping games to Ad Finem and Team Singularity before being swept by Liquid. 

                    It was not a pretty series for Nigma. They were picked apart by Liquid in game one and couldn’t rebound in game two to keep Liquid out of the Major.</p>
                <p className={styles.bio}>Unfortunately for Nigma, that wasn’t enough to stop Secret entirely. With Matu on Anti-Mage and Michał “Nisha” Jankowski dominating with Magnus again, Secret were able to bounce Nigma from their first tournament since leaving Liquid.</p>
                <p className={styles.bio}>That left just one ticket left for one of Alliance and Nigma, and the Kings of the North were more than ready to fight for it. 

In both games, Nigma had an early lead that slipped away. Both times, the comeback was led by Linus “Limmp” Blomdin, who continued to exploit Kuro’s drafting weaknesses against 7.23 Magnus.

After getting swept in the final round, Nigma will now have to play against the likes of Ad Finem again to qualify for the WePlay! Bukovel Minor, where they will have one more chance to get into the Major.</p>
            </body>


        </div>

    )
}

export default nigma