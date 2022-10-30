import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const peopleSlice = createSlice({
  name: "people",
  initialState,

  reducers: {
    personAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectAllPeopleList = (state) => state.people;

// Action creators are generated for each case reducer function
export const { personAdded } = peopleSlice.actions;

export default peopleSlice.reducer;
