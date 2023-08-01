import "./styles/App.css";
import "./styles/boxes.css";
import Container from "./container";
import BoxesRow from "./boxesRow";

function App() {

  return (
    <div className="App">
      <h1>Play with ReactDnD</h1>
      <Container/>
      <BoxesRow />
    </div>
  );
}

export default App;
