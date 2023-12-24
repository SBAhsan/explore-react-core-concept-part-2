import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleMinus = () => {
        const newCount = count - 1;
        
        if(newCount >= 0){
            setCount(newCount);
        }
    }
    return (
        <>
        <div>
            <h3>Counter : {count}</h3>
            <button style={{marginBottom: '10px'}} onClick={handleAdd}>Add</button>
            <button style={{marginLeft: '10px'}} onClick={handleMinus}>Substract</button>
        </div>
        </>
    )
}