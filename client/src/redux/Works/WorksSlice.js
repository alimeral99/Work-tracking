import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWorks: null,
  filteredWorks: null,
  error: null,
  isSuccess: false,
  alert: null,
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
    setFilterWorks: (state, action) => {
      state.filteredWorks = action.payload;
      state.alert = null;
    },
    showError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    showAlert: (state, action) => {
      state.alert = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCurrentWorks, setFilterWorks, showError, showAlert, reset } =
  worksSlice.actions;

export default worksSlice.reducer;
