import { createSlice } from "@reduxjs/toolkit";

const containerBoxesSlice = createSlice({
  name: "container",
  initialState: [],
  reducers: {
    addBoxToContainer: (state, action) => {
      return [...state, action.payload];
    },
    removeBoxContainer: (state, action) => {
      return state.filter((box) => box.id !== action.payload);
    },
    moveBox: (prevList, action) => {
      const { id, left, top } = action.payload;
      const newList = prevList.filter((item) => item.id !== id);
      const selectedItem = prevList.find((obj) => obj.id === id);
      return [{ ...selectedItem, left, top }, ...newList];
    },
  },
});

export const { addBoxToContainer, removeBoxContainer, moveBox } =
  containerBoxesSlice.actions;
export default containerBoxesSlice.reducer;
