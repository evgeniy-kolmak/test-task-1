import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,

  },
  reducers: {

    signIn(state, action) {
      state.auth = action.payload;

    },
    signOut(state, action) {
      state.auth = action.payload;
    },
  }
});


export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;