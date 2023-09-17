import React from "react";
import Image from "next/image";
import SiteName from "@components/molecules/SiteName";
import LinkItem from "@components/molecules/LinkItem";

function Footer() {
  return (
    <footer className="w-full flex flex-row items-start border-t border-light-1 md:mx-[45px] mb-[49px] px-[45px] md:px-6 pt-[37px] md:pt-[31px]">
      <div className="md:mr-[112px]">
        <SiteName />
        <div className="md:hidden mt-3">
          <Image
            width={40}
            height={40}
            alt="fb logo link"
            src="/images/FB.png"
          />
        </div>
        <div className="space-y-4 mt-4 md:mt-8 mb-4">
          <a className="block text-dark-2" href="tel:+1234567890">
            <span className="text-dark-1">電話</span> +1 (234) 567-890
          </a>
          <a className="block text-dark-2" href="mailto:example@email.com">
            <span className="text-dark-1">信箱</span> example@email.com
          </a>
          <address className="text-dark-2">
            <span className="text-dark-1">地址</span> 123 Main St, Anytown, USA
          </address>
        </div>
        <div className="hidden md:block">
          <Image
            width={40}
            height={40}
            alt="fb logo link"
            src="/images/FB.png"
          />
        </div>
      </div>
      <div className="flex-row hidden md:flex">
        <LinkItem />
      </div>
    </footer>
  );
}

export default Footer;
