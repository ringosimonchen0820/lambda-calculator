import React from "react";

const SpecialButton = (bananaButton) => {
  console.log(bananaButton)
  return (
    <>
      <button className ="button">
        {bananaButton.buttonName}
      </button>
    </>
  );
};

export default SpecialButton;