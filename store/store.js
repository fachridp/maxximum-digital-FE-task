import { configureStore } from "@reduxjs/toolkit";

import accordionDropdownManagerSlice from "../rtk/features/accordionDropdownManager";

export const store = configureStore({
 reducer: {
  accordionDropdownManager: accordionDropdownManagerSlice,
 }
});