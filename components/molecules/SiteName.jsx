import Link from "next/link";
import React from "react";

function SiteName() {
  return (
    <div className="flex items-center space-x-4">
      <Link href="/">
        <div className="w-[36px] h-[36px] md:w-[60px] md:h-[60px] bg-primary-lighter cursor-pointer"></div>
      </Link>
      <Link href="/">
        <h3 className="text-h6 md:text-h3 font-bold cursor-pointer">
          基因洞察
        </h3>
      </Link>
    </div>
  );
}

export default SiteName;
