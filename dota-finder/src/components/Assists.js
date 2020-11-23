import React from 'react';
import '../css/Assists.css';

const Assists = ({ teamData, matchDataLoaded }) => {

    const getPlayerAssistScore = () => {
        return teamData.map(player => <p className="a-score" key={player.hero_id}>{player.assists}</p>)
    }

    return (
        <div className="assists">
            <h4 className="assists-title">A</h4>
            <div className="assists-score">
                {matchDataLoaded ? getPlayerAssistScore() : ""}
            </div>
        </div>
    );
}

export default Assists;