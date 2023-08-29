import React from "react";
import ShareCard from "@components/molecules/ShareCard";
function Share() {
  return (
    <section className="flex flex-col items-center mt-[56px] mb-[110px]">
      <h3 className="text-h1 font-bold text-primary-main text-center mb-[56px]">
        他們，都已經開始
      </h3>
      <div className="grid grid-cols-3 gap-[57px]">
        <ShareCard></ShareCard>
        <ShareCard></ShareCard>
        <ShareCard></ShareCard>
        <ShareCard></ShareCard>
        <ShareCard></ShareCard>
        <ShareCard></ShareCard>
      </div>
    </section>
  );
}

export default Share;
