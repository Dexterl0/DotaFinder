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

const Team2 = () => {
    return (
        <div>
            <h3 className="team-2-name">Dire</h3>
            <div className="radiant-data">
                <Heroes />
                <Kills />
                <Deaths />
                <Assists />
                <Gold />
                <LastHits />
                <Denies />
                <Gpm />
                <Xpm />
                <Damage />
                <Healing />
                <Building />
            </div>
        </div>
    );
}

export default Team2;