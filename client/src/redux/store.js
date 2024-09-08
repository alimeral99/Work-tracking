import { configureStore } from "@reduxjs/toolkit";
import worksReducer from "./Works/WorksSlice";
import comparisonWorksReducer from "./Works/ComparisonWorkSlice";

export const store = configureStore({
  reducer: {
    works: worksReducer,
    comparisonWorks: comparisonWorksReducer,
  },
});
