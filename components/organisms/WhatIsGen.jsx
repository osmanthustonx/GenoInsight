import React from "react";
import InfoCard from "@components/molecules/InfoCard";

const INFO_CARDS = [
  {
    img: "/images/1.png",
    title: "疾病風險",
    content:
      "基因檢測可以揭示潛在的遺傳性疾病風險,如心血管疾病、某些癌症和神經系統疾病等。",
  },
  {
    img: "/images/2.png",
    title: "藥物反應",
    content:
      "基因檢測可以預測個體對特定藥物的反應，幫助醫生選擇更合適的治療方法。",
  },
  {
    img: "/images/3.png",
    title: "生活方式建議",
    content: "基因檢測可以提供關於適合的飲食、運動和生活方式的個性化建議。",
  },
  {
    img: "/images/4.png",
    title: "家族遺傳",
    content:
      "通過基因檢測，可以了解某些遺傳疾病是否存在於家族中，幫助家庭進行更好的健康管理。",
  },
];

function WhatIsGen() {
  return (
    <section className="flex justify-center space-x-[102px]">
      <article className="max-w-[563px]">
        <h2 className="text-dark-1 text-d2 mb-[51px]">何謂基因檢測？</h2>
        <div className="space-y-8">
          <p className="text-lp">
            基因是掌管生長、發育、功能和特性的基本遺傳單元。基因檢測是一種科學技術，通過分析個人的DNA基因組，
            來瞭解人體的遺傳信息和特徵。
            <br />
            透過基因檢測，能揭示未來，並採取行動，保護我們所珍惜的健康。
          </p>
          <p className="text-lp">
            無論您是否已經感受到疾病的威脅，
            基因檢測都為我們提供了更深入的了解，讓我們走在預防疾病的前沿。
            <br />
            透過科學，我們能領略到健康的可能性，
            為我們自己和家人的未來奠定健康堅實的基石。
          </p>
          <p className="text-lp">
            基因檢測的信息可以幫助人們更好地了解自己的身體和健康，並在預防、診斷和治療方面做出更明智的選擇。然而，需要注意的是，基因檢測結果可能需要專業的解釋和諮詢，以確保正確理解和應用。
          </p>
        </div>
      </article>
      <div className="grid grid-cols-2 gap-16">
        {INFO_CARDS.map((card) => (
          <InfoCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}

export default WhatIsGen;
