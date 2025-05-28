
import { useReducer } from "react";

type State = { count: number}
type Action = { type: "increment" | "decrement"}

const reducer = (state: State, action: Action) : State => {
    switch (action.type) {
        case "increment":
            return { count : state.count + 1};
        case "decrement":
            return { count : state.count - 1};
        default:
            return state;
    }
}

const CounterWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0});
    return(
       <div>
        <p> Contador: {state.count} </p>
        <button onClick={() => dispatch({ type: "increment"})}>Incrementar</button>
        <button onClick={() => dispatch({ type: "decrement"})}>Decrementar</button>
       </div> 
    )
}

export default CounterWithUseReducer;