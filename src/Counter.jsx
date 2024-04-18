import { useState } from "react";

const Counter = () => {
    const [count, setCount]=useState(0)

    const handleAddme=()=>{
        const newCount = count+1;
        setCount(newCount)
    }

    const handleReduceMe=()=>{
        const newCount = count -1;
        setCount(newCount)
    }
    return (
        <div style={{border:'3px solid blue'}}>
            <h1>Count:{count}
            </h1>
            <h2>
                <button  onClick={handleAddme}>Add Me</button>
                <button onClick={handleReduceMe}>Reduce</button>
            </h2>
        </div>
    );
};

export default Counter;