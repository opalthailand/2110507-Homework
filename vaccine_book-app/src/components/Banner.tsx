'use client'
import { useState } from "react"
import styles from "./banner.module.css"
import Image from "next/image"

export default function Banner() {
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index,setIndex] = useState(0)

    return (
        <div className={styles.banner} onClick={()=> {setIndex(index+1)}}>
            <Image src={covers[index%4]}
                    alt="cover" 
                    fill={true}
                    priority
                    objectFit="cover" />
            <div className={styles.bannerText}>
            <h1 className='text-4xl'>Vaccine Book App</h1>
                <h3 className="text-xl">Find out more information</h3>
            </div>
        </div>
    );
}