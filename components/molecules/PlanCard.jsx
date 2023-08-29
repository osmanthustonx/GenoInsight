import React from "react";
import Button from "@components/atom/Button";
import Image from "next/image";

function PlanCard({ title, content, prePrice, price }) {
  return (
    <div className="relative flex flex-col items-center w-[375px] h-[360px] bg-white rounded-lg px-[18px] pt-[36px] pb-[30px]">
      <h5 className="text-primary-darker text-h4 font-bold">{title}</h5>
      <div className="border-t border-dark-3 w-full mt-[22px] mb-[26px]" />
      <p className="text-dark-1 text-h6 mb-3 mx-2">{content}</p>
      <p className="text-center text-dark-3 text-bl line-through mb-2">
        {prePrice}
      </p>
      <p className="text-center text-red text-h4 font-bold mb-4">{price}</p>
      <div className="w-[276px]">
        <Button size="medium">立即預約檢測服務</Button>
      </div>
      <div className="absolute -top-7 left-0">
        <Image
          priority
          width={175}
          height={80}
          alt="熱門檢測項目"
          src="/images/hot.png"
        />
      </div>
    </div>
  );
}

export default PlanCard;
