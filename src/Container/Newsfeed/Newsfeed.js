import React, { useState } from 'react';
import LineGraph from '../../Components/LineGraph/LineGraph';
import './Newsfeed.css';
import TimeLine from '../Timeline/Timeline';
import Chip from '@material-ui/core/Chip';
import { Avatar } from '@material-ui/core';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import FlashOnIcon from '@material-ui/icons/FlashOn';
const Newsfeed = () => {
    const [popularTopics, setTopics] = useState([
        'Technology',
        'Top Movies',
        'Upcoming Earnings',
        'Crypto',
        'Cannabis',
        'Healthcare Supplies',
        'Index ETFs',
        'Technology',
        'China',
        'Pharma',
    ]);

    return (
        <div className="newsfeed">
            <div className="newsfeed_container">
                <div className="newsfeed_chartSec">
                    <div className="newsfeed_protfolio">
                        <h1>$284,637.73</h1>
                        <p>+$100.21 (+41.63%) Today</p>
                    </div>
                    <div className="newsfeed_chart">
                        <LineGraph />
                    </div>
                    <TimeLine />
                </div>
                <div className="newsfeed_buyingSec">
                    <h2> Buying Power </h2>
                    <h2> $9.32</h2>
                </div>
                <div className="newsfeed_marketSec">
                    <div className="newsfeed_market">
                        <p> Market Closed </p>
                        <h1> Happy New Year! </h1>
                    </div>
                </div>
                <div className="newsfeed__popularlists__section">
                    <div className="newsfeed__popularlists__intro">
                        <h1>Popular lists</h1>
                        <p>Show More</p>
                    </div>
                    <div className="newsfeed_popularlists_badges">
                        {popularTopics.map((topic) => (
                            <Chip
                                className="topic__badge"
                                variant="outlined"
                                label={topic}
                                avatar={
                                    <Avatar
                                        src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                                    />
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsfeed;
