import React from "react";

const Data = (props) => {
  console.log("asdf");
  return (
    <div>
      <button onClick={props.inc}>inc +</button>
    </div>
  );
};

export default React.memo(Data);
