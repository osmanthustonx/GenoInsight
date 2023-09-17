import Button from "@components/atom/Button";
import React from "react";

function Contact() {
  return (
    <section className="flex flex-col justify-center items-center md:items-start w-full md:h-[768px] bg-cover bg-no-repeat md:bg-[url('/images/專人分析.png')] mb-[95px] md:pl-[45px]">
      <div className="bg-cover bg-no-repeat bg-[url('/images/專人分析.png')] w-full h-[250px] pl-[14px] pt-[47px] md:h-auto md:bg-none md:p-0">
        <h2 className="text-h3 md:text-d1 text-light-1 font-bold">
          還不清楚哪個適合自己？
        </h2>
      </div>
      <p className="text-black text-center md:text-left px-10 md:px-0 md:text-white text-bl mt-5 mb-4 md:mb-[64px] leading-8">
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
