import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface formState {
  stage: number;
}

// Define the initial state using that type
const initialState: formState = {
  stage: 1,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    prevStage: (state) => {
      state.stage -= 1;
    },
    nextStage: (state) => {
      console.log("test");
      state.stage += 1;
    },
  },
});

export const { nextStage, prevStage } = formSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default formSlice.reducer;
