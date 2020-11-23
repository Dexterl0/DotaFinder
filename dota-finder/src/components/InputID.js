import React from 'react';
import '../css/InputID.css';

const InputID = ({ matchID, setMatchID, setMatchData, setMatchDataLoaded }) => {

    //Getting match ID from input
    const getID = (e) => {
        setMatchID(e.target.value);
    };

    //Fetching data from API
    const getData = async (e) => {
        e.preventDefault();
        let response = await fetch(`https://api.opendota.com/api/matches/${matchID}`);
        let data = await response.json();
        setMatchData(data);
        setMatchDataLoaded(true);
    };

    return (
        <div>
            <form className="form">
                <input type="text" value={matchID} onChange={getID}></input>
                <button type="submit" onClick={getData}>Find</button>
            </form>
        </div>
    );
}

export default InputID;