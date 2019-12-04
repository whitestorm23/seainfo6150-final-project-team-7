import React from 'react';
import styles from './kunkka.module.css';
import coco from './coco.jpg'

const kunkka = (props) => {
    return (

        <div id="centerColContent" className={styles.body}>
            <img className={styles.coco} src={coco} />
        <h1 className={styles.h1}>Kunkka</h1>
            <div id="heroTopPortraitContainer">
            <img className={styles.img1} id="heroTopPortraitIMG" src="http://cdn.dota2.com/apps/dota2/images/heroes/kunkka_full.png?v=5531960?v=5531960" /></div>
<div class="heroSkill" className={styles.heroSkill}>
        <h3 className={styles.h3}>skills</h3>

        <div class="overviewAbilityRow" className={styles.ability}>
            <div class="abilityIconHolder"><img abilityname="kunkka_torrent" class="overviewAbilityImg abilityIconWithTooltip" src="http://cdn.dota2.com/apps/dota2/images/abilities/kunkka_torrent_hp1.png?v=5531960" width="90" height="90"/></div>
            <div class="overviewAbilityRowDescription">
            <h2>Torrent</h2>
            <p>Summons a rising torrent that, after a short delay, hurls enemy units into the sky, stunning, dealing damage and slowing movement speed.</p>
            </div>
            </div>
        <div class="overviewAbilityRow"className={styles.ability}>
            <div class="abilityIconHolder"><img abilityname="kunkka_Tidebringer" class="overviewAbilityImg abilityIconWithTooltip" src="http://cdn.dota2.com/apps/dota2/images/abilities/kunkka_tidebringer_hp1.png?v=5531960" width="90" height="90"/></div>
            <div class="overviewAbilityRowDescription">
            <h2>Tidebringer</h2>
            <p>Kunkka's legendary sword grants increased damage and cleaves a large area of effect in front of him for a single strike.</p>
            </div>
            </div>
        <div class="overviewAbilityRow"className={styles.ability}>
            <div class="abilityIconHolder"><img abilityname="kunkka_X_Marks_the_Spot" class="overviewAbilityImg abilityIconWithTooltip" src="http://cdn.dota2.com/apps/dota2/images/abilities/kunkka_x_marks_the_spot_hp1.png?v=5531960" width="90" height="90"/></div>
            <div class="overviewAbilityRowDescription">
            <h2>X Marks the Spot</h2>
            <p>Targets a friendly or enemy Hero, marks their position with an X, and returns them to it after several seconds. Kunkka can trigger the return at any time during the duration. Lasts twice as long on allied heroes.</p>
            </div>
            </div>
        <div class="overviewAbilityRow"className={styles.ability}>
            <div class="abilityIconHolder"><img abilityname="kunkka_Ghostship" class="overviewAbilityImg abilityIconWithTooltip" src="http://cdn.dota2.com/apps/dota2/images/abilities/kunkka_ghostship_hp1.png?v=5531960" width="90" height="90"/></div>
            <div class="overviewAbilityRowDescription">
            <h2>Ghostship</h2>
            <p>Summons a ghostly ship that sails through the battle before smashing apart, damaging and stunning all enemies caught near the wreckage. Allied heroes touched by the Ghostship are given a swig of The Admiral's Rum, receiving bonus movement speed and a delayed reaction to incoming damage.</p>
            </div>
            </div>
        </div>

        <div class="overviewBio" className={styles.bio}>
            <p>As The Admiral of the mighty Claddish Navy, Kunkka was charged with protecting the isles of his homeland when the demons of the Cataract made a concerted grab at the lands of men. After years of small sorties, and increasingly bold and devastating attacks, the demon fleet flung all its carnivorous ships at the Trembling Isle. Desperate, the Suicide-Mages of Cladd committed their ultimate rite, summoning a host of ancestral spirits to protect the fleet. Against the demons, this was just barely enough to turn the tide. As Kunkka watched the demons take his ships down one by one, he had the satisfaction of wearing away their fleet with his ancestral magic. But at the battle's peak, something in the clash of demons, men and atavistic spirits must have stirred a fourth power that had been slumbering in the depths. The waves rose up in towering spouts around the few remaining ships, and Maelrawn the Tentacular appeared amid the fray. His tendrils wove among the ships, drawing demon and human craft together, churning the water and wind into a raging chaos. What happened in the crucible of that storm, none may truly say. The Cataract roars off into the void, deserted by its former denizens. Kunkka is now The Admiral of but one ship, a ghostly rig which endlessly replays the final seconds of its destruction. Whether he died in that crash is anyone's guess. Not even Tidehunter, who summoned Maelrawn, knows for sure.</p>
            </div>
      </div>
    
    )
}

export default kunkka