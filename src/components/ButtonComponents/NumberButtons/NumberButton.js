import React from "react";

const NumberButton = (props) => {
  console.log("this is numbers", props);
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.text}
    </button>
  );
};

export default NumberButton;
