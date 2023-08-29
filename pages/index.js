import Head from "next/head";
import Image from "next/image";
import Header from "@components/organisms/Header";
import Banner from "@components/organisms/Banner";
import WhatIsGen from "@components/organisms/WhatIsGen";
import Share from "@components/organisms/Share";
import HotPlan from "@components/organisms/HotPlan";
import Contact from "@components/organisms/Contact";
import Footer from "@components/organisms/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>首頁｜基因洞察</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner />
        <WhatIsGen />
        <section className="flex flex-col justify-center items-center mt-9">
          <Image
            width={1350}
            height={721}
            alt="如果你或你家人是1.癌症、慢性病、心血管疾病或病史2.婚前檢查3.新生幼童檢查4.有健康檢查習慣5.追求極致健康者"
            src="/images/檢查.png"
          />
          <Image width={1350} height={721} alt="服務第一（獨家）：業界首創提供完整健康專案並長期追蹤輔導、價值第一（獨家）：連結國際文獻資料庫從預防醫學到精準醫療節省就醫時間、業界第一：最完整的華人資料庫準確度高達99.9%、項目第一：最多種基因檢測項目讓您全面掌握健康資訊、省錢第一：市場價格最低幫你省下檢測龐大費用、售後第一：由國際認證健康管理師協助1對1報告講解" src="/images/why_us.png" />
          <Image
            width={1350}
            height={721}
            alt="最完整檢測項目規劃。不僅可以幫助您預防疾病，還能提供個人化的健康指導，使您更好地掌握自己的健康命運。我們致力於為您的健康和幸福提供支持，讓您在未來的道路上更加自信和堅強。52項癌症個人化基因體服務、超過60項慢性病個人化基因體服務、心腦血管氨基酸變異分析、73項個人化肥胖基因體檢測、11項血栓個人化基因體檢測"
            src="/images/最完整檢測項目規劃.png"
          />
          <Image
            width={1350}
            height={721}
            alt="採檢及服務流程，免抽血、全程專人服務，專業人士預約見面身體狀況評估及採檢，使用專利口腔棉棒（非侵入式），14個工作天晶片判讀，獨家專業人士一對一報告判讀及規劃建議"
            src="/images/採檢及服務流程.png"
          />
          <Image
            width={1350}
            height={721}
            alt="專業詳細報告，每人專屬一份檢測報告並由專業人士評估建議，採用 PMID 國際文獻資料庫，幫助您日後醫生診斷輔助。"
            src="/images/專業詳細報告.png"
          />
        </section>
        <Share />
        <HotPlan />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
