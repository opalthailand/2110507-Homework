import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className='flex justify-between'>
            <div className='fixed top-0 z-[12] pt-5 w-full font-bold pl-2'>
                {
                    session ? <Link href="/api/auth/signout">
                        <div className='flex items-center absolute h-full px-2 text-white text-md'>
                            Sign-Out of {session.user?.name}
                        </div>
                    </Link>
                        : <Link href="/api/auth/signin" >
                            <div className='flex items-center absolute h-full px-2 text-white text-md'>
                                Sign-In
                            </div>
                        </Link>
                }
            </div>
            <div className='flex w-full fixed z-[11] justify-end
        bg-gradient-to-l from-blue-950 from-10% via-indigo-600 
        via-60% to-sky-400 to-95%'>
                <TopMenuItem title='Booking' pageRef='/booking' />
                <Image src={'/img/vaccine.png'}
                    className='ml-10 w-[100px] h-[60px]'
                    alt='logo'
                    width={0}
                    height={0}
                    sizes='100vh' />
            </div>
        </div>
    )
}