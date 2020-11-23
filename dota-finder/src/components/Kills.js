import React from 'react';
import '../css/Kills.css';

const Kills = ({ teamData, matchDataLoaded }) => {

    //Functions
    const getPlayerKillScore = () => {
    return teamData.map(player => <p className="k-score" key={player.hero_id}>{player.kills}</p>)
    }

    return (
        <div className="kills">
            <h4 className="kill-title">K</h4>
            <div className="kill-score">
                {matchDataLoaded ? getPlayerKillScore() : ""}
            </div>
        </div>
    );
}

export default Kills;