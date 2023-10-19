import HospitalCatalog from "@/components/hospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function Hospital() {
  const hospitals = getHospitals();
  return (

    <main className="text-center p-5">
    <div className="text-[30px] font-bold flex items-center justify-center mt-[50px]">
    <span className="mr-3">โรงพยาบาลที่เข้าร่วมโครงการ</span>

      </div>
      <Suspense fallback={
        <div>
          <p className="text-xl font-bold">Loading...</p>
          <LinearProgress />
        </div>
      }>
        <div className="flex justify-center">
          <HospitalCatalog hospitalJson={hospitals} />
        </div>
      </Suspense>
      </main>
  )
}