import { createSlice } from "@reduxjs/toolkit";

export const pendingConnectionSlice = createSlice({
  name: "pendingConnection",
  initialState: [],
  reducers: {
    setPendingConnections: (state, action) => action.payload,
    removePendingConnections: (state, action) =>
      state.filter((connection) => connection._id !== action.payload.requestId),
  },
});

export const { setPendingConnections, removePendingConnections } = pendingConnectionSlice.actions;
export default pendingConnectionSlice.reducer;
