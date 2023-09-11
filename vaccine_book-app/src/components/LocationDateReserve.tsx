'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, TextField,FormControl,Button} from "@mui/material"
import Link from "next/link";

export default function LocationDateReserve() {
    const submitForm = () => {
        alert("ส่งสำเร็จ");
    }
    return (
      <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
        <FormControl variant="filled" className="flex justify-center space-y-[30px]" fullWidth>
        <div className="flex space-x-5 text-black">
          <p className="pt-[15px] font-semibold text-[15px]">ชื่อ</p>
          <TextField type="text" variant="standard" label="first_name" />
        </div>
  
        <div className="flex space-x-5 text-black">
          <p className="pt-[15px] font-semibold text-[15px]">นามสกุล</p>
          <TextField type="text" variant="standard" label="last_name" />
        </div>
  
        <div className="flex space-x-5 text-black">
          <label className="pt-[15px] font-semibold text-[15px]">รหัสประจำตัวประชาชน</label>
          <TextField type="text" variant="standard" label="citizen_id" className="w-[300px]" />
        </div>
  
        <div className="flex space-x-5 text-black">
          <label className="pt-[15px] font-semibold text-[15px]">โรงพยาบาล</label>
          <Select variant="standard" name="hospital" id="hospital" className="h-[2em] w-[200px]">
            <MenuItem value="CU">Chulalongkorn Hospital</MenuItem>
            <MenuItem value="RH">Rajavithi Hospital</MenuItem>
            <MenuItem value="TH">Thammasat University Hospital</MenuItem>
          </Select>
        </div>
  
        <div className="flex space-x-5 text-black">
          <label className="pt-[15px] font-semibold text-[15px]">วันที่ต้องการรับวัคซีน</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className="bg-white" />
          </LocalizationProvider>
        </div>

        <Link href="/" className="block w-full">
            <Button variant="contained" color="success" className="bg-blue-600 h-[50px] w-full" onClick={submitForm}>
                <span className="text-lg font-bold text-[15px]">Submit</span>
            </Button>
        </Link>

        </FormControl>
      </div>
    );
  }