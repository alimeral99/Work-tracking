import { configureStore } from "@reduxjs/toolkit";
import worksReducer from "./Works/WorksSlice";
import userReducer from "./User/UserSlice";

import comparisonWorksReducer from "./Works/ComparisonWorkSlice";

export const store = configureStore({
  reducer: {
    works: worksReducer,
    comparisonWorks: comparisonWorksReducer,
    user: userReducer,
  },
});
