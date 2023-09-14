'use client'

import ProductCard from "./ProductCard"
import { useReducer } from 'react'

export default function CardPanel() {

    const ratingReducer = (ratingList: Map<string, number>, 
        action: { type: string, hospitalName: string, hospitalRating: number }) => {
        switch (action.type) {
            case 'add': {
                return new Map<string, number>(ratingList.set(action.hospitalName, action.hospitalRating))
            }
            case 'remove': {
                action.hospitalRating = 0;
                ratingList.delete(action.hospitalName)
                return new Map<string, number>(ratingList)
            }
            default:
                return ratingList
        }
    }

    const [ratingList, dispatchRating] = useReducer(ratingReducer, new Map<string, number>)

    return (
        <div className="block">
            <div className="flex flex-row space-x-[50px] mt-[30px]">
                <ProductCard hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg' hospitalSrc="https://chulalongkornhospital.go.th/kcmh/"
                    onClickRating={(scoreRating: number) => dispatchRating({ type: "add", hospitalRating: scoreRating, hospitalName: "Chulalongkorn Hospital" })}
                    ratingList={ratingList} />
                <ProductCard hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg' hospitalSrc="https://www.rajavithi.go.th/"
                    onClickRating={(scoreRating: number) => dispatchRating({ type: "add", hospitalRating: scoreRating, hospitalName: "Rajavithi Hospital" })}
                    ratingList={ratingList} />
                <ProductCard hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg' hospitalSrc="https://www.hospital.tu.ac.th/"
                    onClickRating={(scoreRating: number) => dispatchRating({ type: "add", hospitalRating: scoreRating, hospitalName: "Thammasat University Hospital" })}
                    ratingList={ratingList} />
            </div>
            <div className="w-full bg-white shadow-md rounded-lg p-6 mt-10 text-black">
                <h2 className="text-3xl mb-4 text-center font-bold hover:scale-[1.055] transform transition-transform duration-300">Rating List</h2>
                <div className="divide-y divide-gray-200 text-[20px]">
                    {Array.from(ratingList.entries()).map(([key, value]) => (
                        <div
                            key={key}
                            onClick={() =>
                                dispatchRating({ type: 'remove', hospitalName: key, hospitalRating: 0 })
                            }
                            className="py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer transition duration-300"
                        >
                            <div>
                                <strong className="text-xl">{key}:</strong> {value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}