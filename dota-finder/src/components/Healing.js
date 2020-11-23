import React from 'react';
import '../css/Healing.css';

const Healing = ({ teamData, matchDataLoaded }) => {

    const getPlayerHealing = () => {
        return teamData.map(player => <p className="healing-score" key={player.hero_id}>{player.hero_healing}</p>)
    }

    return (
        <div className="healing">
            <h4 className="healing-title">HEAL</h4>
            <div className="healing-scores">
                {matchDataLoaded ? getPlayerHealing() : ""}
            </div>
        </div>
    );
}

export default Healing;