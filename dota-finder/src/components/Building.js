import React from 'react';
import '../css/Building.css';

const Building = ({ teamData, matchDataLoaded }) => {

    const getPlayerBuilding = () => {
        return teamData.map(player => <p className="building-score" key={player.hero_id}>{player.tower_damage}</p>) 
    }

    return (
        <div className="building">
            <h4 className="building-title">Buildling Damage</h4>
            <div className="building-scores">
                {matchDataLoaded ? getPlayerBuilding() : ""}
            </div>
        </div>
    );
}

export default Building;