import { useState } from "react";

const Team = () => {

    const [team, setTeam]=useState(11)

    const playerAdd=()=>{
        const newPlayer = team+1;
        setTeam(newPlayer)
    }

    const playerRemove=()=>{
        const  newPlayerRemove =team-1;
        setTeam(newPlayerRemove)     
    }
    const teamStyle = {
        border: '2px solid green',
        padding: '15px',
        margin:'15px',
        borderRadius:'15px'
    }
    return (
        <div style={teamStyle}>
            <h1>Players:{team}</h1>
            <button onClick={playerAdd}>Add</button>
            <button onClick={playerRemove}>Remove</button>
        </div>
    );
};

export default Team;