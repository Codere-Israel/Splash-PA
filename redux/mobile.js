import { createSlice } from "@reduxjs/toolkit";

export const mobileSlice = createSlice({
  name: "isMobile2",
  initialState: {
    device: true,
  },
  reducers: {
    setMobile: (state, action) =>{
      state.device = action.payload;
    }
  },
});

export const { setMobile } = mobileSlice.actions;
export default mobileSlice.reducer;
