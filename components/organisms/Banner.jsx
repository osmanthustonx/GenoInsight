import React from "react";
import Button from "@components/atom/Button";

function Banner() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-[810px] bg-cover bg-no-repeat bg-[url('/images/banner.png')] space-y-[18px] mb-[114px]">
      <h1 className="text-[72px] font-semibold text-center text-white">
        探索你的基因秘密
      </h1>
      <p className="text-bl text-center text-white">
        每個人體內，都蘊藏著一份關於健康的秘密。
      </p>
      <p className="text-bl text-center text-white">
        一輩子只要做一次，就可以找到你的基因遺傳風險。
      </p>
      <div className="w-[325px]">
        <Button size="large" type="outline">
          <p className="text-bl">立即探索基因秘密</p>
        </Button>
      </div>
    </section>
  );
}

export default Banner;
