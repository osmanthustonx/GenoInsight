import React from "react";
import PlanCard from "@components/molecules/PlanCard";
import Button from "@components/atom/Button";
import { TOP_PLAN } from "../../contants";

function HotPlan() {
  return (
    <section className="flex flex-col justify-center items-center w-full md:h-[810px] bg-cover bg-no-repeat md:bg-[url('/images/方案介紹.png')] mb-9 md:mb-0">
      <div className="flex justify-center items-center h-[221px] md:h-auto w-full bg-cover bg-no-repeat bg-[url('/images/方案介紹.png')] md:bg-none mb-[82px]">
        <h2 className="text-white text-h1 whitespace-nowrap font-bold text-center">
          方案介紹
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around gap-14 md:gap-10 mb-10">
        {TOP_PLAN.filter((item) => item.hot).map((item) => {
          return <PlanCard key={item.title} {...item} />;
        })}
      </div>
      <div className="w-[138px] mt-16">
        <Button intent="outline">查看更多</Button>
      </div>
    </section>
  );
}

export default HotPlan;
