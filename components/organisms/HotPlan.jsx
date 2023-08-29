import React from "react";
import PlanCard from "@components/molecules/PlanCard";
import Button from "@components/atom/Button";
import { TOP_PLAN } from "../../contants";

function HotPlan() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-[810px] bg-cover bg-no-repeat bg-[url('/images/方案介紹.png')]">
      <h2 className="text-white text-h1 font-bold text-center mb-[82px]">
        方案介紹
      </h2>
      <div className="flex flex-row items-center justify-around gap-10 mb-10">
        {TOP_PLAN.filter((item) => item.hot).map((item) => {
          return <PlanCard key={item.title} {...item} />;
        })}
      </div>
      <div className="w-[138px] mt-16">
        <Button type="outline">查看更多</Button>
      </div>
    </section>
  );
}

export default HotPlan;
