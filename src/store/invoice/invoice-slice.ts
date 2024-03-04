import { createSlice } from "@reduxjs/toolkit";

interface invoiceState {
  allPoDataList: any[];
  selectedPoDataList: any[];
  modifiedPoList: any[];
  newSelectedPoList: any[];
}

const initialState: invoiceState = {
  allPoDataList: [],
  selectedPoDataList: [],
  modifiedPoList: [],
  newSelectedPoList: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setSelectedPoList: (state, action) => {
      state.selectedPoDataList = action.payload;
    },
    setAllPoDataList: (state, action) => {
      state.allPoDataList = action.payload;
    },
    setModifiedPoDataList: (state, action) => {
      state.modifiedPoList = action.payload;
    },
    setNewSeletcedPoDataList: (state, action) => {
      state.newSelectedPoList = action.payload;
    },
  },
});

export const {
  setSelectedPoList,
  setAllPoDataList,
  setModifiedPoDataList,
  setNewSeletcedPoDataList,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
