import React, { useState, useEffect } from 'react';
import '../css/Heroes.css';

const Heroes = ({ matchData, teamData, matchDataLoaded }) => {

    const [resources, setResources] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);

    //useEffect
    useEffect(() => {
        getData();
    }, [])

    //Functions
    const getData = async () => {
        let response = await fetch('https://api.opendota.com/api/constants/heroes');
        let data = await response.json();
        setResources(data);
        setDataLoaded(true);
    }

    const mapPlayers = () => {
        return teamData.map(player => <img className="icon" src={`https://api.opendota.com${resources[player.hero_id].icon}`} key={player.hero_id} alt="Hero Icon"></img>)
    }



    return (
        <div className="heroes">
            <h4 className="hero-title">Hero</h4>
            <div className="hero-icons">
                {dataLoaded && matchDataLoaded ? mapPlayers() : ""}
            </div>
        </div>
    );
}

export default Heroes;