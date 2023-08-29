import React from "react";
import PlanCard from "@components/molecules/PlanCard";
import Button from "@components/atom/Button";

const TOP_PLAN = [
  {
    title: "癌症個人化基因體服務",
    content:
      "透過此項目，了解癌症基因的淺在風險，包括鼻咽癌、食道癌、乳癌、肺癌、肝癌、胃癌、胰臟癌、大腸癌等17種常見癌症。",
    prePrice: "定價30000元",
    price: "網站價格$19900元",
  },
  {
    title: "慢性病個人化基因體服務",
    content:
      "透過此項目，了解癌症基因的淺在風險，包括鼻咽癌、食道癌、乳癌、肺癌、肝癌、胃癌、胰臟癌、大腸癌等17種常見癌症。",
    prePrice: "定價30000元",
    price: "網站價格$19900元",
  },
  {
    title: "心腦血管風險檢測",
    content:
      "透過此項目，了解癌症基因的淺在風險，包括鼻咽癌、食道癌、乳癌、肺癌、肝癌、胃癌、胰臟癌、大腸癌等17種常見癌症。",
    prePrice: "定價30000元",
    price: "網站價格$19900元",
  },
];

function PlanInfo() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-[810px] bg-cover bg-no-repeat bg-[url('/images/方案介紹.png')]">
      <h2 className="text-white text-h1 font-bold text-center mb-[82px]">方案介紹</h2>
      <div className="flex flex-row items-center justify-around gap-10 mb-10">
        {TOP_PLAN.map((item) => {
          return <PlanCard key={item.title} {...item} />;
        })}
      </div>
      <div className="w-[138px] mt-16">
        <Button type="outline">查看更多</Button>
      </div>
    </section>
  );
}

export default PlanInfo;
