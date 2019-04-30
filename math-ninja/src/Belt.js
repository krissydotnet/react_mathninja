import React from 'react';

const BELTS = [
    {color: "white", hex: "#ffffff"},
    {color: "gold", hex: "#ffd700"},
    {color: "green", hex: "#008000"},
    {color: "purple", hex: "#800080"},
    {color: "blue", hex: "#0000ff"},
    {color: "red", hex: "#ff0000"},
    {color: "brown", hex: "#a52a2a"},
    {color: "black", hex: "#000000"}
  ];

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