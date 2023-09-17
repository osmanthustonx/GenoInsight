import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SiteName from "@components/molecules/SiteName";

function Header() {
  const router = useRouter();
  console.log(router.pathname)
  return (
    <header className="h-[100px] flex flex-row items-center justify-between px-12 shadow-[0_2px_6px_0_rgba(0,0,0,0.1)]">
      <SiteName />
      <nav>
        <ul className="flex flex-row items-center gap-[30px]">
          <li
            className={`text-bl font-bold ${
              router.pathname === "/detection" ? "text-primary-main" : ""
            }`}
          >
            <Link href="/detection">檢測項目</Link>
          </li>
          <li
            className={`text-bl font-bold ${
              router.pathname === "/certificate" ? "text-primary-main" : ""
            }`}
          >
            <Link href="/certificate">證照課程</Link>
          </li>
          <li
            className={`text-bl font-bold ${
              router.pathname === "/question" ? "text-primary-main" : ""
            }`}
          >
            <Link href="/question">常見問題</Link>
          </li>
          <li
            className={`text-bl font-bold ${
              router.pathname === "/contact" ? "text-primary-main" : ""
            }`}
          >
            <Link href="/contact">聯絡我們</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
