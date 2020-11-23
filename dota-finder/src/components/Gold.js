import React from 'react';
import '../css/Gold.css';

const Gold = ({ teamData, matchDataLoaded }) => {

    const getPlayerGold = () => {
        return teamData.map(player => <p className="g-score" key={player.hero_id}>{player.total_gold}</p>)
    }

    return (
        <div className="gold">
            <h4 class-Name="gold-title">Total Gold</h4>
            <div className="gold-score">
                {matchDataLoaded ? getPlayerGold() : ""}
            </div>
        </div>
    );
}

export default Gold;