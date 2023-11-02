"use client";
import { removeBookingItem } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function MyBookingPage() {
  const bookingItem = useAppSelector((state) => state.bookSlice.bookingItem);
  const dispatch = useDispatch<AppDispatch>();
  const cancelBooking = () => {
    dispatch(removeBookingItem());};
  return (
    <main className="text-center">
      <h1 className="text-2xl text-blue-900 font-bold py-8">My Booking Page</h1>
      <div className="flex flex-col items-center">
        {bookingItem ? (
          <div className="flex flex-col gap-2 p-8 bg-green-500 text-white font-mono text-xl w-[70vw]">
            <div>First Name : {bookingItem.firstName}</div>
            <div>Last Name : {bookingItem.lastName}</div>
            <div>Citizen ID : {bookingItem.citizenId}</div>
            <div>Hospital : {bookingItem.hospital}</div>
            <div>Reservation Date : {bookingItem.reservationDate}</div>
            <br />
            <button
              className="bg-white text-green-800 p-4"
              onClick={cancelBooking}>
              Cancel Booking</button>
          </div>
        ) : (
          <div className="text-xl text-red-700 font-bold">
            No Vaccine Booking
          </div>
        )}
      </div>
    </main>
  );
}