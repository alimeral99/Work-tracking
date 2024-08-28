import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWorks: null,
  error: null,
  isSuccess: false,
  loading: false,
};

export const worksSlice = createSlice({
  name: "works",
  initialState,
  reducers: {
    reset: (state) => {
      state.isSuccess = false;
      state.error = false;
    },
    getCurrentWorks: (state, action) => {
      state.currentWorks = action.payload;
      state.loading = false;
      state.error = null;
      state.isSuccess = true;
    },
    showError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCurrentWorks, showError, reset } = worksSlice.actions;

export default worksSlice.reducer;
