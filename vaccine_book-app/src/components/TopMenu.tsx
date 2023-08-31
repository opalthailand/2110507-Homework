import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem'

export default function TopMenu() {
    return (
        <div className='flex w-full fixed z-[11] justify-end bg-gray-200'>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            <Image src={'/img/logo.png'} 
                    className='ml-10 w-[100px] h-[60px]'
                    alt='logo'
                    width={0}
                    height={0}
                    sizes='100vh'/>
        </div>
    )
}