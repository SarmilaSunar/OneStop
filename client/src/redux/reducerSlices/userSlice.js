// counterSlice.js
import {  createSlice } from '@reduxjs/toolkit';
const initialState = {
username:'ram',
age:0
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    incrementAge: (state) => {
      
      state.age += 1;
    },
  },
  
  
});
export const { incrementAge } = userSlice.actions;
export default userSlice.reducer;