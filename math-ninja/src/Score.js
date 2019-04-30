import React from 'react';

const Score = ({correct, score, wrong}) => {

    let correctHeight = score * 10;
    let wrongHeight = wrong * 10;
    
    return  (
    <div className="score-container">
        <div className="right-container" >
            <img src="./images/purple-elephant-md.png" className={correct ? 'animate': ''} id="elephant" alt="Purple Elephant" />
            <h2>Right</h2>
            <div id="right" style={{height: `${correctHeight}px`}}></div>
        </div>
        <div className="wrong-container">
            <img src="./images/Secret_Agent_PSA_Postcard.png" className={correct ? '': 'animate'} id="agent" alt="Spy" />
            <h2>Wrong</h2>
            <div id="wrong" style={{height: `${wrongHeight}px`}}></div>
        </div>
    </div>
    );
}

export default Score;