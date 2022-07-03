import React, { useMemo } from "react";
import Data from "../components/Data";

const Home = () => {
  const [count, setCount] = React.useState(0);
  const [item, setItem] = React.useState(0);

  const increment = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  const decrement = useMemo(() => {
    console.log("ll");
    return count * 5;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <h1>{decrement}</h1>
      <h1>{item}</h1>

      <Data inc={increment} />
      <button onClick={increment}>asdf</button>
      <button
        onClick={() => {
          setItem(item + 1);
        }}
      >
        asdf
      </button>
    </div>
  );
};

export default Home;
