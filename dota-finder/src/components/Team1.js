import React from 'react';
import '../css/Team1.css';
import Heroes from './Heroes';
import Kills from './Kills';
import Deaths from './Deaths';
import Assists from './Assists';
import Gold from './Gold';
import LastHits from './LastHits';
import Denies from './Denies';
import Gpm from './Gpm';
import Xpm from './Xpm';
import Damage from './Damage';
import Healing from './Healing';
import Building from './Building';

const Team1 = ({ matchData, matchDataLoaded }) => {

    //Team Data Array
    let teamData = [];

    //Filling teamData array when match data is loaded
    if (matchDataLoaded) {
        for (let i = 0; i <= 4; i++) {
            teamData[i] = matchData.players[i];
        }
    }

    return (
        <div className="team1div">
            <h3 className="team-1-name">Radiant</h3>
            <div className="radiant-data">
                <Heroes teamData={teamData} matchDataLoaded={matchDataLoaded} />
                <Kills teamData={teamData} matchDataLoaded={matchDataLoaded} />
                <Deaths teamData={teamData} matchDataLoaded={matchDataLoaded} />
                <Assists teamData={teamData} matchDataLoaded={matchDataLoaded} />
                <Gold teamData={teamData} matchDataLoaded={matchDataLoaded} />
                <LastHits teamData={teamData} matchDataLoaded={matchDataLoaded} />
                <Denies teamData={teamData} matchDataLoaded={matchDataLoaded} />
                <Gpm teamData={teamData} matchDataLoaded={matchDataLoaded} />
                <Xpm teamData={teamData} matchDataLoaded={matchDataLoaded} />
                <Damage teamData={teamData} matchDataLoaded={matchDataLoaded} />
                <Healing teamData={teamData} matchDataLoaded={matchDataLoaded} />
                <Building teamData={teamData} matchDataLoaded={matchDataLoaded} />
            </div>
        </div>
    );
}

export default Team1;