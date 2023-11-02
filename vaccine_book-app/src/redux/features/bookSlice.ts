import { createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookingState = {
  bookingItem: BookingItem | null;
};

const initialState: BookingState = { bookingItem: null };

export const bookSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingItem: (state, action) => {
      state.bookingItem = action.payload;
    },
    removeBookingItem: (state) => {
      state.bookingItem = null;
    },
  },
});

export const { setBookingItem, removeBookingItem } = bookSlice.actions;
export default bookSlice.reducer;