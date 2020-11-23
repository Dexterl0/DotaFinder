import React from 'react';
import '../css/Xpm.css';

const Xpm = ({ teamData, matchDataLoaded }) => {

    const getPlayerXPM = () => {
        return teamData.map(player => <p className="xpm-score" key={player.hero_id}>{player.xp_per_min}</p>)
    }

    return (
        <div className="xpm">
            <h4 className="xpm-title">XPM</h4>
            <div className="xpm-scores">
                {matchDataLoaded ? getPlayerXPM() : ""}
            </div>
        </div>
    );
}

export default Xpm;