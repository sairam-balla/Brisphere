import { createSlice } from "@reduxjs/toolkit";

const today = new Date().toISOString().split("T")[0];

const date = new Date(today);
date.setDate(new Date().getDate() + 7);
const weekday = date.toISOString().split("T")[0];

const totalAmount = (date2 = weekday, date1 = today, rooms = 1) => {
  return (
    ((new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24) + 1) *
    1780 *
    rooms
  );
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    user: {},
    rooms: 1,
    checkIn: today,
    checkOut: weekday,
    amount: 12460,
  },
  reducers: {
    roomsIncrement: (state) => {
      state.rooms = state.rooms + 1;
      state.amount = totalAmount(state.checkOut, state.checkIn, state.rooms);
    },
    roomsDecrement: (state) => {
      state.rooms !== 1 && (state.rooms = state.rooms - 1);
      state.amount = totalAmount(state.checkOut, state.checkIn, state.rooms);
    },
    setUserDetails: (state, userDetails) => {
      state.user = userDetails.payload;
    },
    setCheckIn: (state, checkIn) => {
      state.checkIn = checkIn.payload;
      state.amount = totalAmount(state.checkOut, state.checkIn, state.rooms);
    },
    setCheckOut: (state, checkOut) => {
      state.checkOut = checkOut.payload;
      state.amount = totalAmount(state.checkOut, state.checkIn, state.rooms);
    },
  },
});
export const {
  roomsIncrement,
  roomsDecrement,
  setUserDetails,
  setCheckIn,
  setCheckOut,
} = orderSlice.actions;

export default orderSlice.reducer;
