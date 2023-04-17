import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: {
      globalList: [],
      filtredList: [],
    },
  },
  reducers: {
    addItem: (state, action) => {
      state.items.globalList.push(action.payload);
      state.items.filtredList = state.items.globalList;
      console.log(action.payload);
    },
    doneItem: (state, action) => {
      state.items.globalList.map((item) =>
        item.id === action.payload ? (item.isdone = !item.isdone) : item
      );
      state.items.filtredList = state.items.globalList;
    },
    editItem: (state, action) => {
      state.items.globalList.map((item) =>
        item.id === action.payload.id
          ? (item.desc = action.payload.desc)
          : "404"
      );
      state.items.filtredList = state.items.globalList;
    },
    filterByDone :(state,action) => {
        state.items.filtredList = state.items.globalList.filter( (task) => task.isdone === action.payload )
    },
    reset : (state) => {
        state.items.filtredList = state.items.globalList;
    }
  },
});

export const { addItem, doneItem, editItem ,filterByDone , reset} = itemSlice.actions;
export default itemSlice.reducer;
