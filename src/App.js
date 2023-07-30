import "./App.css";
import { useState } from "react";
import Box from "./box";
import Container from "./container";
import boxesArray from "./listOFBoxes";

function App() {
  const [arrayBoxes, setArrayBoxes] = useState(boxesArray);
  const updateArray = (id) => {
    setArrayBoxes((prevArrayBoxes) =>
      prevArrayBoxes.filter((item) => item.id !== id)
    );
  };
  return (
    <div className="App">
      <h1>Play with ReactDnD</h1>
      <Container updateArray={updateArray} />
      {arrayBoxes.length > 0 && (
        <div className="boxes-array">
          {arrayBoxes.map((item) => (
            <Box key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
