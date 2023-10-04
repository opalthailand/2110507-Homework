import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from "@mui/material"
import { useState } from 'react'
import styles from "./productcard.module.css";

export default function Card({
    hospitalName,
    imgSrc,
    hospitalSrc,
    onClickRating,
    ratingList,
  }: {
    hospitalName: string;
    imgSrc: string;
    hospitalSrc: string;
    onClickRating: Function;
    ratingList: Map<string, number>;
  }) {
    return (
      <InteractiveCard contentName={hospitalName}>
        <div className={`${styles.card} w-[420px] h-[600px] mx-0`}>
          <div className="relative h-[75%] w-[100%]">
            <Image
              src={imgSrc}
              alt="Product Picture"
              fill={true}
              className="object-cover rounded-t-lg hover:opacity-[0.7]"
            />
          </div>
          <div className={`${styles.cardText} h-[15%]`}>
            <div
              className={`indent-0 font-bold text-[25px] pt-[10px] text-center`}
            >
              {hospitalName}
            </div>
            <div className="flex justify-center">{hospitalSrc}</div>
          </div>
          <div className="flex justify-center">
            <Rating
              name="rating-controlled"
              defaultValue={0}
              value={ratingList.get(hospitalName) || 0}
              precision={0.5}
              size="large"
              onChange={(e, newVal) => {
                e.stopPropagation();
                onClickRating(newVal, e);
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </div>
        </div>
      </InteractiveCard>
    );
  }