import React from 'react';
import Team1 from './Team1';
import Team2 from './Team2';
import '../css/MatchData.css';

const MatchData = () => {
    return (
        <div>
            <h2 className="victory">Radiant/Dire Victory (Placeholder)</h2>
            <div className="score-time">
                <h3>34 (Radiant Score Placeholder)</h3>
                <p>56:32 (Match Length Placeholder)</p>
                <h3>54 (Dire Score PlaceHolder)</h3>
            </div>
            <Team1 />
            <Team2 />
        </div>
    );
}

export default MatchData;