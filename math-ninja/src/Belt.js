import React from 'react';
import {BELTS} from './data';


const Belt = ({beltLevel}) => {
    return (
        <div className="belt-container">
             <div className="label">Current Belt: </div>
             <div className="field">
                  <div className="belt" id="belt" style={{backgroundColor: BELTS[beltLevel].hex}}>{BELTS[beltLevel].color}</div>
              </div>
          </div>
    )
}

export default Belt;