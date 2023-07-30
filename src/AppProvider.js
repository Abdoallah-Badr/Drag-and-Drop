import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import App from "./App";

const AppProvider = ()=>{
  return(
<DndProvider backend={HTML5Backend}>
  <App />
</DndProvider>)
}

export default AppProvider

