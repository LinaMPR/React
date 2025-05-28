import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const incremet = () => setCount(prev => prev + 1);
    
    return(
        <button onClick={incremet} >Incremet {count} </button>
    )
}

export default Counter;