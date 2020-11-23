import React from 'react';
import '../css/Team2.css';
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

const Team2 = ({ matchData, matchDataLoaded }) => {

    let teamData = [];

    if (matchDataLoaded) {
        for (let i = 5; i <= 9; i++) {
            teamData[i] = matchData.players[i];
        }
    }

    return (
        <div className="team2div">
            <h3 className="team-2-name">Dire</h3>
            <div className="dire-data">
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

export default Team2;