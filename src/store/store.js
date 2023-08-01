import { configureStore } from "@reduxjs/toolkit";
import boxesRowSlice from "./boxesRowSlice";
import containerBoxesSlice from "./containerBoxesSlice";

const store = configureStore({
  reducer: {
    row: boxesRowSlice,
    container: containerBoxesSlice,
  },
});

export default store;
