import Image from "next/image";
import getHospital from "@/libs/getHospital";
import Link from "next/link";

export default async  function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hospitalDetail = await getHospital(params.hid);
  return (
    <main className="text-center p-5">
      <div className="flex mt-[60px]">
        <Image
          src={hospitalDetail.data.picture}
          alt="Hospital Img"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[40%] border border-4 border-white"
        />
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="text-[50px] mx-5 mb-10 font-bold text-white ">
          {hospitalDetail.data.name}
          </div>
          <div className="text-[25px] mx-5 text-white">
              <span className="font-bold pr-4 text-[30px]">Location:</span>
              <span>{hospitalDetail.data.address} <span>{hospitalDetail.data.province}, {hospitalDetail.data.postalcode}</span></span>
            <div className="mt-6 text-[25px]">
              <span className="font-bold pr-4 text-[30px]">Tel: </span>
              <span>{hospitalDetail.data.tel}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-10 pt-10 justify-center text-[25px]">
        <Link href={`/booking?id=${params.hid}&name=${hospitalDetail.data.name}`}>
          <button className="bg-white text-cyan-600 border-2 border-cyan-600 border-opacity-100
  font-semibold py-2 px-10 rounded-lg z-3
  transform transition-colors duration-300 hover:bg-cyan-600 hover:text-white hover:border-transparent">
            Booking
          </button>
        </Link>
      </div>
    </main>
  );
}