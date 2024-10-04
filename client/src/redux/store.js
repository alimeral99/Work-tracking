import { configureStore } from "@reduxjs/toolkit";
import worksReducer from "./Works/WorksSlice";
import userReducer from "./User/UserSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import comparisonWorksReducer from "./Works/ComparisonWorkSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    works: worksReducer,
    comparisonWorks: comparisonWorksReducer,
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
