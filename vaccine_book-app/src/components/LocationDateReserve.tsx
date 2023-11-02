"use client";

import { setBookingItem } from "@/redux/features/bookSlice";
import { AppDispatch } from "@/redux/store";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function BookingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idCard, setIdCard] = useState("");
  const [hospital, setHospital] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const makeReservation = () => {
    dispatch(setBookingItem({ firstName, lastName, idCard, hospital, date }));
  };

  return (
    <div className="bg-green-100 opacity-80 w-[80%] py-10 rounded-2xl flex flex-col gap-y-6 items-center">
      <div className="flex flex-row gap-8 items-center w-[80%]">
        <TextField
          label="First Name"
          variant="outlined"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Identity Card Number"
          variant="outlined"
          onChange={(e) => setIdCard(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-8 items-center w-[80%]">
        <FormControl>
          <InputLabel id="hospital-label">Hospital To Book</InputLabel>
          <Select
            labelId="hospital-label"
            label="Hospital To Book"
            variant="outlined"
            className="w-[280px]"
            defaultValue=""
            onChange={(e) => setHospital(e.target.value as string)}
          >
            <MenuItem value="Chulalongkorn Hospital">
              Chulalongkorn Hospital
            </MenuItem>
            <MenuItem value="Thammasat University Hospital">
              Thammasat University Hospital
            </MenuItem>
            <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
          </Select>
        </FormControl>
        <div className="text-slate-950 text-lg">Reservation Date</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="w-[320px]"
            onChange={(value) => {
              setDate(dayjs(value as Dayjs).format("DD/MM/YYYY"));
            }}
          />
        </LocalizationProvider>
      </div>
      <div>
        <button
          className="bg-sky-950 text-white rounded-lg px-6 py-2 hover:bg-white hover:text-sky-950"
          onClick={makeReservation}
        >
          Book Now!
        </button>
      </div>
    </div>
  );
}