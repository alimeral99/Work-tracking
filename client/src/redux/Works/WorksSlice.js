import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWorks: null,
  alert: null,
  loading: false,
};

export const worksSlice = createSlice({
  name: "works",
  initialState,
  reducers: {
    getCurrentWorks: (state, action) => {
      state.currentWorks = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCurrentWorks } = worksSlice.actions;

export default worksSlice.reducer;
