import Head from "next/head";
import Image from "next/image";
import Header from "@components/organisms/Header";
import Banner from "@components/organisms/Banner";
import WhatIsGen from "@components/organisms/WhatIsGen";
import Share from "@components/organisms/Share";
import PlanInfo from "@components/organisms/PlanInfo";
import Contact from "@components/organisms/Contact";
import Footer from "@components/organisms/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Toolbox</title>
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
          <Image width={1350} height={721} alt="" src="/images/why_us.png" />
          <Image
            width={1350}
            height={721}
            alt="如果你或你家人是1.癌症、慢性病、心血管疾病或病史2.婚前檢查3.新生幼童檢查4.有健康檢查習慣5.追求極致健康者"
            src="/images/最完整檢測項目規劃.png"
          />
          <Image
            width={1350}
            height={721}
            alt="如果你或你家人是1.癌症、慢性病、心血管疾病或病史2.婚前檢查3.新生幼童檢查4.有健康檢查習慣5.追求極致健康者"
            src="/images/採檢及服務流程.png"
          />
          <Image
            width={1350}
            height={721}
            alt="如果你或你家人是1.癌症、慢性病、心血管疾病或病史2.婚前檢查3.新生幼童檢查4.有健康檢查習慣5.追求極致健康者"
            src="/images/專業詳細報告.png"
          />
        </section>
        <Share />
        <PlanInfo />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
