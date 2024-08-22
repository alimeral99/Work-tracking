import { configureStore } from "@reduxjs/toolkit";
import worksReducer from "./Works/WorksSlice";

export const store = configureStore({
  reducer: {
    works: worksReducer,
  },
});
