import React from 'react';
import '../css/Denies.css';

const Denies = ({ teamData, matchDataLoaded }) => {

    const getPlayerDenies = () => {
        return teamData.map(player => <p className="deny-score" key={player.hero_id}>{player.denies}</p>)
    }

    return (
        <div className="denies">
            <h4 className="denies-title">Denies</h4>
            <div className="denies-score">
                {matchDataLoaded ? getPlayerDenies() : ""}
            </div>
        </div>
    );
}

export default Denies;