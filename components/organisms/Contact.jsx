import Button from "@components/atom/Button";
import React from "react";

function Contact() {
  return (
    <section className="flex flex-col justify-center items-start w-full h-[768px] bg-cover bg-no-repeat bg-[url('/images/專人分析.png')] mb-[95px] pl-[45px]">
      <h2 className="text-d1 text-light-1 font-bold">還不清楚哪個適合自己？</h2>
      <p className="text-white text-bl mt-5 mb-[64px] leading-8">
        我們另外提供線上專人服務，根據您的年紀、健檢報告、身體數據
        <br />
        建議您適合的基因檢測項目。
      </p>
      <div className="w-[204px]">
        <Button intent="outline">立即預約專人服務</Button>
      </div>
    </section>
  );
}

export default Contact;
