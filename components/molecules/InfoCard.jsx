import React from "react";
import Image from "next/image";

function InfoCard({ img, title, content }) {
  return (
    <div className="flex flex-col items-center bg-primary-lighter/60 w-[280px] rounded-t-2xl">
      <Image priority width={260} height={180} alt={`${title}圖片`} src={img} />
      <div className="flex-1 bg-white px-4 pt-5 pb-3 rounded-t-2xl shadow-[0_30px_25px_-18px_rgba(0,0,0,0.3)]">
        <h4 className="text-primary-darker text-h4 font-bold text-center">
          {title}
        </h4>
        <p className="text-dark-1 text-bl leading-9">{content}</p>
      </div>
    </div>
  );
}

export default InfoCard;
