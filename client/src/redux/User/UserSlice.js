import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  successRedirect: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.successRedirect = false;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    registerFailure: (state, action) => {
      state.error = action.payload;
    },
    setRedirect: (state) => {
      state.successRedirect = true;
    },
    setUpgradetoUserPremium: (state, action) => {
      state.currentUser = action.payload;
    },
    logout(state) {
      state.currentUser = null;
    },
  },
});

export const {
  registerSuccess,
  registerFailure,
  setRedirect,
  reset,
  logout,
  setUpgradetoUserPremium,
} = userSlice.actions;

export default userSlice.reducer;
