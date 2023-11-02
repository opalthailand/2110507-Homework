import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function MenuBar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-[75px] w-full bg-blue-300 flex flex-row justify-end gap-6 items-center fixed top-0 left-0 z-10">
      <Image
        src="/img/logo.png"
        alt="Logo"
        className="h-[100%] w-auto object-cover"
        width={0}
        height={0}
        sizes="100%"
      />
      <div
        className="px-8 text-white font-bold tracking-widest 
      text-2xl absolute z-[200] left-0 top-[20px] flex flex-row"
      >
        {session ? (
          <Link href="/api/auth/signout">Sign Out</Link>
        ) : (
          <Link href="/api/auth/signin">Sign In</Link>
        )}
        <div className="px-8">
          <Link href="mybooking">My Booking</Link>
        </div>
      </div>
    </div>
  );
}