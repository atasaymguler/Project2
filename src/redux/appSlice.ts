import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  asidebar: boolean;
}

const initialState: AppState = {
  asidebar: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    moveAsidebar: (state: AppState) => {
      state.asidebar = !state.asidebar;
    },
  },
});

export const { moveAsidebar } = appSlice.actions;

export default appSlice.reducer;
