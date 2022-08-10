import { createSlice } from "@reduxjs/toolkit";
import { fetchHorses } from "../action-creators/horsesActionCreator";

const initialState = {
  horses: [],
};

const horsesSlice = createSlice({
  name: "horses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHorses, (state, action) => {
      state.horses = action.payload.data;
    });
  },
});

export default horsesSlice.reducer;
