import React from "react";
import Link from "next/link";
import SiteName from "@components/molecules/SiteName";

function Header() {
  return (
    <header className="h-[100px] flex flex-row items-center justify-between px-12 shadow-[0_2px_6px_0_rgba(0,0,0,0.1)]">
      <SiteName />
      <nav>
        <ul className="flex flex-row items-center gap-[30px]">
          <li className="text-bl font-bold">
            <Link href="/detection">檢測項目</Link>
          </li>
          <li className="text-bl font-bold">
            <Link href="#">證照課程</Link>
          </li>
          <li className="text-bl font-bold">
            <Link href="#">常見問題</Link>
          </li>
          <li className="text-bl font-bold">
            <Link href="#">
              <div className="cursor-pointer bg-primary-main text-white rounded-lg py-[10px] px-[22px]">
                聯絡我們
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
