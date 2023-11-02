import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import { revalidateTag } from "next/cache";

export default function AddHospitalForm() {
  const addHospital = async (addHospital: FormData) => {
    "use server";
    const name = addHospital.get("name");
    const address = addHospital.get("addr");
    const district = addHospital.get("district");
    const province = addHospital.get("province");
    const postalcode = addHospital.get("postalCode");
    const tel = addHospital.get("tel");
    const picture = addHospital.get("picture");

    try {
      await dbConnect();
      const newHospital = await Hospital.create({
        name,
        address,
        district,
        province,
        postalcode,
        tel,
        picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidateTag("hospitals");
  };

  return (
    <form action={addHospital}>
      <div className="text-2xl text-blue-700">Add more hospital</div>
      <div className="flex items-center w-[50vw] my-2 justify-between">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Hospital Name"
          required
          className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="flex items-center w-[50vw] my-2 justify-between">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="addr">
          Address
        </label>
        <input
          type="text"
          id="addr"
          name="addr"
          placeholder="Address"
          required
          className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="flex items-center w-[50vw] my-2 justify-between">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="district">
          District
        </label>
        <input
          type="text"
          id="district"
          name="district"
          placeholder="District"
          required
          className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="flex items-center w-[50vw] my-2 justify-between">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="province">
          Province
        </label>
        <input
          type="text"
          id="province"
          name="province"
          placeholder="Province"
          required
          className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="flex items-center w-[50vw] my-2 justify-between">
        <label
          className="w-[20%] !max-w-xs text-gray-700 pr-4"
          htmlFor="postalCode"
        >
          Postal Code
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          placeholder="Postal Code"
          required
          className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="flex items-center w-[50vw] my-2 justify-between">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">
          Tel.
        </label>
        <input
          type="text"
          id="tel"
          name="tel"
          placeholder="Telephone Number"
          required
          className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="flex items-center w-[50vw] my-2 justify-between">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">
          Picture
        </label>
        <input
          type="text"
          id="picture"
          name="picture"
          placeholder="Picture URL"
          className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
      >
        Add New Hospital
      </button>
    </form>
  );
}