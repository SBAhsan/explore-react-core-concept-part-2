import { useState } from "react"

export default function Members() {

    const [member, setMembers] = useState(50);

    const handleAddMember = () => {
        const newMembers = member + 1;
        
        if(newMembers <= 55){
            setMembers(newMembers);
        }
    }

    const handleRemoveMember = () => {
        const newMembers = member - 1;
        
        if(newMembers >= 50){
            setMembers(newMembers);
        }
    }

    const memberStyle = {
        border : '1px solid green',
        padding : '10px 15px',
        borderRadius : '5px'
    }

    return (
        <>
        <div style={memberStyle}>
            <h3>Number of members : {member}</h3>
            <button onClick={handleAddMember}>Add Member</button>
            <button onClick={handleRemoveMember}>Remove Member</button>
        </div>
        </>
    )
}
