import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className={`${styles.questionSpan}`}>
        <span className="flex">
          <span className="mr-4 pl-[20px] text-[40px]">ข้อมูลที่ควรรู้ก่อนมาฉีด Moderna</span>
          <span className="pt-5">
          </span>
        </span>
      </div>
      <div className={styles.cardSection}>
          <div className="leading-9">
            <div className={`${styles.cardTopic}`}>
              <h2 className="flex font-bold text-3xl">
              Moderna คืออะไร{" "}
                <span className="pl-3">
                </span>
              </h2>
            </div>
            <p className={styles.paragraph}>
            วัคซีนโมเดอร์นา (Moderna) เป็นวัคซีนทางเลือกตัวแรกสำหรับคนไทย นำเข้าโดยบริษัท ซิลลิดฟาร์มา จำกัด จัดซื้อผ่านทางองค์การเภสัชกรรม และจะเปิดจำหน่ายให้กับโรงพยาบาลเอกชน วัคซีนโมเดอร์นา ถือเป็นวัคซีนโควิด-19 ลำดับที่ 4 ที่ผ่านการขึ้นทะเบียนจากสำนักงานคณะกรรมการอาหารและยา (อย.) ของไทย
            </p>
            <p className={styles.paragraph}>
            วัคซีนโมเดอร์นา (Moderna) เป็นวัคซีนชนิด mRNA-1273  (วัคซีนชนิดเอ็มอาร์เอ็นเอ-1273) ซึ่งเป็นชิ้นส่วนของพันธุกรรมที่ไม่ก่อให้เกิดโรค จะมีส่วนช่วยให้ร่างกายสร้างโปรตีนที่เฉพาะเจาะจงกับไวรัสขึ้นมา และกระตุ้นให้ร่างกายสร้างแอนติบอดี้ (Antibodies) แอนติบอดี้นี้จะรับรู้ได้เมื่อมีไวรัสเข้าสู่ร่างกาย จึงทำลายไวรัสได้ในที่สุด ถือเป็นนวัตกรรมล่าสุด แตกต่างจากวัคซีนทั่วไปที่เป็นโปรตีนหรือเชื้อโรคที่ถูกทำให้ตาย และต่างจากวัคซีนที่ใช้ไวรัสพาหะ (Viral Vector Vaccine)  พัฒนาโดย บริษัท ModernaTX, Inc. สหรัฐอเมริกา ซึ่งจัดเป็นวัคซีนที่มีประสิทธิภาพในการป้องกันโควิด-19 สูงเป็นอันดับต้นๆ ของโลก และถูกนำมาใช้งานมากกว่า 44 ประเทศทั่วโลก (ข้อมูล ณ เดือนพค.64) รวมถึงในสหรัฐอเมริกา สหรัฐราชอาณาจักร และในสหภาพยุโรป เป็นวัคซีนโควิด-19 ที่ได้รับการอนุมัติให้ใช้มากเป็นอันดับที่ 3 ของโลก รองจากแอสตร้าเซนเนก้า และไฟเซอร์
            </p>
          </div>
      </div>
      <div>
        <h1
          className="text-3xl my-7 font-bold"
          style={{ display: "flex", justifyContent: "center" }}
        >
          ต้องการจองนัดคิด โปรดติดต่อ{" "}
          <span style={{ marginLeft: 5, paddingTop: 5 }}>
          </span>
          <span style={{ marginLeft: 5, color: "blue" }}>099-999-9999</span>
        </h1>
      </div>
    </main>
  );
}