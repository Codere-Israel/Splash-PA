import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice";
import mobileSlice from "./mobile";

export default configureStore({
  reducer: {
    user: userSlice,
    isMobile2: mobileSlice,
  },
});
