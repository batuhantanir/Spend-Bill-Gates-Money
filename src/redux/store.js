import { configureStore } from "@reduxjs/toolkit";

import billGatesSlice from "./billGatesSlice";

export const store = configureStore({
  reducer: {
    billGates: billGatesSlice,
  },
});

export default store;
