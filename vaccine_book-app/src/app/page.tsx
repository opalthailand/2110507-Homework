import Image from 'next/image'
import Banner from "@/components/Banner"
import ProductCard from "@/components/ProductCard";
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{margin: "20px", display: 'flex', flexDirection: "row",
                  flexWrap: "wrap", justifyContent: 'space-around', alignContent: 'space-around'}}>
        <ProductCard carName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg'/>
        <ProductCard carName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'/>
        <ProductCard carName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg'/>
      </div>
    </main>
  )
}