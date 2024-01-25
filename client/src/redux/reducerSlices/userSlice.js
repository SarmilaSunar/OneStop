// counterSlice.js
import {  createSlice } from '@reduxjs/toolkit';
const initialState = {
userDetails:'',
isLoggedIn:false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser:(state) => {
        state.isLoggedIn = true
    }
    },
});
export const { loginUser } = userSlice.actions;
export default userSlice.reducer;