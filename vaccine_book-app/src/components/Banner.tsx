'use client'
import { useState } from "react"
import styles from "./banner.module.css"
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function Banner() {
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index,setIndex] = useState(0)
    const router = useRouter();

    return (
        <div className={styles.banner}>
          <Image
            src={covers[index % 4]}
            alt="background"
            fill={true}
            priority
            objectFit="cover"
            onClick={() => {
              setIndex(index + 1);
            }}
            className={styles.image}
          />
          <div className={styles.bannerText}>
            <h4 className="flex pl-12">
              {" "}
            </h4>
            <h1 className="font-bold">
              Covid Vaccine Free
              @ The Quarter Hotel
            </h1>
            <h2>
              วัคซีนป้องกันโรคโควิด
                <a href="https://www.modernatx.com/" target="_blank">
                  Moderna
                </a>
            </h2>
            <p>
              เปิดให้เข้ารับการฉีดตั้งเเต่
              <span>09.00 - 18.00 น.</span>
            </p>
          </div>
          <div>
            <button
              className="bg-white text-cyan-600 border-2 border-cyan-600 border-opacity-100
      font-semibold py-2 px-2 rounded-lg z-30 absolute bottom-2 right-2
      transform transition-colors duration-300 hover:bg-cyan-600 hover:text-white hover:border-transparent"
              onClick={(e) => {
                e.stopPropagation();
                router.push("/hospital");
              }}
            >
              คลิ๊กเพื่อดูโรงพยาบาลที่เข้าร่วมโครงการ !
            </button>
          </div>
        </div>
      );
    }