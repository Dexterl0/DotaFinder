import React from 'react';
import '../css/Deaths.css';

const Deaths = ({ teamData, matchDataLoaded }) => {

    const getPlayerDeathScore = () => {
        return teamData.map(player => <p className="d-score" key={player.hero_id}>{player.deaths}</p>)
    }

    return (
        <div className="deaths">
            <h4 className="death-title">D</h4>
            <div className="death-score">
                {matchDataLoaded ? getPlayerDeathScore() : ""}
            </div>
        </div>
    );
}

export default Deaths;