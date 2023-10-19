import ProductCard from "./ProductCard"
import Link from "next/link";

export default async function hospitalCatalog({ hospitalJson }: { hospitalJson: Object }) {

    const hospitalJsonReady = await hospitalJson;

    return (
        <div className="block">
            <div className="flex flex-row space-x-[50px] mt-[30px]">
                {
                    hospitalJsonReady.data.map((hospitalItem: Object) => (
                        <Link href={`/hospital/${hospitalItem.id}`} key={hospitalItem.id}>
                            <ProductCard
                                hospitalName={hospitalItem.name}
                                imgSrc={hospitalItem.picture}
                                hospitalSrc={hospitalItem.tel}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}