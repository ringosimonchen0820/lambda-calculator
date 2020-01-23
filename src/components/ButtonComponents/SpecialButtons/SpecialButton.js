import React from "react";

const SpecialButton = (props) => {
  console.log("this is specials", props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>
        {props.text}
      </button>
    </>
  );
};
export default SpecialButton;