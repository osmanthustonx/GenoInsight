import React from "react";
import Button from "@components/atom/Button";

function Banner() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-[330px] md:h-[810px] bg-cover bg-no-repeat bg-[url('/images/banner.png')] space-y-[18px] mb-10 md:mb-[114px]">
      <h1 className="text-h1 md:text-[72px] font-semibold text-center text-white">
        探索你的基因秘密
      </h1>
      <p className="text-bs md:text-bl text-center font-bold text-white">
        每個人體內，都蘊藏著一份關於健康的秘密。
      </p>
      <p className="text-bs md:text-bl text-center font-bold text-white">
        一輩子只要做一次，就可以找到你的基因遺傳風險。
      </p>
      <div className="hidden md:w-[325px] md:block">
        <Button size="large" intent="outline">
          立即探索基因秘密
        </Button>
      </div>
      <div className="w-[163px] md:hidden">
        <Button size="small" intent="outline">
          立即探索基因秘密
        </Button>
      </div>
    </section>
  );
}

export default Banner;
