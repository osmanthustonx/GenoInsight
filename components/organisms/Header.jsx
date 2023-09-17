import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SiteName from "@components/molecules/SiteName";
import Image from "next/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { path: "/detection", label: "檢測項目" },
    { path: "/certificate", label: "證照課程" },
    { path: "/question", label: "常見問題" },
    { path: "/contact", label: "聯絡我們" },
  ];
  return (
    <header className="sticky top-0 h-[54px] md:h-[100px] flex flex-row items-center justify-between px-4 md:px-12 shadow-[0_2px_6px_0_rgba(0,0,0,0.1)] bg-white z-10">
      <SiteName />
      <nav className="hidden md:flex">
        <ul className="flex flex-row items-center gap-[30px]">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`text-bl font-bold ${
                router.pathname === item.path ? "text-primary-main" : ""
              }`}
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="z-10 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <span className="text-h3">✕</span>
        ) : (
          <Image src={"/svgs/menu.svg"} width={24} height={24} alt="導航按鈕" />
        )}
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 ${
          isOpen ? "transform translate-y-0" : "transform -translate-y-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center gap-[30px] pt-12">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`text-bl font-bold ${
                router.pathname === item.path ? "text-primary-main" : ""
              }`}
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
