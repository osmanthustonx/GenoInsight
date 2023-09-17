import React from "react";
import Image from "next/image";
import Head from "next/head";
import AccordionItem from "@components/molecules/AccordionItem";
import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";

const faqs = [
  {
    title: "基因檢測，一生需要檢測幾次呢？",
    content:
      "上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？",
  },
  {
    title: "基因檢測與健康檢查有何不同？",
    content:
      "上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？",
  },
  {
    title: "如果檢測為高風險我該怎麼做呢？",
    content:
      "上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？",
  },
  {
    title: "如果檢測為低風險，就完全不需要擔心嗎？",
    content:
      "上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？",
  },
  {
    title: "我幾乎都是吃外食，這樣也可以嗎？",
    content:
      "上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？上課方式是什麼？需要到現場嗎？",
  },
];

function Question() {
  return (
    <>
      <Head>
        <title>常見問題｜基因洞察</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <section className="h-[calc(100dvh-390px)] overflow-scroll flex flex-row justify-center items-center w-full space-x-[66px] mt-[60px] px-12">
          <div className="w-[650px] h-[443px]">
            <Image
              src="/images/faq.png"
              width={650}
              height={443}
              alt="FAQ 圖片"
              className="w-[650px] h-[443px]"
            />
          </div>
          <div className="space-y-4 max-w-[625px]">
            <h4 className="text-h4 text-primary-main font-bold">FAQ</h4>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                title={faq.title}
                content={faq.content}
              />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Question;
