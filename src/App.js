import React, {useState} from "react";
import "./App.css";
import data from "./data.js";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display.js";
import SpecialButton from "./components/ButtonComponents/SpecialButtons/SpecialButton";
import OperatorButton from "./components/ButtonComponents/OperatorButtons/OperatorButton";
import NumberButton from "./components/ButtonComponents/NumberButtons/NumberButton";
function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  
  console.log(data)
  const [display, setDisplay] = useState(0)

  let specialClickHandler = (buttonName) => {
    console.log(buttonName);
    setDisplay = buttonName;
  }
  
  return (
    <div className="container">
      <Logo />
      
      <div className="App">
        <Display
          zeroOutDisplay={display}
        />
      <section className="buttonContainer">   
          {
            data.specials.map (x => {
              return (
                <SpecialButton 
                  buttonName = {x} 
                  clickHandler = {specialClickHandler}
                />
              )
            })
          }
          <OperatorButton 
            buttonName = {data.operators[0].char}
            clickHandler = {specialClickHandler}
          />
      </section>

      <section className="buttonContainer">
        {
           data.numbers.map (x => {
             return (
              <NumberButton 
                buttonName = {x}
                clickHandler = {specialClickHandler}
              />
             )
           })
        }
      </section>
      </div>
    </div>
  );
}

export default App;
