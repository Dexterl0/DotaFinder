import React from 'react';
import Team1 from './Team1';
import Team2 from './Team2';
import '../css/MatchData.css';

const MatchData = ({ matchData, matchDataLoaded }) => {

    const calculateTime = (seconds) => {
        if (seconds != null) {
            const x = seconds / 60;
            const string = x.toString();
            const split = string.split(".");
            const dec = "." + split[1];
            const getSecs = Number(dec) * 60;
            const integer = parseInt(getSecs);
            const minutes = split[0];
            let secs = integer.toString();
            if (secs.length === 1) {
                secs = 0 + secs;
            }
            const fullTime = minutes + ":" + secs;
            return fullTime;
        } else {
            return "";
        }
    }

    return (
        <div>
            <h2 className="victory">{matchData.radiant_win ? "Radiant Victory" : "Dire Victory"}</h2>
            <div className="score-time">
                <h3 className="radiant-score">{matchData.radiant_score}</h3>
                <p className="match-time">{calculateTime(matchData.duration)}</p>
                <h3 className="dire-score">{matchData.dire_score}</h3>
            </div>
                <Team1 className="team1" matchData={matchData} matchDataLoaded={matchDataLoaded} />
                <Team2 className="team2" matchData={matchData} matchDataLoaded={matchDataLoaded}/>
        </div>
    );
}

export default MatchData;