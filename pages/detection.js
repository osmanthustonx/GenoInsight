import Head from "next/head";
import Header from "@components/organisms/Header";
import Contact from "@components/organisms/Contact";
import Footer from "@components/organisms/Footer";
import PlanCard from "@components/molecules/PlanCard";
import { TOP_PLAN } from "../contants";

export default function Detection() {
  return (
    <>
      <Head>
        <title>基因檢測項目｜基因洞察</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <section className="flex justify-center items-center w-full h-[280px] bg-cover bg-no-repeat bg-[url('/images/detection_banner.png')] mb-[76px]">
          <h1 className="text-d1 text-center text-white">基因檢測項目</h1>
        </section>
        <section className="flex  flex-col justify-center items-center w-full">
          <h2 className="text-h1 text-primary-main font-bold text-center mb-[86px]">
            一生只要做一次，精準預防、精準健康。
          </h2>
          <div className="grid grid-cols-3 gap-10 mb-[119px]">
            {TOP_PLAN.map((item) => {
              return <PlanCard key={item.title} {...item} />;
            })}
          </div>
        </section>
        <Contact />
        <Footer />
      </main>
    </>
  );
}
