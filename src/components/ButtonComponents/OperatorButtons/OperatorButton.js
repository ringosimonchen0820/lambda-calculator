import React from "react";

const OperatorButton = props => {
  console.log("this is operator", props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => props.addOperator(props.operator.value)}>
        {props.operator.char}
      </button>
    </>
  );
};
export default OperatorButton;