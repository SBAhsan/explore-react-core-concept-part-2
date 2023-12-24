import { useState } from "react"

export default function Team(){

    const [players, setPlayers] = useState(11);

    const handleAddPlayer = () => {
        const newPlayers = players + 1;
        
        if(newPlayers <= 16){
            setPlayers(newPlayers);
        }
    }

    const handleRemovePlayer = () => {
        const newPlayers = players - 1;
        
        if(newPlayers >= 11){
            setPlayers(newPlayers);
        }
    }

    const teamStyle = {
        border: '1px solid gray',
        padding: '10px 15px',
        borderRadius: '5px'
    }

    return(
        <>
        <div style={teamStyle}>
            <h3>Number of players : {players}</h3>
            <button onClick={handleAddPlayer}>Add Player</button>
            <button style={{marginLeft: '10px'}} onClick={handleRemovePlayer}>Remove Player</button>
        </div>
        </>
    )
}
