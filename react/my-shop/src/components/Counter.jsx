import { useReducer } from "react";
function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "set":
      return { count: action.payload };
  }
}

function Counter() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div>
      <p>count : {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "set", payload: 10 })}>
        set to 10
      </button>
    </div>
  );
}

export default Counter;
