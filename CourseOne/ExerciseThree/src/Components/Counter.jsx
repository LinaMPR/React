import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>El contador está en: {count} </p>
            <button onClick={() => setCount(count + 1)}>Aumentar</button>
            <button onClick={() => setCount(count - 1)}>Disminuir</button>
        </div>
    )
}

export default Counter;