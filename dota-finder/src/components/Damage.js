import React from 'react';
import '../css/Damage.css';

const Damage = ({ teamData, matchDataLoaded }) => {

    const getPlayerDamage = () => {
        return teamData.map(player => <p className="damage-score" key={player.hero_id}>{player.hero_damage}</p>)
    }

    return (
        <div className="damage">
            <h4 className="damage-title">DMG</h4>
            <div className="damage-scores">
                {matchDataLoaded ? getPlayerDamage() : ""}
            </div>
        </div>
    );
}

export default Damage;