import React from 'react';
import '../css/LastHits.css';

const LastHits = ({ teamData, matchDataLoaded }) => {

    const getPlayerLastHits = () => {
        return teamData.map(player => <p className="lh-score" key={player.hero_id}>{player.last_hits}</p>)
    }

    return (
        <div className="last-hits">
            <h4 className="last-hits-title">Last Hits</h4>
            <div className="last-hits-score">
                {matchDataLoaded ? getPlayerLastHits() : ""}
            </div>
        </div>
    );
}

export default LastHits;