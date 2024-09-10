import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comparedWorks: null,
  comparisonAlert: null,
};

export const comparisonWorksSlice = createSlice({
  name: "comparisonWorks",
  initialState,
  reducers: {
    setComparisonWorks: (state, action) => {
      state.comparedWorks = action.payload;
      state.comparisonAlert = null;
    },
    setShowComparisonAlert: (state, action) => {
      state.comparisonAlert = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setComparisonWorks, setShowComparisonAlert } =
  comparisonWorksSlice.actions;

export default comparisonWorksSlice.reducer;
