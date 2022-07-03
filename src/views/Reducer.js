import React, { useReducer } from "react";

const Reducer = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type == "INCREMENT") {
      return state + 1;
    } else {
      return state - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state}</h1>

      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        DECREMENT
      </button>
    </div>
  );
};

export default Reducer;
