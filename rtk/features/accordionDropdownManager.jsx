import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 accordion1: false,
 accordion2: false,
 accordion3: false,
 accordion4: false,
 accordion5: false,
}

export const accordionDropdownManagerSlice = createSlice({
 name: 'accordionDropdownManagerReducer',
 initialState,
 reducers: {
  setAccordion: (state, action) => {
   state[action.payload.keyAccordion] = !state[action.payload.keyAccordion];
  }
 }
});

export const { setAccordion } = accordionDropdownManagerSlice.actions;
export default accordionDropdownManagerSlice.reducer;