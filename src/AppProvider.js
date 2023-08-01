import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

const AppProvider = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </Provider>
  );
};

export default AppProvider;
