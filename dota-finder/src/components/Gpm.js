import React from 'react';
import '../css/Gpm.css';

const Gpm = ({ teamData, matchDataLoaded }) => {

    const getPlayerGPM = () => {
        return teamData.map(player => <p className="gpm-score" key={player.hero_id}>{player.gold_per_min}</p>)
    }

    return (
        <div className="gpm">
            <h4 className="gpm-title">GPM</h4>
            <div className="gpm-scores">
                {matchDataLoaded ? getPlayerGPM() : ""}
            </div>
        </div>
    );
}

export default Gpm;