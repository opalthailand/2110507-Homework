import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from "@mui/material"
import { useState } from 'react'

export default function Card({ hospitalName, imgSrc, hospitalSrc, onClickRating, ratingList }: 
    { hospitalName: string, imgSrc: string, hospitalSrc: string, onClickRating: Function, ratingList: Map<string, number> }) {

    return (
        <InteractiveCard contentName={hospitalName}>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className="object-contain rounded-t-lg"
                />
            </div>
            <div className='w-full h-[10%] p-[10]'>{hospitalName}</div>

            <div className="w-full h-[10%] p-[6]">
                        {hospitalSrc}
            </div>

            <div className="flex justify-center">
                    <Rating name="rating-controlled" defaultValue={0}
                        value={ ratingList.get(hospitalName) || 0}
                        precision={0.5} size="large"
                        onChange={(e, newVal) => {
                            e.stopPropagation();
                            onClickRating(newVal);
                        }}
                    /></div>

        </InteractiveCard>
    );
}