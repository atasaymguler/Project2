import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  asidebar: boolean;
}

const initialState: AppState = {
  asidebar: false,
};

export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
