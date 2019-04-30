import React from 'react';

const Banner = ({id})=> {
    let message = (id === "new-belt") ? "You received a new belt!!!" : "You leveled up!!!!";
    return (
<div id={id} className="move-left">
    <h2>Congratulations</h2>
    <h3>{message}</h3>
</div>


    );
}

export default Banner;