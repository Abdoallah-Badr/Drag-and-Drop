import { createSlice } from "@reduxjs/toolkit";
import boxesArray from "../listOFBoxes";
const boxesRowSlice = createSlice({
  name: "row",
  initialState: [...boxesArray],
  reducers: {
    addBoxToRow: (state, action) => {
      const id = action.payload;
      return [...state, { id }];
    },
    removeBoxFromRow: (state, action) => {
      return state.filter((box) => box.id !== action.payload);
    },
  },
});

export const { addBoxToRow, removeBoxFromRow } = boxesRowSlice.actions;
export default boxesRowSlice.reducer;
